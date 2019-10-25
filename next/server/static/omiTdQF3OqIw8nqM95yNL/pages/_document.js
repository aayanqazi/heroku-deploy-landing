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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5w0S");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "4D8t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__("dZZJ"));

var _isArray = _interopRequireDefault(__webpack_require__("ysci"));

var _keys = _interopRequireDefault(__webpack_require__("TPw6"));

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _now = _interopRequireDefault(__webpack_require__("hc8B"));

var _set = _interopRequireDefault(__webpack_require__("C3vT"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("WWUj"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("PO/Z");

var _utils2 = __webpack_require__("fvxO");

exports.DocumentContext = _utils2.DocumentContext;
exports.DocumentInitialProps = _utils2.DocumentInitialProps;
exports.DocumentProps = _utils2.DocumentProps;

var _htmlescape = __webpack_require__("fl2h");

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("XIQF");
/* eslint-disable */


function middleware(_x) {
  return _middleware.apply(this, arguments);
}

function _middleware() {
  _middleware = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      req,
      res
    } = _ref;
  });
  return _middleware.apply(this, arguments);
}

function dedupe(bundles) {
  const files = new _set.default();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  static getInitialProps(_ref2) {
    return (0, _asyncToGenerator2.default)(function* () {
      let {
        renderPage
      } = _ref2;
      const {
        html,
        head,
        dataOnly
      } = yield renderPage();
      const styles = (0, _server.default)();
      return {
        html,
        head,
        styles,
        dataOnly
      };
    })();
  }

  getChildContext() {
    return {
      _documentProps: this.props,
      // In dev we invalidate the cache by appending a timestamp to the resource URL.
      // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
      // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
      _devOnlyInvalidateCacheQueryString:  false ? undefined : ''
    };
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.childContextTypes = {
  _documentProps: _propTypes.default.any,
  _devOnlyInvalidateCacheQueryString: _propTypes.default.string
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */

};

class Html extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode
    } = this.context._documentProps;
    return _react.default.createElement("html", (0, _extends2.default)({}, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && "production" !== 'production' ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextTypes = {
  _documentProps: _propTypes.default.any
};
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    return cssFiles.length === 0 ? null : cssFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: assetPrefix + "/_next/" + encodeURI(file),
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: assetPrefix + "/_next/" + encodeURI(bundle.file) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;

    if (!files || files.length === 0) {
      return null;
    }

    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return files.map(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      // This also filters out non-JS assets.
      if (!file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    }).filter(Boolean);
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = !inAmpMode ? head : _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;
      let badProp = '';

      if (type === 'meta' && props.name === 'viewport') {
        badProp = 'name="viewport"';
      } else if (type === 'link' && props.rel === 'canonical') {
        hasCanonicalRel = true;
      } else if (type === 'link' && props.rel === 'amphtml') {
        hasAmphtmlRel = true;
      } else if (type === 'script') {
        // only block if
        // 1. it has a src and isn't pointing to ampproject's CDN
        // 2. it is using dangerouslySetInnerHTML without a type or
        // a type of text/javascript
        if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
          badProp = '<script';
          (0, _keys.default)(props).forEach(prop => {
            badProp += " " + prop + "=\"" + props[prop] + "\"";
          });
          badProp += '/>';
        }
      }

      if (badProp) {
        console.warn("Found conflicting amp tag \"" + child.type + "\" with conflicting prop " + badProp + " in " + __NEXT_DATA__.page + ". https://err.sh/next.js/conflicting-amp-tag");
        return null;
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = (0, _isArray.default)(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    (0, _isArray.default)(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.map(child => {
        if ((0, _isArray.default)(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      dangerouslySetInnerHTML: {
        __html: "body{display:none}"
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: "body{display:block}"
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI("/_next/static/" + buildId + "/pages" + getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI("/_next/static/" + buildId + "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), this.getCssLinks(), styles || null));
  }

}

exports.Head = Head;
Head.contextTypes = {
  _documentProps: _propTypes.default.any,
  _devOnlyInvalidateCacheQueryString: _propTypes.default.string
};
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return '__NEXT_AMP_RENDER_TARGET__';
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextTypes = {
  _documentProps: _propTypes.default.any,
  _devOnlyInvalidateCacheQueryString: _propTypes.default.string
};

class NextScript extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", (0, _extends2.default)({
        async: true,
        key: bundle.file,
        src: assetPrefix + "/_next/" + encodeURI(bundle.file) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;

    if (!files || files.length === 0) {
      return null;
    }

    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return files.map(file => {
      // Only render .js files here
      if (!/\.js$/.test(file)) {
        return null;
      }

      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", (0, _extends2.default)({
        key: file,
        src: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = (0, _stringify.default)(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error("Circular structure in \"getInitialProps\" result of page \"" + __NEXT_DATA__.page + "\". https://err.sh/zeit/next.js/circular-structure");
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: assetPrefix + "/_next/" + file + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null);
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (false) {}

    const pageScript = [_react.default.createElement("script", (0, _extends2.default)({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI("/_next/static/" + buildId + "/pages" + getPageFile(page)) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", (0, _extends2.default)({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + ("/_next/static/" + buildId + "/pages/_app.js") + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());
  }

}

exports.NextScript = NextScript;
NextScript.contextTypes = {
  _documentProps: _propTypes.default.any,
  _devOnlyInvalidateCacheQueryString: _propTypes.default.string
};
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : "" + asPath + (asPath.includes('?') ? '&' : '?') + "amp=1";
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? "/index." + buildId + ".js" : '/index.js';
  }

  return buildId ? page + "." + buildId + ".js" : page + ".js";
}

/***/ }),

/***/ "5Tpg":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("FIas");

var _Object$defineProperty = __webpack_require__("LcAa");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDocument; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sf+I");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("euVh");
/* harmony import */ var common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheet"]();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(__jsx(App, props))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialProps, {
        styles: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return __jsx("html", {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], null, __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_4___default.a
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], null)));
  }

}

/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "C3vT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "Ml6p":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "PO/Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("XIQF");
const internalPrefixes = [/^\/_next\//, /^\/static\//];
function isInternalUrl(url) {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }
    return false;
}
exports.isInternalUrl = isInternalUrl;
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WWUj":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("Ml6p");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "XIQF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("LcAa");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZZJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "euVh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC6FBMVEVCZ7L///9CZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7JCZ7IjLrQCAAAA93RSTlMAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9RUlRVVlhZWltcXV5fYGFiY2RlZmdo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"

/***/ }),

/***/ "fl2h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("TPw6");

var _Object$defineProperty = __webpack_require__("LcAa");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
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

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
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
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "hc8B":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rNCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("FIas");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("LcAa");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: d:/projects/react_optir/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sf+I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4D8t")


/***/ }),

/***/ "uFB0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("OCF2");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "ysci":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });