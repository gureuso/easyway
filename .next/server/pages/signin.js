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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signin.tsx");
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

/***/ "./components/layout/redirect.tsx":
/*!****************************************!*\
  !*** ./components/layout/redirect.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_pages_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/pages/title */ "./components/pages/title.tsx");
/* harmony import */ var components_pages_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/pages/logo */ "./components/pages/logo.tsx");
/* harmony import */ var components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/pages/textOnlyTab */ "./components/pages/textOnlyTab.tsx");
/* harmony import */ var components_pages_blankList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/pages/blankList */ "./components/pages/blankList.tsx");
/* harmony import */ var components_pages_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/pages/footer */ "./components/pages/footer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\components\\layout\\redirect.tsx",
    _dec,
    _class;











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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_layout_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "EASYWAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_pages_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isSignin: this.props.store.isSignin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_pages_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Redirect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_pages_blankList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "list",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_pages_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this);
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Redirect);

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

module.exports = JSON.parse("{\"KELVIN_NUM\":273.15,\"BUS_API_KEY\":\"ldbaTdPATqmbFE3k5T1zUnG+eTKS57wNuX/uI6pWqlIxKRKEaF1gXzGx3Ex4sU6GGs+nCa+bAddYXbwpPSkZag==\",\"SUBWAY_API_KEY\":\"666f487a697779753838754e474676\",\"WEATHER_API_KEY\":\"915caab145ec09ce7724d09944d89cb1\",\"API_HOST\":\"http://api.easyway.devmaker.kr\"}");

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

/***/ "./pages/signin.tsx":
/*!**************************!*\
  !*** ./pages/signin.tsx ***!
  \**************************/
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
/* harmony import */ var components_pages_snsLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/pages/snsLogin */ "./components/pages/snsLogin.tsx");
/* harmony import */ var components_pages_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/pages/footer */ "./components/pages/footer.tsx");
/* harmony import */ var components_layout_redirect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/layout/redirect */ "./components/layout/redirect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\pages\\signin.tsx",
    _dec,
    _class;












let SigninPage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(_class = class SigninPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.store.isSignin) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_layout_redirect__WEBPACK_IMPORTED_MODULE_9__["default"], {
        store: this.props.store,
        to: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 14
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_layout_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "EASYWAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isSignin: this.props.store.isSignin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_textOnlyTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_blankList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_snsLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(components_pages_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this);
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SigninPage);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3JlZGlyZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2JsYW5rTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbG9nby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zbnNMb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy90ZXh0T25seVRhYi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy90aXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4udHN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9pbWcvc25zL2tha2FvLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJSZWRpcmVjdCIsImluamVjdCIsIm9ic2VydmVyIiwicmVkaXJlY3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInRvIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImlzU2lnbmluIiwiQmxhbmtMaXN0IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJMb2dvIiwiU05TTG9naW4iLCJnZXRfcmVkaXJlY3RfdXJpIiwiY29tcGFueSIsImNvbmZpZyIsIkFQSV9IT1NUIiwibG9naW4iLCJ1cmwiLCJSYW5kb20iLCJhbGwiLCJLYWthb0xvZ2luQnRuIiwiVGV4dE9ubHlUYWIiLCJUaXRsZSIsInJlbmRlclNpZ25pbiIsImxlbiIsImNoYXJhY3RlcnMiLCJyYW5kb20iLCJudW0iLCJzdHIiLCJyZXN1bHQiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsIlRlbXBlcmF0dXJlIiwiS0VMVklOX05VTSIsImtlbHZpblRvQ2Vsc2l1cyIsInRlbXAiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIk1vbWVudCIsImdldENvcnJlY3Rpb25TZWMiLCJ0aW1lIiwicm91bmQiLCJwYXJzZUludCIsIm1vbWVudCIsImZvcm1hdCIsIkludGVydmFsIiwic2V0IiwiY2FsbGJhY2siLCJtcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpZHMiLCJjbGVhciIsImlkIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyQWxsIiwiU2lnbmluUGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHNFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDJGOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQU1BLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQTRD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QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFLHNFQUFDLDhEQUFEO0FBQU8sZ0JBQVEsRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBQVgsQ0FBaUJDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLHNFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHNFQUFDLG9FQUFEO0FBQWEsYUFBSyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLHNFQUFDLGtFQUFEO0FBQUEsK0JBQ0Usc0VBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVVFLHNFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWNEOztBQXBCdUQsQztBQXVCM0NzRCx5RUFBZixFOzs7Ozs7Ozs7OztBQzNDQSxpQ0FBaUMsbzNLOzs7Ozs7Ozs7OztBQ0FqQyw0RTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9fbmV4dC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaWduaW4udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2xheW91dC9oZWFkZXInO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnY29tcG9uZW50cy9wYWdlcy90aXRsZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvbG9nbyc7XHJcbmltcG9ydCBUZXh0T25seVRhYiBmcm9tICdjb21wb25lbnRzL3BhZ2VzL3RleHRPbmx5VGFiJztcclxuaW1wb3J0IEJsYW5rTGlzdCBmcm9tICdjb21wb25lbnRzL3BhZ2VzL2JsYW5rTGlzdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9wYWdlcy9mb290ZXInO1xyXG5cclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnc3RvcmUvc3RvcmUnO1xyXG5cclxuaW50ZXJmYWNlIFJlZGlyZWN0UHJvcHMge1xyXG4gIHRvOiBzdHJpbmcsXHJcbiAgc3RvcmU6IElTdG9yZVxyXG59XHJcblxyXG5AaW5qZWN0KCdzdG9yZScpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBSZWRpcmVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSZWRpcmVjdFByb3BzPiB7XHJcbiAgcmVkaXJlY3QoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUm91dGVyLnB1c2godGhpcy5wcm9wcy50byk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9J0VBU1lXQVknLz5cclxuXHJcbiAgICAgICAgPFRpdGxlIGlzU2lnbmluPXt0aGlzLnByb3BzLnN0b3JlLmlzU2lnbmlufS8+XHJcbiAgICAgICAgPExvZ28vPlxyXG4gICAgICAgIDxUZXh0T25seVRhYiB0aXRsZT0nUmVkaXJlY3QnLz5cclxuICAgICAgICA8QmxhbmtMaXN0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JsYW5rTGlzdD5cclxuXHJcbiAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmxhbmtMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRlbnRcIiBpZD1cImxpc3RcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbGFua0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvd1wiIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9jY1wiPjxhPkNDPC9hPjwvTGluaz48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGlkPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZWFzeXdheV90aXRsZS5wbmdcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbXBvcnQgR2l0aHViTG9naW5CdG4gZnJvbSAnc3RhdGljL2ltZy9zbnMvZ2l0aHViLnBuZyc7XHJcbmltcG9ydCBLYWthb0xvZ2luQnRuIGZyb20gJ3N0YXRpYy9pbWcvc25zL2tha2FvLnBuZyc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ2xpYi9jb21tb24nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuXHJcbmNsYXNzIFNOU0xvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRfcmVkaXJlY3RfdXJpKGNvbXBhbnk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGAke2NvbmZpZy5BUElfSE9TVH0vYWNjb3VudHMvY2FsbGJhY2svJHtjb21wYW55fWA7XHJcbiAgfVxyXG5cclxuICBsb2dpbihjb21wYW55OiBzdHJpbmcpIHtcclxuICAgIGxldCB1cmwgPSAnJztcclxuICAgIHN3aXRjaChjb21wYW55KSB7XHJcbiAgICAgIGNhc2UgJ2dvb2dsZSc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoPycgK1xyXG4gICAgICAgICAgJ3Njb3BlPWVtYWlsJTIwcHJvZmlsZSYnICtcclxuICAgICAgICAgICdyZXNwb25zZV90eXBlPWNvZGUmJyArXHJcbiAgICAgICAgICAnc3RhdGU9c2VjdXJpdHlfdG9rZW4lM0QxMzhyNTcxOXJ1M2UxJTI2dXJsJTNEaHR0cHM6Ly9vYXV0aDIuZXhhbXBsZS5jb20vdG9rZW4mJyArXHJcbiAgICAgICAgICAncmVkaXJlY3RfdXJpPScgKyB0aGlzLmdldF9yZWRpcmVjdF91cmkoJ2dvb2dsZScpICsgJyYnICtcclxuICAgICAgICAgICdjbGllbnRfaWQ9NDg1OTMzMzkxNjIzLTU4MDZ1ZW1jMmtzcWY3cTdnam90dXJ0cWhsMDExMGs0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZmFjZWJvb2snOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlhbG9nL29hdXRoPycgK1xyXG4gICAgICAgICAgJ2NsaWVudF9pZD05ODEzNzQ3Njg4NjU1NjAmJyArXHJcbiAgICAgICAgICAncmVkaXJlY3RfdXJpPScgKyB0aGlzLmdldF9yZWRpcmVjdF91cmkoJ2ZhY2Vib29rJykgKyAnJicgK1xyXG4gICAgICAgICAgJ3Njb3BlPWVtYWlsJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAna2FrYW8nOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL2thdXRoLmtha2FvLmNvbS9vYXV0aC9hdXRob3JpemU/JyArXHJcbiAgICAgICAgICAnY2xpZW50X2lkPTAxOWIyNDY4OTYyMzY0YzcyNTk3ODk0NmMyM2I4OTUzJicgK1xyXG4gICAgICAgICAgJ3JlZGlyZWN0X3VyaT0nICsgdGhpcy5nZXRfcmVkaXJlY3RfdXJpKCdrYWthbycpICsgJyYnICtcclxuICAgICAgICAgICdyZXNwb25zZV90eXBlPWNvZGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICduYXZlcic6XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbmlkLm5hdmVyLmNvbS9vYXV0aDIuMC9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudF9pZD13OHpUS0tkdTdjc2ZEVktHc01YdiYnICtcclxuICAgICAgICAgICdzdGF0ZT0nICsgUmFuZG9tLmFsbCgxMCkgKyAnJicgK1xyXG4gICAgICAgICAgJ3JlZGlyZWN0X3VyaT0nICsgdGhpcy5nZXRfcmVkaXJlY3RfdXJpKCduYXZlcicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdnaXRodWInOlxyXG4gICAgICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplP3Njb3BlPXVzZXI6ZW1haWwmY2xpZW50X2lkPWM1ZTEyYTFiYzRmYmYyMzU3ZjkyJ1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLmxvZ2luKCdrYWthbycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17S2FrYW9Mb2dpbkJ0bn0gY2xhc3NOYW1lPVwic25zLWJ0blwiLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic25zXCI+Ki99XHJcbiAgICAgICAgICB7LyogIDxhIGhyZWY9e3RoaXMubG9naW4oJ2dpdGh1YicpfT4qL31cclxuICAgICAgICAgIHsvKiAgICA8aW1nIHNyYz17R2l0aHViTG9naW5CdG59IGNsYXNzTmFtZT1cInNucy1idG5cIi8+Ki99XHJcbiAgICAgICAgICB7LyogIDwvYT4qL31cclxuICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTTlNMb2dpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBUYWJQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBUZXh0T25seVRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBiZy1jLXllbGxvdyB0ZXh0LW9ubHktdGFiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwidGFiXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBpZD1cInRhYi10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWItdGl0bGUtYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0T25seVRhYjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICBpc1NpZ25pbjogYm9vbGVhblxyXG59XHJcblxyXG5jbGFzcyBUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUaXRsZVByb3BzPiB7XHJcbiAgcmVuZGVyU2lnbmluKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5pc1NpZ25pbikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPHVsIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvc2lnbm91dCc+PGE+66Gc6re47JWE7JuDPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJzaWduaW5cIj5cclxuICAgICAgICAgIDxsaT48TGluayBocmVmPScvc2lnbmluJz48YT7roZzqt7jsnbg8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5yZW5kZXJTaWduaW4oKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgYmctYy1ncmF5XCIgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPHA+6rGx7KCV7JeG7J20IOynkeydhCDrgpjqsIDsnpAhPC9wPlxyXG4gICAgICAgICAgPGgxPjxMaW5rIGhyZWY9Jy8nPjxhPkVBU1lXQVk8L2E+PC9MaW5rPjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZy5qc29uJztcclxuXHJcbmNsYXNzIFJhbmRvbSB7XHJcbiAgc3RhdGljIGFsbChsZW46IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBudW0obGVuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnMDEyMzQ1Njc4OSc7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHIobGVuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oY2hhcmFjdGVycywgbGVuKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJhbmRvbShjaGFyYWN0ZXJzOiBzdHJpbmcsIGxlbjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7ICBcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUZW1wZXJhdHVyZSB7XHJcbiAgS0VMVklOX05VTSA9IGNvbmZpZy5LRUxWSU5fTlVNXHJcblxyXG4gIGtlbHZpblRvQ2Vsc2l1cyh0ZW1wOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KCh0ZW1wIC0gdGhpcy5LRUxWSU5fTlVNKS50b0ZpeGVkKDApKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vbWVudCB7XHJcbiAgZ2V0Q29ycmVjdGlvblNlYyh0aW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgneCcpKSAtIHBhcnNlSW50KG1vbWVudCh0aW1lKS5mb3JtYXQoJ3gnKSkpIC8gMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJbnRlcnZhbCB7XHJcbiAgc3RhdGljIGlkczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBzZXQoY2FsbGJhY2s6IEZ1bmN0aW9uLCBtczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIG1zKTtcclxuICAgIEludGVydmFsLmlkcy5wdXNoKGludGVydmFsKTtcclxuICAgIHJldHVybiBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGNsZWFyKGlkOiBudW1iZXIpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFyQWxsKCkge1xyXG4gICAgZm9yKGNvbnN0IGlkIG9mIEludGVydmFsLmlkcykge1xyXG4gICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEludGVydmFsLCBNb21lbnQsIFRlbXBlcmF0dXJlLCBSYW5kb20gfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICBzY3JvbGwgPSBmYWxzZVxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcm91dGVyLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBsZXQgY2hpbGQ6IGFueVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB0cnkge1xuICAgICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIH1cbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzIGFzIGFueVxuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkXG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICA7KGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbXMpXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbXMpXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPVxuICAgIG5ldyBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+KChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICAgIGNiICYmIGNiKClcbiAgICAgIH1cbiAgICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPHN0cmluZywgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnQ+ID1cbiAgICBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8c3RyaW5nLCBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5PiA9XG4gICAgbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICByb3V0ZUZpbGVzUHJvbWlzZSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyIH1cblxuZXhwb3J0IHR5cGUgeyBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG4gICdkb21haW5Mb2NhbGVzJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dIGFzIGNvbnN0XG5leHBvcnQgdHlwZSBSb3V0ZXJFdmVudCA9IHR5cGVvZiByb3V0ZXJFdmVudHNbbnVtYmVyXVxuXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChcbiAgICBDb21wb3NlZENvbXBvbmVudCBhcyBhbnlcbiAgKS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgUm91dGVyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHR5cGUgeyBEb21haW5Mb2NhbGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPVxuICAgIHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVbXVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKVxuICAgIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG4gIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuXG4gIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKVxuICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoXG4gICAgPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpXG4gICAgOiB1cmxBc1N0cmluZ1xuXG4gIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/JylcblxuICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYFxuICAgIClcbiAgICBjb25zdCBub3JtYWxpemVkVXJsID0gbm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90bylcbiAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmxcbiAgfVxuXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKFxuICAgICAgdXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICdodHRwOi8vbidcbiAgICApXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVzb2x2ZUFzID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXSA6IHJlc29sdmVkSHJlZlxuICAgICkgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+XG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+ID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgIChzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwKSB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0geyBsb2NhbGUgfVxuICAgICAgICA7KG9wdGlvbnMgYXMgYW55KS5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhcyAhPT0gcGF0aG5hbWVcblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID1cbiAgICAgIHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faCB8fCAob3B0aW9ucyBhcyBhbnkpLl9zaG91bGRSZXNvbHZlSHJlZlxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKFxuICAgICAgIShvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiZcbiAgICAgICFsb2NhbGVDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgOyhvcHRpb25zIGFzIGFueSkuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwgPz8gIWlzVmFsaWRTaGFsbG93Um91dGVcbiAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgPz8gcmVzZXRTY3JvbGxcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6ICh0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSksXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2xheW91dC9oZWFkZXInO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnY29tcG9uZW50cy9wYWdlcy90aXRsZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvbG9nbyc7XHJcbmltcG9ydCBUZXh0T25seVRhYiBmcm9tICdjb21wb25lbnRzL3BhZ2VzL3RleHRPbmx5VGFiJztcclxuaW1wb3J0IEJsYW5rTGlzdCBmcm9tICdjb21wb25lbnRzL3BhZ2VzL2JsYW5rTGlzdCc7XHJcbmltcG9ydCBTTlNMb2dpbiBmcm9tICdjb21wb25lbnRzL3BhZ2VzL3Nuc0xvZ2luJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL3BhZ2VzL2Zvb3Rlcic7XHJcbmltcG9ydCBSZWRpcmVjdCBmcm9tICdjb21wb25lbnRzL2xheW91dC9yZWRpcmVjdCc7XHJcblxyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICdzdG9yZS9zdG9yZSc7XHJcblxyXG5pbnRlcmZhY2UgU2lnbmluUGFnZVByb3BzIHtcclxuICBzdG9yZTogSVN0b3JlXHJcbn1cclxuXHJcbkBpbmplY3QoJ3N0b3JlJylcclxuQG9ic2VydmVyXHJcbmNsYXNzIFNpZ25pblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2lnbmluUGFnZVByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5zdG9yZS5pc1NpZ25pbikge1xyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHN0b3JlPXt0aGlzLnByb3BzLnN0b3JlfSB0bz0nLycvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlciB0aXRsZT0nRUFTWVdBWScvPlxyXG5cclxuICAgICAgICA8VGl0bGUgaXNTaWduaW49e3RoaXMucHJvcHMuc3RvcmUuaXNTaWduaW59Lz5cclxuICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgPFRleHRPbmx5VGFiIHRpdGxlPSfroZzqt7jsnbgnLz5cclxuICAgICAgICA8QmxhbmtMaXN0PlxyXG4gICAgICAgICAgPFNOU0xvZ2luLz5cclxuICAgICAgICA8L0JsYW5rTGlzdD5cclxuXHJcbiAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pblBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU40QUFBQXhDQVlBQUFIQ2NpZDJBQUFBQVhOU1IwSUFyczRjNlFBQUQ4dEpSRUZVZUFIdEhRbVlUV1g3UGVjdWc0d2x1MnlsaFVyNWt5V0tVaHBpUmpYSkVvcXlwRUprS3lKTFpadVEvRDgvVW9aSWloR1pSS24wQzQyMVFpRmpHVU1oRXpOejd6M24vTy83ZlhQbW5EdjMzSEh2blh2bnpwMDUzL1BjT1dmTytjNjdmdnYzdmU4ckFLYk1FOVVVdW9ZNkNRTDhJeFFXTXBVWlViMmhhMWFXQU8xYVJjR2tzVmI5NDZEZXUwR09mZERPZ0gvN3RRV3ZMamRFYzkreHdwY2JMRkNtakFJcjFqcmMzcW4vcFA0aHdJRjlBcHc1TFlDQ1NucjJlVWw5bFhzTnIwaHp5UWpoalpBRHUyWUljZWhCSzBMbXllcmJVZUROOVU5RGRWKzZkcm9RWGgxU2xhQmZLSk5iUFRSQzlIZ0hPMnpkSXVZUzB2bGhUdEM4V1ZiNGVUOHZBbnBDZC8zSVFYYTQzNWh3TjVHKzlZWU54b3gzR3VFTjJqTTNoRUdEbWc4Z2tra1YvTm55eVJQTVY2ZUZ5Nm5WZDRpQzBqU1lVSXNTTExFNE0wZUNkdXVjOUpJM3F2NmJ0bVhycytUZVUwMzk5QXZqRGlzM2t4ODNoTHRXYlFYZVg4RmhVczIrdTduc0J3UXRxOWRtWnRWNmQ0SnZ2OFA3bUNmakVoOG1FS05EQjlxaGJ3ODdETzdQZS9KdW5lMmdOazBxMm8rWFdWaXpwVFpUZy9yeXZIcWhMdmpRd1hyd1B0MzR1N05uQmZqbGdBQURldHZod25tQW1QdU1tekVWaDNvdDlGWkdSVnhZVi9IMEdSaFdXTWpDZ1VkUUZFWElPbGs5c0FJZURvcDl4aW4yTDliRjAydmo0ck9BaW5ER1lzMmN6LzJldHo2dkNDc09ERFgzOWtUUFlhRytQd29tUThOZnNNSE10ejFsN05SMXVUditaMGptVmNrdy9NcnA4TjU1ZTRQNC9WWU82c3BsNHh5amhuS0I5ZWx1aC9HamJXeU5ZT3NXbXJaN3BuNjliR0REZmp3ekUyRGtFRHVrSHVmemsvUTBBZGF2NWQvNElteEQ1c1pOZGw4bklQVDVGVXRDZEc4YkdaN3Bhb2N5MXdEOGU3WVZsbjFnVEhpanhncTg4YllUVkJ6NzluaVM4TitsVG9oN0tBcTZkT1FqbFRwMUZSajlzZzJHRGVJQ29nblh0Tms2MVhyS2h6M3gyaFZNbTJTRGtlTkNPeG56UWxQUUhudGxMbWdZd2dqSXMweUVrWmhnb3k3V3pGRXpSTDhhd1paYUVZRDNkekVlT0JjQjhZYVFCRUVRdGhUckJqT0VzaXNTb0l0MW0xa2tKQnhDSWp6SDVUNGlvK1dzeGYreHdxRmZCU2hmQWFCZGV4eGs5dmNjblBvSXpzd1dnQVQ4cm5rMEc2QWZyVnZTNkQ0N1c0Q3o2UUtiRWFqdnBrM3l2MHpNbWVIL044VHZ3R2Y0TE1KZjNuLzlSWVJ0MzdxemJ6VEhWT0hxZWRMZnErOXBVVG5RT2FnS3c5K3JPL1ZYK2Jwalc5OEV0V21qOGRRdVAvRGZiSFlucFgyYktMZTl0dmF0bzRBRVRnWGt5Rzk4TGt2d0xsN2dVR25CbXhZVXFCQjh0RlFyQ0NSUW1pTTdjS09BdnFWRVYxbFN3T1VTWU8wbkZ1ajlwQjErK0k3anB6bjI4Zzh0OEh3ZmQxNkpwNVdKRnRpNVhjU1pJVzloa2xaYllNcnJWbGc0VCtPWHRzeFBueFNBNXZESm4xdGd3Tk4yT0h4UWdKU2RJcno0bkkzQmVIVzQ1OElINThLL3YrNFN1OHEzNjdkY2ZUNU1JSnEzTE5pcTcrNWRBdTVqdXFCTld4bHV2WjB2Z3RoUjdpUndXaU9vZjVQeHdzam8xNTB3K0JVWDdQbEpVMjZ6ZTJTWVBNNEtzVGpYWDVtVURVc1hvM0xYYUh4MGZrS0NLbFVVYUhrZnAzbnFMQ2YwNkMzQjc0YzFHS3BZdXZhVVFCWDhIMGRGc05rVWVHMmlDdzRmMHBSSENxMVpTNEZQVmxpaGVTc1pSaUZOdngwU1lSTFNNSGVoRXdnR0ZZQmdwSUJHbStmL0F1Z2FwMjNEaUVqTFF6RVNEQnZ0QW90VzZJTkJYeTZNVGxqcmlmRWZmeEJoMEZCWHJsSnpNNVRBbTRDVVZ3TGxWQ1JaRGs3OUxaS3NGWCtpU0hsZWxzZUxQL09SenFHSUI4bWlIUTdoKzBobnBLVFJ2MmlaODNZMnBNbzhVYU9mSU1nSmVOS3piRWtUUXNUeEt3Zy9scm91N1I1YzIyU25PVGJqcVk2MkVjZEVDU2U0Vkswem9qbmFqTkJDSUNzQ1R2dk5GSkVTb0lPMnB2SWlVbldjYUZONXB2SWlXQUlSVEhyQUs1RkxGbGhoMDBZUi9yNEljRXREQmZvT2RNRnRqWXdYakNOWVBrV2FkTDlIbTJTcXlLMEhqZmxhdDlrQnBVcVpTalNXVG5DZit0WG4wU1prZm9vajBsVHpVSC9JWExWYzIxTHg1enZLbTk4R2FuNndlanpxdmw5SGVXbm53aWpScHZQeFkzeUxpUGI5VHA3dzNDNVM5d3FOdmcvVk03K1U1K3NtcTlFcDYvd1lTTm5sRnhsdW9JYmpObFFnYVhuT250NXpQYSsrTVhvYWxYWGhQTjlnVFh6ZndzeXlBc0VaN0c4Q2wxbytsSHozVGNIQXZqUFZ5bmJGcWFiVGJqUnRmTktHNm9Za2tUM1hvNTc0R2hmK1krM3RRQnVoZVd1QStqL1ZLanBGZnZpZ3lNekQxT2NabDBUNGJCV3YrWFNrZzNiaG40elY5aXIxdUdpM2Z0NWlmcjc2OHpVV1BKR3VXZFdxK1I2TjRkL1NwaSsxS0NvZXVpYXZ0d1RVTXFtdzgxNERIckRrQmFUL3YxbUxndTJrYjBpeTVKNnFKNlluVFhQQkhYZzZ2bVZyQmZhbTZERnA5N1FUSGhjdndlcVAzWnZndTVweVd1NjVWNFk1TXptN1UyWm9COXlqeThud1dCZHV1UjhWcFVEM1hpN0l1b0piTGY4QVhLTmI2YzNLQXFEM2F1cjBxQVEvN1JDaGZIbnRHWjNNVC9xS0cyYjI2dXVDYlRsbURUS1MwUG9CQ1dJNlNsRGpPZ1UycnJOQSsxaFBid0VxYkYrdmZsVVJYNDgzakg5VEU0NnZoSGpMUjRPZnV2VTQwemFyQW1NbStBZDcwQkFKcUtrYi9JckVEZ2dGZWtpb1ZDbUFZV05jTU9NdFhnQ29VRFZwSmtOME9ZM3l6dkV1MkxlYmkvU1JCNktnRlpwdFVLS1RCdnpnTnVDUkNBRXFWdElVVG04Q1RYNHBiL0owSjl4NVYvNjFLcThWcmErRWtURG9OK0ZWRzd3NTB3bnhhRmxML3lkKzZvUXJWd1Q0ZXBNSVN4WmFjNXNoWCtIV3ZWNkdEL0M3NkhJS1BQMmNDN3IwY0MveFhickxIdGE2M21DM2JTZkRrY000WUVrVm9IcE5CVVlNdGpFREh6VS8rZDZZOENwWHJndkxHTDFYVS9vWllKYThINkhkamErVlFQM1cyOVh2cVFJQklxSHFFelVGenc2VThNQ1F1MkQwZVFweTM2dUxIZTdHVWw2K1BNQ3FGZGpYYkRHMkdTOElqa2o4Tm1EbHJVYkQrbkpZbXMwVVBna0VwTHp3a1d0aTFrdkFyejVQLzZGNUgzNEptTW9Mdnc0Q3BzQlVYc0NpQy8rSHB2TENyNE5BS2Joc0tpOVEwWVg1Ty9SMU5FNms4MzlocHNORTc2Y0U2Snh0L2FicHM5UzlEZlM3QWJUUW8vN3ZKemd6ZXlGS2dOWUgvOFNmd3BTbG5LdGJJenM3TzlFOHYxbUlLakJSbFRnSmtCT0lxS2lvbmtLVjQybTR3RktqSDFvdExpaHhVakFaTmlVUU5nbWdlOGFzazlVeVRQT1NzR25BUkZ3Q0pVQnhEMFN6MHBWQXpac3NoMVVDVk9mTXBiR3dxc0JFWGxJbFlGYThrcXA1aysrd1NzQ3NlR0VWdjRtOHBFb2dKT2ZjallSSlpqVjA2dlhvNzc1dE45MXdJejhkcTNweU00SnBQak1sRUtrU0NPbDV6VXcwMUJnenpKNGJneTVRSVpHbDdWc0pEaWhkSmxBSTVuZitTb0I4bXA0OUk0VHM5THMzZXY3QzdlVzlLU0thVXloUXFYTHhQY3dkc3FIbS9yMGl4TFdMS25DbEl3V1JHMnVDZFdCZnlNaGw1V0RNTUJ0UXhMakNUTE9uVzlHZnFyczFXaWp4bjhCQU54UkxVNDEwUjdpbVQ3RUNCZW5VSnpLQm5EN1pQN3JJWW8zTVYvYjhwT25wK0RHUm1TSW1UTlZzYmZSNDh0NGZPeUl5K3ZST2pQUG1LUTcvdTBzN2lCeE5teHg4MEZQUlBuYnBLczJ4Y0JESjlRbVVoS1pQS3pGRTQ1WXZzVGRJRjZGMkhSbml1MHJROW1ITjJDMWxwd0Jmb1JmcW5lZ21IRThxUUZTT1M0Vzc3bGJnNVZHZUZvVW4wRWpNcnF2ckwvV3pRY1BiRkxCaU9kMitEWDFzb09kc01nc2Q4SklFbGRHSmN0NUVOcmZKR1B4NXhydE9xRkNSdjZkQy91ZFpZQVp5bEo5TU9zbXJkY2ZPRWpTNFZXR2V1YTljcGlHL3dvek5UcUN4TnZwUmdwUmRkdlRqSVNPZDNFQ2NvSkU5OG5vMGNhWElWUFZ2bE9ISnB5U2ZEZFBJU0cvZmJnRVdKanFoV2cyTmRncHpTWDZLangwVm9GcDFnQ1pOSlhpcWp3U2xTeE8xN29rTTVBZ09CYmNlTThFRk5JcWFtMkNESXpobElYZjBEVytUNGY2SFpIaTRnMmFYUnM2dFAxeGtSZmdpVktpZ1FBdDBFdDFuZ09SbUV1dU9wZkQvMDVxbUlPTzIrZGJBK1lWVjBjcTNYOThGSTNQYUtRQnlLMzhtVFdRRktXbFROcnkzeU1tOGYvZU01eldIRE9GSERiVkRqNmNsV1BXNUF6NWVsODFzbmF0V05hNTBSQmRaWjU3RDJLbHFTajB1d21YMFdkdi9CUmNzWHU0QXNwL2J1OXNDQ1FieDZPaWJ1SGdaVHA4U2NQN01leWVLQzdBVjNlTlRnU2Q2S0szR0hqVU5JNjUzaUpVeFpEd3dkeFprcFVwcFBzWnhyWG1kekJ6b0xFeDA1Rlk2ZWtjNVlqcEpNR2VCQTlZa1owTzkrZ3FNSFlGV3BGajQ4MHNIZnhWWi9OY3lXSkVvc0s2KzB0RjNWSGxudnVkazcrYk1kOEM2TlZaUUhRcm80WDZ6MlFJVW5lMlJPUFRHL29ZTEd6SmdFZUVvMk5yOER4encyY1pzaUgxTXdwNlpPeXlnYjZtQm1UaldCZ256bkl6bUpTc2RVTDRpZCs5eEVJZlBSU1dGakpLaEl3TnpxNUdmWUlhTUNEN00vUERwMyszT0dUNDlrc2Y0bjNxamRKd0xuVHNuUUNjc0JQL0NubzFpSFhicmpBVUdiZEdwQVJvNXRtQjBsOGJXbm5wYm8wU09EZnBpOUJqeVNFSHpvN2tKVmhnODNBa3Z2aXpCL1Bjc3JKSWtMckhDd0JlbEhIdDRJeWkrUFN0THg3RXhVUSthWDJyUVVJWkZ5eHhBc1NISlBZb0RQV3ZvMC94M3JXenFRSEVtcG96bkxiUWt1ZWNoQncwVXA0S2NNZWdYMlA3NlUyQW00dVRSZ3dKa0puM0tHeGNYeXVlZkRNQ29PaUpyWUtpU3FxbEpqaU1KL2ZCYWZSZXVhOGdxM2gyTlpkWWllWXRaNFEvRHRlc3FyQWRwV2tDdklMN2d4Rk1GekM4QUJmOVVmeFFBNVFIMEgzQnRKZXdoc05Ca1pYR3QwckNTaG5yVUsxQXNqYjBwQXRBd2g0WjhOanRmSEJDeFhIejVoZWhSK0h5aHhkYzhUM1RuK1B0MGkySUxFZy9HeU13N3lQVTNLTkNsa3gycVZwTVpqZDdnVWZnbmlsaCt0UXJsN1h1ajU3WHFLTXlUU2FNN0ZhRGdOMThsODZKR0RqaG9UanZpTmQ1cnZUN0Z5Znc3NUlWQnpqVTJmcHVOd1Y4c3JCRzdlSUhMZlBGOEM2dGNuMnh3c2w2ejk3TmFvMVkyR250bzlKQ3lGbnY2WTBkNGZuSzNNM3U2aGNtRmVzNmlra0s2cXFsbmtpYmVzekN5ajZUSlNmL2E0NzVTWmNCQU1DNklmVnhpUXd5UERDRjRRSXMzRjg1N0FxYlZOVFVRenNXTEF1emZJOEI1YkhucjFKT2hjUk9GMFVjVnR0Y1RkcHhEeVRCMmtzWWt6VU9lZXR3T2NjakhTOE8xNXlvV211dVVROWM3TksralJOc3VsYXNBM054QTYxWm8rQmlGbmw4YTNhazlVNzlYcjJrNDNQd2RveXBSOEYyYTExQ2lXRE0vN3hmWk1MSnFOZjdzMGlXQk5SQU5FQjgxRm1vNmhSR1BmamtnTUdkY1JBdEZQS0loY0t2V0drNWFLRWs5RHRBU1hSQlpES2J3ektjVWVwYlIwMER3YVRSdzhHZDBlSUx6dkp0dVVZQkNOdS9CbGN0ek9BK2wxVXNhdW1abTRuZklIOG1mOUVCelRXcm9LQjNGU25RSzU2R05NUzg1WWFFOE83ZGJtRXlhdFpEWVVMd2VPbWtoaHlxVXFBR2hSakQxRHhHdVJkMFJqcUxtN3FMUUtoNDU0NlJneUpRcVhnc3c1QlVuK3ArU2NYaEFMUk1KbEwySzZEOVVJRFluWTJ1TGl3YTBlSEZOV1lYNXAzb1FlMHUxVUVRMGd5YnhRWk5Bb1ZVOEdvL0hkNVBjeHV0QjQ4SUVaRW9nd2lSUWFCVXZ3dVJpa210S0lLUVNDTm5pU2tpcE5vR2JFb2h3Q1pnVkw4SVZhSklmbVJJd0sxNWs2czJrT3NJbElEcGNRa3FFODJDU2Iwb2dvaVJBZFU2OHVZWFMyb3pMSEZGNk00bU5ZQWxRWGFNNng3ZjNBU3pSMGRFVmR5U1hmcVptRGJHNzNhcmNncnpsSEJDS1lDNU4wazBKaEY4Q2w3R0hPM1E2VGY2b1dVem1rb3lNRER6MkR0TC9BZGNRWWN2Z1kzMUZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9