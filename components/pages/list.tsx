import React from 'react';
import moment from 'moment';
import $ from 'jquery';

import Modal from 'components/modal';
import { BusUI } from 'lib/bus';
import { WeatherAPI } from 'lib/weather';
import { SubwayUI } from 'lib/subway';
import { Interval } from 'lib/common';

interface ListProps {
  refresh: boolean
}

class List extends React.Component<ListProps> {
  _ismounted: boolean = true;

  state = {
    currentTime: '',
    currentWeather: ''
  };

  setCurrentTime() {
    const interval = new Interval();
    interval.set(() => {
      if(this._ismounted) {
        this.setState({currentTime: moment().format('HH:mm:ss')});
      }
    }, 1000);
  }

  setCurrentWeather() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.getCurrentWeather().then((data: any) => {
      if(this._ismounted) {
        this.setState({currentWeather: (
          <div id="current_weather">
            <div id="current_weather_title" className="list">
              <div><img src={data.icon}/></div>
              <div><p>{data.temp}°</p></div>
            </div>
            <p id="current_weather_main">{data.main}</p>
            <p id="current_weather_desc">{data.desc}</p>
            <div id="current_weather_more">
              <img src="/static/img/plus_btn_01.svg" onClick={Modal.active}/>
            </div>
          </div>
        )});
      }
    });
  }

  setCurrentBus() {
    const target = $('#current_bus_message');
    BusUI.setCurrentBus(target);
  }

  setCurrentSubway() {
    const target = $('#current_subway_message');
    SubwayUI.setCurrentSubway(target);
  }

  setAll() {
    this.setCurrentTime();
    this.setCurrentWeather();
    this.setCurrentBus();
    this.setCurrentSubway();
  }

  componentDidMount() {
    this._ismounted = true;
    this.setAll();
  }
  
  componentWillUnmount() {
     this._ismounted = false;
  }

  componentWillReceiveProps(nextProps: any) {
    if(nextProps.refresh == true) {
      this.setAll();
    }
  }

  render() {
    return (
      <div className="content">
        <div className="inner-content" id="list">
          <div className="list">
            <div>
              <p id="current_time">{this.state.currentTime}</p>
            </div>
            <div>
              {this.state.currentWeather}
            </div>
            {/* <div>
              <div className="current_bus">
                <p className="current_bus_title">6613</p>
                <p className="current_bus_message"></p>
              </div>
            </div>
            <div>
              <div className="current_subway">
                <p className="current_subway_title">대림역</p>
                <p className="current_subway_message"></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
