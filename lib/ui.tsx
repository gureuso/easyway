import { Interval } from './common';

class TimeUI {
  setWaitingTime(target: JQuery<HTMLElement>, sec: number, callback: Function) {
    const interval = new Interval();
    const id = interval.set(() => {
      const minute = (sec / 60) >> 0;
      const minute_message = minute ? String(minute) + '분' : '';
      const sec_message = String(sec - (minute * 60)) + '초'
      target.text(minute_message + sec_message);
      sec -= 1;
      if(sec < 0) {
        interval.clear(id);
        callback(target);
      }
    }, 1000);
  }
}

export { TimeUI };
