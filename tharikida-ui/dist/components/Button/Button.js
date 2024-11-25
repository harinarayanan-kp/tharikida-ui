"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Button.css");
/**
 * A customizable button component that can accept different styles and actions.
 */
const Button = ({ children, onClick, type = 'primary', style }) => {
    return (react_1.default.createElement("button", { className: `tharikida-btn tharikida-btn-${type}`, onClick: onClick, style: style }, children));
};
exports.default = Button;
