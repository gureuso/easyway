import { Interval } from './common';

class TimeUI {
  setWaitingTimeWithBus(target: JQuery<HTMLElement>, sec: number, callback: Function, stId: number, busRouteId: number, ord: number) {
    const interval = new Interval();
    const id = interval.set(() => {
      const minute = (sec / 60) >> 0;
      const minuteMessage = minute ? String(minute) + '분' : '';
      const secMessage = String(sec - (minute * 60)) + '초';
      target.text(minuteMessage + secMessage);
      sec -= 1;
      if(sec < 0) {
        interval.clear(id);
        callback(target, stId, busRouteId, ord);
      }
    }, 1000);
  }

  setWaitingTimeWithSubway(target: JQuery<HTMLElement>, sec: number, callback: Function, stationName: string, trainLineName: string) {
    const interval = new Interval();
    const id = interval.set(() => {
      const minute = (sec / 60) >> 0;
      const minuteMessage = minute ? String(minute) + '분' : '';
      const secMessage = String(sec - (minute * 60)) + '초';
      target.text(minuteMessage + secMessage);
      sec -= 1;
      if(sec < 0) {
        interval.clear(id);
        callback(target, stationName, trainLineName);
      }
    }, 1000);
  }
}

export { TimeUI };
