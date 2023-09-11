module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/settings.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\layout\\header.tsx";




class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: this.props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/pages/blankList.tsx":
/*!****************************************!*\
  !*** ./components/pages/blankList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\blankList.tsx";



class BlankList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "inner-content",
        id: "list",
        children: this.props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BlankList);

/***/ }),

/***/ "./components/pages/footer.tsx":
/*!*************************************!*\
  !*** ./components/pages/footer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\footer.tsx";




class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "content bg-c-yellow",
      id: "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/cc",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 12
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/pages/logo.tsx":
/*!***********************************!*\
  !*** ./components/pages/logo.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\logo.tsx";



class Logo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "content",
      id: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: "/static/img/easyway_title.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/pages/settings.tsx":
/*!***************************************!*\
  !*** ./components/pages/settings.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/bus */ "./lib/bus.tsx");
/* harmony import */ var lib_subway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/subway */ "./lib/subway.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\settings.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Settings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_3__["BusAPI"]();
    api.getBuses(this.props.token).then(data => {
      for (let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
          "data-id": bus.id,
          "data-st-id": bus.station_id,
          "data-busroute-id": bus.bus_route_id,
          "data-ord": bus.ord,
          "data-rtnm": bus.name,
          children: [bus.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            width: 15,
            height: 15,
            src: "/static/img/plus_btn_01.svg",
            onClick: this.removeBusRoute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 156
          }, this)]
        }, key, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this));
      }

      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  removeBusRoute(event) {
    const target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).closest('li');
    const key = `${target.data('st-id')}${target.data('busroute-id')}`;
    let arr = this.state.busRouteChoice.filter(value => {
      return value.key != key;
    });
    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_3__["BusAPI"]();
    api.deleteBus(target.data('id'), this.props.token).then(data => {
      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  addBusRoute(event) {
    const target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).closest('div').prev();
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
    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_3__["BusAPI"]();
    api.createBus(name, stId, busRouteId, ord, this.props.token).then(data => {
      arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
        "data-id": data.id,
        "data-st-id": stId,
        "data-busroute-id": busRouteId,
        "data-ord": ord,
        "data-rtnm": name,
        "data-adirection": adirection,
        children: [name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: "/static/img/plus_btn_01.svg",
          onClick: this.removeBusRoute
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 156
        }, this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this));
      this.setState({
        'busRouteChoice': arr
      });
    });
  }

  setBusRoute(event) {
    this.setState({
      'busStation': []
    });
    const arsId = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).data('ars-id');
    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_3__["BusAPI"]();
    api.getBusRoute(arsId).then(data => {
      data = Array.isArray(data) ? data : [data];
      const arr = [];

      for (let i in data) {
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            "data-st-id": data[i].stId,
            "data-busroute-id": data[i].busRouteId,
            "data-ord": data[i].staOrd,
            "data-rtnm": data[i].rtNm,
            "data-adirection": data[i].adirection,
            children: [data[i].rtNm, ":", data[i].adirection]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              width: 15,
              height: 15,
              src: "/static/img/close_btn_01.svg",
              onClick: this.addBusRoute
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this));
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

    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_3__["BusAPI"]();
    api.getBusStation(name).then(data => {
      data = data ? data.slice(0, 5) : undefined;
      const arr = [];

      for (let i in data) {
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
          "data-ars-id": data[i].arsId,
          onClick: this.setBusRoute,
          children: data[i].stNm
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this));
      }

      this.setState({
        'busStation': arr
      });
    });
  }

  removeSubwayLine(event) {
    const target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).closest('li');
    const key = target.data('train-line-nm');
    let arr = this.state.subwayLineChoice.filter(value => {
      return value.key != key;
    });
    const api = new lib_subway__WEBPACK_IMPORTED_MODULE_4__["SubwayAPI"]();
    api.deleteSubway(target.data('id'), this.props.token).then(data => {
      this.setState({
        'subwayLineChoice': arr
      });
    });
  }

  addSubwayLine(event) {
    const target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).closest('div').prev();
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
    const api = new lib_subway__WEBPACK_IMPORTED_MODULE_4__["SubwayAPI"]();
    api.createSubway(stationName, direction, trainLineName, this.props.token).then(data => {
      arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
        "data-id": data.id,
        "data-updn-line": direction,
        "data-statn-nm": stationName,
        "data-train-line-nm": trainLineName,
        children: [trainLineName.split(' - ')[0], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          width: 15,
          height: 15,
          src: "/static/img/plus_btn_01.svg",
          onClick: this.removeSubwayLine
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 162
        }, this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this));
      this.setState({
        'subwayLineChoice': arr
      });
    });
  }

  setSubways() {
    let arr = this.state.subwayLineChoice;
    const api = new lib_subway__WEBPACK_IMPORTED_MODULE_4__["SubwayAPI"]();
    api.getSubways(this.props.token).then(data => {
      for (let subway of data) {
        const key = subway.train_line_name;
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
          "data-id": subway.id,
          "data-updn-line": subway.direction,
          "data-statn-nm": subway.station_name,
          "data-train-line-nm": subway.train_line_name,
          children: [subway.train_line_name.split(' - ')[0], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            width: 15,
            height: 15,
            src: "/static/img/close_btn_01.svg",
            onClick: this.removeSubwayLine
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 199
          }, this)]
        }, key, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this));
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

    const api = new lib_subway__WEBPACK_IMPORTED_MODULE_4__["SubwayAPI"]();
    api.getCurrentSubway(name).then(data => {
      const arr = [];
      let dict = {};

      for (let i in data) {
        dict[data[i].trainLineNm] = i;
      }

      for (let i in dict) {
        const j = dict[i];
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            "data-updn-line": data[j].updnLine,
            "data-statn-nm": data[j].statnNm,
            "data-train-line-nm": data[j].trainLineNm,
            children: data[j].trainLineNm
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              src: "/static/img/plus_btn_01.svg",
              onClick: this.addSubwayLine
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, this)]
        }, j, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this));
      }

      this.setState({
        'subwayLine': arr
      });
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "list",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          type: "text",
          id: "search-bus-station",
          onChange: this.setBusStation,
          onFocus: this.setBusStation,
          placeholder: "\uC815\uB958\uC18C\uBA85"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          id: "search-bus-station-result",
          children: this.state.busStation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          id: "bus-route-result",
          children: this.state.busRoute
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          id: "bus-route-choice",
          children: this.state.busRouteChoice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          type: "text",
          id: "search-subway-station",
          onChange: this.setSubwayLine,
          onFocus: this.setSubwayLine,
          placeholder: "\uC9C0\uD558\uCCA0\uC5ED\uBA85(\uC5ED\uC81C\uC678)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          id: "subway-line-result",
          children: this.state.subwayLine
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          id: "subway-line-choice",
          children: this.state.subwayLineChoice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/pages/snsLogin.tsx":
/*!***************************************!*\
  !*** ./components/pages/snsLogin.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var static_img_sns_kakao_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! static/img/sns/kakao.png */ "./static/img/sns/kakao.png");
/* harmony import */ var static_img_sns_kakao_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(static_img_sns_kakao_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/common */ "./lib/common.tsx");
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config.json */ "./config.json");
var config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./config.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\snsLogin.tsx";
 // import GithubLoginBtn from 'static/img/sns/github.png';






class SNSLogin extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  get_redirect_uri(company) {
    return `${config_json__WEBPACK_IMPORTED_MODULE_3__.API_HOST}/accounts/callback/${company}`;
  }

  login(company) {
    let url = '';

    switch (company) {
      case 'google':
        url = 'https://accounts.google.com/o/oauth2/v2/auth?' + 'scope=email%20profile&' + 'response_type=code&' + 'state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/token&' + 'redirect_uri=' + this.get_redirect_uri('google') + '&' + 'client_id=485933391623-5806uemc2ksqf7q7gjoturtqhl0110k4.apps.googleusercontent.com';
        break;

      case 'facebook':
        url = 'https://www.facebook.com/dialog/oauth?' + 'client_id=981374768865560&' + 'redirect_uri=' + this.get_redirect_uri('facebook') + '&' + 'scope=email';
        break;

      case 'kakao':
        url = 'https://kauth.kakao.com/oauth/authorize?' + 'client_id=019b2468962364c725978946c23b8953&' + 'redirect_uri=' + this.get_redirect_uri('kakao') + '&' + 'response_type=code';
        break;

      case 'naver':
        url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=w8zTKKdu7csfDVKGsMXv&' + 'state=' + lib_common__WEBPACK_IMPORTED_MODULE_2__["Random"].all(10) + '&' + 'redirect_uri=' + this.get_redirect_uri('naver');
        break;

      case 'github':
        url = 'https://github.com/login/oauth/authorize?scope=user:email&client_id=c5e12a1bc4fbf2357f92';
        break;
    }

    return url;
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "list",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "sns",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
            href: this.login('kakao'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: static_img_sns_kakao_png__WEBPACK_IMPORTED_MODULE_1___default.a,
              className: "sns-btn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SNSLogin);

/***/ }),

/***/ "./components/pages/textOnlyTab.tsx":
/*!******************************************!*\
  !*** ./components/pages/textOnlyTab.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\textOnlyTab.tsx";



class TextOnlyTab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "content bg-c-yellow text-only-tab",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "inner-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: "tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                id: "tab-title",
                children: this.props.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                id: "tab-title-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TextOnlyTab);

/***/ }),

/***/ "./components/pages/title.tsx":
/*!************************************!*\
  !*** ./components/pages/title.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\title.tsx";




class Title extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderSignin() {
    if (this.props.isSignin) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
          id: "signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/signout",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: "\uB85C\uADF8\uC544\uC6C3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 39
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
          id: "signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/signin",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: "\uB85C\uADF8\uC778"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this);
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [this.renderSignin(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content bg-c-gray",
        id: "title",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "\uAC71\uC815\uC5C6\uC774 \uC9D1\uC744 \uB098\uAC00\uC790!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "EASYWAY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: KELVIN_NUM, BUS_API_KEY, SUBWAY_API_KEY, WEATHER_API_KEY, API_HOST, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"KELVIN_NUM\":273.15,\"BUS_API_KEY\":\"ldbaTdPATqmbFE3k5T1zUnG%2BeTKS57wNuX%2FuI6pWqlIxKRKEaF1gXzGx3Ex4sU6GGs%2BnCa%2BbAddYXbwpPSkZag%3D%3D\",\"SUBWAY_API_KEY\":\"666f487a697779753838754e474676\",\"WEATHER_API_KEY\":\"915caab145ec09ce7724d09944d89cb1\",\"API_HOST\":\"http://api.easyway.devmaker.kr\"}");

/***/ }),

/***/ "./lib/bus.tsx":
/*!*********************!*\
  !*** ./lib/bus.tsx ***!
  \*********************/
/*! exports provided: BusUI, BusAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusUI", function() { return BusUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusAPI", function() { return BusAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-xml-parser */ "fast-xml-parser");
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config.json */ "./config.json");
var config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./config.json", 1);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./lib/common.tsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./lib/ui.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class BusUI {
  static setWaitingTime(target, sec, stId, busRouteId, ord) {
    const ui = new _ui__WEBPACK_IMPORTED_MODULE_4__["TimeUI"]();
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
    const m = new _common__WEBPACK_IMPORTED_MODULE_3__["Moment"]();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec() {
    const bm = new BusMessage(this.message);
    return bm.getWaitingSec() - this.getCorrectionSec();
  }

}



/***/ }),

/***/ "./lib/common.tsx":
/*!************************!*\
  !*** ./lib/common.tsx ***!
  \************************/
/*! exports provided: Interval, Moment, Temperature, Random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config.json */ "./config.json");
var config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./config.json", 1);
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

/***/ "./lib/subway.tsx":
/*!************************!*\
  !*** ./lib/subway.tsx ***!
  \************************/
/*! exports provided: SubwayUI, SubwayAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubwayUI", function() { return SubwayUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubwayAPI", function() { return SubwayAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./lib/common.tsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./lib/ui.tsx");
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config.json */ "./config.json");
var config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./config.json", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SubwayUI {
  static setWaitingTime(target, sec, stationName, trainLineName) {
    const ui = new _ui__WEBPACK_IMPORTED_MODULE_2__["TimeUI"]();
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
    const m = new _common__WEBPACK_IMPORTED_MODULE_1__["Moment"]();
    return m.getCorrectionSec(this.apiCallTime);
  }

  getWaitingSec() {
    return this.waitingSec - this.getCorrectionSec();
  }

}



/***/ }),

/***/ "./lib/ui.tsx":
/*!********************!*\
  !*** ./lib/ui.tsx ***!
  \********************/
/*! exports provided: TimeUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeUI", function() { return TimeUI; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./lib/common.tsx");


class TimeUI {
  setWaitingTimeWithBus(target, sec, callback, stId, busRouteId, ord) {
    const interval = new _common__WEBPACK_IMPORTED_MODULE_0__["Interval"]();
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
    const interval = new _common__WEBPACK_IMPORTED_MODULE_0__["Interval"]();
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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (false ? undefined : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _router.default;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
});
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./utils/resolve-rewrites"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
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
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
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
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
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


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/settings.tsx":
/*!****************************!*\
  !*** ./pages/settings.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_pages_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/pages/title */ "./components/pages/title.tsx");
/* harmony import */ var components_pages_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/pages/logo */ "./components/pages/logo.tsx");
/* harmony import */ var components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/pages/textOnlyTab */ "./components/pages/textOnlyTab.tsx");
/* harmony import */ var components_pages_blankList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/pages/blankList */ "./components/pages/blankList.tsx");
/* harmony import */ var components_pages_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/pages/settings */ "./components/pages/settings.tsx");
/* harmony import */ var components_pages_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/pages/footer */ "./components/pages/footer.tsx");
/* harmony import */ var components_pages_snsLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/pages/snsLogin */ "./components/pages/snsLogin.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\pages\\settings.tsx",
    _dec,
    _class;













let SettingsPage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(_class = class SettingsPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.store.isSignin) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "EASYWAY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
            isSignin: this.props.store.isSignin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "\uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_blankList__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_snsLogin__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, false);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "EASYWAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isSignin: this.props.store.isSignin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "\uC124\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_blankList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_settings__WEBPACK_IMPORTED_MODULE_7__["default"], {
          token: this.props.store.token
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SettingsPage);

/***/ }),

/***/ "./static/img/sns/kakao.png":
/*!**********************************!*\
  !*** ./static/img/sns/kakao.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2JsYW5rTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbG9nby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zbnNMb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy90ZXh0T25seVRhYi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy90aXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2J1cy50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbi50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3N1YndheS50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3VpLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1nL3Nucy9rYWthby5wbmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdC14bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiQmxhbmtMaXN0IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJMb2dvIiwiU2V0dGluZ3MiLCJjb25zdHJ1Y3RvciIsImJ1c1N0YXRpb24iLCJidXNSb3V0ZSIsImJ1c1JvdXRlQ2hvaWNlIiwic3Vid2F5TGluZSIsInN1YndheUxpbmVDaG9pY2UiLCJzZXRCdXNTdGF0aW9uIiwiYmluZCIsInNldEJ1c1JvdXRlIiwiYWRkQnVzUm91dGUiLCJyZW1vdmVCdXNSb3V0ZSIsInNldFN1YndheUxpbmUiLCJhZGRTdWJ3YXlMaW5lIiwicmVtb3ZlU3Vid2F5TGluZSIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0QnVzZXMiLCJzZXRTdWJ3YXlzIiwiYXJyIiwic3RhdGUiLCJhcGkiLCJCdXNBUEkiLCJnZXRCdXNlcyIsInRva2VuIiwidGhlbiIsImRhdGEiLCJidXMiLCJrZXkiLCJzdGF0aW9uX2lkIiwiYnVzX3JvdXRlX2lkIiwicHVzaCIsImlkIiwib3JkIiwibmFtZSIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCIkIiwiY2xvc2VzdCIsImZpbHRlciIsInZhbHVlIiwiZGVsZXRlQnVzIiwicHJldiIsImFscmVhZHlGbGFnIiwibGVuZ3RoIiwic3RJZCIsImJ1c1JvdXRlSWQiLCJhZGlyZWN0aW9uIiwiY3JlYXRlQnVzIiwiYXJzSWQiLCJnZXRCdXNSb3V0ZSIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJzdGFPcmQiLCJydE5tIiwiZ2V0QnVzU3RhdGlvbiIsInNsaWNlIiwidW5kZWZpbmVkIiwic3RObSIsIlN1YndheUFQSSIsImRlbGV0ZVN1YndheSIsInN0YXRpb25OYW1lIiwiZGlyZWN0aW9uIiwidHJhaW5MaW5lTmFtZSIsImNyZWF0ZVN1YndheSIsInNwbGl0IiwiZ2V0U3Vid2F5cyIsInN1YndheSIsInRyYWluX2xpbmVfbmFtZSIsInN0YXRpb25fbmFtZSIsImdldEN1cnJlbnRTdWJ3YXkiLCJkaWN0IiwidHJhaW5MaW5lTm0iLCJqIiwidXBkbkxpbmUiLCJzdGF0bk5tIiwiU05TTG9naW4iLCJnZXRfcmVkaXJlY3RfdXJpIiwiY29tcGFueSIsImNvbmZpZyIsIkFQSV9IT1NUIiwibG9naW4iLCJ1cmwiLCJSYW5kb20iLCJhbGwiLCJLYWthb0xvZ2luQnRuIiwiVGV4dE9ubHlUYWIiLCJUaXRsZSIsInJlbmRlclNpZ25pbiIsImlzU2lnbmluIiwiQnVzVUkiLCJzZXRXYWl0aW5nVGltZSIsInNlYyIsInVpIiwiVGltZVVJIiwic2V0V2FpdGluZ1RpbWVXaXRoQnVzIiwic2V0Q3VycmVudEJ1cyIsImdldERhdGFCeVJvdXRlIiwiQnVzIiwid2FpdGluZ1NlYyIsImdldFdhaXRpbmdTZWMiLCJ0ZXh0IiwibWVzc2FnZSIsIkJVU19BUElfS0VZIiwicHJveHkiLCJheGlvcyIsImdldCIsIlBST1hZX0hPU1QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXNwb25zZSIsInhtbCIsInBhcnNlIiwiU2VydmljZVJlc3VsdCIsIm1zZ0JvZHkiLCJpdGVtTGlzdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdGlvbklkIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImRlbGV0ZSIsImJ1c2VzIiwiQVBJX0tFWSIsIkJ1c01lc3NhZ2UiLCJtYXRjaE1pbnV0ZSIsIm1hdGNoIiwibWludXRlIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwibWF0Y2hTZWMiLCJjaGVja0J1c1NodXRkb3duIiwic2VhcmNoIiwiYnVzTnVtIiwiYXJybXNnMSIsImFwaUNhbGxUaW1lIiwibWtUbSIsImdldENvcnJlY3Rpb25TZWMiLCJtIiwiTW9tZW50IiwiYm0iLCJsZW4iLCJjaGFyYWN0ZXJzIiwicmFuZG9tIiwibnVtIiwic3RyIiwicmVzdWx0IiwiY2hhcmFjdGVyc0xlbmd0aCIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsIlRlbXBlcmF0dXJlIiwiS0VMVklOX05VTSIsImtlbHZpblRvQ2Vsc2l1cyIsInRlbXAiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRpbWUiLCJyb3VuZCIsIm1vbWVudCIsImZvcm1hdCIsIkludGVydmFsIiwic2V0IiwiY2FsbGJhY2siLCJtcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpZHMiLCJjbGVhciIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckFsbCIsIlN1YndheVVJIiwic2V0V2FpdGluZ1RpbWVXaXRoU3Vid2F5Iiwic2V0Q3VycmVudFN1YndheSIsImQiLCJTdWJ3YXkiLCJTVUJXQVlfQVBJX0tFWSIsInN1YndheXMiLCJyZWFsdGltZUFycml2YWxMaXN0IiwicmVjcHRuRHQiLCJiYXJ2bER0IiwiYXJ2bE1zZzIiLCJtaW51dGVNZXNzYWdlIiwiU3RyaW5nIiwic2VjTWVzc2FnZSIsIlNldHRpbmdzUGFnZSIsImluamVjdCIsIm9ic2VydmVyIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7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QWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9fbmV4dC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZXR0aW5ncy50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmxhbmtMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRlbnRcIiBpZD1cImxpc3RcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbGFua0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvd1wiIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9jY1wiPjxhPkNDPC9hPjwvTGluaz48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGlkPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZWFzeXdheV90aXRsZS5wbmdcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IHsgQnVzQVBJIH0gZnJvbSAnbGliL2J1cyc7XHJcbmltcG9ydCB7IFN1YndheUFQSSB9IGZyb20gJ2xpYi9zdWJ3YXknO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzUHJvcHMge1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZXR0aW5nc1N0YXRlcyB7XHJcbiAgYnVzU3RhdGlvbjogSlNYLkVsZW1lbnRbXSxcclxuICBidXNSb3V0ZTogSlNYLkVsZW1lbnRbXSxcclxuICBidXNSb3V0ZUNob2ljZTogSlNYLkVsZW1lbnRbXSxcclxuICBzdWJ3YXlMaW5lOiBKU1guRWxlbWVudFtdLFxyXG4gIHN1YndheUxpbmVDaG9pY2U6IEpTWC5FbGVtZW50W11cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NQcm9wcywgU2V0dGluZ3NTdGF0ZXM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zZXRCdXNTdGF0aW9uID0gdGhpcy5zZXRCdXNTdGF0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldEJ1c1JvdXRlID0gdGhpcy5zZXRCdXNSb3V0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hZGRCdXNSb3V0ZSA9IHRoaXMuYWRkQnVzUm91dGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlQnVzUm91dGUgPSB0aGlzLnJlbW92ZUJ1c1JvdXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zZXRTdWJ3YXlMaW5lID0gdGhpcy5zZXRTdWJ3YXlMaW5lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFkZFN1YndheUxpbmUgPSB0aGlzLmFkZFN1YndheUxpbmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlU3Vid2F5TGluZSA9IHRoaXMucmVtb3ZlU3Vid2F5TGluZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBidXNTdGF0aW9uOiBbXSxcclxuICAgIGJ1c1JvdXRlOiBbXSxcclxuICAgIGJ1c1JvdXRlQ2hvaWNlOiBbXSxcclxuICAgIHN1YndheUxpbmU6IFtdLFxyXG4gICAgc3Vid2F5TGluZUNob2ljZTogW11cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRCdXNlcygpO1xyXG4gICAgdGhpcy5zZXRTdWJ3YXlzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRCdXNlcygpIHtcclxuICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSB0aGlzLnN0YXRlLmJ1c1JvdXRlQ2hvaWNlO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBCdXNBUEkoKTtcclxuICAgIGFwaS5nZXRCdXNlcyh0aGlzLnByb3BzLnRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBmb3IobGV0IGJ1cyBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7YnVzLnN0YXRpb25faWR9JHtidXMuYnVzX3JvdXRlX2lkfWA7XHJcbiAgICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8bGkga2V5PXtrZXl9IGRhdGEtaWQ9e2J1cy5pZH0gZGF0YS1zdC1pZD17YnVzLnN0YXRpb25faWR9IGRhdGEtYnVzcm91dGUtaWQ9e2J1cy5idXNfcm91dGVfaWR9IGRhdGEtb3JkPXtidXMub3JkfSBkYXRhLXJ0bm09e2J1cy5uYW1lfT57YnVzLm5hbWV9PEltYWdlIHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gc3JjPVwiL3N0YXRpYy9pbWcvcGx1c19idG5fMDEuc3ZnXCIgb25DbGljaz17dGhpcy5yZW1vdmVCdXNSb3V0ZX0vPjwvbGk+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydidXNSb3V0ZUNob2ljZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVCdXNSb3V0ZShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnbGknKTtcclxuICAgIGNvbnN0IGtleSA9IGAke3RhcmdldC5kYXRhKCdzdC1pZCcpfSR7dGFyZ2V0LmRhdGEoJ2J1c3JvdXRlLWlkJyl9YDtcclxuICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSB0aGlzLnN0YXRlLmJ1c1JvdXRlQ2hvaWNlLmZpbHRlcigodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsdWUua2V5ICE9IGtleTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBCdXNBUEkoKTtcclxuICAgIGFwaS5kZWxldGVCdXModGFyZ2V0LmRhdGEoJ2lkJyksIHRoaXMucHJvcHMudG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydidXNSb3V0ZUNob2ljZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRCdXNSb3V0ZShldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnZGl2JykucHJldigpO1xyXG5cclxuICAgIGNvbnN0IGtleSA9IGAke3RhcmdldC5kYXRhKCdzdC1pZCcpfSR7dGFyZ2V0LmRhdGEoJ2J1c3JvdXRlLWlkJyl9YDtcclxuICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSB0aGlzLnN0YXRlLmJ1c1JvdXRlQ2hvaWNlO1xyXG4gICAgbGV0IGFscmVhZHlGbGFnID0gZmFsc2U7XHJcbiAgICBmb3IobGV0IHZhbHVlIG9mIGFycikge1xyXG4gICAgICBpZih2YWx1ZS5rZXkgPT0ga2V5KSB7XHJcbiAgICAgICAgYWxyZWFkeUZsYWcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWxyZWFkeUZsYWcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGFyci5sZW5ndGggPiAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0LmRhdGEoJ3J0bm0nKTtcclxuICAgIGNvbnN0IHN0SWQgPSB0YXJnZXQuZGF0YSgnc3QtaWQnKTtcclxuICAgIGNvbnN0IGJ1c1JvdXRlSWQgPSB0YXJnZXQuZGF0YSgnYnVzcm91dGUtaWQnKTtcclxuICAgIGNvbnN0IG9yZCA9IHRhcmdldC5kYXRhKCdvcmQnKTtcclxuICAgIGNvbnN0IGFkaXJlY3Rpb24gPSB0YXJnZXQuZGF0YSgnYWRpcmVjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBCdXNBUEkoKTtcclxuICAgIGFwaS5jcmVhdGVCdXMobmFtZSwgc3RJZCwgYnVzUm91dGVJZCwgb3JkLCB0aGlzLnByb3BzLnRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBhcnIucHVzaChcclxuICAgICAgICA8bGkga2V5PXtrZXl9IGRhdGEtaWQ9e2RhdGEuaWR9IGRhdGEtc3QtaWQ9e3N0SWR9IGRhdGEtYnVzcm91dGUtaWQ9e2J1c1JvdXRlSWR9IGRhdGEtb3JkPXtvcmR9IGRhdGEtcnRubT17bmFtZX0gZGF0YS1hZGlyZWN0aW9uPXthZGlyZWN0aW9ufT57bmFtZX08aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3BsdXNfYnRuXzAxLnN2Z1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlQnVzUm91dGV9Lz48L2xpPlxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydidXNSb3V0ZUNob2ljZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRCdXNSb3V0ZShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsnYnVzU3RhdGlvbic6IFtdfSk7XHJcbiAgICBjb25zdCBhcnNJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdhcnMtaWQnKTtcclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgQnVzQVBJKCk7XHJcbiAgICBhcGkuZ2V0QnVzUm91dGUoYXJzSWQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGRhdGEgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXVxyXG5cclxuICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgIGZvcihsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zdC1pZD17ZGF0YVtpXS5zdElkfSBkYXRhLWJ1c3JvdXRlLWlkPXtkYXRhW2ldLmJ1c1JvdXRlSWR9IGRhdGEtb3JkPXtkYXRhW2ldLnN0YU9yZH0gZGF0YS1ydG5tPXtkYXRhW2ldLnJ0Tm19IGRhdGEtYWRpcmVjdGlvbj17ZGF0YVtpXS5hZGlyZWN0aW9ufT57ZGF0YVtpXS5ydE5tfTp7ZGF0YVtpXS5hZGlyZWN0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxpbWcgd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBzcmM9XCIvc3RhdGljL2ltZy9jbG9zZV9idG5fMDEuc3ZnXCIgb25DbGljaz17dGhpcy5hZGRCdXNSb3V0ZX0vPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydidXNSb3V0ZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRCdXNTdGF0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZihuYW1lLmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBCdXNBUEkoKTtcclxuICAgIGFwaS5nZXRCdXNTdGF0aW9uKG5hbWUpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGRhdGEgPSBkYXRhID8gZGF0YS5zbGljZSgwLCA1KSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICBmb3IobGV0IGkgaW4gZGF0YSkge1xyXG4gICAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gZGF0YS1hcnMtaWQ9e2RhdGFbaV0uYXJzSWR9IG9uQ2xpY2s9e3RoaXMuc2V0QnVzUm91dGV9PntkYXRhW2ldLnN0Tm19PC9saT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydidXNTdGF0aW9uJzogYXJyfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVN1YndheUxpbmUoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICBjb25zdCBrZXkgPSB0YXJnZXQuZGF0YSgndHJhaW4tbGluZS1ubScpO1xyXG4gICAgbGV0IGFycjogSlNYLkVsZW1lbnRbXSA9IHRoaXMuc3RhdGUuc3Vid2F5TGluZUNob2ljZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmtleSAhPSBrZXk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgU3Vid2F5QVBJKCk7XHJcbiAgICBhcGkuZGVsZXRlU3Vid2F5KHRhcmdldC5kYXRhKCdpZCcpLCB0aGlzLnByb3BzLnRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsnc3Vid2F5TGluZUNob2ljZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRTdWJ3YXlMaW5lKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5wcmV2KCk7XHJcblxyXG4gICAgY29uc3Qga2V5ID0gdGFyZ2V0LmRhdGEoJ3RyYWluLWxpbmUtbm0nKTtcclxuICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSB0aGlzLnN0YXRlLnN1YndheUxpbmVDaG9pY2U7XHJcbiAgICBsZXQgYWxyZWFkeUZsYWcgPSBmYWxzZTtcclxuICAgIGZvcihsZXQgdmFsdWUgb2YgYXJyKSB7XHJcbiAgICAgIGlmKHZhbHVlLmtleSA9PSBrZXkpIHtcclxuICAgICAgICBhbHJlYWR5RmxhZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhbHJlYWR5RmxhZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYXJyLmxlbmd0aCA+IDUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXRpb25OYW1lID0gdGFyZ2V0LmRhdGEoJ3N0YXRuLW5tJyk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0YXJnZXQuZGF0YSgndXBkbi1saW5lJyk7XHJcbiAgICBjb25zdCB0cmFpbkxpbmVOYW1lID0gdGFyZ2V0LmRhdGEoJ3RyYWluLWxpbmUtbm0nKTtcclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgU3Vid2F5QVBJKCk7XHJcbiAgICBhcGkuY3JlYXRlU3Vid2F5KHN0YXRpb25OYW1lLCBkaXJlY3Rpb24sIHRyYWluTGluZU5hbWUsIHRoaXMucHJvcHMudG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgIDxsaSBrZXk9e2tleX0gZGF0YS1pZD17ZGF0YS5pZH0gZGF0YS11cGRuLWxpbmU9e2RpcmVjdGlvbn0gZGF0YS1zdGF0bi1ubT17c3RhdGlvbk5hbWV9IGRhdGEtdHJhaW4tbGluZS1ubT17dHJhaW5MaW5lTmFtZX0+e3RyYWluTGluZU5hbWUuc3BsaXQoJyAtICcpWzBdfTxJbWFnZSB3aWR0aD17MTV9IGhlaWdodD17MTV9IHNyYz1cIi9zdGF0aWMvaW1nL3BsdXNfYnRuXzAxLnN2Z1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlU3Vid2F5TGluZX0vPjwvbGk+XHJcbiAgICAgIClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7J3N1YndheUxpbmVDaG9pY2UnOiBhcnJ9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U3Vid2F5cygpIHtcclxuICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSB0aGlzLnN0YXRlLnN1YndheUxpbmVDaG9pY2U7XHJcblxyXG4gICAgY29uc3QgYXBpID0gbmV3IFN1YndheUFQSSgpO1xyXG4gICAgYXBpLmdldFN1YndheXModGhpcy5wcm9wcy50b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgZm9yKGxldCBzdWJ3YXkgb2YgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHN1YndheS50cmFpbl9saW5lX25hbWU7XHJcbiAgICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8bGkga2V5PXtrZXl9IGRhdGEtaWQ9e3N1YndheS5pZH0gZGF0YS11cGRuLWxpbmU9e3N1YndheS5kaXJlY3Rpb259IGRhdGEtc3RhdG4tbm09e3N1YndheS5zdGF0aW9uX25hbWV9IGRhdGEtdHJhaW4tbGluZS1ubT17c3Vid2F5LnRyYWluX2xpbmVfbmFtZX0+e3N1YndheS50cmFpbl9saW5lX25hbWUuc3BsaXQoJyAtICcpWzBdfTxJbWFnZSB3aWR0aD17MTV9IGhlaWdodD17MTV9IHNyYz1cIi9zdGF0aWMvaW1nL2Nsb3NlX2J0bl8wMS5zdmdcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZVN1YndheUxpbmV9Lz48L2xpPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsnc3Vid2F5TGluZUNob2ljZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTdWJ3YXlMaW5lKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeydzdWJ3YXlMaW5lJzogW119KTtcclxuICAgIFxyXG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIGlmKG5hbWUubGVuZ3RoIDwgMikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpID0gbmV3IFN1YndheUFQSSgpO1xyXG4gICAgYXBpLmdldEN1cnJlbnRTdWJ3YXkobmFtZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgY29uc3QgYXJyID0gW107XHJcblxyXG4gICAgICBsZXQgZGljdDogYW55ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgZGljdFtkYXRhW2ldLnRyYWluTGluZU5tXSA9IGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcihsZXQgaSBpbiBkaWN0KSB7XHJcbiAgICAgICAgY29uc3QgaiA9IGRpY3RbaV07XHJcbiAgICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGtleT17an0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS11cGRuLWxpbmU9e2RhdGFbal0udXBkbkxpbmV9IGRhdGEtc3RhdG4tbm09e2RhdGFbal0uc3RhdG5ObX0gZGF0YS10cmFpbi1saW5lLW5tPXtkYXRhW2pdLnRyYWluTGluZU5tfT57ZGF0YVtqXS50cmFpbkxpbmVObX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3BsdXNfYnRuXzAxLnN2Z1wiIG9uQ2xpY2s9e3RoaXMuYWRkU3Vid2F5TGluZX0vPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsnc3Vid2F5TGluZSc6IGFycn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2gtYnVzLXN0YXRpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRCdXNTdGF0aW9ufSBvbkZvY3VzPXt0aGlzLnNldEJ1c1N0YXRpb259IHBsYWNlaG9sZGVyPVwi7KCV66WY7IaM66qFXCIvPlxyXG4gICAgICAgICAgPHVsIGlkPVwic2VhcmNoLWJ1cy1zdGF0aW9uLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXNTdGF0aW9ufVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJidXMtcm91dGUtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1c1JvdXRlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJidXMtcm91dGUtY2hvaWNlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1c1JvdXRlQ2hvaWNlfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2gtc3Vid2F5LXN0YXRpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRTdWJ3YXlMaW5lfSBvbkZvY3VzPXt0aGlzLnNldFN1YndheUxpbmV9IHBsYWNlaG9sZGVyPVwi7KeA7ZWY7LKg7Jet66qFKOyXreygnOyZuClcIi8+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwic3Vid2F5LWxpbmUtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1YndheUxpbmV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBpZD1cInN1YndheS1saW5lLWNob2ljZVwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWJ3YXlMaW5lQ2hvaWNlfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbXBvcnQgR2l0aHViTG9naW5CdG4gZnJvbSAnc3RhdGljL2ltZy9zbnMvZ2l0aHViLnBuZyc7XHJcbmltcG9ydCBLYWthb0xvZ2luQnRuIGZyb20gJ3N0YXRpYy9pbWcvc25zL2tha2FvLnBuZyc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ2xpYi9jb21tb24nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuXHJcbmNsYXNzIFNOU0xvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRfcmVkaXJlY3RfdXJpKGNvbXBhbnk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGAke2NvbmZpZy5BUElfSE9TVH0vYWNjb3VudHMvY2FsbGJhY2svJHtjb21wYW55fWA7XHJcbiAgfVxyXG5cclxuICBsb2dpbihjb21wYW55OiBzdHJpbmcpIHtcclxuICAgIGxldCB1cmwgPSAnJztcclxuICAgIHN3aXRjaChjb21wYW55KSB7XHJcbiAgICAgIGNhc2UgJ2dvb2dsZSc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoPycgK1xyXG4gICAgICAgICAgJ3Njb3BlPWVtYWlsJTIwcHJvZmlsZSYnICtcclxuICAgICAgICAgICdyZXNwb25zZV90eXBlPWNvZGUmJyArXHJcbiAgICAgICAgICAnc3RhdGU9c2VjdXJpdHlfdG9rZW4lM0QxMzhyNTcxOXJ1M2UxJTI2dXJsJTNEaHR0cHM6Ly9vYXV0aDIuZXhhbXBsZS5jb20vdG9rZW4mJyArXHJcbiAgICAgICAgICAncmVkaXJlY3RfdXJpPScgKyB0aGlzLmdldF9yZWRpcmVjdF91cmkoJ2dvb2dsZScpICsgJyYnICtcclxuICAgICAgICAgICdjbGllbnRfaWQ9NDg1OTMzMzkxNjIzLTU4MDZ1ZW1jMmtzcWY3cTdnam90dXJ0cWhsMDExMGs0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZmFjZWJvb2snOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlhbG9nL29hdXRoPycgK1xyXG4gICAgICAgICAgJ2NsaWVudF9pZD05ODEzNzQ3Njg4NjU1NjAmJyArXHJcbiAgICAgICAgICAncmVkaXJlY3RfdXJpPScgKyB0aGlzLmdldF9yZWRpcmVjdF91cmkoJ2ZhY2Vib29rJykgKyAnJicgK1xyXG4gICAgICAgICAgJ3Njb3BlPWVtYWlsJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAna2FrYW8nOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL2thdXRoLmtha2FvLmNvbS9vYXV0aC9hdXRob3JpemU/JyArXHJcbiAgICAgICAgICAnY2xpZW50X2lkPTAxOWIyNDY4OTYyMzY0YzcyNTk3ODk0NmMyM2I4OTUzJicgK1xyXG4gICAgICAgICAgJ3JlZGlyZWN0X3VyaT0nICsgdGhpcy5nZXRfcmVkaXJlY3RfdXJpKCdrYWthbycpICsgJyYnICtcclxuICAgICAgICAgICdyZXNwb25zZV90eXBlPWNvZGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICduYXZlcic6XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbmlkLm5hdmVyLmNvbS9vYXV0aDIuMC9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudF9pZD13OHpUS0tkdTdjc2ZEVktHc01YdiYnICtcclxuICAgICAgICAgICdzdGF0ZT0nICsgUmFuZG9tLmFsbCgxMCkgKyAnJicgK1xyXG4gICAgICAgICAgJ3JlZGlyZWN0X3VyaT0nICsgdGhpcy5nZXRfcmVkaXJlY3RfdXJpKCduYXZlcicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdnaXRodWInOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplP3Njb3BlPXVzZXI6ZW1haWwmY2xpZW50X2lkPWM1ZTEyYTFiYzRmYmYyMzU3ZjkyJ1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLmxvZ2luKCdrYWthbycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17S2FrYW9Mb2dpbkJ0bn0gY2xhc3NOYW1lPVwic25zLWJ0blwiLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic25zXCI+Ki99XHJcbiAgICAgICAgICB7LyogIDxhIGhyZWY9e3RoaXMubG9naW4oJ2dpdGh1YicpfT4qL31cclxuICAgICAgICAgIHsvKiAgICA8aW1nIHNyYz17R2l0aHViTG9naW5CdG59IGNsYXNzTmFtZT1cInNucy1idG5cIi8+Ki99XHJcbiAgICAgICAgICB7LyogIDwvYT4qL31cclxuICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTTlNMb2dpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBUYWJQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBUZXh0T25seVRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvdyB0ZXh0LW9ubHktdGFiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwidGFiXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBpZD1cInRhYi10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWItdGl0bGUtYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0T25seVRhYjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICBpc1NpZ25pbjogYm9vbGVhblxyXG59XHJcblxyXG5jbGFzcyBUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUaXRsZVByb3BzPiB7XHJcbiAgcmVuZGVyU2lnbmluKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5pc1NpZ25pbikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPHVsIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvc2lnbm91dCc+PGE+66Gc6re47JWE7JuDPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJzaWduaW5cIj5cclxuICAgICAgICAgIDxsaT48TGluayBocmVmPScvc2lnbmluJz48YT7roZzqt7jsnbg8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5yZW5kZXJTaWduaW4oKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgYmctYy1ncmF5XCIgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPHA+6rGx7KCV7JeG7J20IOynkeydhCDrgpjqsIDsnpAhPC9wPlxyXG4gICAgICAgICAgPGgxPjxMaW5rIGhyZWY9Jy8nPjxhPkVBU1lXQVk8L2E+PC9MaW5rPjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeG1sIGZyb20gJ2Zhc3QteG1sLXBhcnNlcic7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9jb21tb24nO1xyXG5pbXBvcnQgeyBUaW1lVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIEJ1c1VJIHtcclxuICBzdGF0aWMgc2V0V2FpdGluZ1RpbWUodGFyZ2V0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzZWM6IG51bWJlciwgc3RJZDogbnVtYmVyLCBidXNSb3V0ZUlkOiBudW1iZXIsIG9yZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB1aSA9IG5ldyBUaW1lVUkoKTtcclxuICAgIHVpLnNldFdhaXRpbmdUaW1lV2l0aEJ1cyh0YXJnZXQsIHNlYywgQnVzVUkuc2V0Q3VycmVudEJ1cywgc3RJZCwgYnVzUm91dGVJZCwgb3JkKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRDdXJyZW50QnVzKHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc3RJZDogbnVtYmVyLCBidXNSb3V0ZUlkOiBudW1iZXIsIG9yZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhcGkgPSBuZXcgQnVzQVBJKCk7XHJcbiAgICBhcGkuZ2V0RGF0YUJ5Um91dGUoc3RJZCwgYnVzUm91dGVJZCwgb3JkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYnVzID0gbmV3IEJ1cyhkYXRhKTtcclxuICAgICAgICBjb25zdCB3YWl0aW5nU2VjID0gYnVzLmdldFdhaXRpbmdTZWMoKTtcclxuICAgICAgICBpZih3YWl0aW5nU2VjIDwgMSkge1xyXG4gICAgICAgICAgdGFyZ2V0LnRleHQoYnVzLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBCdXNVSS5zZXRXYWl0aW5nVGltZSh0YXJnZXQsIHdhaXRpbmdTZWMsIHN0SWQsIGJ1c1JvdXRlSWQsIG9yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldC50ZXh0KCdkYXRhIGlzIG51bGwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXNBUEkge1xyXG4gIEFQSV9LRVk6IHN0cmluZyA9IGNvbmZpZy5CVVNfQVBJX0tFWTtcclxuICBQUk9YWV9IT1NUOiBzdHJpbmcgPSBjb25maWcuQVBJX0hPU1Q7XHJcblxyXG4gIHByb3h5KHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXMuUFJPWFlfSE9TVCArICcvYXBpcy9wcm94eT91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudCh1cmwpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0geG1sLnBhcnNlKHJlc3BvbnNlLmRhdGEuZGF0YS5kYXRhKS5TZXJ2aWNlUmVzdWx0Lm1zZ0JvZHk7XHJcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YS5pdGVtTGlzdCA6IHVuZGVmaW5lZDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJ1cyhuYW1lOiBzdHJpbmcsIHN0YXRpb25JZDogc3RyaW5nLCBidXNSb3V0ZUlkOiBzdHJpbmcsIG9yZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3N0YXRpb25faWQnLCBzdGF0aW9uSWQpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2J1c19yb3V0ZV9pZCcsIGJ1c1JvdXRlSWQpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ29yZCcsIG9yZCk7XHJcbiAgICBmb3JtLmFwcGVuZCgndG9rZW4nLCB0b2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7dGhpcy5QUk9YWV9IT1NUfS9wdWJsaWNfdHJhbnNwb3J0L2J1c2VzL2NyZWF0ZWAsIGZvcm0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJ1cyhpZDogbnVtYmVyLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke3RoaXMuUFJPWFlfSE9TVH0vcHVibGljX3RyYW5zcG9ydC9idXNlcy8ke2lkfS9kZWxldGU/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnVzZXModG9rZW46IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHt0aGlzLlBST1hZX0hPU1R9L3B1YmxpY190cmFuc3BvcnQvYnVzZXM/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhLmJ1c2VzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRCdXNSb3V0ZShhcnNJZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly93cy5idXMuZ28ua3IvYXBpL3Jlc3Qvc3RhdGlvbmluZm8vZ2V0U3RhdGlvbkJ5VWlkPydcclxuICAgIHVybCArPSAnc2VydmljZUtleT0nICsgdGhpcy5BUElfS0VZO1xyXG4gICAgdXJsICs9ICcmYXJzSWQ9JyArIGFyc0lkO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3h5KHVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRCdXNTdGF0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IHVybCA9ICdodHRwOi8vd3MuYnVzLmdvLmtyL2FwaS9yZXN0L3N0YXRpb25pbmZvL2dldFN0YXRpb25CeU5hbWU/J1xyXG4gICAgdXJsICs9ICdzZXJ2aWNlS2V5PScgKyB0aGlzLkFQSV9LRVk7XHJcbiAgICB1cmwgKz0gJyZzdFNyY2g9JyArIG5hbWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHJveHkodXJsKTtcclxuICB9XHJcblxyXG4gIGdldERhdGFCeVJvdXRlKHN0SWQ6IG51bWJlciwgYnVzUm91dGVJZDogbnVtYmVyLCBvcmQ6IG51bWJlcikge1xyXG4gICAgbGV0IHVybCA9ICdodHRwOi8vd3MuYnVzLmdvLmtyL2FwaS9yZXN0L2Fycml2ZS9nZXRBcnJJbmZvQnlSb3V0ZT8nO1xyXG4gICAgdXJsICs9ICdzZXJ2aWNlS2V5PScgKyB0aGlzLkFQSV9LRVk7XHJcbiAgICB1cmwgKz0gJyZzdElkPScgKyBzdElkO1xyXG4gICAgdXJsICs9ICcmYnVzUm91dGVJZD0nICsgYnVzUm91dGVJZDtcclxuICAgIHVybCArPSAnJm9yZD0nICsgb3JkO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3h5KHVybCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXNNZXNzYWdlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIGdldFdhaXRpbmdTZWMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG1hdGNoTWludXRlID0gdGhpcy5tZXNzYWdlLm1hdGNoKC9cXGQr67aEL2cpITtcclxuICAgIGNvbnN0IG1pbnV0ZSA9IG1hdGNoTWludXRlID8gcGFyc2VJbnQobWF0Y2hNaW51dGVbMF0ucmVwbGFjZSgn67aEJywgJycpKSA6IDA7XHJcbiAgICBjb25zdCBtYXRjaFNlYyA9IHRoaXMubWVzc2FnZS5tYXRjaCgvXFxkK+y0iC9nKSE7XHJcbiAgICBjb25zdCBzZWMgPSBtYXRjaFNlYyA/IHBhcnNlSW50KG1hdGNoU2VjWzBdLnJlcGxhY2UoJ+y0iCcsICcnKSkgOiAwO1xyXG4gICAgcmV0dXJuIG1pbnV0ZSAqIDYwICsgc2VjO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tCdXNTaHV0ZG93bigpOiBib29sZWFuIHtcclxuICAgIGlmKHRoaXMubWVzc2FnZS5zZWFyY2goL+yatO2WieyiheujjC9nKSAhPSAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJ1cyB7XHJcbiAgZGF0YToge1trZXk6IHN0cmluZ106IGFueX07XHJcbiAgYnVzTnVtOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGFwaUNhbGxUaW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5idXNOdW0gPSBwYXJzZUludCh0aGlzLmRhdGEucnRObSk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuYXJybXNnMTtcclxuICAgIHRoaXMuYXBpQ2FsbFRpbWUgPSB0aGlzLmRhdGEubWtUbTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29ycmVjdGlvblNlYygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbSA9IG5ldyBNb21lbnQoKTtcclxuICAgIHJldHVybiBtLmdldENvcnJlY3Rpb25TZWModGhpcy5hcGlDYWxsVGltZSk7XHJcbiAgfVxyXG5cclxuICBnZXRXYWl0aW5nU2VjKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBibSA9IG5ldyBCdXNNZXNzYWdlKHRoaXMubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gYm0uZ2V0V2FpdGluZ1NlYygpIC0gdGhpcy5nZXRDb3JyZWN0aW9uU2VjKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCdXNVSSwgQnVzQVBJIH07XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnLmpzb24nO1xyXG5cclxuY2xhc3MgUmFuZG9tIHtcclxuICBzdGF0aWMgYWxsKGxlbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbShjaGFyYWN0ZXJzLCBsZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG51bShsZW46IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICcwMTIzNDU2Nzg5JztcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbShjaGFyYWN0ZXJzLCBsZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0cihsZW46IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbShjaGFyYWN0ZXJzLCBsZW4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmFuZG9tKGNoYXJhY3RlcnM6IHN0cmluZywgbGVuOiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAnJzsgIFxyXG4gICAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlbXBlcmF0dXJlIHtcclxuICBLRUxWSU5fTlVNID0gY29uZmlnLktFTFZJTl9OVU1cclxuXHJcbiAga2VsdmluVG9DZWxzaXVzKHRlbXA6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKHRlbXAgLSB0aGlzLktFTFZJTl9OVU0pLnRvRml4ZWQoMCkpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTW9tZW50IHtcclxuICBnZXRDb3JyZWN0aW9uU2VjKHRpbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgocGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KCd4JykpIC0gcGFyc2VJbnQobW9tZW50KHRpbWUpLmZvcm1hdCgneCcpKSkgLyAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEludGVydmFsIHtcclxuICBzdGF0aWMgaWRzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gIHNldChjYWxsYmFjazogRnVuY3Rpb24sIG1zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgbXMpO1xyXG4gICAgSW50ZXJ2YWwuaWRzLnB1c2goaW50ZXJ2YWwpO1xyXG4gICAgcmV0dXJuIGludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoaWQ6IG51bWJlcikge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXJBbGwoKSB7XHJcbiAgICBmb3IoY29uc3QgaWQgb2YgSW50ZXJ2YWwuaWRzKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgSW50ZXJ2YWwsIE1vbWVudCwgVGVtcGVyYXR1cmUsIFJhbmRvbSB9O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9jb21tb24nO1xyXG5pbXBvcnQgeyBUaW1lVUkgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcuanNvbic7XHJcblxyXG5jbGFzcyBTdWJ3YXlVSSB7XHJcbiAgc3RhdGljIHNldFdhaXRpbmdUaW1lKHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc2VjOiBudW1iZXIsIHN0YXRpb25OYW1lOiBzdHJpbmcsIHRyYWluTGluZU5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdWkgPSBuZXcgVGltZVVJKCk7XHJcbiAgICB1aS5zZXRXYWl0aW5nVGltZVdpdGhTdWJ3YXkodGFyZ2V0LCBzZWMsIFN1YndheVVJLnNldEN1cnJlbnRTdWJ3YXksIHN0YXRpb25OYW1lLCB0cmFpbkxpbmVOYW1lKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRDdXJyZW50U3Vid2F5KHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc3RhdGlvbk5hbWU6IHN0cmluZywgdHJhaW5MaW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhcGkgPSBuZXcgU3Vid2F5QVBJKCk7XHJcbiAgICBhcGkuZ2V0Q3VycmVudFN1YndheShzdGF0aW9uTmFtZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgZm9yKGxldCBkIG9mIGRhdGEpIHtcclxuICAgICAgICBpZihkLnRyYWluTGluZU5tID09IHRyYWluTGluZU5hbWUpIHtcclxuICAgICAgICAgIGNvbnN0IHN1YndheSA9IG5ldyBTdWJ3YXkoZCk7XHJcbiAgICAgICAgICBjb25zdCB3YWl0aW5nU2VjID0gc3Vid2F5LmdldFdhaXRpbmdTZWMoKTtcclxuICAgICAgICAgIGlmKHdhaXRpbmdTZWMgPCAxKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC50ZXh0KHN1YndheS5tZXNzYWdlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFN1YndheVVJLnNldFdhaXRpbmdUaW1lKHRhcmdldCwgd2FpdGluZ1NlYywgc3RhdGlvbk5hbWUsIHRyYWluTGluZU5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFN1YndheUFQSSB7XHJcbiAgQVBJX0tFWTogc3RyaW5nID0gY29uZmlnLlNVQldBWV9BUElfS0VZO1xyXG4gIEFQSV9IT1NUOiBzdHJpbmcgPSBjb25maWcuQVBJX0hPU1Q7XHJcblxyXG4gIGNyZWF0ZVN1YndheShzdGF0aW9uTmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZywgdHJhaW5MaW5lTmFtZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZCgnc3RhdGlvbl9uYW1lJywgc3RhdGlvbk5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2RpcmVjdGlvbicsIGRpcmVjdGlvbik7XHJcbiAgICBmb3JtLmFwcGVuZCgndHJhaW5fbGluZV9uYW1lJywgdHJhaW5MaW5lTmFtZSk7XHJcbiAgICBmb3JtLmFwcGVuZCgndG9rZW4nLCB0b2tlbik7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7dGhpcy5BUElfSE9TVH0vcHVibGljX3RyYW5zcG9ydC9zdWJ3YXlzL2NyZWF0ZWAsIGZvcm0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVN1YndheShpZDogbnVtYmVyLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke3RoaXMuQVBJX0hPU1R9L3B1YmxpY190cmFuc3BvcnQvc3Vid2F5cy8ke2lkfS9kZWxldGU/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3Vid2F5cyh0b2tlbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke3RoaXMuQVBJX0hPU1R9L3B1YmxpY190cmFuc3BvcnQvc3Vid2F5cz90b2tlbj0ke3Rva2VufWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGEuc3Vid2F5cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFN1YndheShzdGF0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL3N3b3BlbkFQSS5zZW91bC5nby5rci9hcGkvc3Vid2F5LycgKyB0aGlzLkFQSV9LRVkgKyAnL2pzb24vcmVhbHRpbWVTdGF0aW9uQXJyaXZhbC8wLzEwMC8nICsgc3RhdGlvbk5hbWU7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucmVhbHRpbWVBcnJpdmFsTGlzdCA/IHJlc3BvbnNlLmRhdGEucmVhbHRpbWVBcnJpdmFsTGlzdCA6IFtdO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTdWJ3YXkge1xyXG4gIC8qXHJcbiAgICB1cGRuTGluZSAn7Jm47ISgJ1xyXG4gICAgYmFydmxEdFx1MDAxZSDrj4TssKnsmIjsoJXsi5zqsIRcclxuICAgIHJlY3B0bkR0IOyDneyEseyLnOqwgVxyXG4gICAgYXJ2bENkIOuPhOywqey9lOuTnFxyXG4gICovXHJcbiAgZGF0YToge1trZXk6IHN0cmluZ106IGFueX07XHJcbiAgYXBpQ2FsbFRpbWU6IHN0cmluZztcclxuICB3YWl0aW5nU2VjOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuYXBpQ2FsbFRpbWUgPSB0aGlzLmRhdGEucmVjcHRuRHQ7XHJcbiAgICB0aGlzLndhaXRpbmdTZWMgPSBwYXJzZUludCh0aGlzLmRhdGEuYmFydmxEdCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEuYXJ2bE1zZzI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvcnJlY3Rpb25TZWMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG0gPSBuZXcgTW9tZW50KCk7XHJcbiAgICByZXR1cm4gbS5nZXRDb3JyZWN0aW9uU2VjKHRoaXMuYXBpQ2FsbFRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2FpdGluZ1NlYygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2FpdGluZ1NlYyAtIHRoaXMuZ2V0Q29ycmVjdGlvblNlYygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU3Vid2F5VUksIFN1YndheUFQSSB9O1xyXG4iLCJpbXBvcnQgeyBJbnRlcnZhbCB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmNsYXNzIFRpbWVVSSB7XHJcbiAgc2V0V2FpdGluZ1RpbWVXaXRoQnVzKHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc2VjOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc3RJZDogbnVtYmVyLCBidXNSb3V0ZUlkOiBudW1iZXIsIG9yZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBJbnRlcnZhbCgpO1xyXG4gICAgY29uc3QgaWQgPSBpbnRlcnZhbC5zZXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtaW51dGUgPSAoc2VjIC8gNjApID4+IDA7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZU1lc3NhZ2UgPSBtaW51dGUgPyBTdHJpbmcobWludXRlKSArICfrtoQnIDogJyc7XHJcbiAgICAgIGNvbnN0IHNlY01lc3NhZ2UgPSBTdHJpbmcoc2VjIC0gKG1pbnV0ZSAqIDYwKSkgKyAn7LSIJztcclxuICAgICAgdGFyZ2V0LnRleHQobWludXRlTWVzc2FnZSArIHNlY01lc3NhZ2UpO1xyXG4gICAgICBzZWMgLT0gMTtcclxuICAgICAgaWYoc2VjIDwgMCkge1xyXG4gICAgICAgIGludGVydmFsLmNsZWFyKGlkKTtcclxuICAgICAgICBjYWxsYmFjayh0YXJnZXQsIHN0SWQsIGJ1c1JvdXRlSWQsIG9yZCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgc2V0V2FpdGluZ1RpbWVXaXRoU3Vid2F5KHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc2VjOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc3RhdGlvbk5hbWU6IHN0cmluZywgdHJhaW5MaW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBJbnRlcnZhbCgpO1xyXG4gICAgY29uc3QgaWQgPSBpbnRlcnZhbC5zZXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtaW51dGUgPSAoc2VjIC8gNjApID4+IDA7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZU1lc3NhZ2UgPSBtaW51dGUgPyBTdHJpbmcobWludXRlKSArICfrtoQnIDogJyc7XHJcbiAgICAgIGNvbnN0IHNlY01lc3NhZ2UgPSBTdHJpbmcoc2VjIC0gKG1pbnV0ZSAqIDYwKSkgKyAn7LSIJztcclxuICAgICAgdGFyZ2V0LnRleHQobWludXRlTWVzc2FnZSArIHNlY01lc3NhZ2UpO1xyXG4gICAgICBzZWMgLT0gMTtcclxuICAgICAgaWYoc2VjIDwgMCkge1xyXG4gICAgICAgIGludGVydmFsLmNsZWFyKGlkKTtcclxuICAgICAgICBjYWxsYmFjayh0YXJnZXQsIHN0YXRpb25OYW1lLCB0cmFpbkxpbmVOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUaW1lVUkgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc2hhcmVkL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldDxzdHJpbmc+KClcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydjdXN0b20nLCBjdXN0b21Mb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIFBsYWNlaG9sZGVyVmFsdWUgPSAnYmx1cicgfCAnZW1wdHknXG5cbnR5cGUgT25Mb2FkaW5nQ29tcGxldGUgPSAocmVzdWx0OiB7XG4gIG5hdHVyYWxXaWR0aDogbnVtYmVyXG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlclxufSkgPT4gdm9pZFxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmludGVyZmFjZSBTdGF0aWNSZXF1aXJlIHtcbiAgZGVmYXVsdDogU3RhdGljSW1hZ2VEYXRhXG59XG5cbnR5cGUgU3RhdGljSW1wb3J0ID0gU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuXG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY1JlcXVpcmUge1xuICByZXR1cm4gKHNyYyBhcyBTdGF0aWNSZXF1aXJlKS5kZWZhdWx0ICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY0ltYWdlRGF0YSB7XG4gIHJldHVybiAoc3JjIGFzIFN0YXRpY0ltYWdlRGF0YSkuc3JjICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjOiBzdHJpbmcgfCBTdGF0aWNJbXBvcnQpOiBzcmMgaXMgU3RhdGljSW1wb3J0IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJlxuICAgIChpc1N0YXRpY1JlcXVpcmUoc3JjIGFzIFN0YXRpY0ltcG9ydCkgfHxcbiAgICAgIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyBhcyBTdGF0aWNJbXBvcnQpKVxuICApXG59XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZyB8IFN0YXRpY0ltcG9ydFxuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgbGF5b3V0PzogTGF5b3V0VmFsdWVcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICBsYXp5Qm91bmRhcnk/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBQbGFjZWhvbGRlclZhbHVlXG4gIGJsdXJEYXRhVVJMPzogc3RyaW5nXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG4gIG9uTG9hZGluZ0NvbXBsZXRlPzogT25Mb2FkaW5nQ29tcGxldGVcbn1cblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9IChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCxcbiAgc3JjOiBzdHJpbmcsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclZhbHVlLFxuICBvbkxvYWRpbmdDb21wbGV0ZT86IE9uTG9hZGluZ0NvbXBsZXRlXG4pIHtcbiAgaWYgKCFpbWcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIHAuY2F0Y2goKCkgPT4ge30pLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpXG4gICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWdcbiAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGltZy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgaGFuZGxlTG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGxhenlCb3VuZGFyeSA9ICcyMDBweCcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgb25Mb2FkaW5nQ29tcGxldGUsXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgcGxhY2Vob2xkZXIgPSAnZW1wdHknLFxuICBibHVyRGF0YVVSTCxcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGxldCBzdGF0aWNTcmMgPSAnJ1xuICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmNcblxuICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgc3RhdGljSW1hZ2VEYXRhXG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTFxuICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmNcbiAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHRcbiAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoXG4gICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHN0YXRpY0ltYWdlRGF0YVxuICAgICAgICAgICl9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSkgfHxcbiAgICAgICh0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbJ2pwZWcnLCAncG5nJywgJ3dlYnAnXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbihcbiAgICAgICAgICAgICAgJywnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMFxuICAgIGlmIChcbiAgICAgICF1bm9wdGltaXplZCAmJlxuICAgICAgIWxvYWRlcih7IHNyYywgd2lkdGg6IHJhbmQsIHF1YWxpdHk6IDc1IH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgK1xuICAgICAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGNvbnN0IGJsdXJTdHlsZSA9XG4gICAgcGxhY2Vob2xkZXIgPT09ICdibHVyJ1xuICAgICAgPyB7XG4gICAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJScsXG4gICAgICAgIH1cbiAgICAgIDoge31cbiAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgbGV0IHNyY1N0cmluZzogc3RyaW5nID0gc3JjXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17KGltZykgPT4ge1xuICAgICAgICAgIHNldFJlZihpbWcpXG4gICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IC4uLmltZ1N0eWxlLCAuLi5ibHVyU3R5bGUgfX1cbiAgICAgIC8+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZyB8fCAnbGF6eSd9XG4gICAgICAgIC8+XG4gICAgICA8L25vc2NyaXB0PlxuXG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKVxuICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zXG5cbiAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0JylcbiAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpXG4gIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSlcblxuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpXG4gIH1cblxuICByZXR1cm4gdXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICtcbiAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgXG4gIClcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgc2Nyb2xsID0gZmFsc2VcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3JvdXRlciwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgbGV0IGNoaWxkOiBhbnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICB9XG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlcyBhcyBhbnlcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZFxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgOyhkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG1zKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG1zKVxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID1cbiAgICBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgICBjYiAmJiBjYigpXG4gICAgICB9XG4gICAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxzdHJpbmcsIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50PiA9XG4gICAgbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPHN0cmluZywgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeT4gPVxuICAgIG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfSlcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgcm91dGVGaWxlc1Byb21pc2UsXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHR5cGUgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIHsgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuICAnZG9tYWluTG9jYWxlcycsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXSBhcyBjb25zdFxuZXhwb3J0IHR5cGUgUm91dGVyRXZlbnQgPSB0eXBlb2Ygcm91dGVyRXZlbnRzW251bWJlcl1cblxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoXG4gICAgQ29tcG9zZWRDb21wb25lbnQgYXMgYW55XG4gICkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IFJvdXRlckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlcidcbmltcG9ydCB0eXBlIHsgRG9tYWluTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID1cbiAgICByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSlcbiAgICByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcblxuICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLylcbiAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaFxuICAgID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKVxuICAgIDogdXJsQXNTdHJpbmdcblxuICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpXG5cbiAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmBcbiAgICApXG4gICAgY29uc3Qgbm9ybWFsaXplZFVybCA9IG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pXG4gICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsXG4gIH1cblxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChcbiAgICAgIHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsXG4gICAgICAnaHR0cDovL24nXG4gICAgKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlc29sdmVBcyA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl0gOiByZXNvbHZlZEhyZWZcbiAgICApIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyPFJvdXRlckV2ZW50PlxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVbXVxuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyPFJvdXRlckV2ZW50PiA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCkgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICBjb25zdCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHsgbG9jYWxlIH1cbiAgICAgICAgOyhvcHRpb25zIGFzIGFueSkuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMgIT09IHBhdGhuYW1lXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9XG4gICAgICB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2ggfHwgKG9wdGlvbnMgYXMgYW55KS5fc2hvdWxkUmVzb2x2ZUhyZWZcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmIChcbiAgICAgICEob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmXG4gICAgICAhbG9jYWxlQ2hhbmdlXG4gICAgKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIDsob3B0aW9ucyBhcyBhbnkpLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWVcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lKVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lKVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsID8/ICFpc1ZhbGlkU2hhbGxvd1JvdXRlXG4gICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHsgeDogMCwgeTogMCB9IDogbnVsbFxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsID8/IHJlc2V0U2Nyb2xsXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiAodGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEpLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlcic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICdjb21wb25lbnRzL3BhZ2VzL3RpdGxlJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9wYWdlcy9sb2dvJztcclxuaW1wb3J0IFRleHRPbmx5VGFiIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvdGV4dE9ubHlUYWInO1xyXG5pbXBvcnQgQmxhbmtMaXN0IGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvYmxhbmtMaXN0JztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvZm9vdGVyJztcclxuaW1wb3J0IFNOU0xvZ2luIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvc25zTG9naW4nO1xyXG5cclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnc3RvcmUvc3RvcmUnO1xyXG5cclxuXHJcbmludGVyZmFjZSBTZXR0aW5nUGFnZVByb3BzIHtcclxuICBzdG9yZTogSVN0b3JlXHJcbn1cclxuXHJcbkBpbmplY3QoJ3N0b3JlJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIFNldHRpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nUGFnZVByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYoIXRoaXMucHJvcHMuc3RvcmUuaXNTaWduaW4pIHtcclxuICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPSdFQVNZV0FZJy8+XHJcblxyXG4gICAgICAgICAgPFRpdGxlIGlzU2lnbmluPXt0aGlzLnByb3BzLnN0b3JlLmlzU2lnbmlufS8+XHJcbiAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICA8VGV4dE9ubHlUYWIgdGl0bGU9J+uhnOq3uOyduO2VtOyjvOyEuOyalC4nLz5cclxuICAgICAgICAgIDxCbGFua0xpc3Q+XHJcbiAgICAgICAgICAgIDxTTlNMb2dpbi8+XHJcbiAgICAgICAgICA8L0JsYW5rTGlzdD5cclxuICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC8+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlciB0aXRsZT0nRUFTWVdBWScvPlxyXG5cclxuICAgICAgICA8VGl0bGUgaXNTaWduaW49e3RoaXMucHJvcHMuc3RvcmUuaXNTaWduaW59Lz5cclxuICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgPFRleHRPbmx5VGFiIHRpdGxlPSfshKTsoJUnLz5cclxuICAgICAgICA8QmxhbmtMaXN0PlxyXG4gICAgICAgICAgPFNldHRpbmdzIHRva2VuPXt0aGlzLnByb3BzLnN0b3JlLnRva2VufS8+XHJcbiAgICAgICAgPC9CbGFua0xpc3Q+XHJcblxyXG4gICAgICAgIDxGb290ZXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1BhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU40QUFBQXhDQVlBQUFIQ2NpZDJBQUFBQVhOU1IwSUFyczRjNlFBQUQ4dEpSRUZVZUFIdEhRbVlUV1g3UGVjdWc0d2x1MnlsaFVyNWt5V0tVaHBpUmpYSkVvcXlwRUprS3lKTFpadVEvRDgvVW9aSWloR1pSS24wQzQyMVFpRmpHVU1oRXpOejd6M24vTy83ZlhQbW5EdjMzSEh2blh2bnpwMDUzL1BjT1dmTytjNjdmdnYzdmU4ckFLYk1FOVVVdW9ZNkNRTDhJeFFXTXBVWlViMmhhMWFXQU8xYVJjR2tzVmI5NDZEZXUwR09mZERPZ0gvN3RRV3ZMamRFYzkreHdwY2JMRkNtakFJcjFqcmMzcW4vcFA0aHdJRjlBcHc1TFlDQ1NucjJlVWw5bFhzTnIwaHp5UWpoalpBRHUyWUljZWhCSzBMbXllcmJVZUROOVU5RGRWKzZkcm9RWGgxU2xhQmZLSk5iUFRSQzlIZ0hPMnpkSXVZUzB2bGhUdEM4V1ZiNGVUOHZBbnBDZC8zSVFYYTQzNWh3TjVHKzlZWU54b3gzR3VFTjJqTTNoRUdEbWc4Z2tra1YvTm55eVJQTVY2ZUZ5Nm5WZDRpQzBqU1lVSXNTTExFNE0wZUNkdXVjOUpJM3F2NmJ0bVhycytUZVUwMzk5QXZqRGlzM2t4ODNoTHRXYlFYZVg4RmhVczIrdTduc0J3UXRxOWRtWnRWNmQ0SnZ2OFA3bUNmakVoOG1FS05EQjlxaGJ3ODdETzdQZS9KdW5lMmdOazBxMm8rWFdWaXpwVFpUZy9yeXZIcWhMdmpRd1hyd1B0MzR1N05uQmZqbGdBQURldHZod25tQW1QdU1tekVWaDNvdDlGWkdSVnhZVi9IMEdSaFdXTWpDZ1VkUUZFWElPbGs5c0FJZURvcDl4aW4yTDliRjAydmo0ck9BaW5ER1lzMmN6LzJldHo2dkNDc09ERFgzOWtUUFlhRytQd29tUThOZnNNSE10ejFsN05SMXVUditaMGptVmNrdy9NcnA4TjU1ZTRQNC9WWU82c3BsNHh5amhuS0I5ZWx1aC9HamJXeU5ZT3NXbXJaN3BuNjliR0REZmp3ekUyRGtFRHVrSHVmemsvUTBBZGF2NWQvNElteEQ1c1pOZGw4bklQVDVGVXRDZEc4YkdaN3Bhb2N5MXdEOGU3WVZsbjFnVEhpanhncTg4YllUVkJ6NzluaVM4TitsVG9oN0tBcTZkT1FqbFRwMUZSajlzZzJHRGVJQ29nblh0Tms2MVhyS2h6M3gyaFZNbTJTRGtlTkNPeG56UWxQUUhudGxMbWdZd2dqSXMweUVrWmhnb3k3V3pGRXpSTDhhd1paYUVZRDNkekVlT0JjQjhZYVFCRUVRdGhUckJqT0VzaXNTb0l0MW0xa2tKQnhDSWp6SDVUNGlvK1dzeGYreHdxRmZCU2hmQWFCZGV4eGs5dmNjblBvSXpzd1dnQVQ4cm5rMEc2QWZyVnZTNkQ0N1c0Q3o2UUtiRWFqdnBrM3l2MHpNbWVIL044VHZ3R2Y0TE1KZjNuLzlSWVJ0MzdxemJ6VEhWT0hxZWRMZnErOXBVVG5RT2FnS3c5K3JPL1ZYK2Jwalc5OEV0V21qOGRRdVAvRGZiSFlucFgyYktMZTl0dmF0bzRBRVRnWGt5Rzk4TGt2d0xsN2dVR25CbXhZVXFCQjh0RlFyQ0NSUW1pTTdjS09BdnFWRVYxbFN3T1VTWU8wbkZ1ajlwQjErK0k3anB6bjI4Zzh0OEh3ZmQxNkpwNVdKRnRpNVhjU1pJVzloa2xaYllNcnJWbGc0VCtPWHRzeFBueFNBNXZESm4xdGd3Tk4yT0h4UWdKU2RJcno0bkkzQmVIVzQ1OElINThLL3YrNFN1OHEzNjdkY2ZUNU1JSnEzTE5pcTcrNWRBdTVqdXFCTld4bHV2WjB2Z3RoUjdpUndXaU9vZjVQeHdzam8xNTB3K0JVWDdQbEpVMjZ6ZTJTWVBNNEtzVGpYWDVtVURVc1hvM0xYYUh4MGZrS0NLbFVVYUhrZnAzbnFMQ2YwNkMzQjc0YzFHS3BZdXZhVVFCWDhIMGRGc05rVWVHMmlDdzRmMHBSSENxMVpTNEZQVmxpaGVTc1pSaUZOdngwU1lSTFNNSGVoRXdnR0ZZQmdwSUJHbStmL0F1Z2FwMjNEaUVqTFF6RVNEQnZ0QW90VzZJTkJYeTZNVGxqcmlmRWZmeEJoMEZCWHJsSnpNNVRBbTRDVVZ3TGxWQ1JaRGs3OUxaS3NGWCtpU0hsZWxzZUxQL09SenFHSUI4bWlIUTdoKzBobnBLVFJ2MmlaODNZMnBNbzhVYU9mSU1nSmVOS3piRWtUUXNUeEt3Zy9scm91N1I1YzIyU25PVGJqcVk2MkVjZEVDU2U0Vkswem9qbmFqTkJDSUNzQ1R2dk5GSkVTb0lPMnB2SWlVbldjYUZONXB2SWlXQUlSVEhyQUs1RkxGbGhoMDBZUi9yNEljRXREQmZvT2RNRnRqWXdYakNOWVBrV2FkTDlIbTJTcXlLMEhqZmxhdDlrQnBVcVpTalNXVG5DZit0WG4wU1prZm9vajBsVHpVSC9JWExWYzIxTHg1enZLbTk4R2FuNndlanpxdmw5SGVXbm53aWpScHZQeFkzeUxpUGI5VHA3dzNDNVM5d3FOdmcvVk03K1U1K3NtcTlFcDYvd1lTTm5sRnhsdW9JYmpObFFnYVhuT250NXpQYSsrTVhvYWxYWGhQTjlnVFh6ZndzeXlBc0VaN0c4Q2wxbytsSHozVGNIQXZqUFZ5bmJGcWFiVGJqUnRmTktHNm9Za2tUM1hvNTc0R2hmK1krM3RRQnVoZVd1QStqL1ZLanBGZnZpZ3lNekQxT2NabDBUNGJCV3YrWFNrZzNiaG40elY5aXIxdUdpM2Z0NWlmcjc2OHpVV1BKR3VXZFdxK1I2TjRkL1NwaSsxS0NvZXVpYXZ0d1RVTXFtdzgxNERIckRrQmFUL3YxbUxndTJrYjBpeTVKNnFKNlluVFhQQkhYZzZ2bVZyQmZhbTZERnA5N1FUSGhjdndlcVAzWnZndTVweVd1NjVWNFk1TXptN1UyWm9COXlqeThud1dCZHV1UjhWcFVEM1hpN0l1b0piTGY4QVhLTmI2YzNLQXFEM2F1cjBxQVEvN1JDaGZIbnRHWjNNVC9xS0cyYjI2dXVDYlRsbURUS1MwUG9CQ1dJNlNsRGpPZ1UycnJOQSsxaFBid0VxYkYrdmZsVVJYNDgzakg5VEU0NnZoSGpMUjRPZnV2VTQwemFyQW1NbStBZDcwQkFKcUtrYi9JckVEZ2dGZWtpb1ZDbUFZV05jTU9NdFhnQ29VRFZwSmtOME9ZM3l6dkV1MkxlYmkvU1JCNktnRlpwdFVLS1RCdnpnTnVDUkNBRXFWdElVVG04Q1RYNHBiL0owSjl4NVYvNjFLcThWcmErRWtURG9OK0ZWRzd3NTB3bnhhRmxML3lkKzZvUXJWd1Q0ZXBNSVN4WmFjNXNoWCtIV3ZWNkdEL0M3NkhJS1BQMmNDN3IwY0MveFhickxIdGE2M21DM2JTZkRrY000WUVrVm9IcE5CVVlNdGpFREh6VS8rZDZZOENwWHJndkxHTDFYVS9vWllKYThINkhkamErVlFQM1cyOVh2cVFJQklxSHFFelVGenc2VThNQ1F1MkQwZVFweTM2dUxIZTdHVWw2K1BNQ3FGZGpYYkRHMkdTOElqa2o4Tm1EbHJVYkQrbkpZbXMwVVBna0VwTHp3a1d0aTFrdkFyejVQLzZGNUgzNEptTW9Mdnc0Q3BzQlVYc0NpQy8rSHB2TENyNE5BS2Joc0tpOVEwWVg1Ty9SMU5FNms4MzlocHNORTc2Y0U2Snh0L2FicHM5UzlEZlM3QWJUUW8vN3ZKemd6ZXlGS2dOWUgvOFNmd3BTbG5LdGJJenM3TzlFOHYxbUlLakJSbFRnSmtCT0lxS2lvbmtLVjQybTR3RktqSDFvdExpaHhVakFaTmlVUU5nbWdlOGFzazlVeVRQT1NzR25BUkZ3Q0pVQnhEMFN6MHBWQXpac3NoMVVDVk9mTXBiR3dxc0JFWGxJbFlGYThrcXA1aysrd1NzQ3NlR0VWdjRtOHBFb2dKT2ZjallSSlpqVjA2dlhvNzc1dE45MXdJejhkcTNweU00SnBQak1sRUtrU0NPbDV6VXcwMUJnenpKNGJneTVRSVpHbDdWc0pEaWhkSmxBSTVuZitTb0I4bXA0OUk0VHM5THMzZXY3QzdlVzlLU0thVXloUXFYTHhQY3dkc3FIbS9yMGl4TFdMS25DbEl3V1JHMnVDZFdCZnlNaGw1V0RNTUJ0UXhMakNUTE9uVzlHZnFyczFXaWp4bjhCQU54UkxVNDEwUjdpbVQ3RUNCZW5VSnpLQm5EN1pQN3JJWW8zTVYvYjhwT25wK0RHUm1TSW1UTlZzYmZSNDh0NGZPeUl5K3ZST2pQUG1LUTcvdTBzN2lCeE5teHg4MEZQUlBuYnBLczJ4Y0JESjlRbVVoS1pQS3pGRTQ1WXZzVGRJRjZGMkhSbml1MHJROW1ITjJDMWxwd0Jmb1JmcW5lZ21IRThxUUZTT1M0Vzc3bGJnNVZHZUZvVW4wRWpNcnF2ckwvV3pRY1BiRkxCaU9kMitEWDFzb09kc01nc2Q4SklFbGRHSmN0NUVOcmZKR1B4NXhydE9xRkNSdjZkQy91ZFpZQVp5bEo5TU9zbXJkY2ZPRWpTNFZXR2V1YTljcGlHL3dvek5UcUN4TnZwUmdwUmRkdlRqSVNPZDNFQ2NvSkU5OG5vMGNhWElWUFZ2bE9ISnB5U2ZEZFBJU0cvZmJnRVdKanFoV2cyTmRncHpTWDZLangwVm9GcDFnQ1pOSlhpcWp3U2xTeE8xN29rTTVBZ09CYmNlTThFRk5JcWFtMkNESXpobElYZjBEVytUNGY2SFpIaTRnMmFYUnM2dFAxeGtSZmdpVktpZ1FBdDBFdDFuZ09SbUV1dU9wZkQvMDVxbUlPTzIrZGJBK1lWVjBjcTNYOThGSTNQYUtRQnlLMzhtVFdRRktXbFROcnkzeU1tOGYvZU01eldIRE9GSERiVkRqNmNsV1BXNUF6NWVsODFzbmF0V05hNTBSQmRaWjU3RDJLbHFTajB1d21YMFdkdi9CUmNzWHU0QXNwL2J1OXNDQ1FieDZPaWJ1SGdaVHA4U2NQN01leWVLQzdBVjNlTlRnU2Q2S0szR0hqVU5JNjUzaUpVeFpEd3dkeFprcFVwcFBzWnhyWG1kekJ6b0xFeDA1Rlk2ZWtjNVlqcEpNR2VCQTlZa1owTzkrZ3FNSFlGV3BGajQ4MHNIZnhWWi9OY3lXSkVvc0s2KzB0RjNWSGxudnVkazcrYk1kOEM2TlZaUUhRcm80WDZ6MlFJVW5lMlJPUFRHL29ZTEd6SmdFZUVvMk5yOER4encyY1pzaUgxTXdwNlpPeXlnYjZtQm1UaldCZ256bkl6bUpTc2RVTDRpZCs5eEVJZlBSU1dGakpLaEl3TnpxNUdmWUlhTUNEN00vUERwMyszT0dUNDlrc2Y0bjNxamRKd0xuVHNuUUNjc0JQL0NubzFpSFhicmpBVUdiZEdwQVJvNXRtQjBsOGJXbm5wYm8wU09EZnBpOUJqeVNFSHpvN2tKVmhnODNBa3Z2aXpCL1Bjc3JKSWtMckhDd0JlbEhIdDRJeWkrUFN0THg3RXhVUSthWDJyUVVJWkZ5eHhBc1NISlBZb0RQV3ZvMC94M3JXenFRSEVtcG96bkxiUWt1ZWNoQncwVXA0S2NNZWdYMlA3NlUyQW00dVRSZ3dKa0puM0tHeGNYeXVlZkRNQ29PaUpyWUtpU3FxbEpqaU1KL2ZCYWZSZXVhOGdxM2gyTlpkWWllWXRaNFEvRHRlc3FyQWRwV2tDdklMN2d4Rk1GekM4QUJmOVVmeFFBNVFIMEgzQnRKZXdoc05Ca1pYR3QwckNTaG5yVUsxQXNqYjBwQXRBd2g0WjhOanRmSEJDeFhIejVoZWhSK0h5aHhkYzhUM1RuK1B0MGkySUxFZy9HeU13N3lQVTNLTkNsa3gycVZwTVpqZDdnVWZnbmlsaCt0UXJsN1h1ajU3WHFLTXlUU2FNN0ZhRGdOMThsODZKR0RqaG9UanZpTmQ1cnZUN0Z5Znc3NUlWQnpqVTJmcHVOd1Y4c3JCRzdlSUhMZlBGOEM2dGNuMnh3c2w2ejk3TmFvMVkyR250bzlKQ3lGbnY2WTBkNGZuSzNNM3U2aGNtRmVzNmlra0s2cXFsbmtpYmVzekN5ajZUSlNmL2E0NzVTWmNCQU1DNklmVnhpUXd5UERDRjRRSXMzRjg1N0FxYlZOVFVRenNXTEF1emZJOEI1YkhucjFKT2hjUk9GMFVjVnR0Y1RkcHhEeVRCMmtzWWt6VU9lZXR3T2NjakhTOE8xNXlvV211dVVROWM3TksralJOc3VsYXNBM054QTYxWm8rQmlGbmw4YTNhazlVNzlYcjJrNDNQd2RveXBSOEYyYTExQ2lXRE0vN3hmWk1MSnFOZjdzMGlXQk5SQU5FQjgxRm1vNmhSR1BmamtnTUdkY1JBdEZQS0loY0t2V0drNWFLRWs5RHRBU1hSQlpES2J3ektjVWVwYlIwMER3YVRSdzhHZDBlSUx6dkp0dVVZQkNOdS9CbGN0ek9BK2wxVXNhdW1abTRuZklIOG1mOUVCelRXcm9LQjNGU25RSzU2R05NUzg1WWFFOE83ZGJtRXlhdFpEWVVMd2VPbWtoaHlxVXFBR2hSakQxRHhHdVJkMFJqcUxtN3FMUUtoNDU0NlJneUpRcVhnc3c1QlVuK3ArU2NYaEFMUk1KbEwySzZEOVVJRFluWTJ1TGl3YTBlSEZOV1lYNXAzb1FlMHUxVUVRMGd5YnhRWk5Bb1ZVOEdvL0hkNVBjeHV0QjQ4SUVaRW9nd2lSUWFCVXZ3dVJpa210S0lLUVNDTm5pU2tpcE5vR2JFb2h3Q1pnVkw4SVZhSklmbVJJd0sxNWs2czJrT3NJbElEcGNRa3FFODJDU2Iwb2dvaVJBZFU2OHVZWFMyb3pMSEZGNk00bU5ZQWxRWGFNNng3ZjNBU3pSMGRFVmR5U1hmcVptRGJHNzNhcmNncnpsSEJDS1lDNU4wazBKaEY4Q2w3R0hPM1E2VGY2b1dVem1rb3lNRER6MkR0TC9BZGNRWWN2Z1kzMUZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC14bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=