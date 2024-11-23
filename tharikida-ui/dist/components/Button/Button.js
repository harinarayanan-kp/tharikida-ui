"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/Button/Button.js

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "tharikida-btn tharikida-btn-".concat(type),
    onClick: onClick
  }, children);
};
var _default = exports["default"] = Button;