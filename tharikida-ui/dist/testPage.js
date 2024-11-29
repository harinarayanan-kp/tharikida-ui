"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/testPage.tsx
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Button_1 = __importDefault(require("./components/Button/Button"));
const ThemeProvider_1 = require("./theme/ThemeProvider");
const MusicCard_1 = __importDefault(require("./components/MusicCard"));
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.default, { type: "secondary" }, "Secondary"),
        react_1.default.createElement(Button_1.default, { type: "primary" }, "Primary"),
        react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Button_1.default, { type: "secondary" }, "Secondary"),
                react_1.default.createElement(Button_1.default, { type: "primary" }, "Primary")),
            react_1.default.createElement(MusicCard_1.default, { musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", currentPosition: 50, image: "https://cdn.pixabay.com/photo/2023/06/28/11/25/man-8094211_960_720.jpg", musicName: "FE!N", artist: "Travis Scott" }))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
