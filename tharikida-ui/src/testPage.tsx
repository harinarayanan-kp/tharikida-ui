// src/testPage.tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import { ThemeProvider } from "./theme/ThemeProvider";
import MusicPlayer from "./components/MusicCard";

const App = () => {
  return (
    <>
      <Button type="secondary">Secondary</Button>
      <Button type="primary">Primary</Button>
      <ThemeProvider>
        <div>
          <Button type="secondary">Secondary</Button>
          <Button type="primary">Primary</Button>
        </div>
        <MusicPlayer/>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
