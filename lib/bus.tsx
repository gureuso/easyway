import moment from 'moment';
import axios from 'axios';
import xml from 'fast-xml-parser';

import config from '../config.json';

class BusUI {
  private set_bus_waiting_time(target: JQuery<HTMLElement>, sec: number) {
    const interval = setInterval(() => {
      const minute = (sec / 60) >> 0;
      target.text(String(minute) + '분' + String(sec - (minute * 60)) + '초');
      sec -= 1;
      if(sec < 0) {
        clearInterval(interval);
        this.set_current_bus(target);
      }
    }, 1000);
  }

  set_current_bus(target: JQuery<HTMLElement>) {
    const api = new BusAPI();
    const res = api.get_data_by_route();
    res.then(data => {
      if(data) {
        const bus = new Bus(data);
        const waiting_sec = bus.get_waiting_sec();
        if(waiting_sec < 1) {
          console.log(bus.message);
          target.text(bus.message);
        } else {
          this.set_bus_waiting_time(target, waiting_sec);
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

  /*private parse_data(data: {[key: string]: Array<any>}): object {
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

  get_data_by_route(args: {st_id: number, bus_route_id: number, ord: number}={st_id: 116000149, bus_route_id: 100100453, ord: 35}) {
    let url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&stId=' + args.st_id;
    url += '&busRouteId=' + args.bus_route_id;
    url += '&ord=' + args.ord;

    return this.proxy(url);
  }
}

class BusMessage {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  get_waiting_sec(): number {
    const match_minute = this.message.match(/\d+분/g)!;
    const minute = match_minute ? parseInt(match_minute[0].replace('분', '')) : 0;
    const match_sec = this.message.match(/\d+초/g)!;
    const sec = match_sec ? parseInt(match_sec[0].replace('초', '')) : 0;
    return minute * 60 + sec;
  }

  check_bus_shutdown(): boolean {
    if(this.message.search(/운행종료/g) != -1) {
      return true;
    } else {
      return false;
    }
  }
}

class Bus {
  data: {[key: string]: any};
  bus_num: number;
  message: string;
  api_call_time: string;

  constructor(data: {[key: string]: any}) {
    this.data = data;
    this.bus_num = parseInt(this.data.rtNm);
    this.message = this.data.arrmsg1;
    this.api_call_time = this.data.mkTm;
  }

  private get_correction_sec(): number {
    return Math.round((parseInt(moment().format('x')) - parseInt(moment(this.api_call_time).format('x'))) / 1000);
  }

  get_waiting_sec(): number {
    const bm = new BusMessage(this.message);
    return bm.get_waiting_sec() - this.get_correction_sec();
  }
}

export { BusUI };
