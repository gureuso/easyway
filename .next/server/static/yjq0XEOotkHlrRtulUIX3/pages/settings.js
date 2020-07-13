module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/QEs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: ./components/layout/header.tsx
var header = __webpack_require__("EFwJ");

// EXTERNAL MODULE: ./components/pages/title.tsx
var title = __webpack_require__("OU1g");

// EXTERNAL MODULE: ./components/pages/logo.tsx
var logo = __webpack_require__("DywW");

// EXTERNAL MODULE: ./components/pages/textOnlyTab.tsx
var textOnlyTab = __webpack_require__("s38N");

// EXTERNAL MODULE: ./components/pages/blankList.tsx
var blankList = __webpack_require__("OrSV");

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("xeH2");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./lib/bus.tsx
var bus = __webpack_require__("85Dp");

// EXTERNAL MODULE: ./lib/subway.tsx
var subway = __webpack_require__("sH5C");

// CONCATENATED MODULE: ./components/pages/settings.tsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class settings_Settings extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      busStation: [],
      busRoute: [],
      busRouteChoice: [],
      subwayLine: [],
      subwayLineChoice: []
    });

    this.setBusStation = this.setBusStation.bind(this);
    this.setBusRoute = this.setBusRoute.bind(this);
    this.addBusRoute = this.addBusRoute.bind(this);
    this.removeBusRoute = this.removeBusRoute.bind(this);
    this.setSubwayLine = this.setSubwayLine.bind(this);
    this.addSubwayLine = this.addSubwayLine.bind(this);
    this.removeSubwayLine = this.removeSubwayLine.bind(this);
  }

  componentDidMount() {
    this.setBuses();
    this.setSubways();
  }

  setBuses() {
    let arr = this.state.busRouteChoice;
    const api = new bus["a" /* BusAPI */]();
    api.getBuses(this.props.token).then(data => {
      for (let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        arr.push(__jsx("li", {
          key: key,
          "data-id": bus.id,
          "data-st-id": bus.station_id,
          "data-busroute-id": bus.bus_route_id,
          "data-ord": bus.ord,
          "data-rtnm": bus.name
        }, bus.name, __jsx("img", {
          src: "/static/img/plus_btn_01.svg",
          onClick: this.removeBusRoute
        })));
      }

      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  removeBusRoute(event) {
    const target = external_jquery_default()(event.target).closest('li');
    const key = `${target.data('st-id')}${target.data('busroute-id')}`;
    let arr = this.state.busRouteChoice.filter(value => {
      return value.key != key;
    });
    const api = new bus["a" /* BusAPI */]();
    api.deleteBus(target.data('id'), this.props.token).then(data => {
      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  addBusRoute(event) {
    const target = external_jquery_default()(event.target).closest('div').prev();
    const key = `${target.data('st-id')}${target.data('busroute-id')}`;
    let arr = this.state.busRouteChoice;
    let alreadyFlag = false;

    for (let value of arr) {
      if (value.key == key) {
        alreadyFlag = true;
      }
    }

    if (alreadyFlag) {
      return;
    }

    if (arr.length > 2) {
      return;
    }

    const name = target.data('rtnm');
    const stId = target.data('st-id');
    const busRouteId = target.data('busroute-id');
    const ord = target.data('ord');
    const adirection = target.data('adirection');
    const api = new bus["a" /* BusAPI */]();
    api.createBus(name, stId, busRouteId, ord, this.props.token).then(data => {
      arr.push(__jsx("li", {
        key: key,
        "data-id": data.id,
        "data-st-id": stId,
        "data-busroute-id": busRouteId,
        "data-ord": ord,
        "data-rtnm": name,
        "data-adirection": adirection
      }, name, __jsx("img", {
        src: "/static/img/plus_btn_01.svg",
        onClick: this.removeBusRoute
      })));
      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  setBusRoute(event) {
    this.setState({
      'busStation': []
    });
    const arsId = external_jquery_default()(event.target).data('ars-id');
    const api = new bus["a" /* BusAPI */]();
    api.getBusRoute(arsId).then(data => {
      data = Array.isArray(data) ? data : [data];
      const arr = [];

      for (let i in data) {
        arr.push(__jsx("div", {
          key: i
        }, __jsx("div", {
          "data-st-id": data[i].stId,
          "data-busroute-id": data[i].busRouteId,
          "data-ord": data[i].staOrd,
          "data-rtnm": data[i].rtNm,
          "data-adirection": data[i].adirection
        }, data[i].rtNm, ":", data[i].adirection), __jsx("div", null, __jsx("img", {
          src: "/static/img/plus_btn_01.svg",
          onClick: this.addBusRoute
        }))));
      }

      this.setState({
        'busRoute': arr
      });
    });
  }

  setBusStation(event) {
    const name = event.target.value;

    if (name.length < 2) {
      return;
    }

    const api = new bus["a" /* BusAPI */]();
    api.getBusStation(name).then(data => {
      data = data ? data.slice(0, 5) : undefined;
      const arr = [];

      for (let i in data) {
        arr.push(__jsx("li", {
          key: i,
          "data-ars-id": data[i].arsId,
          onClick: this.setBusRoute
        }, data[i].stNm));
      }

      this.setState({
        'busStation': arr
      });
    });
  }

  removeSubwayLine(event) {
    const target = external_jquery_default()(event.target).closest('li');
    const key = target.data('train-line-nm');
    let arr = this.state.subwayLineChoice.filter(value => {
      return value.key != key;
    });
    const api = new subway["a" /* SubwayAPI */]();
    api.deleteSubway(target.data('id'), this.props.token).then(data => {
      this.setState({
        'subwayLineChoice': arr
      });
    });
  }

  addSubwayLine(event) {
    const target = external_jquery_default()(event.target).closest('div').prev();
    const key = target.data('train-line-nm');
    let arr = this.state.subwayLineChoice;
    let alreadyFlag = false;

    for (let value of arr) {
      if (value.key == key) {
        alreadyFlag = true;
      }
    }

    if (alreadyFlag) {
      return;
    }

    if (arr.length > 5) {
      return;
    }

    const stationName = target.data('statn-nm');
    const direction = target.data('updn-line');
    const trainLineName = target.data('train-line-nm');
    const api = new subway["a" /* SubwayAPI */]();
    api.createSubway(stationName, direction, trainLineName, this.props.token).then(data => {
      arr.push(__jsx("li", {
        key: key,
        "data-id": data.id,
        "data-updn-line": direction,
        "data-statn-nm": stationName,
        "data-train-line-nm": trainLineName
      }, trainLineName.split(' - ')[0], __jsx("img", {
        src: "/static/img/plus_btn_01.svg",
        onClick: this.removeSubwayLine
      })));
      this.setState({
        'subwayLineChoice': arr
      });
    });
  }

  setSubways() {
    let arr = this.state.subwayLineChoice;
    const api = new subway["a" /* SubwayAPI */]();
    api.getSubways(this.props.token).then(data => {
      for (let subway of data) {
        const key = subway.train_line_name;
        arr.push(__jsx("li", {
          key: key,
          "data-id": subway.id,
          "data-updn-line": subway.direction,
          "data-statn-nm": subway.station_name,
          "data-train-line-nm": subway.train_line_name
        }, subway.train_line_name.split(' - ')[0], __jsx("img", {
          src: "/static/img/plus_btn_01.svg",
          onClick: this.removeSubwayLine
        })));
      }

      this.setState({
        'subwayLineChoice': arr
      });
    });
  }

  setSubwayLine(event) {
    this.setState({
      'subwayLine': []
    });
    const name = event.target.value;

    if (name.length < 2) {
      return;
    }

    const api = new subway["a" /* SubwayAPI */]();
    api.getCurrentSubway(name).then(data => {
      const arr = [];
      let dict = {};

      for (let i in data) {
        dict[data[i].trainLineNm] = i;
      }

      for (let i in dict) {
        const j = dict[i];
        arr.push(__jsx("div", {
          key: j
        }, __jsx("div", {
          "data-updn-line": data[j].updnLine,
          "data-statn-nm": data[j].statnNm,
          "data-train-line-nm": data[j].trainLineNm
        }, data[j].trainLineNm), __jsx("div", null, __jsx("img", {
          src: "/static/img/plus_btn_01.svg",
          onClick: this.addSubwayLine
        }))));
      }

      this.setState({
        'subwayLine': arr
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "list"
    }, __jsx("div", null, __jsx("input", {
      type: "text",
      id: "search-bus-station",
      onChange: this.setBusStation,
      onFocus: this.setBusStation,
      placeholder: "\uC815\uB958\uC18C\uBA85"
    }), __jsx("ul", {
      id: "search-bus-station-result"
    }, this.state.busStation), __jsx("div", {
      id: "bus-route-result"
    }, this.state.busRoute), __jsx("ul", {
      id: "bus-route-choice"
    }, this.state.busRouteChoice)), __jsx("div", null, __jsx("input", {
      type: "text",
      id: "search-subway-station",
      onChange: this.setSubwayLine,
      onFocus: this.setSubwayLine,
      placeholder: "\uC9C0\uD558\uCCA0\uC5ED\uBA85(\uC5ED\uC81C\uC678)"
    }), __jsx("div", {
      id: "subway-line-result"
    }, this.state.subwayLine), __jsx("ul", {
      id: "subway-line-choice"
    }, this.state.subwayLineChoice)));
  }

}

/* harmony default export */ var settings = (settings_Settings);
// EXTERNAL MODULE: ./components/pages/footer.tsx
var footer = __webpack_require__("RnLg");

// EXTERNAL MODULE: ./components/layout/redirect.tsx
var redirect = __webpack_require__("G7e+");

// CONCATENATED MODULE: ./pages/settings.tsx
var _dec, _class;

var settings_jsx = external_react_default.a.createElement;










let settings_SettingsPage = (_dec = Object(external_mobx_react_["inject"])('store'), _dec(_class = Object(external_mobx_react_["observer"])(_class = class SettingsPage extends external_react_default.a.Component {
  render() {
    if (!this.props.store.isSignin) {
      return settings_jsx(redirect["a" /* default */], {
        store: this.props.store,
        to: "/signin"
      });
    }

    return settings_jsx("div", null, settings_jsx(header["a" /* default */], {
      title: "EASYWAY"
    }), settings_jsx(title["a" /* default */], {
      isSignin: this.props.store.isSignin
    }), settings_jsx(logo["a" /* default */], null), settings_jsx(textOnlyTab["a" /* default */], {
      title: "\uC124\uC815"
    }), settings_jsx(blankList["a" /* default */], null, settings_jsx(settings, {
      token: this.props.store.token
    })), settings_jsx(footer["a" /* default */], null));
  }

}) || _class) || _class);
/* harmony default export */ var pages_settings = __webpack_exports__["default"] = (settings_SettingsPage);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/QEs");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "81W9":
/***/ (function(module) {

module.exports = JSON.parse("{\"SUBWAY_API_KEY\":\"576e7641637779753339776e735745\",\"WEATHER_API_KEY\":\"915caab145ec09ce7724d09944d89cb1\",\"BUS_API_KEY\":\"ldbaTdPATqmbFE3k5T1zUnG%2BeTKS57wNuX%2FuI6pWqlIxKRKEaF1gXzGx3Ex4sU6GGs%2BnCa%2BbAddYXbwpPSkZag%3D%3D\",\"KELVIN_NUM\":273.15,\"API_HOST\":\"http://apis.easyway.gureuso.me\",\"APP_MODE\":\"production\",\"APP_PORT\":3000,\"APP_HOST\":\"localhost\"}");

/***/ }),

/***/ "85Dp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BusUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NS32");
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("81W9");
var config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("81W9", 1);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Y25M");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Uh3f");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class BusUI {
  static setWaitingTime(target, sec, stId, busRouteId, ord) {
    const ui = new _ui__WEBPACK_IMPORTED_MODULE_4__[/* TimeUI */ "a"]();
    ui.setWaitingTimeWithBus(target, sec, BusUI.setCurrentBus, stId, busRouteId, ord);
  }

  static setCurrentBus(target, stId, busRouteId, ord) {
    const api = new BusAPI();
    api.getDataByRoute(stId, busRouteId, ord).then(data => {
      if (data) {
        const bus = new Bus(data);
        const waitingSec = bus.getWaitingSec();

        if (waitingSec < 1) {
          target.text(bus.message);
        } else {
          BusUI.setWaitingTime(target, waitingSec, stId, busRouteId, ord);
        }
      } else {
        target.text('data is null');
      }
    });
  }

}

class BusAPI {
  constructor() {
    _defineProperty(this, "API_KEY", config_json__WEBPACK_IMPORTED_MODULE_2__.BUS_API_KEY);

    _defineProperty(this, "PROXY_HOST", config_json__WEBPACK_IMPORTED_MODULE_2__.API_HOST);
  }

  proxy(url) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.PROXY_HOST + '/apis/proxy?url=' + encodeURIComponent(url)).then(response => {
      const data = fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(response.data.data.data).ServiceResult.msgBody;
      return data ? data.itemList : undefined;
    }).catch(error => {
      console.log(error);
      return undefined;
    });
  }

  createBus(name, stationId, busRouteId, ord, token) {
    const form = new FormData();
    form.append('name', name);
    form.append('station_id', stationId);
    form.append('bus_route_id', busRouteId);
    form.append('ord', ord);
    form.append('token', token);
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${this.PROXY_HOST}/public_transport/buses/create`, form).then(response => {
      return response.data.data;
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

  deleteBus(id, token) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${this.PROXY_HOST}/public_transport/buses/${id}/delete?token=${token}`).then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

  getBuses(token) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.PROXY_HOST}/public_transport/buses?token=${token}`).then(response => {
      return response.data.data.buses;
    }).catch(error => {
      console.log(error);
      return [];
    });
  }

  getBusRoute(arsId) {
    let url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&arsId=' + arsId;
    return this.proxy(url);
  }

  getBusStation(name) {
    let url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&stSrch=' + name;
    return this.proxy(url);
  }

  getDataByRoute(stId, busRouteId, ord) {
    let url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?';
    url += 'serviceKey=' + this.API_KEY;
    url += '&stId=' + stId;
    url += '&busRouteId=' + busRouteId;
    url += '&ord=' + ord;
    return this.proxy(url);
  }

}

class BusMessage {
  constructor(message) {
    _defineProperty(this, "message", void 0);

    this.message = message;
  }

  getWaitingSec() {
    const matchMinute = this.message.match(/\d+분/g);
    const minute = matchMinute ? parseInt(matchMinute[0].replace('분', '')) : 0;
    const matchSec = this.message.match(/\d+초/g);
    const sec = matchSec ? parseInt(matchSec[0].replace('초', '')) : 0;
    return minute * 60 + sec;
  }

  checkBusShutdown() {
    if (this.message.search(/운행종료/g) != -1) {
      return true;
    } else {
      return false;
    }
  }

}

class Bus {
  constructor(data) {
    _defineProperty(this, "data", void 0);

    _defineProperty(this, "busNum", void 0);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "apiCallTime", void 0);

    this.data = data;
    this.busNum = parseInt(this.data.rtNm);
    this.message = this.data.arrmsg1;
    this.apiCallTime = this.data.mkTm;
  }

  getCorrectionSec() {
    const m = new _common__WEBPACK_IMPORTED_MODULE_3__[/* Moment */ "b"]();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec() {
    const bm = new BusMessage(this.message);
    return bm.getWaitingSec() - this.getCorrectionSec();
  }

}



/***/ }),

/***/ "DywW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Logo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content",
      id: "logo"
    }, __jsx("img", {
      src: "/static/img/easyway_title.png"
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "EFwJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, this.props.title));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "G7e+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EFwJ");
/* harmony import */ var components_pages_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OU1g");
/* harmony import */ var components_pages_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DywW");
/* harmony import */ var components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s38N");
/* harmony import */ var components_pages_blankList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OrSV");
/* harmony import */ var components_pages_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RnLg");
var _dec, _class;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









let Redirect = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class Redirect extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  redirect() {
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(this.props.to);
    }, 500);
  }

  componentDidMount() {
    this.redirect();
  }

  render() {
    return __jsx("div", null, __jsx(components_layout_header__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      title: "EASYWAY"
    }), __jsx(components_pages_title__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      isSignin: this.props.store.isSignin
    }), __jsx(components_pages_logo__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx(components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      title: "Redirect"
    }), __jsx(components_pages_blankList__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, __jsx("div", {
      className: "list"
    }, __jsx("div", null), __jsx("div", null))), __jsx(components_pages_footer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null));
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),

/***/ "NS32":
/***/ (function(module, exports) {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ "OU1g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Title extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderSignin() {
    if (this.props.isSignin) {
      return __jsx("div", {
        className: "content"
      }, __jsx("ul", {
        id: "signin"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/signout"
      }, __jsx("a", null, "\uB85C\uADF8\uC544\uC6C3")))));
    } else {
      return __jsx("div", {
        className: "content"
      }, __jsx("ul", {
        id: "signin"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/signin"
      }, __jsx("a", null, "\uB85C\uADF8\uC778")))));
    }
  }

  render() {
    return __jsx("div", null, this.renderSignin(), __jsx("div", {
      className: "content bg-c-gray",
      id: "title"
    }, __jsx("p", null, "\uAC71\uC815\uC5C6\uC774 \uC9D1\uC744 \uB098\uAC00\uC790!"), __jsx("h1", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "EASYWAY")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "OrSV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BlankList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content"
    }, __jsx("div", {
      className: "inner-content",
      id: "list"
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlankList);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RnLg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content bg-c-yellow",
      id: "footer"
    }, __jsx("p", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cc"
    }, __jsx("a", null, "CC"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Uh3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeUI; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y25M");


class TimeUI {
  setWaitingTimeWithBus(target, sec, callback, stId, busRouteId, ord) {
    const interval = new _common__WEBPACK_IMPORTED_MODULE_0__[/* Interval */ "a"]();
    const id = interval.set(() => {
      const minute = sec / 60 >> 0;
      const minuteMessage = minute ? String(minute) + '분' : '';
      const secMessage = String(sec - minute * 60) + '초';
      target.text(minuteMessage + secMessage);
      sec -= 1;

      if (sec < 0) {
        interval.clear(id);
        callback(target, stId, busRouteId, ord);
      }
    }, 1000);
  }

  setWaitingTimeWithSubway(target, sec, callback, stationName, trainLineName) {
    const interval = new _common__WEBPACK_IMPORTED_MODULE_0__[/* Interval */ "a"]();
    const id = interval.set(() => {
      const minute = sec / 60 >> 0;
      const minuteMessage = minute ? String(minute) + '분' : '';
      const secMessage = String(sec - minute * 60) + '초';
      target.text(minuteMessage + secMessage);
      sec -= 1;

      if (sec < 0) {
        interval.clear(id);
        callback(target, stationName, trainLineName);
      }
    }, 1000);
  }

}



/***/ }),

/***/ "Y25M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Random; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("81W9");
var config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("81W9", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Random {
  static all(len) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return this.random(characters, len);
  }

  static num(len) {
    const characters = '0123456789';
    return this.random(characters, len);
  }

  static str(len) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return this.random(characters, len);
  }

  static random(characters, len) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

}

class Temperature {
  constructor() {
    _defineProperty(this, "KELVIN_NUM", config_json__WEBPACK_IMPORTED_MODULE_1__.KELVIN_NUM);
  }

  kelvinToCelsius(temp) {
    return parseFloat((temp - this.KELVIN_NUM).toFixed(0));
  }

}

class Moment {
  getCorrectionSec(time) {
    return Math.round((parseInt(moment__WEBPACK_IMPORTED_MODULE_0___default()().format('x')) - parseInt(moment__WEBPACK_IMPORTED_MODULE_0___default()(time).format('x'))) / 1000);
  }

}

class Interval {
  set(callback, ms) {
    const interval = setInterval(callback, ms);
    Interval.ids.push(interval);
    return interval;
  }

  clear(id) {
    clearInterval(id);
  }

  static clearAll() {
    for (const id of Interval.ids) {
      clearInterval(id);
    }
  }

}

_defineProperty(Interval, "ids", []);



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "s38N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class TextOnlyTab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content bg-c-yellow text-only-tab"
    }, __jsx("div", {
      className: "inner-content"
    }, __jsx("div", {
      id: "tab"
    }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
      id: "tab-title"
    }, this.props.title), __jsx("div", {
      id: "tab-title-bar"
    })), __jsx("li", null)))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TextOnlyTab);

/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "sH5C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubwayUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubwayAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y25M");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Uh3f");
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("81W9");
var config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("81W9", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SubwayUI {
  static setWaitingTime(target, sec, stationName, trainLineName) {
    const ui = new _ui__WEBPACK_IMPORTED_MODULE_2__[/* TimeUI */ "a"]();
    ui.setWaitingTimeWithSubway(target, sec, SubwayUI.setCurrentSubway, stationName, trainLineName);
  }

  static setCurrentSubway(target, stationName, trainLineName) {
    const api = new SubwayAPI();
    api.getCurrentSubway(stationName).then(data => {
      for (let d of data) {
        if (d.trainLineNm == trainLineName) {
          const subway = new Subway(d);
          const waitingSec = subway.getWaitingSec();

          if (waitingSec < 1) {
            target.text(subway.message);
          } else {
            SubwayUI.setWaitingTime(target, waitingSec, stationName, trainLineName);
          }

          break;
        }
      }
    });
  }

}

class SubwayAPI {
  constructor() {
    _defineProperty(this, "API_KEY", config_json__WEBPACK_IMPORTED_MODULE_3__.SUBWAY_API_KEY);

    _defineProperty(this, "API_HOST", config_json__WEBPACK_IMPORTED_MODULE_3__.API_HOST);
  }

  createSubway(stationName, direction, trainLineName, token) {
    const form = new FormData();
    form.append('station_name', stationName);
    form.append('direction', direction);
    form.append('train_line_name', trainLineName);
    form.append('token', token);
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${this.API_HOST}/public_transport/subways/create`, form).then(response => {
      return response.data.data;
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

  deleteSubway(id, token) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${this.API_HOST}/public_transport/subways/${id}/delete?token=${token}`).then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

  getSubways(token) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.API_HOST}/public_transport/subways?token=${token}`).then(response => {
      return response.data.data.subways;
    }).catch(error => {
      console.log(error);
      return [];
    });
  }

  getCurrentSubway(stationName) {
    const url = 'http://swopenAPI.seoul.go.kr/api/subway/' + this.API_KEY + '/json/realtimeStationArrival/0/100/' + stationName;
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(response => {
      return response.data.realtimeArrivalList ? response.data.realtimeArrivalList : [];
    }).catch(error => {
      console.log(error);
      return [];
    });
  }

}

class Subway {
  /*
    updnLine '외선'
    barvlDt 도착예정시간
    recptnDt 생성시각
    arvlCd 도착코드
  */
  constructor(data) {
    _defineProperty(this, "data", void 0);

    _defineProperty(this, "apiCallTime", void 0);

    _defineProperty(this, "waitingSec", void 0);

    _defineProperty(this, "message", void 0);

    this.data = data;
    this.apiCallTime = this.data.recptnDt;
    this.waitingSec = parseInt(this.data.barvlDt);
    this.message = this.data.arvlMsg2;
  }

  getCorrectionSec() {
    const m = new _common__WEBPACK_IMPORTED_MODULE_1__[/* Moment */ "b"]();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec() {
    return this.waitingSec - this.getCorrectionSec();
  }

}



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });