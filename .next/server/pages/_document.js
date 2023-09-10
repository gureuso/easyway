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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

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

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

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

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentContext", {
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
});
Object.defineProperty(exports, "DocumentInitialProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
});
Object.defineProperty(exports, "DocumentProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
});
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/false, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/false, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\wyun1\\Documents\\NodeJS\\easyway\\pages\\_document.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Html"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Head"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Main"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["NextScript"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./pages/_document.tsx");


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

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9oZWFkLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9zY3JpcHQudHN4Iiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImluaXRpYWxQcm9wcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FB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QUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFXRDs7QUFsQitCOztBQXFCbkJMLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJleHBvcnQgY29uc3QgRE9NQXR0cmlidXRlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgaHRtbEZvcjogJ2ZvcicsXG4gIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICBub01vZHVsZTogJ25vTW9kdWxlJyxcbn1cblxuZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oeyB0eXBlLCBwcm9wcyB9OiBKU1guRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICBmb3IgKGNvbnN0IHAgaW4gcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZVxuICAgIGlmIChwID09PSAnY2hpbGRyZW4nIHx8IHAgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIGNvbnRpbnVlXG5cbiAgICAvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbiAgICBpZiAocHJvcHNbcF0gPT09IHVuZGVmaW5lZCkgY29udGludWVcblxuICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoXG4gICAgICB0eXBlID09PSAnc2NyaXB0JyAmJlxuICAgICAgKGF0dHIgPT09ICdhc3luYycgfHwgYXR0ciA9PT0gJ2RlZmVyJyB8fCBhdHRyID09PSAnbm9Nb2R1bGUnKVxuICAgICkge1xuICAgICAgOyhlbCBhcyBIVE1MU2NyaXB0RWxlbWVudClbYXR0cl0gPSAhIXByb3BzW3BdXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGNoaWxkcmVuLCBkYW5nZXJvdXNseVNldElubmVySFRNTCB9ID0gcHJvcHNcbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZTogc3RyaW5nLCBjb21wb25lbnRzOiBKU1guRWxlbWVudFtdKTogdm9pZCB7XG4gIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgY29uc3QgaGVhZENvdW50RWw6IEhUTUxNZXRhRWxlbWVudCA9IGhlYWRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XSdcbiAgKSBhcyBIVE1MTWV0YUVsZW1lbnRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIWhlYWRDb3VudEVsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJ1xuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGVhZENvdW50ID0gTnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpXG4gIGNvbnN0IG9sZFRhZ3M6IEVsZW1lbnRbXSA9IFtdXG5cbiAgZm9yIChcbiAgICBsZXQgaSA9IDAsIGogPSBoZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGkgPCBoZWFkQ291bnQ7XG4gICAgaSsrLCBqID0gaiEucHJldmlvdXNFbGVtZW50U2libGluZ1xuICApIHtcbiAgICBpZiAoaiEudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlKSB7XG4gICAgICBvbGRUYWdzLnB1c2goaiEpXG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1RhZ3MgPSAoY29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pIGFzIEhUTUxFbGVtZW50W10pLmZpbHRlcihcbiAgICAobmV3VGFnKSA9PiB7XG4gICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBjb25zdCBvbGRUYWcgPSBvbGRUYWdzW2tdXG4gICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xuICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGssIDEpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICApXG5cbiAgb2xkVGFncy5mb3JFYWNoKCh0KSA9PiB0LnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHQpKVxuICBuZXdUYWdzLmZvckVhY2goKHQpID0+IGhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpKVxuICBoZWFkQ291bnRFbC5jb250ZW50ID0gKGhlYWRDb3VudCAtIG9sZFRhZ3MubGVuZ3RoICsgbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCk6IHtcbiAgbW91bnRlZEluc3RhbmNlczogU2V0PHVua25vd24+XG4gIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB2b2lkXG59IHtcbiAgbGV0IHVwZGF0ZVByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxuICAgIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlID0gKHVwZGF0ZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHByb21pc2UgIT09IHVwZGF0ZVByb21pc2UpIHJldHVyblxuXG4gICAgICAgIHVwZGF0ZVByb21pc2UgPSBudWxsXG4gICAgICAgIGNvbnN0IHRhZ3M6IFJlY29yZDxzdHJpbmcsIEpTWC5FbGVtZW50W10+ID0ge31cblxuICAgICAgICBoZWFkLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbiAgICAgICAgICAgIC8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG4gICAgICAgICAgICBoLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgICAgaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSAmJlxuICAgICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGgucHJvcHMuaHJlZiA9IGgucHJvcHNbJ2RhdGEtaHJlZiddXG4gICAgICAgICAgICBoLnByb3BzWydkYXRhLWhyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdXG4gICAgICAgICAgY29tcG9uZW50cy5wdXNoKGgpXG4gICAgICAgICAgdGFnc1toLnR5cGVdID0gY29tcG9uZW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29tcG9uZW50ID0gdGFncy50aXRsZSA/IHRhZ3MudGl0bGVbMF0gOiBudWxsXG4gICAgICAgIGxldCB0aXRsZSA9ICcnXG4gICAgICAgIGlmICh0aXRsZUNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzXG4gICAgICAgICAgdGl0bGUgPVxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICAgICAgICA7WydtZXRhJywgJ2Jhc2UnLCAnbGluaycsICdzdHlsZScsICdzY3JpcHQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSlcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH0sXG4gIH1cbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2NyaXB0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBET01BdHRyaWJ1dGVOYW1lcyB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKVxuY29uc3QgTG9hZENhY2hlID0gbmV3IFNldCgpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0UHJvcHMgZXh0ZW5kcyBTY3JpcHRIVE1MQXR0cmlidXRlczxIVE1MU2NyaXB0RWxlbWVudD4ge1xuICBzdHJhdGVneT86ICdhZnRlckludGVyYWN0aXZlJyB8ICdsYXp5T25sb2FkJyB8ICdiZWZvcmVJbnRlcmFjdGl2ZSdcbiAgaWQ/OiBzdHJpbmdcbiAgb25Mb2FkPzogKGU6IGFueSkgPT4gdm9pZFxuICBvbkVycm9yPzogKGU6IGFueSkgPT4gdm9pZFxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgU2NyaXB0UHJvcHNgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB0eXBlIFByb3BzID0gU2NyaXB0UHJvcHNcblxuY29uc3QgaWdub3JlUHJvcHMgPSBbXG4gICdvbkxvYWQnLFxuICAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICAnY2hpbGRyZW4nLFxuICAnb25FcnJvcicsXG4gICdzdHJhdGVneScsXG5dXG5cbmNvbnN0IGxvYWRTY3JpcHQgPSAocHJvcHM6IFNjcmlwdFByb3BzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHtcbiAgICBzcmMsXG4gICAgaWQsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgY2hpbGRyZW4gPSAnJyxcbiAgICBzdHJhdGVneSA9ICdhZnRlckludGVyYWN0aXZlJyxcbiAgICBvbkVycm9yLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBjYWNoZUtleSA9IGlkIHx8IHNyY1xuXG4gIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWRcbiAgaWYgKGNhY2hlS2V5ICYmIExvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDb250ZW50cyBvZiB0aGlzIHNjcmlwdCBhcmUgYWxyZWFkeSBsb2FkaW5nL2xvYWRlZFxuICBpZiAoU2NyaXB0Q2FjaGUuaGFzKHNyYykpIHtcbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuICAgIC8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cbiAgICBTY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCwgb25FcnJvcilcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlc29sdmUoKVxuICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICBvbkxvYWQuY2FsbCh0aGlzLCBlKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVqZWN0KGUpXG4gICAgfSlcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcihlKVxuICAgIH1cbiAgfSlcblxuICBpZiAoc3JjKSB7XG4gICAgU2NyaXB0Q2FjaGUuc2V0KHNyYywgbG9hZFByb21pc2UpXG4gIH1cbiAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcblxuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9IGVsc2UgaWYgKHNyYykge1xuICAgIGVsLnNyYyA9IHNyY1xuICB9XG5cbiAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlnbm9yZVByb3BzLmluY2x1ZGVzKGspKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1trXSB8fCBrLnRvTG93ZXJDYXNlKClcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gIH1cblxuICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnNjcmlwdCcsIHN0cmF0ZWd5KVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHM6IFNjcmlwdFByb3BzKSB7XG4gIGNvbnN0IHsgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScgfSA9IHByb3BzXG4gIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgbG9hZFNjcmlwdChwcm9wcylcbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHM6IFNjcmlwdFByb3BzKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtczogU2NyaXB0UHJvcHNbXSkge1xuICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpXG59XG5cbmZ1bmN0aW9uIFNjcmlwdChwcm9wczogU2NyaXB0UHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7XG4gICAgc3JjID0gJycsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScsXG4gICAgb25FcnJvcixcbiAgICAuLi5yZXN0UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gIGNvbnN0IHsgdXBkYXRlU2NyaXB0cywgc2NyaXB0cywgZ2V0SXNTc3IgfSA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICAgIGxvYWRTY3JpcHQocHJvcHMpXG4gICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcylcbiAgICB9XG4gIH0sIFtwcm9wcywgc3RyYXRlZ3ldKVxuXG4gIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XG4gICAgICBzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmMsXG4gICAgICAgICAgb25Mb2FkLFxuICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cylcbiAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmIGdldElzU3NyKCkpIHtcbiAgICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWQgZHVyaW5nIFNTUlxuICAgICAgTG9hZENhY2hlLmFkZChyZXN0UHJvcHMuaWQgfHwgc3JjKVxuICAgIH0gZWxzZSBpZiAoZ2V0SXNTc3IgJiYgIWdldElzU3NyKCkpIHtcbiAgICAgIGxvYWRTY3JpcHQocHJvcHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHtcbiAgQk9EWV9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL3NoYXJlZC9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbiAgSHRtbENvbnRleHQsXG4gIEh0bWxQcm9wcyxcbn0gZnJvbSAnLi4vc2hhcmVkL2xpYi91dGlscydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QsIGdldFBhZ2VGaWxlcyB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5pbXBvcnQgU2NyaXB0LCB7IFNjcmlwdFByb3BzIH0gZnJvbSAnLi4vY2xpZW50L3NjcmlwdCdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG50eXBlIERvY3VtZW50RmlsZXMgPSB7XG4gIHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIGFsbEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKFxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0LFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBpbkFtcE1vZGU6IGJvb2xlYW5cbik6IERvY3VtZW50RmlsZXMge1xuICBjb25zdCBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgJy9fYXBwJylcbiAgY29uc3QgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGluQW1wTW9kZVxuICAgID8gW11cbiAgICA6IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSlcblxuICByZXR1cm4ge1xuICAgIHNoYXJlZEZpbGVzLFxuICAgIHBhZ2VGaWxlcyxcbiAgICBhbGxGaWxlczogWy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLCAuLi5wYWdlRmlsZXNdKV0sXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQ6IEh0bWxQcm9wcywgcHJvcHM6IE9yaWdpblByb3BzKSB7XG4gIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAvLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbiAgY29uc3Qge1xuICAgIGFzc2V0UHJlZml4LFxuICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgIC5maWx0ZXIoXG4gICAgICAocG9seWZpbGwpID0+IHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgIClcbiAgICAubWFwKChwb2x5ZmlsbCkgPT4gKFxuICAgICAgPHNjcmlwdFxuICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXtwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfVxuICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAvPlxuICAgICkpXG59XG5cbmZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQ6IEh0bWxQcm9wcywgcHJvcHM6IE9yaWdpblByb3BzKSB7XG4gIGNvbnN0IHsgc2NyaXB0TG9hZGVyLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyB9ID0gY29udGV4dFxuXG4gIHJldHVybiAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoXG4gICAgKGZpbGU6IFNjcmlwdFByb3BzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmF0ZWd5LCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5zY3JpcHRQcm9wc31cbiAgICAgICAgICBrZXk9e3NjcmlwdFByb3BzLnNyYyB8fCBpbmRleH1cbiAgICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgICBkYXRhLW5zY3JpcHQ9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoXG4gIGNvbnRleHQ6IEh0bWxQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBkeW5hbWljSW1wb3J0cyxcbiAgICBhc3NldFByZWZpeCxcbiAgICBpc0RldmVsb3BtZW50LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpID0+IHtcbiAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0U2NyaXB0cyhcbiAgY29udGV4dDogSHRtbFByb3BzLFxuICBwcm9wczogT3JpZ2luUHJvcHMsXG4gIGZpbGVzOiBEb2N1bWVudEZpbGVzXG4pIHtcbiAgY29uc3Qge1xuICAgIGFzc2V0UHJlZml4LFxuICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgaXNEZXZlbG9wbWVudCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgKVxuXG4gIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNjcmlwdFxuICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgIC8+XG4gICAgKVxuICB9KVxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIdG1sKFxuICBwcm9wczogUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgUmVhY3QuSHRtbEhUTUxBdHRyaWJ1dGVzPEhUTUxIdG1sRWxlbWVudD4sXG4gICAgSFRNTEh0bWxFbGVtZW50XG4gID5cbikge1xuICBjb25zdCB7IGluQW1wTW9kZSwgZG9jQ29tcG9uZW50c1JlbmRlcmVkLCBsb2NhbGUgfSA9IHVzZUNvbnRleHQoSHRtbENvbnRleHQpXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEh0bWxDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBIdG1sQ29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZywgZHluYW1pY0ltcG9ydHMgfSA9XG4gICAgICB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIGNvbnN0IHNoYXJlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpXG5cbiAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgIGxldCB1bm1hbmdlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW10pXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmNzcycpKSlcbiAgICApXG4gICAgaWYgKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IFNldChjc3NGaWxlcylcbiAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoXG4gICAgICAgIChmKSA9PiAhKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpXG4gICAgICApXG4gICAgICB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChkeW5hbWljQ3NzRmlsZXMpXG4gICAgICBjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcylcbiAgICB9XG5cbiAgICBsZXQgY3NzTGlua0VsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW11cbiAgICBjc3NGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBpc1NoYXJlZEZpbGUgPSBzaGFyZWRGaWxlcy5oYXMoZmlsZSlcblxuICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTKSB7XG4gICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2Ake2ZpbGV9LXByZWxvYWRgfVxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKVxuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS1uLWc9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRhdGEtbi1wPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UU1xuICAgICkge1xuICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KFxuICAgICAgICBjc3NMaW5rRWxlbWVudHNcbiAgICAgICkgYXMgUmVhY3RFbGVtZW50W11cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjc3NMaW5rRWxlbWVudHNcbiAgfVxuXG4gIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMsIGFzc2V0UHJlZml4LCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyB9ID1cbiAgICAgIHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGR5bmFtaWNJbXBvcnRzXG4gICAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG5cbiAgZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZywgc2NyaXB0TG9hZGVyIH0gPVxuICAgICAgdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICBdXG4gIH1cblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRTY3JpcHRzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdFByb3BzW10gPSBbXVxuICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW46IFJlYWN0Tm9kZVtdID0gW11cblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gU2NyaXB0KSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSA9IChcbiAgICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXVxuICAgICAgICAgICkuY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgWydsYXp5T25sb2FkJywgJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlciA9IHNjcmlwdExvYWRlckl0ZW1zXG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlblxuICB9XG5cbiAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlOiBSZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChub2RlLCAoYzogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoeyB1cmwgfSkgPT5cbiAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPVxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmdcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbilcbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGNoaWxkPy50eXBlID09PSAnbWV0YScgJiZcbiAgICAgICAgICAgIGNoaWxkPy5wcm9wcz8ubmFtZSA9PT0gJ3ZpZXdwb3J0J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgIWluQW1wTW9kZVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY2hpbGRyZW4gPSB0aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pXG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmIChcbiAgICAgICAgICA8bWV0YSBuYW1lPVwibmV4dC1mb250LXByZWNvbm5lY3RcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfSU1BR0VTICYmIChcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm5leHQtaW1hZ2UtcHJlbG9hZFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChIdG1sQ29udGV4dClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWVcblxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57Qk9EWV9SRU5ERVJfVEFSR0VUfTwvPlxuICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiPntCT0RZX1JFTkRFUl9UQVJHRVR9PC9kaXY+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEh0bWxDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBIdG1sQ29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGNvbnRleHQ6IFJlYWRvbmx5PEh0bWxQcm9wcz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gY29udGV4dFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZVxuXG4gICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlcyxcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FtcERldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzXG4gICAgICAgICAgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcblxyXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBhbnkpIHtcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgcmV0dXJuIHsgLi4uaW5pdGlhbFByb3BzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0Lz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9