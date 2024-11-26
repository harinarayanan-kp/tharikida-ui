"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/testPage.tsx
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Button_1 = __importDefault(require("./components/Button"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { type: "primary" }, "Click me")));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
