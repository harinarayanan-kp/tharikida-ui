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
import CheckBoxDocs from "./CheckBoxDocs";
import TextAreaDocs from "./TextAreaDocs";
import LoadingButtonDocs from "./LoadingButtonDocs";
import BreadcrumbDocs from "./BreadcrumbDocs";
import NavbarDocs from "./NavbarDocs";
import PaginationDocs from "./PaginationDocs";
import SideBarDocs from "./SideBarDocs";
import TabsDocs from "./TabsDocs";
import AlertDocs from "./AlertDocs";
import ModalDocs from "./ModalDocs";
import TooltipDocs from "./TooltipDocs";
import SnackbarDocs from "./SnackbarDocs";

const SIDEBAR = [
  {
    category: "Inputs",
    items: [
      { label: "Checkbox", key: "Checkbox" },
      { label: "Dropdown/Select", key: "Dropdown" },
      { label: "Radio Buttons", key: "RadioButton" },
      { label: "Text Input", key: "TextInput" },
      { label: "Textarea", key: "Textarea" },
      { label: "Toggle Switch", key: "ToggleSwitch" },
    ],
  },
  {
    category: "Buttons",
    items: [
      { label: "Arrow Button", key: "ArrowButton" },
      { label: "Primary/Secondary Button", key: "Button" },
      { label: "Icon Button", key: "IconButton" },
      { label: "Loading Button", key: "LoadingButton" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { label: "Breadcrumb", key: "Breadcrumb" },
      { label: "Navbar", key: "Navbar" },
      { label: "Pagination", key: "Pagination" },
      { label: "Sidebar", key: "Sidebar" },
      { label: "Tabs", key: "Tabs" },
    ],
  },
  {
    category: "Feedback",
    items: [
      { label: "Alert", key: "Alert" },
      { label: "Modal", key: "Modal" },
      { label: "Snackbar/Toast", key: "Snackbar" },
      { label: "Tooltip", key: "Tooltip" },
    ],
  },
  {
    category: "Data Display",
    items: [
      { label: "Accordion", key: "Accordion" },
      { label: "Card", key: "Card" },
      { label: "List", key: "List" },
      { label: "Spinner/Loader", key: "Loader" },
      { label: "Progress Bar", key: "ProgressBar" },
      { label: "Table", key: "Table" },
    ],
  },
  {
    category: "Layout",
    items: [
      { label: "Container", key: "Container" },
      { label: "Divider", key: "Divider" },
      { label: "Grid System", key: "Grid" },
    ],
  },
  {
    category: "Media",
    items: [
      { label: "Icons", key: "Icons" },
      { label: "Image", key: "Image" },
      { label: "Video Player", key: "VideoPlayer" },
    ],
  },
];

const DOCS_MAP: Record<string, React.ReactNode> = {
  "Getting Started": <GettingStartedContent />,
  Accordion: <AccordionDocs />,
  Button: <ButtonDocs />,
  ArrowButton: <ArrowButtonDocs />,
  MusicCard: <MusicCardDocs />,
  AnimatedBox: <AnimatedBoxDocs />,
  Calendar: <CalendarDocs />,
  Dropdown: <DropdownDocs />,
  TextInput: <TextInputDocs />,
  IconButton: <IconButtonDocs />,
  LoadingButton: <LoadingButtonDocs />,
  ToggleSwitch: <ToggleSwitchDocs />,
  RadioButton: <RadioButtonDocs />,
  Card: <CardDocs />,
  List: <ListDocs />,
  Loader: <LoaderDocs />,
  ProgressBar: <ProgressBarDocs />,
  Table: <TableDocs />,
  Checkbox: <CheckBoxDocs />,
  Textarea: <TextAreaDocs />,
  Breadcrumb: <BreadcrumbDocs />,
  Navbar: <NavbarDocs />,
  Pagination: <PaginationDocs />,
  Sidebar: <SideBarDocs />,
  Tabs: <TabsDocs />,
  Alert: <AlertDocs />,
  Modal: <ModalDocs />,
  Tooltip: <TooltipDocs />,
  Snackbar: <SnackbarDocs />,
  // ...add other docs components as needed...
};

function GettingStartedContent() {
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
        Welcome to Tharikida UI Docs! 🎉 Here&apos;s how you can quickly set up
        and start using our component library to build awesome interfaces
        effortlessly.
      </p>
      <h2>Installation</h2>
      First things first, install the library via npm:
      <Code>npm install tharikida-ui</Code>
      <h2>Setup ThemeProvider</h2>
      To enable theming across your app, wrap your root component with the
      ThemeProvider:
      <Code>
        {`import { ThemeProvider } from 'tharikida-ui';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <Button> Hello, Tharikida UI! </Button>\n    </ThemeProvider>\n  );\n}\n\nexport default App;`}
      </Code>
      <h2>Using Components</h2>
      Start using components in your app right away!
      <Code>{`import { Button } from 'tharikida-ui';\n\nexport default function Example() {\n  return (\n    <div>\n      <Button type="primary">Primary Button</Button>\n      <Button type="secondary">Secondary Button</Button>\n    </div>\n  );\n}\n`}</Code>
      <h2>Customizing the Theme</h2>
      Want to make it your own? Pass custom theme props to ThemeProvider:
      <Code>
        {`<ThemeProvider \n  primaryColor="#ff5733" \n  secondaryColor="#33c1ff" \n  fontFamily="'Poppins', sans-serif"\n>\n  <Button type="primary">Custom Themed Button</Button>\n</ThemeProvider>\n`}
      </Code>
      <h2>Explore Components</h2>
      Dive deeper into Components to discover what you can build with Tharikida
      UI.
      <h3>Need Help?</h3>
      Check out our FAQ, or connect with us on GitHub. Let’s create something
      tharikida together! 🚀
    </div>
  );
}

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>("Getting Started");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: 0,
      }}
    >
      <div style={{ flex: "0 0 auto" }}>
        <Navbar />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", flex: 1, minHeight: 0 }}
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
            minWidth: "175px",
            height: "100%",
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            position: "sticky",
            top: 0,
          }}
          className="tharikida-sidebar-scroll"
        >
          <Button
            styles={{ width: "100%", backgroundColor: "white" }}
            onClick={() => setActiveTab("Getting Started")}
          >
            Getting Started
          </Button>
          {SIDEBAR.map((section) => (
            <React.Fragment key={section.category}>
              <div style={{ margin: "20px 0 10px 0", fontWeight: 600 }}>
                {section.category}
              </div>
              {section.items.map((item) => (
                <Button
                  key={item.key}
                  styles={{ width: "100%", backgroundColor: "white" }}
                  onClick={() => setActiveTab(item.key)}
                >
                  {item.label}
                </Button>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            minHeight: 0,
            overflow: "auto",
            padding: "10px",
            boxSizing: "border-box",
            fontFamily: "Montserrat",
          }}
        >
          {DOCS_MAP[activeTab] !== undefined ? (
            DOCS_MAP[activeTab]
          ) : (
            <div style={{ color: "red" }}>
              No docs found for this component.
            </div>
          )}
        </div>
      </div>
      <style>{`
        .tharikida-sidebar-scroll::-webkit-scrollbar {
          width: 8px;
          background: #f5e9d7;
        }
        .tharikida-sidebar-scroll::-webkit-scrollbar-thumb {
          background: #d1bfa3;
          border-radius: 6px;
        }
        .tharikida-sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: #bfa77a;
        }
        .tharikida-sidebar-scroll {
          scrollbar-width: thin;
          scrollbar-color: #d1bfa3 #f5e9d7;
        }
      `}</style>
    </div>
  );
};

export default Page;
