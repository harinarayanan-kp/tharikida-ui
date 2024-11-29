// src/testPage.tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/Button";
import { ThemeProvider } from "./theme/ThemeProvider";
import MusicPlayer from "./components/MusicCard";
import Star from "./components/Shapes/Star";
import ActiveTag from "./components/Tags/Active";
import Calendar from "./components/Calender";
import PopupAlert from "./components/PopUpAlert";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
      <Button type="secondary">Secondary</Button>
      <Button type="primary">Primary</Button>
      <ThemeProvider>
        <div>
          <Button type="secondary">Secondary</Button>
          <Button type="primary">Primary</Button>
        </div>
        <MusicPlayer
          musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          currentPosition={50}
          image="https://cdn.pixabay.com/photo/2023/06/28/11/25/man-8094211_960_720.jpg"
          musicName="FE!N"
          artist="Travis Scott"
        />
      </ThemeProvider>
      <Star size={40} />
      <Calendar />
      <PopupAlert/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
