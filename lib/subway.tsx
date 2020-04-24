import axios from 'axios';

import { Moment } from './common';
import { TimeUI } from './ui';
import config from 'config.json';

class SubwayUI {
  static setWaitingTime(target: JQuery<HTMLElement>, sec: number, stationName: string, trainLineName: string) {
    const ui = new TimeUI();
    ui.setWaitingTimeWithSubway(target, sec, SubwayUI.setCurrentSubway, stationName, trainLineName);
  }

  static setCurrentSubway(target: JQuery<HTMLElement>, stationName: string, trainLineName: string) {
    const api = new SubwayAPI();
    api.getCurrentSubway(stationName).then(data => {
      for(let d of data) {
        if(d.trainLineNm == trainLineName) {
          const subway = new Subway(d);
          const waitingSec = subway.getWaitingSec();
          if(waitingSec < 1) {
            target.text(subway.message);
          } else {
            SubwayUI.setWaitingTime(target, waitingSec, stationName, trainLineName);
          }
          break;
        }
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
      return [];
    });
  }

  getCurrentSubway(stationName: string) {
    const url = 'http://swopenAPI.seoul.go.kr/api/subway/' + this.API_KEY + '/json/realtimeStationArrival/0/100/' + stationName;
    return axios.get(url)
    .then(response => {
      return response.data.realtimeArrivalList ? response.data.realtimeArrivalList : [];
    })
    .catch(error => {
      console.log(error);
      return [];
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
