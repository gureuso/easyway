import axios from 'axios';

import { Moment } from './common';
import { UI } from './ui';
import config from '../config.json';

class SubwayUI {
  static setWaitingTime(target: JQuery<HTMLElement>, sec: number) {
    const ui = new UI();
    ui.setWaitingTime(target, sec, SubwayUI.setCurrentSubway);
  }

  static setCurrentSubway(target: JQuery<HTMLElement>) {
    const api = new SubwayAPI();
    const res = api.getDaerimWithLine2();
    res.then(data => {
      if(data) {
        const subway = new Subway(data);
        const waitingSec = subway.getWaitingSec();
        if(waitingSec < 1) {
          target.text(subway.message);
        } else {
          SubwayUI.setWaitingTime(target, waitingSec);
        }
      } else {
        target.text('data is null');
      }  
    });
  }
}

class SubwayAPI {
  API_KEY: string = config.SUBWAY_API_KEY;

  getCurrentSubway(station='대림') {
    const url = 'http://swopenAPI.seoul.go.kr/api/subway/' + this.API_KEY + '/json/realtimeStationArrival/0/10/' + station;
    return axios.get(url)
    .then(response => {
      return response.data.realtimeArrivalList ? response.data.realtimeArrivalList : [];
    })
    .catch(error => {
      console.log(error);
      return [];
    });
  }

  getDaerimWithLine2() {
    return this.getCurrentSubway().then(list => {
      let result = undefined;
      for(const data of list) {
        if(data.updnLine = '외선') {
          if(!result) {
            result = data;
          } else {
            if(data.updnLine < result.updnLine) {
              result = data;
            }
          }
        }
      }
      return result;
    });
  }
}

class Subway {
  /*
    updnLine '외선'
    barvlDt 도착예정시간
    recptnDt 생성시각
    arvlCd 도착코드
  */
  data: {[key: string]: any};
  apiCallTime: string;
  waitingSec: number;
  message: string;

  constructor(data: {[key: string]: any}) {
    this.data = data;
    this.apiCallTime = this.data.recptnDt;
    this.waitingSec = parseInt(this.data.barvlDt);
    this.message = this.data.arvlMsg2;
  }

  private getCorrectionSec(): number {
    const m = new Moment();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec(): number {
    return this.waitingSec - this.getCorrectionSec();
  }
}

export { SubwayUI };
