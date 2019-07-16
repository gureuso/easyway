import $ from 'jquery';
import axios from 'axios'

import config from '../config.json';

class WeatherAPI {
  API_KEY: string = config.WEATHER_API_KEY;

  getCurrentWeather() {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=' + this.API_KEY)
    .then(response => {
      const weather = new Weather(response.data);
      return weather.getData();
    })
    .catch(error => {
      console.log(error);
    });
  }

  getForecastWeather() {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=' + this.API_KEY)
    .then(response => {
      let list: Array<Object> = [];
      for(const data of response.data.list) {
        const weather = new Weather(data);
        list.push(weather.getData());
      }
      return list;
    })
    .catch(error => {
      console.log(error);
    });
  }
}

class Weather {
  data: {[key: string]: any};
  weather: Array<any>;
  main: {[key: string]: any};

  constructor(data: {[key: string]: any}) {
    this.data = data;
    this.weather = this.data.weather;
    this.main = this.data.main;
  }

  private getWeather(): Object {
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

  private getTemp(): number {
    return parseFloat((this.main.temp - config.KELVIN_NUM).toFixed(1));
  }

  private getDateTime(): number {
    return this.data.dt * 1000;
  }

  getData(): Object {
    const weather = this.getWeather();
    const temp = this.getTemp();
    const dt = this.getDateTime();
    return $.extend(weather, {temp, dt});
  }
}

export { WeatherAPI };
