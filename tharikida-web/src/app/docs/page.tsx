"use client";

import React, { useState } from "react";
import { Button } from "tharikida-ui/button";
import ButtonDocs from "./ButtonDocs";
import ArrowButtonDocs from "./ArrowButtonDocs";
import MusicCardDocs from "./MusicCardDocs";
import AnimatedBoxDocs from "./AnimatedBoxDocs";
import CalendarDocs from "./CalenderDocs";
import DropdownDocs from "./DropDownDocs";
import Code from "./Code";
import Navbar from "../Navbar/Navbar";
import TextInputDocs from "./TextinputDocs";
import IconButtonDocs from "./IconButtonDocs";
import AccordionDocs from "./AccordionDocs";
import ToggleSwitchDocs from "./ToggleSwitchDocs";
import RadioButtonDocs from "./RadioButtonDocs";
import CardDocs from "./CardDocs";
import ListDocs from "./ListDocs";
import LoaderDocs from "./LoaderDocs";
import ProgressBarDocs from "./ProgressBarDocs";
import TableDocs from "./TableDocs";
const Page = () => {
  const [activeTab, setActiveTab] = useState("Getting Started");

  const renderContent = () => {
    switch (activeTab) {
      case "Getting Started":
        return (
          <div
            style={{
              gap: 20,
              fontFamily: "Montserrat",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Getting Started</h1>
            <p>
              Welcome to Tharikida UI Docs! 🎉 Here&apos;s how you can quickly
              set up and start using our component library to build awesome
              interfaces effortlessly.
            </p>
            <h2>Installation</h2>
            First things first, install the library via npm:
            <Code>npm install tharikida-ui</Code>
            <h2>Setup ThemeProvider</h2>
            To enable theming across your app, wrap your root component with the
            ThemeProvider:
            <Code>
              {`import { ThemeProvider } from 'tharikida-ui';

function App() {
  return (
    <ThemeProvider>
      <Button> Hello, Tharikida UI! </Button>
    </ThemeProvider>
  );
}

export default App;`}
            </Code>
            <h2>Using Components</h2>
            Start using components in your app right away!
            <Code>{`import { Button } from 'tharikida-ui';

export default function Example() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
    </div>
  );
}
`}</Code>
            <h2>Customizing the Theme</h2>
            Want to make it your own? Pass custom theme props to ThemeProvider:
            <Code>
              {`<ThemeProvider 
  primaryColor="#ff5733" 
  secondaryColor="#33c1ff" 
  fontFamily="'Poppins', sans-serif"
>
  <Button type="primary">Custom Themed Button</Button>
</ThemeProvider>
`}
            </Code>
            <h2>Explore Components</h2>
            Dive deeper into Components to discover what you can build with
            Tharikida UI.
            <h3>Need Help?</h3>
            Check out our FAQ, or connect with us on GitHub. Let’s create
            something tharikida together! 🚀
          </div>
        );
      case "Accordion":
        return <AccordionDocs />;
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
      case "TextInput":
        return <TextInputDocs />;
      case "IconButton":
        return <IconButtonDocs />;
      case "ToggleSwitch":
        return <ToggleSwitchDocs />;
      case "RadioButton":
        return <RadioButtonDocs />;
      case "Card":
        return <CardDocs />;
      case "List":
        return <ListDocs />;
      case "Loader":
        return <LoaderDocs />;
      case "ProgressBar":
        return <ProgressBarDocs />;
      case "Table":
        return <TableDocs />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
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
            height: "100%",
            minHeight: "100vh",
          }}
        >
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>Inputs</div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Checkbox")}
          >
            Checkbox
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Dropdown")}
          >
            Dropdown/Select
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("RadioButton")}
          >
            Radio Buttons
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("TextInput")}
          >
            Text Input
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Textarea")}
          >
            Textarea
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("ToggleSwitch")}
          >
            Toggle Switch
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>
            Buttons
          </div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("ArrowButton")}
          >
            Arrow Button
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Button")}
          >
            Primary/Secondary Button
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("IconButton")}
          >
            Icon Button
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("LoadingButton")}
          >
            Loading Button
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>
            Navigation
          </div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Breadcrumb")}
          >
            Breadcrumb
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Navbar")}
          >
            Navbar
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Pagination")}
          >
            Pagination
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Sidebar")}
          >
            Sidebar
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Tabs")}
          >
            Tabs
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>
            Feedback
          </div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Alert")}
          >
            Alert
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Modal")}
          >
            Modal
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Snackbar")}
          >
            Snackbar/Toast
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Tooltip")}
          >
            Tooltip
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>
            Data Display
          </div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Accordion")}
          >
            Accordion
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Badge")}
          >
            Badge
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Card")}
          >
            Card
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("List")}
          >
            List
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Loader")}
          >
            Spinner/Loader
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("ProgressBar")}
          >
            Progress Bar
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Table")}
          >
            Table
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>Layout</div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Container")}
          >
            Container
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Divider")}
          >
            Divider
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Grid")}
          >
            Grid System
          </Button>
          <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>Media</div>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Icons")}
          >
            Icons
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Image")}
          >
            Image
          </Button>
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("VideoPlayer")}
          >
            Video Player
          </Button>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100vh",
            overflow: "auto",
            padding: "10px",
            boxSizing: "border-box",
            fontFamily: "Montserrat",
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
