// src/testPage.tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import { ThemeProvider } from "./theme/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider >
        <div>
          <Button type="secondary">Secondary</Button>
          <Button type="primary">Primary</Button>
        </div>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
