import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import $ from 'jquery';

import Header from '../components/layout/header';
import Modal from '../components/modal';
import { BusUI } from '../lib/bus';
import { WeatherAPI } from '../lib/weather';
import { SubwayUI } from '../lib/subway';
import { Interval } from '../lib/common';

class IndexPage extends React.Component {
  state = {
    refresh: false
  };

  changeTabMode() {
    const height = $('#title').height()! + $('#logo').height()! + ($('.tab').height()!);
    $(window).scroll(function () {
      const windowHeight = $(document).scrollTop();
      if(windowHeight! > height) {
        $('.tab').removeClass('tab').addClass('mini-tab');
        $('#list').css({'margin-top': '325px'});
      } else {
        $('.mini-tab').removeClass('mini-tab').addClass('tab');
        $('#list').css({'margin-top': '-50px'});
      }
    });
  }

  refresh() {
    this.setState({refresh: true});
  }

  componentDidMount() {
    this.changeTabMode();
  }

  render() {
    return (
      <div>
        <Header title="EASYWAY"/>

        <Title/>
        <Logo/>
        <Tab handler={this.refresh.bind(this)}/>
        <List refresh={this.state.refresh}/>
        <Footer/>

        <Modal>
          <HourlyWeather refresh={this.state.refresh}/>
        </Modal>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="content bg-c-gray" id="title">
        <p>걱정없이 집을 나가자!</p>
        <h1>EASYWAY</h1>
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div className="content" id="logo">
        <img src="/static/img/easyway_title_02.png"/>
      </div>
    );
  }
}

interface TabProps {
  handler: Function
}

class Tab extends React.Component<TabProps> {
  runSpin() {
    const target = $('#tab > ul > li:last-child > img');
    target.removeClass('spin');
    setTimeout(() => {
      target.addClass('spin');
    }, 1);
  }

  refresh() {
    Interval.clearAll();
    this.runSpin();
    this.props.handler();
  }

  render() {
    return (
      <div className="content bg-c-yellow tab">
        <div className="inner-content">
          <div id="date">
            <p>{moment().format('YYYY/MM/DD')}</p>
          </div>
          <div id="tab">
            <ul>
              <li>
                <Link href="/"><a>Main</a></Link>
                <div></div>
              </li>
              <li>
                <img src="/static/img/refresh_btn_01.svg" onClick={this.refresh.bind(this)}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

interface ListProps {
  refresh: boolean
}

class List extends React.Component<ListProps> {
  state = {
    currentTime: '',
    currentWeather: ''
  };

  setCurrentTime() {
    const interval = new Interval();
    interval.set(() => {
      this.setState({currentTime: moment().format('HH:mm:ss')});
    }, 1000);
  }

  setCurrentWeather() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.getCurrentWeather().then((data: any) => {
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
    this.setAll();
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
            <div>
              <div id="current_bus">
                <p id="current_bus_title">6613</p>
                <p id="current_bus_message"></p>
              </div>
            </div>
            <div>
              <div id="current_subway">
                <p id="current_subway_title">대림역</p>
                <p id="current_subway_message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="content bg-c-yellow" id="footer">
        <p><Link href="/cc"><a>CC</a></Link></p>
      </div>
    );
  }
}

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

export default IndexPage;
