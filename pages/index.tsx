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
  componentDidMount() {
    ComponentDidMount.setAll();
    ComponentDidMount.changeTabMode();
  }

  render() {
    return (
      <div>
        <Header title="EASYWAY"/>

        <Title/>
        <Logo/>
        <Tab/>
        <List/>
        <Footer/>

        <Modal>
          <HourlyWeather/>
        </Modal>
      </div>
    );
  }
}

class ComponentDidMount {
  static setCurrentWeather() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.getCurrentWeather().then((data: any) => {
      let titleHtml = `<div><img src="${data.icon}"></div>`;
      titleHtml += `<div><p>${data.temp}°</p></div>`;
      $('#current_weather_title').html(titleHtml);
      $('#current_weather_main').text(data.main);
      $('#current_weather_desc').text(data.desc);
    });
  }

  static setCurrentTime() {
    const interval = new Interval();
    interval.set(() => {
      $('#current_time').html(moment().format('HH:mm:ss'));
    }, 1000);
  }

  static setCurrentBus() {
    const target = $('#current_bus_message');
    BusUI.setCurrentBus(target);
  }

  static setCurrentSubway() {
    const target = $('#current_subway_message');
    SubwayUI.setCurrentSubway(target);
  }

  static setHourlyWeather() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.getHourlyWeather().then((list: any) => {
      const target = $('#hourly_weather');
      target.html('');
      for(const data of list.slice(0, 10)) {
        let html = '<div>';
        html += `${moment(data.dt).format('HH:mm')}<br/>`;
        html += `<img src="${data.icon}"/><br/>`;
        html += `${data.temp}°<br/>`;
        html += `${data.main}<br/>`;
        html += '</div>';
        target.append(html);
      }
    });
  }

  static setAll() {
    ComponentDidMount.setCurrentTime();
    ComponentDidMount.setCurrentWeather();
    ComponentDidMount.setCurrentBus();
    ComponentDidMount.setCurrentSubway();
    ComponentDidMount.setHourlyWeather();
  }

  static runSpin() {
    const target = $('#tab > ul > li:last-child > img');
    target.removeClass('spin');
    setTimeout(() => {
      target.addClass('spin');
    }, 1);
  }

  static refresh() {
    Interval.clearAll();
    ComponentDidMount.runSpin();
    ComponentDidMount.setAll();
  }

  static changeTabMode() {
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

class Tab extends React.Component {
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
                <img src="/static/img/refresh_btn_01.svg" onClick={ComponentDidMount.refresh}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="inner-content" id="list">
          <div className="list">
            <div>
              <p id="current_time"></p>
            </div>
            <div>
              <div id="current_weather">
                <div id="current_weather_title" className="list"></div>
                <p id="current_weather_main"></p>
                <p id="current_weather_desc"></p>
                <div id="current_weather_more">
                  <img src="/static/img/plus_btn_01.svg" onClick={Modal.active}/>
                </div>
              </div>
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

class HourlyWeather extends React.Component {
  render() {
    return (
      <div id="hourly_weather"></div>
    );
  }
}

export default IndexPage;
