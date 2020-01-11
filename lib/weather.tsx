import $ from 'jquery';
import axios from 'axios';

import config from 'config.json';
import { Temperature } from './common'

class WeatherAPI {
  API_KEY: string = config.WEATHER_API_KEY;

  getCurrentWeather(location: string='Seoul') {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.API_KEY}`)
    .then(response => {
      const weather = new Weather(response.data);
      return weather.getData();
    })
    .catch(error => {
      console.log(error);
      return undefined;
    });
  }

  getHourlyWeather() {
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
      return [];
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

  private getTemp(): Object {
    const t = new Temperature();
    const temp = t.kelvinToCelsius(this.main.temp);
    const minTemp = t.kelvinToCelsius(this.main.temp_min);
    const maxTemp = t.kelvinToCelsius(this.main.temp_max);
    return {temp, minTemp, maxTemp};
  }

  private getDateTime(): number {
    return this.data.dt * 1000;
  }

  getData(): Object {
    const weather = this.getWeather();
    const temp = this.getTemp();
    const dt = this.getDateTime();
    return $.extend(weather, temp, {dt});
  }
}

export { WeatherAPI };
