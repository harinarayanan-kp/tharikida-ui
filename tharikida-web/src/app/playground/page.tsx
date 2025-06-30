"use client";

import React, { useState } from "react";
import { ThemeProvider } from "tharikida-ui";
import { ArrowButton, Button } from "tharikida-ui/button";
import { Card, ListTile } from "tharikida-ui/datadisplay";
import { List } from "tharikida-ui/datadisplay";
import { Calendar, Dropdown, TextInput, CheckBox } from "tharikida-ui/input";
import { ToggleSwitch } from "tharikida-ui/input";
import { Table } from "tharikida-ui/datadisplay";
import { Alert } from "tharikida-ui/feedback";
import { Modal } from "tharikida-ui/feedback";
import { Loader, ProgressBar } from "tharikida-ui/datadisplay";
import { Tabs } from "tharikida-ui/navigation";
import { Accordion } from "tharikida-ui/datadisplay";
import Navbar from "../Navbar/Navbar";
import { Tooltip } from "tharikida-ui/feedback";
import "./playground.css";
import { FaApple, FaCoffee, FaHome } from "react-icons/fa";

const Playground = () => {
  const [primaryColor, setPrimaryColor] = useState("#2ecc71");
  const [secondaryColor, setSecondaryColor] = useState("#3498db");
  const [fontFamily, setFontFamily] = useState("Montserrat, sans-serif");
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [cornerRadius, setCornerRadius] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState("tab1");
  const [fontSize, setFontSize] = useState(16);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [spacingfactor, setSpacingfactor] = useState(4);
  const [borderWidth, setBorderWidth] = useState("1px");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [fontWeight, setFontWeight] = useState("normal");
  const [lineHeight, setLineHeight] = useState("normal");
  const [letterSpacing, setLetterSpacing] = useState("normal");
  const [transitionDuration, setTransitionDuration] = useState("0.3s");
  const [padding, setPadding] = useState("10px");
  const [paddingTop, setPaddingTop] = useState("");
  const [paddingRight, setPaddingRight] = useState("");
  const [paddingBottom, setPaddingBottom] = useState("");
  const [paddingLeft, setPaddingLeft] = useState("");
  const [margin, setMargin] = useState("0px");
  const [marginTop, setMarginTop] = useState("");
  const [marginRight, setMarginRight] = useState("");
  const [marginBottom, setMarginBottom] = useState("");
  const [marginLeft, setMarginLeft] = useState("");
  const [shadowOffsetX, setShadowOffsetX] = useState("4px");
  const [shadowOffsetY, setShadowOffsetY] = useState("2px");
  const [shadowBlur, setShadowBlur] = useState("0px");
  const [shadowSpread, setShadowSpread] = useState("0px");
  const [shadowInset, setShadowInset] = useState(false);
  const [hoverColor, setHoverColor] = useState("#62f39f");

  // Default values for ThemeProvider props
  const defaultTheme = {
    primaryColor: "#2ecc71",
    secondaryColor: "#3498db",
    fontFamily: "Montserrat, sans-serif",
    cornerRadius: 0,
    fontSize: 16,
    shadowColor: "#000000",
    borderColor: "#000000",
    textColor: "#000000",
    backgroundColor: "#ffffff",
    spacingfactor: 4,
    borderWidth: "1px",
    borderStyle: "solid",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    transitionDuration: "0.3s",
    padding: "",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    margin: "0px",
    marginTop: "",
    marginRight: "",
    marginBottom: "",
    marginLeft: "",
    shadowOffsetX: "4px",
    shadowOffsetY: "2px",
    shadowBlur: "0px",
    shadowSpread: "0px",
    shadowInset: false,
    hoverColor: "#62f39f",
  };

  // Helper to only include non-default props
  const themeProps: [
    keyof typeof defaultTheme,
    typeof primaryColor | typeof cornerRadius | typeof shadowInset
  ][] = [
    ["primaryColor", primaryColor],
    ["secondaryColor", secondaryColor],
    ["fontFamily", fontFamily],
    ["cornerRadius", cornerRadius],
    ["fontSize", fontSize],
    ["shadowColor", shadowColor],
    ["borderColor", borderColor],
    ["textColor", textColor],
    ["backgroundColor", backgroundColor],
    ["spacingfactor", spacingfactor],
    ["borderWidth", borderWidth],
    ["borderStyle", borderStyle],
    ["fontWeight", fontWeight],
    ["lineHeight", lineHeight],
    ["letterSpacing", letterSpacing],
    ["transitionDuration", transitionDuration],
    ["padding", padding],
    ["paddingTop", paddingTop],
    ["paddingRight", paddingRight],
    ["paddingBottom", paddingBottom],
    ["paddingLeft", paddingLeft],
    ["margin", margin],
    ["marginTop", marginTop],
    ["marginRight", marginRight],
    ["marginBottom", marginBottom],
    ["marginLeft", marginLeft],
    ["shadowOffsetX", shadowOffsetX],
    ["shadowOffsetY", shadowOffsetY],
    ["shadowBlur", shadowBlur],
    ["shadowSpread", shadowSpread],
    ["shadowInset", shadowInset],
    ["hoverColor", hoverColor],
  ];

  function formatProp(
    key: keyof typeof defaultTheme,
    value: typeof primaryColor | typeof cornerRadius | typeof shadowInset
  ) {
    if (typeof value === "string") {
      if (value === "") return null;
      if (key === "fontFamily") return `${key}="${value}"`;
      if (key.startsWith("padding") || key.startsWith("margin"))
        return `${key}="${value}"`;
      if (
        key.endsWith("Color") ||
        key.endsWith("Style") ||
        key.endsWith("Weight") ||
        key.endsWith("Spacing") ||
        key.endsWith("Duration")
      )
        return `${key}="${value}"`;
      if (
        key.startsWith("shadow") ||
        key === "borderWidth" ||
        key === "fontSize" ||
        key === "cornerRadius"
      )
        return `${key}="${value}"`;
      return `${key}="${value}"`;
    }
    if (typeof value === "boolean") return `${key}={${value}}`;
    return `${key}={${value}}`;
  }

  const themeCode = themeProps
    .filter(([key, value]) => value !== defaultTheme[key])
    .map(([key, value]) => formatProp(key, value))
    .filter(Boolean)
    .join("\n  ");

  const code = `import { ThemeProvider } from 'tharikida-ui';\n\n<ThemeProvider${
    themeCode ? `\n  ${themeCode}\n` : ""
  }>\n  {/* Your app content here */}\n</ThemeProvider>`;

  return (
    <div
      style={{
        fontFamily: "Montserrat",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 32,
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: 36,
              marginBottom: 8,
              color: primaryColor,
            }}
          >
            Tharikida UI Playground
          </h1>
          <p style={{ color: "#555", marginBottom: 32, fontSize: 18 }}>
            Experiment with theme and components. Tweak colors, font, and see
            live code updates!
          </p>
          <ThemeProvider
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            fontFamily={fontFamily}
            cornerRadius={cornerRadius}
            fontSize={fontSize}
            shadowColor={shadowColor}
            borderColor={borderColor}
            textColor={textColor}
            backgroundColor={backgroundColor}
            spacingfactor={spacingfactor}
            borderWidth={borderWidth}
            borderStyle={borderStyle}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            transitionDuration={transitionDuration}
            padding={padding}
            paddingTop={paddingTop || undefined}
            paddingRight={paddingRight || undefined}
            paddingBottom={paddingBottom || undefined}
            paddingLeft={paddingLeft || undefined}
            margin={margin}
            marginTop={marginTop || undefined}
            marginRight={marginRight || undefined}
            marginBottom={marginBottom || undefined}
            marginLeft={marginLeft || undefined}
            shadowOffsetX={shadowOffsetX}
            shadowOffsetY={shadowOffsetY}
            shadowBlur={shadowBlur}
            shadowSpread={shadowSpread}
            shadowInset={shadowInset}
            hoverColor={hoverColor}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                marginBottom: 32,
                alignItems: "flex-start",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px #0001",
                padding: 24,
                minHeight: 320,
              }}
            >
              <Card
                title="Playground Card"
                styles={{ minWidth: 220, flex: "1 1 220px", margin: 4 }}
              >
                Hello World
              </Card>
              <Button>Primary</Button>
              <div style={{ minWidth: 48, margin: 4 }}>
                <ToggleSwitch
                  checked={toggle}
                  onChange={() => setToggle((t) => !t)}
                />
              </div>
              <Button
                onClick={() => setShowModal(true)}
                styles={{ minWidth: 120, margin: 4 }}
              >
                Open Modal
              </Button>
              <div style={{ minWidth: 180, margin: 4 }}>
                <TextInput
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type here..."
                />
              </div>
              <div style={{ minWidth: 48, margin: 4 }}>
                <Loader />
              </div>
              <div style={{ minWidth: 120, margin: 4 }}>
                <ProgressBar value={40} />
              </div>

              <div style={{ minWidth: 30, margin: 4 }}>
                <CheckBox />
              </div>
              <div style={{ minWidth: 30, margin: 4 }}>
                <ArrowButton />
              </div>
              <div style={{ minWidth: 180, margin: 4 }}>
                <Tabs
                  items={[
                    { label: "Tab 1", key: "tab1" },
                    { label: "Tab 2", key: "tab2" },
                  ]}
                  activeKey={tab}
                  onChange={setTab}
                />
              </div>
              <div style={{ minWidth: 180, margin: 4 }}>
                <Accordion
                  title="Accordion Title"
                  content="Accordion Content"
                />
              </div>
              <div style={{ minWidth: 180, margin: 4 }}>
                <Calendar />
              </div>
              <div style={{ minWidth: 180, margin: 4 }}>
                <Alert title="Success" message="This is a success alert!" />
              </div>
              <div style={{ minWidth: 220, margin: 4 }}>
                <Table
                  columns={["Name", "Value"]}
                  data={[
                    ["Primary Color", primaryColor],
                    ["Secondary Color", secondaryColor],
                    ["Font Family", fontFamily],
                  ]}
                />
              </div>
              <div style={{ minWidth: 180, margin: 4 }}>
                <List>
                  <ListTile
                    title="Item 1"
                    subtitle="Item 1 Description"
                    leading={<FaHome />}
                  />
                  <ListTile
                    title="Item 2"
                    subtitle="Item 2 Description"
                    leading={<FaCoffee />}
                  />
                  <ListTile
                    title="Item 3"
                    subtitle="Item 3 Description"
                    leading={<FaApple />}
                  />
                </List>
              </div>
            </div>
            <Modal
              open={showModal}
              onClose={() => setShowModal(false)}
              title="Sample Modal"
            >
              Modal Content
            </Modal>
          </ThemeProvider>
          <h2
            style={{
              fontWeight: 600,
              fontSize: 24,
              marginTop: 40,
              marginBottom: 12,
            }}
          >
            Generated Code
          </h2>
          <pre
            style={{
              background: "#23272e",
              color: "#e5e7eb",
              padding: 20,
              borderRadius: 10,
              overflowX: "auto",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {code}
          </pre>
        </div>
        <aside className="playground-controls-panel">
          <div className="playground-controls-singlecol">
            <div className="playground-control-group">
              <label style={{ minWidth: 0, width: "100%" }}>Font Family</label>
              <Dropdown
                width="100%"
                options={["Montserrat", "Poppins", "Roboto", "Arial"]}
                defaultOption="Montserrat"
                onChange={(value) => setFontFamily(value)}
              />
            </div>
            <div className="playground-colors-grid">
              <div className="playground-control-group">
                <Tooltip content="Primary Color">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    aria-label="Primary Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Secondary Color">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    aria-label="Secondary Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Hover Color">
                  <input
                    type="color"
                    value={hoverColor}
                    onChange={(e) => setHoverColor(e.target.value)}
                    aria-label="Hover Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Text Color">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    aria-label="Text Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Background Color">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    aria-label="Background Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Border Color">
                  <input
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    aria-label="Border Color"
                  />
                </Tooltip>
              </div>
              <div className="playground-control-group">
                <Tooltip content="Shadow Color">
                  <input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                    aria-label="Shadow Color"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="playground-control-group">
              <label>
                Font Size <span>{fontSize}px</span>
              </label>
              <input
                type="range"
                min={10}
                max={32}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Corner Radius <span>{cornerRadius}px</span>
              </label>
              <input
                type="range"
                min={0}
                max={48}
                value={cornerRadius}
                onChange={(e) => setCornerRadius(Number(e.target.value))}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Spacing Factor <span>{spacingfactor}</span>
              </label>
              <input
                type="range"
                min={0}
                max={32}
                value={spacingfactor}
                onChange={(e) => setSpacingfactor(Number(e.target.value))}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Border Width <span>{borderWidth}</span>
              </label>
              <input
                type="range"
                min={0}
                max={10}
                value={parseInt(borderWidth)}
                onChange={(e) => setBorderWidth(e.target.value + "px")}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Shadow Offset X <span>{shadowOffsetX}</span>
              </label>
              <input
                type="range"
                min={-32}
                max={32}
                value={parseInt(shadowOffsetX)}
                onChange={(e) => setShadowOffsetX(e.target.value + "px")}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Shadow Offset Y <span>{shadowOffsetY}</span>
              </label>
              <input
                type="range"
                min={-32}
                max={32}
                value={parseInt(shadowOffsetY)}
                onChange={(e) => setShadowOffsetY(e.target.value + "px")}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Shadow Blur <span>{shadowBlur}</span>
              </label>
              <input
                type="range"
                min={0}
                max={64}
                value={parseInt(shadowBlur)}
                onChange={(e) => setShadowBlur(e.target.value + "px")}
              />
            </div>
            <div className="playground-control-group">
              <label>
                Shadow Spread <span>{shadowSpread}</span>
              </label>
              <input
                type="range"
                min={-32}
                max={32}
                value={parseInt(shadowSpread)}
                onChange={(e) => setShadowSpread(e.target.value + "px")}
              />
            </div>
            <div className="playground-control-group">
              <label>Shadow Inset</label>
              <input
                type="checkbox"
                checked={shadowInset}
                onChange={(e) => setShadowInset(e.target.checked)}
              />
            </div>
            <div className="playground-control-group">
              <label>Border Style</label>
              <input
                type="text"
                value={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value)}
                placeholder="solid, dashed, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Font Weight</label>
              <input
                type="text"
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                placeholder="normal, bold, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Line Height</label>
              <input
                type="text"
                value={lineHeight}
                onChange={(e) => setLineHeight(e.target.value)}
                placeholder="normal, 1.5, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Letter Spacing</label>
              <input
                type="text"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(e.target.value)}
                placeholder="normal, 0.5px, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Transition Duration</label>
              <input
                type="text"
                value={transitionDuration}
                onChange={(e) => setTransitionDuration(e.target.value)}
                placeholder="0.3s, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Padding</label>
              <input
                type="text"
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                placeholder="10px, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Padding Top</label>
              <input
                type="text"
                value={paddingTop}
                onChange={(e) => setPaddingTop(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Padding Right</label>
              <input
                type="text"
                value={paddingRight}
                onChange={(e) => setPaddingRight(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Padding Bottom</label>
              <input
                type="text"
                value={paddingBottom}
                onChange={(e) => setPaddingBottom(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Padding Left</label>
              <input
                type="text"
                value={paddingLeft}
                onChange={(e) => setPaddingLeft(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Margin</label>
              <input
                type="text"
                value={margin}
                onChange={(e) => setMargin(e.target.value)}
                placeholder="0px, etc."
              />
            </div>
            <div className="playground-control-group">
              <label>Margin Top</label>
              <input
                type="text"
                value={marginTop}
                onChange={(e) => setMarginTop(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Margin Right</label>
              <input
                type="text"
                value={marginRight}
                onChange={(e) => setMarginRight(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Margin Bottom</label>
              <input
                type="text"
                value={marginBottom}
                onChange={(e) => setMarginBottom(e.target.value)}
              />
            </div>
            <div className="playground-control-group">
              <label>Margin Left</label>
              <input
                type="text"
                value={marginLeft}
                onChange={(e) => setMarginLeft(e.target.value)}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Playground;
