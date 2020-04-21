import axios from 'axios';

import { Moment } from './common';
import { TimeUI } from './ui';
import config from 'config.json';

class SubwayUI {
  static setWaitingTime(target: JQuery<HTMLElement>, sec: number) {
    const ui = new TimeUI();
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
  API_HOST: string = config.API_HOST;

  createSubway(stationName: string, direction: string, trainLineName: string, token: string) {
    const form = new FormData();
    form.append('station_name', stationName);
    form.append('direction', direction);
    form.append('train_line_name', trainLineName);
    form.append('token', token);

    return axios.post(`${this.API_HOST}/public_transport/subways/create`, form)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
      return {};
    });
  }

  deleteSubway(id: number, token: string) {
    return axios.delete(`${this.API_HOST}/public_transport/subways/${id}/delete?token=${token}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return {};
    });
  }

  getSubways(token: string) {
    return axios.get(`${this.API_HOST}/public_transport/subways?token=${token}`)
    .then(response => {
      return response.data.data.subways;
    })
    .catch(error => {
      console.log(error);
      return {};
    });
  }

  getCurrentSubway(station='대림') {
    const url = 'http://swopenAPI.seoul.go.kr/api/subway/' + this.API_KEY + '/json/realtimeStationArrival/0/100/' + station;
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

export { SubwayUI, SubwayAPI };
