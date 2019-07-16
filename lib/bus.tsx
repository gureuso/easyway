import moment from 'moment';
import axios from 'axios';
import xml from 'fast-xml-parser';

import config from '../config.json';
import { Interval } from './interval';

class BusUI {
  private setBusWaitingTime(target: JQuery<HTMLElement>, sec: number) {
    const interval = new Interval();
    const id = interval.set(() => {
      const minute = (sec / 60) >> 0;
      target.text(String(minute) + '분' + String(sec - (minute * 60)) + '초');
      sec -= 1;
      if(sec < 0) {
        interval.clear(id);
        this.setCurrentBus(target);
      }
    }, 1000);
  }

  setCurrentBus(target: JQuery<HTMLElement>) {
    const api = new BusAPI();
    const res = api.getDataByRoute();
    res.then(data => {
      if(data) {
        const bus = new Bus(data);
        const waitingSec = bus.getWaitingSec();
        if(waitingSec < 1) {
          target.text(bus.message);
        } else {
          this.setBusWaitingTime(target, waitingSec);
        }
      } else {
        target.text('data is null');
      }  
    });
  }
}

class BusAPI {
  API_KEY: string = config.BUS_API_KEY;
  PROXY_HOST: string = config.PROXY_HOST;

  /*private parseData(data: {[key: string]: Array<any>}): object {
    let result: {[key: string]: string} = {};
    for(const key of Object.keys(data)) {
      result[key] = data[key][0];
    }
    return result;
  }*/

  proxy(url: string) {
    return axios.get(this.PROXY_HOST + '/test/proxy?url=' + encodeURIComponent(url))
    .then(response => {
      const data = xml.parse(response.data.data.data).ServiceResult.msgBody;
      return data ? data.itemList : null;
    })
    .catch(error => {
      console.log(error);
    });
  }

  getDataByRoute(args: {stId: number, busRouteId: number, ord: number}={stId: 116000149, busRouteId: 100100453, ord: 35}) {
    let url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&stId=' + args.stId;
    url += '&busRouteId=' + args.busRouteId;
    url += '&ord=' + args.ord;

    return this.proxy(url);
  }
}

class BusMessage {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  getWaitingSec(): number {
    const matchMinute = this.message.match(/\d+분/g)!;
    const minute = matchMinute ? parseInt(matchMinute[0].replace('분', '')) : 0;
    const matchSec = this.message.match(/\d+초/g)!;
    const sec = matchSec ? parseInt(matchSec[0].replace('초', '')) : 0;
    return minute * 60 + sec;
  }

  checkBusShutdown(): boolean {
    if(this.message.search(/운행종료/g) != -1) {
      return true;
    } else {
      return false;
    }
  }
}

class Bus {
  data: {[key: string]: any};
  busNum: number;
  message: string;
  apiCallTime: string;

  constructor(data: {[key: string]: any}) {
    this.data = data;
    this.busNum = parseInt(this.data.rtNm);
    this.message = this.data.arrmsg1;
    this.apiCallTime = this.data.mkTm;
  }

  private getCorrectionSec(): number {
    return Math.round((parseInt(moment().format('x')) - parseInt(moment(this.apiCallTime).format('x'))) / 1000);
  }

  getWaitingSec(): number {
    const bm = new BusMessage(this.message);
    return bm.getWaitingSec() - this.getCorrectionSec();
  }
}

export { BusUI };
