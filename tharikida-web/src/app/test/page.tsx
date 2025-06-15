import React from "react";
import { ThemeProvider } from "tharikida-ui";
import {
  Card,
  List,
  ListTile,
  Loader,
  ProgressBar,
  Table,
} from "tharikida-ui/datadisplay";

const page = () => {
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          boxSizing: "border-box",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
};

export default page;
