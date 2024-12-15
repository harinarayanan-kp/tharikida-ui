"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { ArrowButton, Button, ThemeProvider } from "tharikida-ui";
import Code from "./Code";

type Props = {};

const Page = (props: Props) => {
  const [activeTab, setActiveTab] = useState("Getting Started");

  const renderContent = () => {
    if (activeTab === "Getting Started") {
      return (
        <div>
          <h1>Getting Started</h1>
          <br />
          <Code>npm install tharikida-ui</Code>
        </div>
      );
    } else if (activeTab === "Button") {
      return (
        <div>
          <h1>Button Component</h1>
          <Button>Click Here</Button>
          <h2>Usage</h2>
          <Code>{`<Button>Click Here</Button>`}</Code>
        </div>
      );
    } else if (activeTab === "ArrowButton") {
      return (
        <div>
          <h1>Button Component</h1>
          <ArrowButton />
          <h2>Usage</h2>
          <Code>{`<ArrowButton/>`}</Code>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            boxSizing: "border-box",
            backgroundColor: "beige",
            borderRight: "1px solid black",
            width: "25%",
            maxWidth: "300px",
            minHeight: "100vh",
          }}
        >
          <Button
            styles={{ width: "100%" }}
            onClick={() => setActiveTab("Getting Started")}
          >
            Getting Started
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Button")}
          >
            Button
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("ArrowButton")}
          >
            Arrow Button
          </Button>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            minHeight: "100vh",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
