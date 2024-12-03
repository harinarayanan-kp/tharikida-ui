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
const Star_1 = __importDefault(require("./components/Shapes/Star"));
const Calender_1 = __importDefault(require("./components/Calender"));
const ArrowButton_1 = __importDefault(require("./components/Button/ArrowButton"));
const DropDown_1 = __importDefault(require("./components/DropDown"));
const PopupAlert_1 = __importDefault(require("./components/PopupAlert"));
// import PopupAlert from "./components/PopUpAlert";
const App = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2024/11/08/09/45/facade-9182972_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/11/26/18/50/skyscraper-9226515_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_960_720.jpg",
    ];
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
        react_1.default.createElement(Calender_1.default, { size: "300px" }),
        react_1.default.createElement(DropDown_1.default, { width: "300px", options: ["Option 1", "Option 2", "Option 3"], defaultOption: "Option 2", onChange: (value) => console.log("Selected:", value) }),
        react_1.default.createElement(Button_1.default, { type: "secondary" }, "Secondary"),
        react_1.default.createElement(Button_1.default, { type: "primary" }, "Primary"),
        react_1.default.createElement(ArrowButton_1.default, null),
        react_1.default.createElement(PopupAlert_1.default, null),
        react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Button_1.default, { type: "secondary" }, "Secondary"),
                react_1.default.createElement(Button_1.default, { type: "primary" }, "Primary")),
            react_1.default.createElement(MusicCard_1.default, { musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", currentPosition: 50, images: [
                    "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_1280.jpg",
                    "https://cdn.pixabay.com/photo/2023/06/28/11/25/man-8094211_960_720.jpg",
                ], musicName: "FE!N", artist: "Travis Scott" })),
        react_1.default.createElement(Star_1.default, { size: 40 })));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
