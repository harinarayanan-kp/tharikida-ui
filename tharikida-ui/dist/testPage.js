// src/testPage.tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/Button";
import { ThemeProvider } from "./theme/ThemeProvider";
import MusicPlayer from "./components/MusicCard";
import Star from "./components/Shapes/Star";
import Calendar from "./components/Calender";
import ArrowButton from "./components/Button/ArrowButton";
import Dropdown from "./components/DropDown";
import PopupAlert from "./components/PopupAlert";
import RandomDivs from "./components/AnimatedBox";
// import PopupAlert from "./components/PopUpAlert";
const App = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2024/11/08/09/45/facade-9182972_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/11/26/18/50/skyscraper-9226515_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/12/20/12/10/santa-7667744_960_720.jpg",
    ];
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
        React.createElement(RandomDivs, { width: 800, height: 200 }),
        React.createElement(Calendar, { size: "300px" }),
        React.createElement(Dropdown, { width: "300px", options: ["Option 1", "Option 2", "Option 3"], defaultOption: "Option 2", onChange: (value) => console.log("Selected:", value) }),
        React.createElement(Button, { type: "secondary" }, "Secondary"),
        React.createElement(Button, { type: "primary" }, "Primary"),
        React.createElement(ArrowButton, null),
        React.createElement(PopupAlert, null),
        React.createElement(ThemeProvider, null,
            React.createElement("div", null,
                React.createElement(Button, { type: "secondary" }, "Secondary"),
                React.createElement(Button, { type: "primary" }, "Primary")),
            React.createElement(MusicPlayer, { musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", currentPosition: 50, images: [
                    "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_1280.jpg",
                    "https://cdn.pixabay.com/photo/2023/06/28/11/25/man-8094211_960_720.jpg",
                ], musicName: "FE!N", artist: "Travis Scott" })),
        React.createElement(Star, { size: 40 })));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
