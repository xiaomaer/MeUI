(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/*! ModuleConcatenation bailout: Cannot concat with external "react" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/CheckBox.tsx\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar CheckBox_Checkbox = function (_React$Component) {\n  _inherits(Checkbox, _React$Component);\n\n  _createClass(Checkbox, null, [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props, state) {\n      if (props.checked !== undefined) {\n        return _objectSpread({}, state, {\n          checked: props.checked\n        });\n      }\n\n      return null;\n    }\n  }]);\n\n  function Checkbox(props) {\n    var _this;\n\n    _classCallCheck(this, Checkbox);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"input\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var _this$props = _this.props,\n          disabled = _this$props.disabled,\n          onChange = _this$props.onChange;\n\n      if (disabled) {\n        return;\n      }\n\n      if (_this.props.checked === undefined) {\n        _this.setState({\n          checked: e.target.checked\n        });\n      }\n\n      onChange && onChange(e);\n    });\n\n    _this.state = {\n      checked: props.checked !== undefined ? props.checked : !!props.defaultChecked\n    };\n    _this.input = external_react_[\"createRef\"]();\n    return _this;\n  }\n\n  _createClass(Checkbox, [{\n    key: \"focus\",\n    value: function focus() {\n      this.input.current.focus();\n    }\n  }, {\n    key: \"blur\",\n    value: function blur() {\n      this.input.current.blur();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          className = _this$props2.className,\n          style = _this$props2.style,\n          checked = _this$props2.checked,\n          children = _this$props2.children,\n          onChange = _this$props2.onChange,\n          rest = _objectWithoutProperties(_this$props2, [\"className\", \"style\", \"checked\", \"children\", \"onChange\"]);\n\n      return external_react_[\"createElement\"](\"div\", {\n        className: className,\n        style: style\n      }, external_react_[\"createElement\"](\"input\", _extends({}, rest, {\n        type: \"checkbox\",\n        checked: this.state.checked,\n        onChange: this.handleChange,\n        ref: this.input\n      })), external_react_[\"createElement\"](\"span\", null, children));\n    }\n  }]);\n\n  return Checkbox;\n}(external_react_[\"Component\"]);\n\n_defineProperty(CheckBox_Checkbox, \"Group\", void 0);\n\n_defineProperty(CheckBox_Checkbox, \"defaultProps\", {\n  className: '',\n  style: {},\n  defaultChecked: false,\n  onChange: function onChange() {}\n});\n\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/CheckboxGroup.tsx\nfunction CheckboxGroup_typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { CheckboxGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { CheckboxGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return CheckboxGroup_typeof(obj); }\n\nfunction CheckboxGroup_extends() { CheckboxGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CheckboxGroup_extends.apply(this, arguments); }\n\nfunction CheckboxGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CheckboxGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction CheckboxGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction CheckboxGroup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction CheckboxGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CheckboxGroup_ownKeys(source, true).forEach(function (key) { CheckboxGroup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CheckboxGroup_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction CheckboxGroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction CheckboxGroup_possibleConstructorReturn(self, call) { if (call && (CheckboxGroup_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return CheckboxGroup_assertThisInitialized(self); }\n\nfunction CheckboxGroup_getPrototypeOf(o) { CheckboxGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CheckboxGroup_getPrototypeOf(o); }\n\nfunction CheckboxGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction CheckboxGroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction CheckboxGroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) CheckboxGroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) CheckboxGroup_defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction CheckboxGroup_inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CheckboxGroup_setPrototypeOf(subClass, superClass); }\n\nfunction CheckboxGroup_setPrototypeOf(o, p) { CheckboxGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CheckboxGroup_setPrototypeOf(o, p); }\n\nfunction CheckboxGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar CheckboxGroup_CheckboxGroup = function (_React$Component) {\n  CheckboxGroup_inherits(CheckboxGroup, _React$Component);\n\n  CheckboxGroup_createClass(CheckboxGroup, null, [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props, state) {\n      if (props.value !== undefined) {\n        return CheckboxGroup_objectSpread({}, state, {\n          value: props.value\n        });\n      }\n\n      return null;\n    }\n  }]);\n\n  function CheckboxGroup(props) {\n    var _this;\n\n    CheckboxGroup_classCallCheck(this, CheckboxGroup);\n\n    _this = CheckboxGroup_possibleConstructorReturn(this, CheckboxGroup_getPrototypeOf(CheckboxGroup).call(this, props));\n\n    CheckboxGroup_defineProperty(CheckboxGroup_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var value = e.target.value;\n\n      var checkList = _toConsumableArray(_this.state.value);\n\n      var index = _this.state.value.indexOf(value);\n\n      if (index > -1) {\n        checkList.splice(index, 1);\n      } else {\n        checkList.push(value);\n      }\n\n      _this.props.onChange && _this.props.onChange(checkList);\n    });\n\n    CheckboxGroup_defineProperty(CheckboxGroup_assertThisInitialized(_this), \"renderOptions\", function () {\n      var value = _this.state.value;\n\n      var _this$props = _this.props,\n          _this$props$options = _this$props.options,\n          options = _this$props$options === void 0 ? [] : _this$props$options,\n          defaultValue = _this$props.defaultValue,\n          onChange = _this$props.onChange,\n          rest = CheckboxGroup_objectWithoutProperties(_this$props, [\"options\", \"defaultValue\", \"onChange\"]);\n\n      return options.map(function (option) {\n        var isChecked = value.includes(option);\n        return external_react_[\"createElement\"](CheckBox_Checkbox, CheckboxGroup_extends({}, rest, {\n          key: option,\n          value: option,\n          checked: isChecked,\n          onChange: _this.handleChange\n        }), option);\n      });\n    });\n\n    _this.state = {\n      value: props.value && props.value.length !== 0 ? props.value : props.defaultValue || []\n    };\n    return _this;\n  }\n\n  CheckboxGroup_createClass(CheckboxGroup, [{\n    key: \"render\",\n    value: function render() {\n      return external_react_[\"createElement\"](\"div\", null, this.renderOptions());\n    }\n  }]);\n\n  return CheckboxGroup;\n}(external_react_[\"Component\"]);\n\nCheckboxGroup_defineProperty(CheckboxGroup_CheckboxGroup, \"defaultProps\", {\n  defaultValue: [],\n  disabled: false,\n  options: [],\n  value: []\n});\n\n\n// EXTERNAL MODULE: ./packages/CheckBox/src/index.scss\nvar src = __webpack_require__(\"./packages/CheckBox/src/index.scss\");\n\n// CONCATENATED MODULE: ./packages/CheckBox/src/index.tsx\n\n\n\nCheckBox_Checkbox.Group = CheckboxGroup_CheckboxGroup;\n/* harmony default export */ var CheckBox_src = __webpack_exports__[\"default\"] = (CheckBox_Checkbox);\n\n//# sourceURL=webpack:///./packages/CheckBox/src/index.tsx_+_2_modules?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});