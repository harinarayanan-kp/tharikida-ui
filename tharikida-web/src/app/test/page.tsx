"use client";
import React, { useState } from "react";
import { ThemeProvider } from "tharikida-ui";
import {
  Card,
  List,
  ListTile,
  Loader,
  ProgressBar,
  Table,
} from "tharikida-ui/datadisplay";
import { CheckBox } from "tharikida-ui/input";
import { LoadingButton } from "tharikida-ui/button";
import {
  Breadcrumb,
  Navbar,
  Pagination,
  SideBar,
  Tabs,
} from "tharikida-ui/navigation";
const page = () => {
  const [page, setPage] = useState(1);
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
