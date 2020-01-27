import React from 'react';
import $ from 'jquery';

import { BusAPI } from 'lib/bus';

interface SettingsStates {
  busStation: JSX.Element[],
  busRoute: JSX.Element[],
  busRouteChoice: JSX.Element[]
}

class Settings extends React.Component<{}, SettingsStates> {
  constructor(props: any) {
    super(props);

    this.setBusStation = this.setBusStation.bind(this)
    this.setBusRoute = this.setBusRoute.bind(this)
    this.addBusRoute = this.addBusRoute.bind(this)
    this.removeBusRoute = this.removeBusRoute.bind(this)
  }

  state = {
    busStation: [],
    busRoute: [],
    busRouteChoice: []
  }

  removeBusRoute(event: any) {
    const target = $(event.target).closest('li')
    const key = target.data('st-id') + target.data('busroute-id');
    let arr: JSX.Element[] = this.state.busRouteChoice.filter((value: any) => {
      return value.key != key;
    });
    this.setState({'busRouteChoice': arr});
  }

  addBusRoute(event: any) {
    const target = $(event.target).closest('div').prev();

    const key = target.data('st-id') + target.data('busroute-id');
    let arr: JSX.Element[] = this.state.busRouteChoice.filter((value: any) => {
      return value.key != key;
    });
    
    if(arr.length > 2) {
      return;
    }

    arr.push(
      <li key={key} data-st-id={target.data('st-id')} data-busroute-id={target.data('busroute-id')} data-ord={target.data('ord')} data-rtnm={target.data('rtnm')} data-adirection={target.data('adirection')}>{target.data('rtnm')}<img src="/static/img/plus_btn_01.svg" onClick={this.removeBusRoute}/></li>
    )
    this.setState({'busRouteChoice': arr});
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
            <div><img src="/static/img/plus_btn_01.svg" onClick={this.addBusRoute}/></div>
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
        </div>
      </div>
    );
  }
}

export default Settings;
