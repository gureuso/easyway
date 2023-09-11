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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./components/modal.tsx":
/*!******************************!*\
  !*** ./components/modal.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\modal.tsx";




class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static active() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal, .modal-dialog').show();
  }

  static deactive() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal, .modal-dialog').hide();
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal-close').click(() => {
      {
        Modal.deactive();
      }
      ;
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.modal').click(event => {
      if (event.target.className == 'modal') {
        {
          Modal.deactive();
        }
        ;
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "modal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "modal-dialog",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "modal-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "modal-close",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "/static/img/close_btn_01.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "modal-content",
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/***/ "./components/pages/hourlyWeather.tsx":
/*!********************************************!*\
  !*** ./components/pages/hourlyWeather.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/weather */ "./lib/weather.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\hourlyWeather.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class HourlyWeather extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hourlyWeather: []
    });
  }

  setHourlyWeather() {
    const weatherAPI = new lib_weather__WEBPACK_IMPORTED_MODULE_2__["WeatherAPI"]();
    weatherAPI.getHourlyWeather().then(list => {
      let html = [];

      for (const data of list.slice(0, 10)) {
        html.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: [moment__WEBPACK_IMPORTED_MODULE_1___default()(data.dt).format('HH:mm'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 46
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            src: data.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 35
          }, this), data.temp, "\xB0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), data.main, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 24
          }, this)]
        }, data.dt, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this));
      }

      this.setState({
        hourlyWeather: html
      });
    });
  }

  componentDidMount() {
    this.setHourlyWeather();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refresh == true) {
      this.setHourlyWeather();
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      id: "hourly_weather",
      children: this.state.hourlyWeather
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HourlyWeather);

/***/ }),

/***/ "./components/pages/list.tsx":
/*!***********************************!*\
  !*** ./components/pages/list.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/modal */ "./components/modal.tsx");
/* harmony import */ var lib_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/bus */ "./lib/bus.tsx");
/* harmony import */ var lib_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/weather */ "./lib/weather.tsx");
/* harmony import */ var lib_subway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/subway */ "./lib/subway.tsx");
/* harmony import */ var lib_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/common */ "./lib/common.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\list.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_ismounted", true);

    _defineProperty(this, "state", {
      currentTime: '',
      currentWeather: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 22
      }, this),
      buses: [],
      subways: []
    });
  }

  setCurrentTime() {
    const interval = new lib_common__WEBPACK_IMPORTED_MODULE_7__["Interval"]();
    interval.set(() => {
      if (this._ismounted) {
        this.setState({
          currentTime: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('HH:mm:ss')
        });
      }
    }, 1000);
  }

  setCurrentWeather() {
    const weatherAPI = new lib_weather__WEBPACK_IMPORTED_MODULE_5__["WeatherAPI"]();
    weatherAPI.getCurrentWeather().then(data => {
      if (this._ismounted) {
        this.setState({
          currentWeather: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            id: "current_weather",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              id: "current_weather_title",
              className: "list",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: data.icon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  children: [data.temp, "\xB0"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              id: "current_weather_main",
              children: data.main
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              id: "current_weather_desc",
              children: data.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              id: "current_weather_more",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                src: "/static/img/plus_btn_01.svg",
                onClick: components_modal__WEBPACK_IMPORTED_MODULE_3__["default"].active
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, this)
        });
      }
    });
  }

  setCurrentBus() {
    const api = new lib_bus__WEBPACK_IMPORTED_MODULE_4__["BusAPI"]();
    api.getBuses(this.props.token).then(data => {
      let arr = [];

      for (let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "current_bus",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: "current_bus_title",
            children: bus.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: "current_bus_message",
            id: key
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, key, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this));
      }

      this.setState({
        'buses': arr
      });

      for (let bus of data) {
        const key = `${bus.station_id}${bus.bus_route_id}`;
        const target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${key}`);
        lib_bus__WEBPACK_IMPORTED_MODULE_4__["BusUI"].setCurrentBus(target, bus.station_id, bus.bus_route_id, bus.ord);
      }
    });
  }

  setCurrentSubway() {
    let subways = {};
    const api = new lib_subway__WEBPACK_IMPORTED_MODULE_6__["SubwayAPI"]();
    api.getSubways(this.props.token).then(data => {
      let trainLineNameCnt = 0;

      for (let subway of data) {
        subways[subway.station_name] = {};
      }

      for (let subway of data) {
        if (subways[subway.station_name][subway.direction]) {
          subways[subway.station_name][subway.direction].push(subway.train_line_name);
        } else {
          subways[subway.station_name][subway.direction] = [subway.train_line_name];
        }

        trainLineNameCnt += 1;
      }

      let arr = [];

      for (let stationName in subways) {
        for (let direction in subways[stationName]) {
          for (let trainLineName of subways[stationName][direction]) {
            if (trainLineNameCnt > 2) {
              arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "current_subway",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "current_subway_title",
                  children: trainLineName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "current_subway_message",
                  id: trainLineName.replace(/\s/gi, "")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)]
              }, trainLineName, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this));
            } else {
              arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "current_subway_solo",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "current_subway_solo_title",
                  children: trainLineName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "current_subway_solo_message",
                  id: trainLineName.replace(/\s/gi, "")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this)]
              }, trainLineName, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this));
            }
          }
        }
      }

      if (arr.length > 2) {
        this.setState({
          'subways': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: arr
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 36
          }, this)
        });
      } else {
        this.setState({
          'subways': arr
        });
      }

      for (let stationName in subways) {
        for (let direction in subways[stationName]) {
          for (let trainLineName of subways[stationName][direction]) {
            const target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${trainLineName.replace(/\s/gi, "")}`);
            lib_subway__WEBPACK_IMPORTED_MODULE_6__["SubwayUI"].setCurrentSubway(target, stationName, trainLineName);
          }
        }
      }
    });
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.refresh == true) {
      this.setAll();
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "inner-content",
        id: "list",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "list",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              id: "current_time",
              children: this.state.currentTime
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            children: this.state.currentWeather
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), this.state.buses, this.state.subways]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (List);

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

/***/ "./components/pages/tab.tsx":
/*!**********************************!*\
  !*** ./components/pages/tab.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/common */ "./lib/common.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\pages\\tab.tsx";







class Tab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  runSpin() {
    const target = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#tab > ul > li:last-child > img:last-child');
    target.removeClass('spin');
    setTimeout(() => {
      target.addClass('spin');
    }, 1);
  }

  refresh() {
    lib_common__WEBPACK_IMPORTED_MODULE_4__["Interval"].clearAll();
    this.runSpin();
    this.props.handler();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "content bg-c-yellow tab",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "inner-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          id: "date",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY/MM/DD')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          id: "tab",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  id: "tab-title",
                  children: "Main"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 32
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                id: "tab-title-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/settings",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  src: "/static/img/setting_btn_01.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 40
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "/static/img/refresh_btn_01.svg",
                onClick: this.refresh.bind(this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tab);

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

/***/ "./lib/weather.tsx":
/*!*************************!*\
  !*** ./lib/weather.tsx ***!
  \*************************/
/*! exports provided: WeatherAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherAPI", function() { return WeatherAPI; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config.json */ "./config.json");
var config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./config.json", 1);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./lib/common.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class WeatherAPI {
  constructor() {
    _defineProperty(this, "API_KEY", config_json__WEBPACK_IMPORTED_MODULE_2__.WEATHER_API_KEY);
  }

  getCurrentWeather(location = 'Seoul') {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.API_KEY}`).then(response => {
      const weather = new Weather(response.data);
      return weather.getData();
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

  getHourlyWeather() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=' + this.API_KEY).then(response => {
      let list = [];

      for (const data of response.data.list) {
        const weather = new Weather(data);
        list.push(weather.getData());
      }

      return list;
    }).catch(error => {
      console.log(error);
      return [];
    });
  }

}

class Weather {
  constructor(data) {
    _defineProperty(this, "data", void 0);

    _defineProperty(this, "weather", void 0);

    _defineProperty(this, "main", void 0);

    this.data = data;
    this.weather = this.data.weather;
    this.main = this.data.main;
  }

  getWeather() {
    let data = {};

    for (const w of this.weather) {
      data.id = w.id;
      data.icon = 'http://openweathermap.org/img/wn/' + w.icon + '@2x.png';
      data.main = w.main;
      data.desc = w.description;
      break;
    }

    return data;
  }

  getTemp() {
    const t = new _common__WEBPACK_IMPORTED_MODULE_3__["Temperature"]();
    const temp = t.kelvinToCelsius(this.main.temp);
    const minTemp = t.kelvinToCelsius(this.main.temp_min);
    const maxTemp = t.kelvinToCelsius(this.main.temp_max);
    return {
      temp,
      minTemp,
      maxTemp
    };
  }

  getDateTime() {
    return this.data.dt * 1000;
  }

  getData() {
    const weather = this.getWeather();
    const temp = this.getTemp();
    const dt = this.getDateTime();
    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(weather, temp, {
      dt
    });
  }

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/modal */ "./components/modal.tsx");
/* harmony import */ var components_pages_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/pages/title */ "./components/pages/title.tsx");
/* harmony import */ var components_pages_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/pages/logo */ "./components/pages/logo.tsx");
/* harmony import */ var components_pages_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/pages/tab */ "./components/pages/tab.tsx");
/* harmony import */ var components_pages_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/pages/list */ "./components/pages/list.tsx");
/* harmony import */ var components_pages_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/pages/footer */ "./components/pages/footer.tsx");
/* harmony import */ var components_pages_hourlyWeather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/pages/hourlyWeather */ "./components/pages/hourlyWeather.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\pages\\index.tsx",
    _dec,
    _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













let IndexPage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      refresh: false
    });
  }

  static getInitialProps(ctx) {
    return {
      token: ctx.query.token
    };
  }

  changeTabMode() {
    const height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#title').height() + jquery__WEBPACK_IMPORTED_MODULE_1___default()('#logo').height() + jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tab').height();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(() => {
      const windowHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).scrollTop();

      if (windowHeight > height) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tab').removeClass('tab').addClass('mini-tab');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#list').css({
          'margin-top': '290px'
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mini-tab').removeClass('mini-tab').addClass('tab');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#list').css({
          'margin-top': '-50px'
        });
      }
    });
  }

  refresh() {
    this.setState({
      refresh: true
    });
  }

  componentDidMount() {
    this.changeTabMode();
  }

  render() {
    const token = this.props.token || this.props.store.token;

    if (token) {
      {
        this.props.store.signin(token);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_layout_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "EASYWAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isSignin: this.props.store.isSignin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handler: this.refresh.bind(this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
        refresh: this.state.refresh,
        token: token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_pages_hourlyWeather__WEBPACK_IMPORTED_MODULE_10__["default"], {
          refresh: this.state.refresh
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this);
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2hvdXJseVdlYXRoZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9sb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL3RhYi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy90aXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2J1cy50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbi50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3N1YndheS50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3VpLnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvd2VhdGhlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdC14bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiTW9kYWwiLCJhY3RpdmUiLCIkIiwic2hvdyIsImRlYWN0aXZlIiwiaGlkZSIsImNvbXBvbmVudERpZE1vdW50IiwiY2xpY2siLCJldmVudCIsInRhcmdldCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiRm9vdGVyIiwiSG91cmx5V2VhdGhlciIsImhvdXJseVdlYXRoZXIiLCJzZXRIb3VybHlXZWF0aGVyIiwid2VhdGhlckFQSSIsIldlYXRoZXJBUEkiLCJnZXRIb3VybHlXZWF0aGVyIiwidGhlbiIsImxpc3QiLCJodG1sIiwiZGF0YSIsInNsaWNlIiwicHVzaCIsIm1vbWVudCIsImR0IiwiZm9ybWF0IiwiaWNvbiIsInRlbXAiLCJtYWluIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVmcmVzaCIsInN0YXRlIiwiTGlzdCIsImN1cnJlbnRUaW1lIiwiY3VycmVudFdlYXRoZXIiLCJidXNlcyIsInN1YndheXMiLCJzZXRDdXJyZW50VGltZSIsImludGVydmFsIiwiSW50ZXJ2YWwiLCJzZXQiLCJfaXNtb3VudGVkIiwic2V0Q3VycmVudFdlYXRoZXIiLCJnZXRDdXJyZW50V2VhdGhlciIsImRlc2MiLCJzZXRDdXJyZW50QnVzIiwiYXBpIiwiQnVzQVBJIiwiZ2V0QnVzZXMiLCJ0b2tlbiIsImFyciIsImJ1cyIsImtleSIsInN0YXRpb25faWQiLCJidXNfcm91dGVfaWQiLCJuYW1lIiwiQnVzVUkiLCJvcmQiLCJzZXRDdXJyZW50U3Vid2F5IiwiU3Vid2F5QVBJIiwiZ2V0U3Vid2F5cyIsInRyYWluTGluZU5hbWVDbnQiLCJzdWJ3YXkiLCJzdGF0aW9uX25hbWUiLCJkaXJlY3Rpb24iLCJ0cmFpbl9saW5lX25hbWUiLCJzdGF0aW9uTmFtZSIsInRyYWluTGluZU5hbWUiLCJyZXBsYWNlIiwibGVuZ3RoIiwiU3Vid2F5VUkiLCJzZXRBbGwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIkxvZ28iLCJUYWIiLCJydW5TcGluIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJjbGVhckFsbCIsImhhbmRsZXIiLCJiaW5kIiwiVGl0bGUiLCJyZW5kZXJTaWduaW4iLCJpc1NpZ25pbiIsInNldFdhaXRpbmdUaW1lIiwic2VjIiwic3RJZCIsImJ1c1JvdXRlSWQiLCJ1aSIsIlRpbWVVSSIsInNldFdhaXRpbmdUaW1lV2l0aEJ1cyIsImdldERhdGFCeVJvdXRlIiwiQnVzIiwid2FpdGluZ1NlYyIsImdldFdhaXRpbmdTZWMiLCJ0ZXh0IiwibWVzc2FnZSIsImNvbmZpZyIsIkJVU19BUElfS0VZIiwiQVBJX0hPU1QiLCJwcm94eSIsInVybCIsImF4aW9zIiwiZ2V0IiwiUFJPWFlfSE9TVCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlIiwieG1sIiwicGFyc2UiLCJTZXJ2aWNlUmVzdWx0IiwibXNnQm9keSIsIml0ZW1MaXN0IiwidW5kZWZpbmVkIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVCdXMiLCJzdGF0aW9uSWQiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZGVsZXRlQnVzIiwiaWQiLCJkZWxldGUiLCJnZXRCdXNSb3V0ZSIsImFyc0lkIiwiQVBJX0tFWSIsImdldEJ1c1N0YXRpb24iLCJCdXNNZXNzYWdlIiwiY29uc3RydWN0b3IiLCJtYXRjaE1pbnV0ZSIsIm1hdGNoIiwibWludXRlIiwicGFyc2VJbnQiLCJtYXRjaFNlYyIsImNoZWNrQnVzU2h1dGRvd24iLCJzZWFyY2giLCJidXNOdW0iLCJydE5tIiwiYXJybXNnMSIsImFwaUNhbGxUaW1lIiwibWtUbSIsImdldENvcnJlY3Rpb25TZWMiLCJtIiwiTW9tZW50IiwiYm0iLCJSYW5kb20iLCJhbGwiLCJsZW4iLCJjaGFyYWN0ZXJzIiwicmFuZG9tIiwibnVtIiwic3RyIiwicmVzdWx0IiwiY2hhcmFjdGVyc0xlbmd0aCIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJUZW1wZXJhdHVyZSIsIktFTFZJTl9OVU0iLCJrZWx2aW5Ub0NlbHNpdXMiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRpbWUiLCJyb3VuZCIsImNhbGxiYWNrIiwibXMiLCJzZXRJbnRlcnZhbCIsImlkcyIsImNsZWFyIiwiY2xlYXJJbnRlcnZhbCIsInNldFdhaXRpbmdUaW1lV2l0aFN1YndheSIsImdldEN1cnJlbnRTdWJ3YXkiLCJkIiwidHJhaW5MaW5lTm0iLCJTdWJ3YXkiLCJTVUJXQVlfQVBJX0tFWSIsImNyZWF0ZVN1YndheSIsImRlbGV0ZVN1YndheSIsInJlYWx0aW1lQXJyaXZhbExpc3QiLCJyZWNwdG5EdCIsImJhcnZsRHQiLCJhcnZsTXNnMiIsIm1pbnV0ZU1lc3NhZ2UiLCJTdHJpbmciLCJzZWNNZXNzYWdlIiwiV0VBVEhFUl9BUElfS0VZIiwibG9jYXRpb24iLCJ3ZWF0aGVyIiwiV2VhdGhlciIsImdldERhdGEiLCJnZXRXZWF0aGVyIiwidyIsImRlc2NyaXB0aW9uIiwiZ2V0VGVtcCIsInQiLCJtaW5UZW1wIiwidGVtcF9taW4iLCJtYXhUZW1wIiwidGVtcF9tYXgiLCJnZXREYXRlVGltZSIsImV4dGVuZCIsIkluZGV4UGFnZSIsImluamVjdCIsIm9ic2VydmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJjaGFuZ2VUYWJNb2RlIiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsIiwid2luZG93SGVpZ2h0IiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjc3MiLCJzdG9yZSIsInNpZ25pbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHNFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDRHQUErQjtBQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZUQ7O0FBcERxRCxDO0FBdUR6Q2dMLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0VBLDRFOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhY3RpdmUoKSB7XHJcbiAgICAkKCcubW9kYWwsIC5tb2RhbC1kaWFsb2cnKS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVhY3RpdmUoKSB7XHJcbiAgICAkKCcubW9kYWwsIC5tb2RhbC1kaWFsb2cnKS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoJy5tb2RhbC1jbG9zZScpLmNsaWNrKCgpID0+IHtcclxuICAgICAge01vZGFsLmRlYWN0aXZlKCl9O1xyXG4gICAgfSk7XHJcbiAgICAkKCcubW9kYWwnKS5jbGljayhldmVudCA9PiB7XHJcbiAgICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ21vZGFsJykge1xyXG4gICAgICAgIHtNb2RhbC5kZWFjdGl2ZSgpfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nsb3NlX2J0bl8wMS5zdmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvd1wiIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9jY1wiPjxhPkNDPC9hPjwvTGluaz48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgV2VhdGhlckFQSSB9IGZyb20gJ2xpYi93ZWF0aGVyJztcclxuXHJcbmludGVyZmFjZSBIb3VybHlXZWF0aGVyUHJvcHMge1xyXG4gIHJlZnJlc2g6IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSG91cmx5V2VhdGhlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIb3VybHlXZWF0aGVyUHJvcHM+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGhvdXJseVdlYXRoZXI6IFtdXHJcbiAgfTtcclxuXHJcbiAgc2V0SG91cmx5V2VhdGhlcigpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBuZXcgV2VhdGhlckFQSSgpO1xyXG4gICAgd2VhdGhlckFQSS5nZXRIb3VybHlXZWF0aGVyKCkudGhlbigobGlzdDogYW55KSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gW107XHJcbiAgICAgIGZvcihjb25zdCBkYXRhIG9mIGxpc3Quc2xpY2UoMCwgMTApKSB7XHJcbiAgICAgICAgaHRtbC5wdXNoKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2RhdGEuZHR9PlxyXG4gICAgICAgICAgICB7bW9tZW50KGRhdGEuZHQpLmZvcm1hdCgnSEg6bW0nKX08YnIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pY29ufS8+PGJyLz5cclxuICAgICAgICAgICAge2RhdGEudGVtcH3CsDxici8+XHJcbiAgICAgICAgICAgIHtkYXRhLm1haW59PGJyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cmx5V2VhdGhlcjogaHRtbH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0SG91cmx5V2VhdGhlcigpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xyXG4gICAgaWYobmV4dFByb3BzLnJlZnJlc2ggPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnNldEhvdXJseVdlYXRoZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJob3VybHlfd2VhdGhlclwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmhvdXJseVdlYXRoZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdXJseVdlYXRoZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tICdjb21wb25lbnRzL21vZGFsJztcclxuaW1wb3J0IHsgQnVzVUksIEJ1c0FQSSB9IGZyb20gJ2xpYi9idXMnO1xyXG5pbXBvcnQgeyBXZWF0aGVyQVBJIH0gZnJvbSAnbGliL3dlYXRoZXInO1xyXG5pbXBvcnQgeyBTdWJ3YXlVSSwgU3Vid2F5QVBJIH0gZnJvbSAnbGliL3N1YndheSc7XHJcbmltcG9ydCB7IEludGVydmFsIH0gZnJvbSAnbGliL2NvbW1vbic7XHJcblxyXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcclxuICByZWZyZXNoOiBib29sZWFuLFxyXG4gIHRva2VuOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIExpc3RTdGF0ZXMge1xyXG4gIGN1cnJlbnRUaW1lOiBzdHJpbmcsXHJcbiAgY3VycmVudFdlYXRoZXI6IEpTWC5FbGVtZW50LFxyXG4gIGJ1c2VzOiBKU1guRWxlbWVudFtdLFxyXG4gIHN1YndheXM6IGFueSxcclxufVxyXG5cclxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMaXN0UHJvcHMsIExpc3RTdGF0ZXM+IHtcclxuICBfaXNtb3VudGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjdXJyZW50VGltZTogJycsXHJcbiAgICBjdXJyZW50V2VhdGhlcjogKDxkaXY+PC9kaXY+KSxcclxuICAgIGJ1c2VzOiBbXSxcclxuICAgIHN1YndheXM6IFtdXHJcbiAgfTtcclxuXHJcbiAgc2V0Q3VycmVudFRpbWUoKSB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBJbnRlcnZhbCgpO1xyXG4gICAgaW50ZXJ2YWwuc2V0KCgpID0+IHtcclxuICAgICAgaWYodGhpcy5faXNtb3VudGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRpbWU6IG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MnKX0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRXZWF0aGVyKCkge1xyXG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IG5ldyBXZWF0aGVyQVBJKCk7XHJcbiAgICB3ZWF0aGVyQVBJLmdldEN1cnJlbnRXZWF0aGVyKCkudGhlbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX2lzbW91bnRlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXZWF0aGVyOiAoXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY3VycmVudF93ZWF0aGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50X3dlYXRoZXJfdGl0bGVcIiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz17ZGF0YS5pY29ufS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48cD57ZGF0YS50ZW1wfcKwPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgaWQ9XCJjdXJyZW50X3dlYXRoZXJfbWFpblwiPntkYXRhLm1haW59PC9wPlxyXG4gICAgICAgICAgICA8cCBpZD1cImN1cnJlbnRfd2VhdGhlcl9kZXNjXCI+e2RhdGEuZGVzY308L3A+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50X3dlYXRoZXJfbW9yZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGx1c19idG5fMDEuc3ZnXCIgb25DbGljaz17TW9kYWwuYWN0aXZlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRCdXMoKSB7XHJcbiAgICBjb25zdCBhcGkgPSBuZXcgQnVzQVBJKCk7XHJcbiAgICBhcGkuZ2V0QnVzZXModGhpcy5wcm9wcy50b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgbGV0IGFycjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICBmb3IobGV0IGJ1cyBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7YnVzLnN0YXRpb25faWR9JHtidXMuYnVzX3JvdXRlX2lkfWA7XHJcbiAgICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnRfYnVzXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJyZW50X2J1c190aXRsZVwiPntidXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnJlbnRfYnVzX21lc3NhZ2VcIiBpZD17a2V5fT48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7J2J1c2VzJzogYXJyfSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IobGV0IGJ1cyBvZiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7YnVzLnN0YXRpb25faWR9JHtidXMuYnVzX3JvdXRlX2lkfWA7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJChgIyR7a2V5fWApO1xyXG4gICAgICAgIEJ1c1VJLnNldEN1cnJlbnRCdXModGFyZ2V0LCBidXMuc3RhdGlvbl9pZCwgYnVzLmJ1c19yb3V0ZV9pZCwgYnVzLm9yZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFN1YndheSgpIHtcclxuICAgIGxldCBzdWJ3YXlzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGFwaSA9IG5ldyBTdWJ3YXlBUEkoKTtcclxuICAgIGFwaS5nZXRTdWJ3YXlzKHRoaXMucHJvcHMudG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGxldCB0cmFpbkxpbmVOYW1lQ250ID0gMDtcclxuXHJcbiAgICAgIGZvcihsZXQgc3Vid2F5IG9mIGRhdGEpIHtcclxuICAgICAgICBzdWJ3YXlzW3N1YndheS5zdGF0aW9uX25hbWVdID0ge31cclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IHN1YndheSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaWYoc3Vid2F5c1tzdWJ3YXkuc3RhdGlvbl9uYW1lXVtzdWJ3YXkuZGlyZWN0aW9uXSkge1xyXG4gICAgICAgICAgc3Vid2F5c1tzdWJ3YXkuc3RhdGlvbl9uYW1lXVtzdWJ3YXkuZGlyZWN0aW9uXS5wdXNoKFxyXG4gICAgICAgICAgICBzdWJ3YXkudHJhaW5fbGluZV9uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdWJ3YXlzW3N1YndheS5zdGF0aW9uX25hbWVdW3N1YndheS5kaXJlY3Rpb25dID0gW1xyXG4gICAgICAgICAgICBzdWJ3YXkudHJhaW5fbGluZV9uYW1lXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFpbkxpbmVOYW1lQ250ICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxldCBhcnI6IEpTWC5FbGVtZW50W10gPSBbXVxyXG4gICAgICBmb3IobGV0IHN0YXRpb25OYW1lIGluIHN1YndheXMpIHtcclxuICAgICAgICBmb3IobGV0IGRpcmVjdGlvbiBpbiBzdWJ3YXlzW3N0YXRpb25OYW1lXSkge1xyXG4gICAgICAgICAgZm9yKGxldCB0cmFpbkxpbmVOYW1lIG9mIHN1YndheXNbc3RhdGlvbk5hbWVdW2RpcmVjdGlvbl0pIHtcclxuICAgICAgICAgICAgaWYodHJhaW5MaW5lTmFtZUNudCA+IDIpIHtcclxuICAgICAgICAgICAgICBhcnIucHVzaChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0cmFpbkxpbmVOYW1lfSBjbGFzc05hbWU9XCJjdXJyZW50X3N1YndheVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnRfc3Vid2F5X3RpdGxlXCI+e3RyYWluTGluZU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudF9zdWJ3YXlfbWVzc2FnZVwiIGlkPXt0cmFpbkxpbmVOYW1lLnJlcGxhY2UoL1xccy9naSwgXCJcIil9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhcnIucHVzaChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0cmFpbkxpbmVOYW1lfSBjbGFzc05hbWU9XCJjdXJyZW50X3N1YndheV9zb2xvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudF9zdWJ3YXlfc29sb190aXRsZVwiPnt0cmFpbkxpbmVOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnRfc3Vid2F5X3NvbG9fbWVzc2FnZVwiIGlkPXt0cmFpbkxpbmVOYW1lLnJlcGxhY2UoL1xccy9naSwgXCJcIil9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihhcnIubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeydzdWJ3YXlzJzogKDxkaXY+e2Fycn08L2Rpdj4pfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J3N1YndheXMnOiBhcnJ9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKGxldCBzdGF0aW9uTmFtZSBpbiBzdWJ3YXlzKSB7XHJcbiAgICAgICAgZm9yKGxldCBkaXJlY3Rpb24gaW4gc3Vid2F5c1tzdGF0aW9uTmFtZV0pIHtcclxuICAgICAgICAgIGZvcihsZXQgdHJhaW5MaW5lTmFtZSBvZiBzdWJ3YXlzW3N0YXRpb25OYW1lXVtkaXJlY3Rpb25dKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQoYCMke3RyYWluTGluZU5hbWUucmVwbGFjZSgvXFxzL2dpLCBcIlwiKX1gKTtcclxuICAgICAgICAgICAgU3Vid2F5VUkuc2V0Q3VycmVudFN1YndheSh0YXJnZXQsIHN0YXRpb25OYW1lLCB0cmFpbkxpbmVOYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsKCkge1xyXG4gICAgdGhpcy5zZXRDdXJyZW50VGltZSgpO1xyXG4gICAgdGhpcy5zZXRDdXJyZW50V2VhdGhlcigpO1xyXG4gICAgdGhpcy5zZXRDdXJyZW50QnVzKCk7XHJcbiAgICB0aGlzLnNldEN1cnJlbnRTdWJ3YXkoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5faXNtb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0QWxsKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgIHRoaXMuX2lzbW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xyXG4gICAgaWYobmV4dFByb3BzLnJlZnJlc2ggPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnNldEFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250ZW50XCIgaWQ9XCJsaXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBpZD1cImN1cnJlbnRfdGltZVwiPnt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmN1cnJlbnRXZWF0aGVyfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVzZXN9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWJ3YXlzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2dvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBpZD1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Vhc3l3YXlfdGl0bGUucG5nXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgSW50ZXJ2YWwgfSBmcm9tICdsaWIvY29tbW9uJztcclxuXHJcbmludGVyZmFjZSBUYWJQcm9wcyB7XHJcbiAgaGFuZGxlcjogRnVuY3Rpb25cclxufVxyXG5cclxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYlByb3BzPiB7XHJcbiAgcnVuU3BpbigpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9ICQoJyN0YWIgPiB1bCA+IGxpOmxhc3QtY2hpbGQgPiBpbWc6bGFzdC1jaGlsZCcpO1xyXG4gICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCdzcGluJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LmFkZENsYXNzKCdzcGluJyk7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBJbnRlcnZhbC5jbGVhckFsbCgpO1xyXG4gICAgdGhpcy5ydW5TcGluKCk7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvdyB0YWJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDxwPnttb21lbnQoKS5mb3JtYXQoJ1lZWVkvTU0vREQnKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ0YWJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxhIGlkPVwidGFiLXRpdGxlXCI+TWFpbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFiLXRpdGxlLWJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NldHRpbmdzJz48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3NldHRpbmdfYnRuXzAxLnN2Z1wiLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3JlZnJlc2hfYnRuXzAxLnN2Z1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaC5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XHJcbiAgaXNTaWduaW46IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGl0bGVQcm9wcz4ge1xyXG4gIHJlbmRlclNpZ25pbigpIHtcclxuICAgIGlmKHRoaXMucHJvcHMuaXNTaWduaW4pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDx1bCBpZD1cInNpZ25pblwiPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nL3NpZ25vdXQnPjxhPuuhnOq3uOyVhOybgzwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPHVsIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nL3NpZ25pbic+PGE+66Gc6re47J24PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucmVuZGVyU2lnbmluKCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGJnLWMtZ3JheVwiIGlkPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxwPuqxseygleyXhuydtCDsp5HsnYQg64KY6rCA7J6QITwvcD5cclxuICAgICAgICAgIDxoMT48TGluayBocmVmPScvJz48YT5FQVNZV0FZPC9hPjwvTGluaz48L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHhtbCBmcm9tICdmYXN0LXhtbC1wYXJzZXInO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcuanNvbic7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vY29tbW9uJztcclxuaW1wb3J0IHsgVGltZVVJIH0gZnJvbSAnLi91aSc7XHJcblxyXG5jbGFzcyBCdXNVSSB7XHJcbiAgc3RhdGljIHNldFdhaXRpbmdUaW1lKHRhcmdldDogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc2VjOiBudW1iZXIsIHN0SWQ6IG51bWJlciwgYnVzUm91dGVJZDogbnVtYmVyLCBvcmQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdWkgPSBuZXcgVGltZVVJKCk7XHJcbiAgICB1aS5zZXRXYWl0aW5nVGltZVdpdGhCdXModGFyZ2V0LCBzZWMsIEJ1c1VJLnNldEN1cnJlbnRCdXMsIHN0SWQsIGJ1c1JvdXRlSWQsIG9yZCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0Q3VycmVudEJ1cyh0YXJnZXQ6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHN0SWQ6IG51bWJlciwgYnVzUm91dGVJZDogbnVtYmVyLCBvcmQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgYXBpID0gbmV3IEJ1c0FQSSgpO1xyXG4gICAgYXBpLmdldERhdGFCeVJvdXRlKHN0SWQsIGJ1c1JvdXRlSWQsIG9yZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgaWYoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGJ1cyA9IG5ldyBCdXMoZGF0YSk7XHJcbiAgICAgICAgY29uc3Qgd2FpdGluZ1NlYyA9IGJ1cy5nZXRXYWl0aW5nU2VjKCk7XHJcbiAgICAgICAgaWYod2FpdGluZ1NlYyA8IDEpIHtcclxuICAgICAgICAgIHRhcmdldC50ZXh0KGJ1cy5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgQnVzVUkuc2V0V2FpdGluZ1RpbWUodGFyZ2V0LCB3YWl0aW5nU2VjLCBzdElkLCBidXNSb3V0ZUlkLCBvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXQudGV4dCgnZGF0YSBpcyBudWxsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQnVzQVBJIHtcclxuICBBUElfS0VZOiBzdHJpbmcgPSBjb25maWcuQlVTX0FQSV9LRVk7XHJcbiAgUFJPWFlfSE9TVDogc3RyaW5nID0gY29uZmlnLkFQSV9IT1NUO1xyXG5cclxuICBwcm94eSh1cmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCh0aGlzLlBST1hZX0hPU1QgKyAnL2FwaXMvcHJveHk/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodXJsKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHhtbC5wYXJzZShyZXNwb25zZS5kYXRhLmRhdGEuZGF0YSkuU2VydmljZVJlc3VsdC5tc2dCb2R5O1xyXG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGEuaXRlbUxpc3QgOiB1bmRlZmluZWQ7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCdXMobmFtZTogc3RyaW5nLCBzdGF0aW9uSWQ6IHN0cmluZywgYnVzUm91dGVJZDogc3RyaW5nLCBvcmQ6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ25hbWUnLCBuYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdzdGF0aW9uX2lkJywgc3RhdGlvbklkKTtcclxuICAgIGZvcm0uYXBwZW5kKCdidXNfcm91dGVfaWQnLCBidXNSb3V0ZUlkKTtcclxuICAgIGZvcm0uYXBwZW5kKCdvcmQnLCBvcmQpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3RoaXMuUFJPWFlfSE9TVH0vcHVibGljX3RyYW5zcG9ydC9idXNlcy9jcmVhdGVgLCBmb3JtKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVCdXMoaWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHt0aGlzLlBST1hZX0hPU1R9L3B1YmxpY190cmFuc3BvcnQvYnVzZXMvJHtpZH0vZGVsZXRlP3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEJ1c2VzKHRva2VuOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7dGhpcy5QUk9YWV9IT1NUfS9wdWJsaWNfdHJhbnNwb3J0L2J1c2VzP3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YS5idXNlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnVzUm91dGUoYXJzSWQ6IHN0cmluZykge1xyXG4gICAgbGV0IHVybCA9ICdodHRwOi8vd3MuYnVzLmdvLmtyL2FwaS9yZXN0L3N0YXRpb25pbmZvL2dldFN0YXRpb25CeVVpZD8nXHJcbiAgICB1cmwgKz0gJ3NlcnZpY2VLZXk9JyArIHRoaXMuQVBJX0tFWTtcclxuICAgIHVybCArPSAnJmFyc0lkPScgKyBhcnNJZDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm94eSh1cmwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnVzU3RhdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCB1cmwgPSAnaHR0cDovL3dzLmJ1cy5nby5rci9hcGkvcmVzdC9zdGF0aW9uaW5mby9nZXRTdGF0aW9uQnlOYW1lPydcclxuICAgIHVybCArPSAnc2VydmljZUtleT0nICsgdGhpcy5BUElfS0VZO1xyXG4gICAgdXJsICs9ICcmc3RTcmNoPScgKyBuYW1lO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3h5KHVybCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhQnlSb3V0ZShzdElkOiBudW1iZXIsIGJ1c1JvdXRlSWQ6IG51bWJlciwgb3JkOiBudW1iZXIpIHtcclxuICAgIGxldCB1cmwgPSAnaHR0cDovL3dzLmJ1cy5nby5rci9hcGkvcmVzdC9hcnJpdmUvZ2V0QXJySW5mb0J5Um91dGU/JztcclxuICAgIHVybCArPSAnc2VydmljZUtleT0nICsgdGhpcy5BUElfS0VZO1xyXG4gICAgdXJsICs9ICcmc3RJZD0nICsgc3RJZDtcclxuICAgIHVybCArPSAnJmJ1c1JvdXRlSWQ9JyArIGJ1c1JvdXRlSWQ7XHJcbiAgICB1cmwgKz0gJyZvcmQ9JyArIG9yZDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm94eSh1cmwpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQnVzTWVzc2FnZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXRXYWl0aW5nU2VjKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBtYXRjaE1pbnV0ZSA9IHRoaXMubWVzc2FnZS5tYXRjaCgvXFxkK+u2hC9nKSE7XHJcbiAgICBjb25zdCBtaW51dGUgPSBtYXRjaE1pbnV0ZSA/IHBhcnNlSW50KG1hdGNoTWludXRlWzBdLnJlcGxhY2UoJ+u2hCcsICcnKSkgOiAwO1xyXG4gICAgY29uc3QgbWF0Y2hTZWMgPSB0aGlzLm1lc3NhZ2UubWF0Y2goL1xcZCvstIgvZykhO1xyXG4gICAgY29uc3Qgc2VjID0gbWF0Y2hTZWMgPyBwYXJzZUludChtYXRjaFNlY1swXS5yZXBsYWNlKCfstIgnLCAnJykpIDogMDtcclxuICAgIHJldHVybiBtaW51dGUgKiA2MCArIHNlYztcclxuICB9XHJcblxyXG4gIGNoZWNrQnVzU2h1dGRvd24oKTogYm9vbGVhbiB7XHJcbiAgICBpZih0aGlzLm1lc3NhZ2Uuc2VhcmNoKC/smrTtlonsooXro4wvZykgIT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXMge1xyXG4gIGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xyXG4gIGJ1c051bTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBhcGlDYWxsVGltZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuYnVzTnVtID0gcGFyc2VJbnQodGhpcy5kYXRhLnJ0Tm0pO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLmFycm1zZzE7XHJcbiAgICB0aGlzLmFwaUNhbGxUaW1lID0gdGhpcy5kYXRhLm1rVG07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvcnJlY3Rpb25TZWMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG0gPSBuZXcgTW9tZW50KCk7XHJcbiAgICByZXR1cm4gbS5nZXRDb3JyZWN0aW9uU2VjKHRoaXMuYXBpQ2FsbFRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2FpdGluZ1NlYygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYm0gPSBuZXcgQnVzTWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGJtLmdldFdhaXRpbmdTZWMoKSAtIHRoaXMuZ2V0Q29ycmVjdGlvblNlYygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQnVzVUksIEJ1c0FQSSB9O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuXHJcbmNsYXNzIFJhbmRvbSB7XHJcbiAgc3RhdGljIGFsbChsZW46IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBudW0obGVuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnMDEyMzQ1Njc4OSc7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHIobGVuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJhbmRvbShjaGFyYWN0ZXJzOiBzdHJpbmcsIGxlbjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7ICBcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUZW1wZXJhdHVyZSB7XHJcbiAgS0VMVklOX05VTSA9IGNvbmZpZy5LRUxWSU5fTlVNXHJcblxyXG4gIGtlbHZpblRvQ2Vsc2l1cyh0ZW1wOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KCh0ZW1wIC0gdGhpcy5LRUxWSU5fTlVNKS50b0ZpeGVkKDApKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vbWVudCB7XHJcbiAgZ2V0Q29ycmVjdGlvblNlYyh0aW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgneCcpKSAtIHBhcnNlSW50KG1vbWVudCh0aW1lKS5mb3JtYXQoJ3gnKSkpIC8gMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJbnRlcnZhbCB7XHJcbiAgc3RhdGljIGlkczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBzZXQoY2FsbGJhY2s6IEZ1bmN0aW9uLCBtczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIG1zKTtcclxuICAgIEludGVydmFsLmlkcy5wdXNoKGludGVydmFsKTtcclxuICAgIHJldHVybiBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGNsZWFyKGlkOiBudW1iZXIpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFyQWxsKCkge1xyXG4gICAgZm9yKGNvbnN0IGlkIG9mIEludGVydmFsLmlkcykge1xyXG4gICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEludGVydmFsLCBNb21lbnQsIFRlbXBlcmF0dXJlLCBSYW5kb20gfTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vY29tbW9uJztcclxuaW1wb3J0IHsgVGltZVVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnLmpzb24nO1xyXG5cclxuY2xhc3MgU3Vid2F5VUkge1xyXG4gIHN0YXRpYyBzZXRXYWl0aW5nVGltZSh0YXJnZXQ6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNlYzogbnVtYmVyLCBzdGF0aW9uTmFtZTogc3RyaW5nLCB0cmFpbkxpbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVpID0gbmV3IFRpbWVVSSgpO1xyXG4gICAgdWkuc2V0V2FpdGluZ1RpbWVXaXRoU3Vid2F5KHRhcmdldCwgc2VjLCBTdWJ3YXlVSS5zZXRDdXJyZW50U3Vid2F5LCBzdGF0aW9uTmFtZSwgdHJhaW5MaW5lTmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0Q3VycmVudFN1YndheSh0YXJnZXQ6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHN0YXRpb25OYW1lOiBzdHJpbmcsIHRyYWluTGluZU5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYXBpID0gbmV3IFN1YndheUFQSSgpO1xyXG4gICAgYXBpLmdldEN1cnJlbnRTdWJ3YXkoc3RhdGlvbk5hbWUpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGZvcihsZXQgZCBvZiBkYXRhKSB7XHJcbiAgICAgICAgaWYoZC50cmFpbkxpbmVObSA9PSB0cmFpbkxpbmVOYW1lKSB7XHJcbiAgICAgICAgICBjb25zdCBzdWJ3YXkgPSBuZXcgU3Vid2F5KGQpO1xyXG4gICAgICAgICAgY29uc3Qgd2FpdGluZ1NlYyA9IHN1YndheS5nZXRXYWl0aW5nU2VjKCk7XHJcbiAgICAgICAgICBpZih3YWl0aW5nU2VjIDwgMSkge1xyXG4gICAgICAgICAgICB0YXJnZXQudGV4dChzdWJ3YXkubWVzc2FnZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTdWJ3YXlVSS5zZXRXYWl0aW5nVGltZSh0YXJnZXQsIHdhaXRpbmdTZWMsIHN0YXRpb25OYW1lLCB0cmFpbkxpbmVOYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTdWJ3YXlBUEkge1xyXG4gIEFQSV9LRVk6IHN0cmluZyA9IGNvbmZpZy5TVUJXQVlfQVBJX0tFWTtcclxuICBBUElfSE9TVDogc3RyaW5nID0gY29uZmlnLkFQSV9IT1NUO1xyXG5cclxuICBjcmVhdGVTdWJ3YXkoc3RhdGlvbk5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcsIHRyYWluTGluZU5hbWU6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3N0YXRpb25fbmFtZScsIHN0YXRpb25OYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdkaXJlY3Rpb24nLCBkaXJlY3Rpb24pO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3RyYWluX2xpbmVfbmFtZScsIHRyYWluTGluZU5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pO1xyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAke3RoaXMuQVBJX0hPU1R9L3B1YmxpY190cmFuc3BvcnQvc3Vid2F5cy9jcmVhdGVgLCBmb3JtKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVTdWJ3YXkoaWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHt0aGlzLkFQSV9IT1NUfS9wdWJsaWNfdHJhbnNwb3J0L3N1YndheXMvJHtpZH0vZGVsZXRlP3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFN1YndheXModG9rZW46IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHt0aGlzLkFQSV9IT1NUfS9wdWJsaWNfdHJhbnNwb3J0L3N1YndheXM/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhLnN1YndheXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRTdWJ3YXkoc3RhdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9zd29wZW5BUEkuc2VvdWwuZ28ua3IvYXBpL3N1YndheS8nICsgdGhpcy5BUElfS0VZICsgJy9qc29uL3JlYWx0aW1lU3RhdGlvbkFycml2YWwvMC8xMDAvJyArIHN0YXRpb25OYW1lO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmwpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlYWx0aW1lQXJyaXZhbExpc3QgPyByZXNwb25zZS5kYXRhLnJlYWx0aW1lQXJyaXZhbExpc3QgOiBbXTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU3Vid2F5IHtcclxuICAvKlxyXG4gICAgdXBkbkxpbmUgJ+yZuOyEoCdcclxuICAgIGJhcnZsRHRcdTAwMWUg64+E7LCp7JiI7KCV7Iuc6rCEXHJcbiAgICByZWNwdG5EdCDsg53shLHsi5zqsIFcclxuICAgIGFydmxDZCDrj4TssKnsvZTrk5xcclxuICAqL1xyXG4gIGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xyXG4gIGFwaUNhbGxUaW1lOiBzdHJpbmc7XHJcbiAgd2FpdGluZ1NlYzogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YToge1trZXk6IHN0cmluZ106IGFueX0pIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmFwaUNhbGxUaW1lID0gdGhpcy5kYXRhLnJlY3B0bkR0O1xyXG4gICAgdGhpcy53YWl0aW5nU2VjID0gcGFyc2VJbnQodGhpcy5kYXRhLmJhcnZsRHQpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLmFydmxNc2cyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb3JyZWN0aW9uU2VjKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBtID0gbmV3IE1vbWVudCgpO1xyXG4gICAgcmV0dXJuIG0uZ2V0Q29ycmVjdGlvblNlYyh0aGlzLmFwaUNhbGxUaW1lKTtcclxuICB9XHJcblxyXG4gIGdldFdhaXRpbmdTZWMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndhaXRpbmdTZWMgLSB0aGlzLmdldENvcnJlY3Rpb25TZWMoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN1YndheVVJLCBTdWJ3YXlBUEkgfTtcclxuIiwiaW1wb3J0IHsgSW50ZXJ2YWwgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5jbGFzcyBUaW1lVUkge1xyXG4gIHNldFdhaXRpbmdUaW1lV2l0aEJ1cyh0YXJnZXQ6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNlYzogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIHN0SWQ6IG51bWJlciwgYnVzUm91dGVJZDogbnVtYmVyLCBvcmQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgSW50ZXJ2YWwoKTtcclxuICAgIGNvbnN0IGlkID0gaW50ZXJ2YWwuc2V0KCgpID0+IHtcclxuICAgICAgY29uc3QgbWludXRlID0gKHNlYyAvIDYwKSA+PiAwO1xyXG4gICAgICBjb25zdCBtaW51dGVNZXNzYWdlID0gbWludXRlID8gU3RyaW5nKG1pbnV0ZSkgKyAn67aEJyA6ICcnO1xyXG4gICAgICBjb25zdCBzZWNNZXNzYWdlID0gU3RyaW5nKHNlYyAtIChtaW51dGUgKiA2MCkpICsgJ+y0iCc7XHJcbiAgICAgIHRhcmdldC50ZXh0KG1pbnV0ZU1lc3NhZ2UgKyBzZWNNZXNzYWdlKTtcclxuICAgICAgc2VjIC09IDE7XHJcbiAgICAgIGlmKHNlYyA8IDApIHtcclxuICAgICAgICBpbnRlcnZhbC5jbGVhcihpZCk7XHJcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0LCBzdElkLCBidXNSb3V0ZUlkLCBvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHNldFdhaXRpbmdUaW1lV2l0aFN1YndheSh0YXJnZXQ6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNlYzogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIHN0YXRpb25OYW1lOiBzdHJpbmcsIHRyYWluTGluZU5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgSW50ZXJ2YWwoKTtcclxuICAgIGNvbnN0IGlkID0gaW50ZXJ2YWwuc2V0KCgpID0+IHtcclxuICAgICAgY29uc3QgbWludXRlID0gKHNlYyAvIDYwKSA+PiAwO1xyXG4gICAgICBjb25zdCBtaW51dGVNZXNzYWdlID0gbWludXRlID8gU3RyaW5nKG1pbnV0ZSkgKyAn67aEJyA6ICcnO1xyXG4gICAgICBjb25zdCBzZWNNZXNzYWdlID0gU3RyaW5nKHNlYyAtIChtaW51dGUgKiA2MCkpICsgJ+y0iCc7XHJcbiAgICAgIHRhcmdldC50ZXh0KG1pbnV0ZU1lc3NhZ2UgKyBzZWNNZXNzYWdlKTtcclxuICAgICAgc2VjIC09IDE7XHJcbiAgICAgIGlmKHNlYyA8IDApIHtcclxuICAgICAgICBpbnRlcnZhbC5jbGVhcihpZCk7XHJcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0LCBzdGF0aW9uTmFtZSwgdHJhaW5MaW5lTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVGltZVVJIH07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuaW1wb3J0IHsgVGVtcGVyYXR1cmUgfSBmcm9tICcuL2NvbW1vbidcclxuXHJcbmNsYXNzIFdlYXRoZXJBUEkge1xyXG4gIEFQSV9LRVk6IHN0cmluZyA9IGNvbmZpZy5XRUFUSEVSX0FQSV9LRVk7XHJcblxyXG4gIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uOiBzdHJpbmc9J1Nlb3VsJykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7dGhpcy5BUElfS0VZfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIHdlYXRoZXIuZ2V0RGF0YSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VybHlXZWF0aGVyKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT1TZW91bCZhcHBpZD0nICsgdGhpcy5BUElfS0VZKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBsZXQgbGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgICBmb3IoY29uc3QgZGF0YSBvZiByZXNwb25zZS5kYXRhLmxpc3QpIHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoZGF0YSk7XHJcbiAgICAgICAgbGlzdC5wdXNoKHdlYXRoZXIuZ2V0RGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgV2VhdGhlciB7XHJcbiAgZGF0YToge1trZXk6IHN0cmluZ106IGFueX07XHJcbiAgd2VhdGhlcjogQXJyYXk8YW55PjtcclxuICBtYWluOiB7W2tleTogc3RyaW5nXTogYW55fTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YToge1trZXk6IHN0cmluZ106IGFueX0pIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLndlYXRoZXIgPSB0aGlzLmRhdGEud2VhdGhlcjtcclxuICAgIHRoaXMubWFpbiA9IHRoaXMuZGF0YS5tYWluO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXZWF0aGVyKCk6IE9iamVjdCB7XHJcbiAgICBsZXQgZGF0YTogYW55ID0ge307XHJcbiAgICBmb3IoY29uc3QgdyBvZiB0aGlzLndlYXRoZXIpIHtcclxuICAgICAgZGF0YS5pZCA9IHcuaWQ7XHJcbiAgICAgIGRhdGEuaWNvbiA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nICsgdy5pY29uICsgJ0AyeC5wbmcnO1xyXG4gICAgICBkYXRhLm1haW4gPSB3Lm1haW47XHJcbiAgICAgIGRhdGEuZGVzYyA9IHcuZGVzY3JpcHRpb247XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXAoKTogT2JqZWN0IHtcclxuICAgIGNvbnN0IHQgPSBuZXcgVGVtcGVyYXR1cmUoKTtcclxuICAgIGNvbnN0IHRlbXAgPSB0LmtlbHZpblRvQ2Vsc2l1cyh0aGlzLm1haW4udGVtcCk7XHJcbiAgICBjb25zdCBtaW5UZW1wID0gdC5rZWx2aW5Ub0NlbHNpdXModGhpcy5tYWluLnRlbXBfbWluKTtcclxuICAgIGNvbnN0IG1heFRlbXAgPSB0LmtlbHZpblRvQ2Vsc2l1cyh0aGlzLm1haW4udGVtcF9tYXgpO1xyXG4gICAgcmV0dXJuIHt0ZW1wLCBtaW5UZW1wLCBtYXhUZW1wfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuZHQgKiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpOiBPYmplY3Qge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IHRoaXMuZ2V0V2VhdGhlcigpO1xyXG4gICAgY29uc3QgdGVtcCA9IHRoaXMuZ2V0VGVtcCgpO1xyXG4gICAgY29uc3QgZHQgPSB0aGlzLmdldERhdGVUaW1lKCk7XHJcbiAgICByZXR1cm4gJC5leHRlbmQod2VhdGhlciwgdGVtcCwge2R0fSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBXZWF0aGVyQVBJIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgc2Nyb2xsID0gZmFsc2VcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3JvdXRlciwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgbGV0IGNoaWxkOiBhbnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICB9XG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlcyBhcyBhbnlcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZFxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgOyhkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG1zKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG1zKVxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID1cbiAgICBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgICBjYiAmJiBjYigpXG4gICAgICB9XG4gICAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxzdHJpbmcsIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50PiA9XG4gICAgbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPHN0cmluZywgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeT4gPVxuICAgIG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfSlcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgcm91dGVGaWxlc1Byb21pc2UsXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHR5cGUgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIHsgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuICAnZG9tYWluTG9jYWxlcycsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXSBhcyBjb25zdFxuZXhwb3J0IHR5cGUgUm91dGVyRXZlbnQgPSB0eXBlb2Ygcm91dGVyRXZlbnRzW251bWJlcl1cblxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoXG4gICAgQ29tcG9zZWRDb21wb25lbnQgYXMgYW55XG4gICkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IFJvdXRlckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlcidcbmltcG9ydCB0eXBlIHsgRG9tYWluTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID1cbiAgICByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSlcbiAgICByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcblxuICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLylcbiAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaFxuICAgID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKVxuICAgIDogdXJsQXNTdHJpbmdcblxuICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpXG5cbiAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmBcbiAgICApXG4gICAgY29uc3Qgbm9ybWFsaXplZFVybCA9IG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pXG4gICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsXG4gIH1cblxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChcbiAgICAgIHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsXG4gICAgICAnaHR0cDovL24nXG4gICAgKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlc29sdmVBcyA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl0gOiByZXNvbHZlZEhyZWZcbiAgICApIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyPFJvdXRlckV2ZW50PlxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVbXVxuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyPFJvdXRlckV2ZW50PiA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCkgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICBjb25zdCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHsgbG9jYWxlIH1cbiAgICAgICAgOyhvcHRpb25zIGFzIGFueSkuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMgIT09IHBhdGhuYW1lXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9XG4gICAgICB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2ggfHwgKG9wdGlvbnMgYXMgYW55KS5fc2hvdWxkUmVzb2x2ZUhyZWZcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmIChcbiAgICAgICEob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmXG4gICAgICAhbG9jYWxlQ2hhbmdlXG4gICAgKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIDsob3B0aW9ucyBhcyBhbnkpLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWVcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lKVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lKVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsID8/ICFpc1ZhbGlkU2hhbGxvd1JvdXRlXG4gICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHsgeDogMCwgeTogMCB9IDogbnVsbFxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsID8/IHJlc2V0U2Nyb2xsXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiAodGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEpLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnY29tcG9uZW50cy9wYWdlcy90aXRsZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvbG9nbyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnY29tcG9uZW50cy9wYWdlcy90YWInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdjb21wb25lbnRzL3BhZ2VzL2xpc3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvZm9vdGVyJztcclxuaW1wb3J0IEhvdXJseVdlYXRoZXIgZnJvbSAnY29tcG9uZW50cy9wYWdlcy9ob3VybHlXZWF0aGVyJztcclxuXHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJ3N0b3JlL3N0b3JlJztcclxuXHJcbmludGVyZmFjZSBJbmRleFBhZ2VQcm9wcyB7XHJcbiAgc3RvcmU6IElTdG9yZSxcclxuICB0b2tlbjogc3RyaW5nXHJcbn1cclxuXHJcbkBpbmplY3QoJ3N0b3JlJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJbmRleFBhZ2VQcm9wcz4ge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBhbnkpIHtcclxuICAgIHJldHVybiB7dG9rZW46IGN0eC5xdWVyeS50b2tlbn1cclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgcmVmcmVzaDogZmFsc2VcclxuICB9O1xyXG5cclxuICBjaGFuZ2VUYWJNb2RlKCkge1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gJCgnI3RpdGxlJykuaGVpZ2h0KCkhICsgJCgnI2xvZ28nKS5oZWlnaHQoKSEgKyAkKCcudGFiJykuaGVpZ2h0KCkhO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICBpZih3aW5kb3dIZWlnaHQhID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgJCgnLnRhYicpLnJlbW92ZUNsYXNzKCd0YWInKS5hZGRDbGFzcygnbWluaS10YWInKTtcclxuICAgICAgICAkKCcjbGlzdCcpLmNzcyh7J21hcmdpbi10b3AnOiAnMjkwcHgnfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLm1pbmktdGFiJykucmVtb3ZlQ2xhc3MoJ21pbmktdGFiJykuYWRkQ2xhc3MoJ3RhYicpO1xyXG4gICAgICAgICQoJyNsaXN0JykuY3NzKHsnbWFyZ2luLXRvcCc6ICctNTBweCd9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVmcmVzaDogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVRhYk1vZGUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcm9wcy50b2tlbiB8fCB0aGlzLnByb3BzLnN0b3JlLnRva2VuO1xyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAge3RoaXMucHJvcHMuc3RvcmUuc2lnbmluKHRva2VuKX1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9J0VBU1lXQVknLz5cclxuXHJcbiAgICAgICAgPFRpdGxlIGlzU2lnbmluPXt0aGlzLnByb3BzLnN0b3JlLmlzU2lnbmlufS8+XHJcbiAgICAgICAgPExvZ28vPlxyXG4gICAgICAgIDxUYWIgaGFuZGxlcj17dGhpcy5yZWZyZXNoLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICA8TGlzdCByZWZyZXNoPXt0aGlzLnN0YXRlLnJlZnJlc2h9IHRva2VuPXt0b2tlbn0vPlxyXG4gICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICA8TW9kYWw+XHJcbiAgICAgICAgICA8SG91cmx5V2VhdGhlciByZWZyZXNoPXt0aGlzLnN0YXRlLnJlZnJlc2h9Lz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0LXhtbC1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==