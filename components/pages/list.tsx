import React from 'react';
import moment from 'moment';
import $ from 'jquery';

import Modal from 'components/modal';
import { BusUI, BusAPI } from 'lib/bus';
import { WeatherAPI } from 'lib/weather';
import { SubwayUI } from 'lib/subway';
import { Interval } from 'lib/common';

interface ListProps {
  refresh: boolean,
  token: string
}

interface ListStates {
  currentTime: string,
  currentWeather: JSX.Element,
  buses: JSX.Element[]
}

class List extends React.Component<ListProps, ListStates> {
  _ismounted: boolean = true;

  state = {
    currentTime: '',
    currentWeather: (<div></div>),
    buses: []
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
    const api = new BusAPI();
    api.getBuses(this.props.token).then(data => {
      let arr: JSX.Element[] = [];
      for(let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        arr.push(
          <div className="current_bus" key={key}>
            <p className="current_bus_title">{bus.name}</p>
            <p className="current_bus_message" id={key}></p>
          </div>
        )
      }
      this.setState({'buses': arr});
      
      for(let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        const target = $(`#${key}`);
        BusUI.setCurrentBus(target, bus.station_id, bus.bus_route_id, bus.ord);
      }
    });
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
            {this.state.buses}
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
