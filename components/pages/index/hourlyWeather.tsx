import React from 'react';
import moment from 'moment';

import { WeatherAPI } from 'lib/weather';

interface HourlyWeatherProps {
  refresh: boolean
}

class HourlyWeather extends React.Component<HourlyWeatherProps> {
  state = {
    hourlyWeather: []
  };

  setHourlyWeather() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.getHourlyWeather().then((list: any) => {
      let html = [];
      for(const data of list.slice(0, 10)) {
        html.push(
          <div key={data.dt}>
            {moment(data.dt).format('HH:mm')}<br/>
            <img src={data.icon}/><br/>
            {data.temp}°<br/>
            {data.main}<br/>
          </div>
        );
      }
      this.setState({hourlyWeather: html});
    });
  }

  componentDidMount() {
    this.setHourlyWeather();
  }

  componentWillReceiveProps(nextProps: any) {
    if(nextProps.refresh == true) {
      this.setHourlyWeather();
    }
  }

  render() {
    return (
      <div id="hourly_weather">
        {this.state.hourlyWeather}
      </div>
    );
  }
}

export default HourlyWeather;
