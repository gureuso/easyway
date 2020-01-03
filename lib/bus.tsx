import axios from 'axios';
import xml from 'fast-xml-parser';

import config from 'config.json';
import { Moment } from './common';
import { TimeUI } from './ui';

class BusUI {
  static setWaitingTime(target: JQuery<HTMLElement>, sec: number) {
    const ui = new TimeUI();
    ui.setWaitingTime(target, sec, BusUI.setCurrentBus);
  }

  static setCurrentBus(target: JQuery<HTMLElement>) {
    const api = new BusAPI();
    const res = api.getDataByRoute();
    res.then(data => {
      if(data) {
        const bus = new Bus(data);
        const waitingSec = bus.getWaitingSec();
        if(waitingSec < 1) {
          target.text(bus.message);
        } else {
          BusUI.setWaitingTime(target, waitingSec);
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

  proxy(url: string) {
    return axios.get(this.PROXY_HOST + '/test/proxy?url=' + encodeURIComponent(url))
    .then(response => {
      const data = xml.parse(response.data.data.data).ServiceResult.msgBody;
      return data ? data.itemList : undefined;
    })
    .catch(error => {
      console.log(error);
      return undefined;
    });
  }

  getDataByRoute(stId=116000149, busRouteId=100100453, ord=35) {
    let url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&stId=' + stId;
    url += '&busRouteId=' + busRouteId;
    url += '&ord=' + ord;

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
    const m = new Moment();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec(): number {
    const bm = new BusMessage(this.message);
    return bm.getWaitingSec() - this.getCorrectionSec();
  }
}

export { BusUI };
