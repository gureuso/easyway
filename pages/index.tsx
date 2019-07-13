import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import axios from 'axios';
import $ from 'jquery';

import Header from '../components/layout/header';
import { BusUI } from '../lib/bus';
import Weather from '../lib/weather';
import config from '../config.json';

class IndexPage extends React.Component {
  get_current_weather() {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=' + config.WEATHER_API_KEY)
    .then(response => {
      const weather = new Weather(response.data);
      return weather.get_data();
    })
    .catch(error => {
      console.log(error);
    });
  }

  set_current_weather() {
    this.get_current_weather().then((data: any) => {
      $('#current_weather_title').html('<div><img src="' + data.icon + '"/></div>' + '<div><p>' + data.temp + '</p></div>');
      $('#current_weather_main').text(data.main);
      $('#current_weather_desc').text(data.desc);
    });
  }

  set_current_time() {
    setInterval(() => {
      $('#current_time').html(moment().format('HH:mm:ss'));
    }, 1000);
  }

  change_tab_mode() {
    const height = $('#title').height()! + $('#logo').height()! + ($('.tab').height()!);
    $(window).scroll(function () {
      const window_height = $(document).scrollTop();
      if(window_height! > height) {
        $('.tab').removeClass('tab').addClass('mini-tab');
        $('#list').css({'margin-top': '325px'});
      } else {
        $('.mini-tab').removeClass('mini-tab').addClass('tab');
        $('#list').css({'margin-top': '-50px'});
      }
    });
  }

  componentDidMount() {
    this.set_current_time();
    this.set_current_weather();
    this.change_tab_mode();
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

class Tab extends React.Component {
  componentDidMount() {
    this.set_current_bus();
  }

  set_current_bus() {
    const target = $('#current_bus_waiting_time');
    const bus_ui = new BusUI();
    bus_ui.set_current_bus(target);
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
                <img src="/static/img/refresh_btn_01.png" onClick={this.set_current_bus}/>
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
              </div>
            </div>
            <div>
              <div id="current_bus">
                <p id="current_bus_num">6613</p>
                <p id="current_bus_waiting_time"></p>
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

export default IndexPage;
