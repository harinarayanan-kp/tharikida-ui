"use client";

import React, { useState } from "react";
import { Button } from "tharikida-ui";
import ButtonDocs from "./ButtonDocs";
import ArrowButtonDocs from "./ArrowButtonDocs";
import MusicCardDocs from "./MusicCardDocs";
import AnimatedBoxDocs from "./AnimatedBoxDocs";
import CalendarDocs from "./CalenderDocs";
import DropdownDocs from "./DropDownDocs";
import Code from "./Code";
import Navbar from "../Navbar/Navbar";
const Page = () => {
  const [activeTab, setActiveTab] = useState("Getting Started");

  const renderContent = () => {
    switch (activeTab) {
      case "Getting Started":
        return (
          <div>
            <h1>Getting Started</h1>
            <br />
            <Code>npm install tharikida-ui</Code>
          </div>
        );
      case "Button":
        return <ButtonDocs />;
      case "ArrowButton":
        return <ArrowButtonDocs />;
      case "MusicCard":
        return <MusicCardDocs />;
      case "AnimatedBox":
        return <AnimatedBoxDocs />;
      case "Calendar":
        return <CalendarDocs />;
      case "Dropdown":
        return <DropdownDocs />;
      default:
        return null;
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
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("MusicCard")}
          >
            Music Card
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("AnimatedBox")}
          >
            Animated Box
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Calendar")}
          >
            Calendar
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Dropdown")}
          >
            Dropdown
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
