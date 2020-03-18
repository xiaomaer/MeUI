"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CheckBox.default.Group = _CheckboxGroup.default;
var _default = _CheckBox.default;
exports.default = _default;