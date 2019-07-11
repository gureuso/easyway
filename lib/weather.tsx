import $ from 'jquery';

import config from '../config.json';

class Weather {
  data: {[key: string]: any};
  weather: Array<any>;
  main: {[key: string]: any};

  constructor(data: {[key: string]: any}) {
    this.data = data;
    this.weather = this.data.weather;
    this.main = this.data.main;
  }

  get_weather(): object {
    let data: any = {};
    for(const w of this.weather) {
      data.id = w.id;
      data.icon = 'http://openweathermap.org/img/wn/' + w.icon + '@2x.png';
      data.main = w.main;
      data.desc = w.description;
      break;
    }
    return data;
  }

  get_data(): object {
    const weather = this.get_weather();
    const temp = (this.main.temp - config.KELVIN_NUM).toFixed(1);
    return $.extend(weather, {temp});
  }
}

export default Weather;
