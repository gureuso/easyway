import moment from 'moment';

import config from '../config.json';

class Temperature {
  KELVIN_NUM = config.KELVIN_NUM

  kelvinToCelsius(temp: number) {
    return parseFloat((temp - this.KELVIN_NUM).toFixed(0));
  }
}

class Moment {
  getCorrectionSec(time: string): number {
    return Math.round((parseInt(moment().format('x')) - parseInt(moment(time).format('x'))) / 1000);
  }
}

class Interval {
  static ids: Array<any> = [];

  set(callback: Function, ms: number): number {
    const interval = setInterval(callback, ms);
    Interval.ids.push(interval);
    return interval;
  }

  clear(id: number) {
    clearInterval(id);
  }

  static clearAll() {
    for(const id of Interval.ids) {
      clearInterval(id);
    }
  }
}

export { Interval, Moment, Temperature };
