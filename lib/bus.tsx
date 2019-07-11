import moment from 'moment';

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

  constructor(data: {[key: string]: Array<any>}) {
    this.data = this.parse_data(data);
    this.bus_num = parseInt(this.data.rtNm);
    this.message = this.data.arrmsg1;
    this.api_call_time = this.data.mkTm;
  }

  private parse_data(data: {[key: string]: Array<any>}): object {
    let result: {[key: string]: string} = {};
    for(const key in Object.keys(data)) {
      result[key] = data[key][0];
    }
    return result;
  }

  get_correction_sec(): number {
    return Math.round((parseInt(moment().format('x')) - parseInt(moment(this.api_call_time).format('x'))) / 1000);
  }

  get_waiting_sec(): number {
    const bm = new BusMessage(this.message);
    return bm.get_waiting_sec() - this.get_correction_sec();
  }
}

export default Bus;
