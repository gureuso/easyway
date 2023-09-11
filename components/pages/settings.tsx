import React from 'react';
import $ from 'jquery';
import Image from 'next/image'

import { BusAPI } from 'lib/bus';
import { SubwayAPI } from 'lib/subway';

interface SettingsProps {
  token: string;
}

interface SettingsStates {
  busStation: JSX.Element[],
  busRoute: JSX.Element[],
  busRouteChoice: JSX.Element[],
  subwayLine: JSX.Element[],
  subwayLineChoice: JSX.Element[]
}

class Settings extends React.Component<SettingsProps, SettingsStates> {
  constructor(props: any) {
    super(props);

    this.setBusStation = this.setBusStation.bind(this);
    this.setBusRoute = this.setBusRoute.bind(this);
    this.addBusRoute = this.addBusRoute.bind(this);
    this.removeBusRoute = this.removeBusRoute.bind(this);

    this.setSubwayLine = this.setSubwayLine.bind(this);
    this.addSubwayLine = this.addSubwayLine.bind(this);
    this.removeSubwayLine = this.removeSubwayLine.bind(this);
  }

  state = {
    busStation: [],
    busRoute: [],
    busRouteChoice: [],
    subwayLine: [],
    subwayLineChoice: []
  }

  componentDidMount() {
    this.setBuses();
    this.setSubways();
  }

  setBuses() {
    let arr: JSX.Element[] = this.state.busRouteChoice;

    const api = new BusAPI();
    api.getBuses(this.props.token).then(data => {
      for(let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        arr.push(
          <li key={key} data-id={bus.id} data-st-id={bus.station_id} data-busroute-id={bus.bus_route_id} data-ord={bus.ord} data-rtnm={bus.name}>{bus.name}<Image width={15} height={15} src="/static/img/plus_btn_01.svg" onClick={this.removeBusRoute}/></li>
        )
      }
      this.setState({'busRouteChoice': arr});
    });
  }

  removeBusRoute(event: any) {
    const target = $(event.target).closest('li');
    const key = `${target.data('st-id')}${target.data('busroute-id')}`;
    let arr: JSX.Element[] = this.state.busRouteChoice.filter((value: any) => {
      return value.key != key;
    });

    const api = new BusAPI();
    api.deleteBus(target.data('id'), this.props.token).then(data => {
      this.setState({'busRouteChoice': arr});
    });
  }

  addBusRoute(event: any) {
    const target = $(event.target).closest('div').prev();

    const key = `${target.data('st-id')}${target.data('busroute-id')}`;
    let arr: JSX.Element[] = this.state.busRouteChoice;
    let alreadyFlag = false;
    for(let value of arr) {
      if(value.key == key) {
        alreadyFlag = true;
      }
    }

    if(alreadyFlag) {
      return;
    }

    if(arr.length > 2) {
      return;
    }

    const name = target.data('rtnm');
    const stId = target.data('st-id');
    const busRouteId = target.data('busroute-id');
    const ord = target.data('ord');
    const adirection = target.data('adirection');

    const api = new BusAPI();
    api.createBus(name, stId, busRouteId, ord, this.props.token).then(data => {
      arr.push(
        <li key={key} data-id={data.id} data-st-id={stId} data-busroute-id={busRouteId} data-ord={ord} data-rtnm={name} data-adirection={adirection}>{name}<img src="/static/img/plus_btn_01.svg" onClick={this.removeBusRoute}/></li>
      )
      this.setState({'busRouteChoice': arr});
    });
  }

  setBusRoute(event: any) {
    this.setState({'busStation': []});
    const arsId = $(event.target).data('ars-id');

    const api = new BusAPI();
    api.getBusRoute(arsId).then(data => {
      data = Array.isArray(data) ? data : [data]

      const arr = [];
      for(let i in data) {
        arr.push(
          <div key={i}>
            <div data-st-id={data[i].stId} data-busroute-id={data[i].busRouteId} data-ord={data[i].staOrd} data-rtnm={data[i].rtNm} data-adirection={data[i].adirection}>{data[i].rtNm}:{data[i].adirection}</div>
            <div><img width={15} height={15} src="/static/img/close_btn_01.svg" onClick={this.addBusRoute}/></div>
          </div>
        )
      }
      this.setState({'busRoute': arr});
    });
  }

  setBusStation(event: any) {
    const name = event.target.value;
    if(name.length < 2) {
      return;
    }

    const api = new BusAPI();
    api.getBusStation(name).then(data => {
      data = data ? data.slice(0, 5) : undefined;

      const arr = [];
      for(let i in data) {
        arr.push(
          <li key={i} data-ars-id={data[i].arsId} onClick={this.setBusRoute}>{data[i].stNm}</li>
        );
      }
      this.setState({'busStation': arr});
    });
  }

  removeSubwayLine(event: any) {
    const target = $(event.target).closest('li');
    const key = target.data('train-line-nm');
    let arr: JSX.Element[] = this.state.subwayLineChoice.filter((value: any) => {
      return value.key != key;
    });

    const api = new SubwayAPI();
    api.deleteSubway(target.data('id'), this.props.token).then(data => {
      this.setState({'subwayLineChoice': arr});
    });
  }

  addSubwayLine(event: any) {
    const target = $(event.target).closest('div').prev();

    const key = target.data('train-line-nm');
    let arr: JSX.Element[] = this.state.subwayLineChoice;
    let alreadyFlag = false;
    for(let value of arr) {
      if(value.key == key) {
        alreadyFlag = true;
      }
    }

    if(alreadyFlag) {
      return;
    }

    if(arr.length > 5) {
      return;
    }

    const stationName = target.data('statn-nm');
    const direction = target.data('updn-line');
    const trainLineName = target.data('train-line-nm');

    const api = new SubwayAPI();
    api.createSubway(stationName, direction, trainLineName, this.props.token).then(data => {
      arr.push(
        <li key={key} data-id={data.id} data-updn-line={direction} data-statn-nm={stationName} data-train-line-nm={trainLineName}>{trainLineName.split(' - ')[0]}<Image width={15} height={15} src="/static/img/plus_btn_01.svg" onClick={this.removeSubwayLine}/></li>
      )
      this.setState({'subwayLineChoice': arr});
    });
  }

  setSubways() {
    let arr: JSX.Element[] = this.state.subwayLineChoice;

    const api = new SubwayAPI();
    api.getSubways(this.props.token).then(data => {
      for(let subway of data) {
        const key = subway.train_line_name;
        arr.push(
          <li key={key} data-id={subway.id} data-updn-line={subway.direction} data-statn-nm={subway.station_name} data-train-line-nm={subway.train_line_name}>{subway.train_line_name.split(' - ')[0]}<Image width={15} height={15} src="/static/img/close_btn_01.svg" onClick={this.removeSubwayLine}/></li>
        )
      }
      this.setState({'subwayLineChoice': arr});
    });
  }

  setSubwayLine(event: any) {
    this.setState({'subwayLine': []});
    
    const name = event.target.value;
    if(name.length < 2) {
      return;
    }

    const api = new SubwayAPI();
    api.getCurrentSubway(name).then(data => {
      const arr = [];

      let dict: any = {};
      for(let i in data) {
        dict[data[i].trainLineNm] = i;
      }

      for(let i in dict) {
        const j = dict[i];
        arr.push(
          <div key={j}>
            <div data-updn-line={data[j].updnLine} data-statn-nm={data[j].statnNm} data-train-line-nm={data[j].trainLineNm}>{data[j].trainLineNm}</div>
            <div><img src="/static/img/plus_btn_01.svg" onClick={this.addSubwayLine}/></div>
          </div>
        );
      }
      this.setState({'subwayLine': arr});
    });
  }

  render() {
    return (
      <div className="list">
        <div>
          <input type="text" id="search-bus-station" onChange={this.setBusStation} onFocus={this.setBusStation} placeholder="정류소명"/>
          <ul id="search-bus-station-result">
            {this.state.busStation}
          </ul>
          <div id="bus-route-result">
            {this.state.busRoute}
          </div>
          <ul id="bus-route-choice">
            {this.state.busRouteChoice}
          </ul>
        </div>
        <div>
          <input type="text" id="search-subway-station" onChange={this.setSubwayLine} onFocus={this.setSubwayLine} placeholder="지하철역명(역제외)"/>
          <div id="subway-line-result">
            {this.state.subwayLine}
          </div>
          <ul id="subway-line-choice">
            {this.state.subwayLineChoice}
          </ul>
        </div>
      </div>
    );
  }
}

export default Settings;
