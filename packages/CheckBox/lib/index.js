(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/CheckBox/src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.8.6\n * react.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar k=__webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\"),n=\"function\"===typeof Symbol&&Symbol.for,p=n?Symbol.for(\"react.element\"):60103,q=n?Symbol.for(\"react.portal\"):60106,r=n?Symbol.for(\"react.fragment\"):60107,t=n?Symbol.for(\"react.strict_mode\"):60108,u=n?Symbol.for(\"react.profiler\"):60114,v=n?Symbol.for(\"react.provider\"):60109,w=n?Symbol.for(\"react.context\"):60110,x=n?Symbol.for(\"react.concurrent_mode\"):60111,y=n?Symbol.for(\"react.forward_ref\"):60112,z=n?Symbol.for(\"react.suspense\"):60113,aa=n?Symbol.for(\"react.memo\"):\n60115,ba=n?Symbol.for(\"react.lazy\"):60116,A=\"function\"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name=\"Invariant Violation\"}a.framesToPop=1;throw a;}}\nfunction B(a){for(var b=arguments.length-1,d=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+a,c=0;c<b;c++)d+=\"&args[]=\"+encodeURIComponent(arguments[c+1]);ca(!1,\"Minified React error #\"+a+\"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. \",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};\nfunction E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){\"object\"!==typeof a&&\"function\"!==typeof a&&null!=a?B(\"85\"):void 0;this.updater.enqueueSetState(this,a,b,\"setState\")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,\"forceUpdate\")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;\nH.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};\nfunction M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=\"\"+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}\nfunction da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return\"object\"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={\"=\":\"=0\",\":\":\"=2\"};return\"$\"+(\"\"+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}\nfunction R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}\nfunction S(a,b,d,c){var e=typeof a;if(\"undefined\"===e||\"boolean\"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case \"string\":case \"number\":g=!0;break;case \"object\":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,\"\"===b?\".\"+T(a,0):b),1;g=0;b=\"\"===b?\".\":b+\":\";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||\"object\"!==typeof a?f=null:(f=A&&a[A]||a[\"@@iterator\"],f=\"function\"===typeof f?f:null),\"function\"===typeof f)for(a=f.call(a),h=\n0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else\"object\"===e&&(d=\"\"+a,B(\"31\",\"[object Object]\"===d?\"object with keys {\"+Object.keys(a).join(\", \")+\"}\":d,\"\"));return g}function U(a,b,d){return null==a?0:S(a,\"\",b,d)}function T(a,b){return\"object\"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}\nfunction fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?\"\":(\"\"+a.key).replace(O,\"$&/\")+\"/\")+d)),c.push(a))}function V(a,b,d,c,e){var g=\"\";null!=d&&(g=(\"\"+d).replace(O,\"$&/\")+\"/\");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B(\"321\"):void 0;return a}\nvar X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B(\"143\");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,\n_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,\nb,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B(\"267\",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=\nb){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=\"\"+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:\"16.8.6\",\nunstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;\n\n\n//# sourceURL=webpack:///./node_modules/react/cjs/react.production.min.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ \"./node_modules/react/cjs/react.production.min.js\");\n} else {}\n\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./packages/CheckBox/src/index.scss":
/*!******************************************!*\
  !*** ./packages/CheckBox/src/index.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/CheckBox/src/index.scss?");

/***/ }),

/***/ "./packages/CheckBox/src/index.tsx":
/*!*****************************************************!*\
  !*** ./packages/CheckBox/src/index.tsx + 2 modules ***!
  \*****************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(\"./node_modules/react/index.js\");\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/CheckBox.tsx\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar CheckBox_Checkbox = function (_React$Component) {\n  _inherits(Checkbox, _React$Component);\n\n  _createClass(Checkbox, null, [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props, state) {\n      if (props.checked !== undefined) {\n        return _objectSpread({}, state, {\n          checked: props.checked\n        });\n      }\n\n      return null;\n    }\n  }]);\n\n  function Checkbox(props) {\n    var _this;\n\n    _classCallCheck(this, Checkbox);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"input\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var _this$props = _this.props,\n          disabled = _this$props.disabled,\n          onChange = _this$props.onChange;\n\n      if (disabled) {\n        return;\n      }\n\n      if (_this.props.checked === undefined) {\n        _this.setState({\n          checked: e.target.checked\n        });\n      }\n\n      onChange && onChange(e);\n    });\n\n    _this.state = {\n      checked: props.checked !== undefined ? props.checked : !!props.defaultChecked\n    };\n    _this.input = react[\"createRef\"]();\n    return _this;\n  }\n\n  _createClass(Checkbox, [{\n    key: \"focus\",\n    value: function focus() {\n      this.input.current.focus();\n    }\n  }, {\n    key: \"blur\",\n    value: function blur() {\n      this.input.current.blur();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          className = _this$props2.className,\n          style = _this$props2.style,\n          checked = _this$props2.checked,\n          children = _this$props2.children,\n          onChange = _this$props2.onChange,\n          rest = _objectWithoutProperties(_this$props2, [\"className\", \"style\", \"checked\", \"children\", \"onChange\"]);\n\n      return react[\"createElement\"](\"div\", {\n        className: className,\n        style: style\n      }, react[\"createElement\"](\"input\", _extends({}, rest, {\n        type: \"checkbox\",\n        checked: this.state.checked,\n        onChange: this.handleChange,\n        ref: this.input\n      })), react[\"createElement\"](\"span\", null, children));\n    }\n  }]);\n\n  return Checkbox;\n}(react[\"Component\"]);\n\n_defineProperty(CheckBox_Checkbox, \"Group\", void 0);\n\n_defineProperty(CheckBox_Checkbox, \"defaultProps\", {\n  className: '',\n  style: {},\n  defaultChecked: false,\n  onChange: function onChange() {}\n});\n\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/CheckboxGroup.tsx\nfunction CheckboxGroup_typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { CheckboxGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { CheckboxGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return CheckboxGroup_typeof(obj); }\n\nfunction CheckboxGroup_extends() { CheckboxGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CheckboxGroup_extends.apply(this, arguments); }\n\nfunction CheckboxGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CheckboxGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction CheckboxGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction CheckboxGroup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction CheckboxGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CheckboxGroup_ownKeys(source, true).forEach(function (key) { CheckboxGroup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CheckboxGroup_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction CheckboxGroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction CheckboxGroup_possibleConstructorReturn(self, call) { if (call && (CheckboxGroup_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return CheckboxGroup_assertThisInitialized(self); }\n\nfunction CheckboxGroup_getPrototypeOf(o) { CheckboxGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CheckboxGroup_getPrototypeOf(o); }\n\nfunction CheckboxGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction CheckboxGroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction CheckboxGroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) CheckboxGroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) CheckboxGroup_defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction CheckboxGroup_inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CheckboxGroup_setPrototypeOf(subClass, superClass); }\n\nfunction CheckboxGroup_setPrototypeOf(o, p) { CheckboxGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CheckboxGroup_setPrototypeOf(o, p); }\n\nfunction CheckboxGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar CheckboxGroup_CheckboxGroup = function (_React$Component) {\n  CheckboxGroup_inherits(CheckboxGroup, _React$Component);\n\n  CheckboxGroup_createClass(CheckboxGroup, null, [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props, state) {\n      if (props.value !== undefined) {\n        return CheckboxGroup_objectSpread({}, state, {\n          value: props.value\n        });\n      }\n\n      return null;\n    }\n  }]);\n\n  function CheckboxGroup(props) {\n    var _this;\n\n    CheckboxGroup_classCallCheck(this, CheckboxGroup);\n\n    _this = CheckboxGroup_possibleConstructorReturn(this, CheckboxGroup_getPrototypeOf(CheckboxGroup).call(this, props));\n\n    CheckboxGroup_defineProperty(CheckboxGroup_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var value = e.target.value;\n\n      var checkList = _toConsumableArray(_this.state.value);\n\n      var index = _this.state.value.indexOf(value);\n\n      if (index > -1) {\n        checkList.splice(index, 1);\n      } else {\n        checkList.push(value);\n      }\n\n      _this.props.onChange && _this.props.onChange(checkList);\n    });\n\n    CheckboxGroup_defineProperty(CheckboxGroup_assertThisInitialized(_this), \"renderOptions\", function () {\n      var value = _this.state.value;\n\n      var _this$props = _this.props,\n          _this$props$options = _this$props.options,\n          options = _this$props$options === void 0 ? [] : _this$props$options,\n          defaultValue = _this$props.defaultValue,\n          onChange = _this$props.onChange,\n          rest = CheckboxGroup_objectWithoutProperties(_this$props, [\"options\", \"defaultValue\", \"onChange\"]);\n\n      return options.map(function (option) {\n        var isChecked = value.includes(option);\n        return react[\"createElement\"](CheckBox_Checkbox, CheckboxGroup_extends({}, rest, {\n          key: option,\n          value: option,\n          checked: isChecked,\n          onChange: _this.handleChange\n        }), option);\n      });\n    });\n\n    _this.state = {\n      value: props.value && props.value.length !== 0 ? props.value : props.defaultValue || []\n    };\n    return _this;\n  }\n\n  CheckboxGroup_createClass(CheckboxGroup, [{\n    key: \"render\",\n    value: function render() {\n      return react[\"createElement\"](\"div\", null, this.renderOptions());\n    }\n  }]);\n\n  return CheckboxGroup;\n}(react[\"Component\"]);\n\nCheckboxGroup_defineProperty(CheckboxGroup_CheckboxGroup, \"defaultProps\", {\n  defaultValue: [],\n  disabled: false,\n  options: [],\n  value: []\n});\n\n\n// EXTERNAL MODULE: ./packages/CheckBox/src/index.scss\nvar src = __webpack_require__(\"./packages/CheckBox/src/index.scss\");\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/index.tsx\n\n\n\nCheckBox_Checkbox.Group = CheckboxGroup_CheckboxGroup;\n/* harmony default export */ var CheckBox_src = __webpack_exports__[\"default\"] = (CheckBox_Checkbox);\n\n//# sourceURL=webpack:///./packages/CheckBox/src/index.tsx_+_2_modules?");

/***/ })

/******/ });
});