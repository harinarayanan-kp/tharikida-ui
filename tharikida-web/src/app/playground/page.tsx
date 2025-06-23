"use client";

import React, { useState } from "react";
import { ThemeProvider } from "tharikida-ui";
import { Button } from "tharikida-ui/button";
import { Card } from "tharikida-ui/datadisplay";
import { Dropdown, TextInput } from "tharikida-ui/input";
import { ToggleSwitch } from "tharikida-ui/input";
import { Table } from "tharikida-ui/datadisplay";
import Navbar from "../Navbar/Navbar";

const Playground = () => {
  const [primaryColor, setPrimaryColor] = useState("#4caf50");
  const [secondaryColor, setSecondaryColor] = useState("#ff9800");
  const [fontFamily, setFontFamily] = useState("'Montserrat', sans-serif");
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [cornerRadius, setCornerRadius] = useState(16);

  const code = `import { ThemeProvider, Button, Card, TextInput, ToggleSwitch, Table } from 'tharikida-ui';

<ThemeProvider
  primaryColor=\"${primaryColor}\"
  secondaryColor=\"${secondaryColor}\"
  fontFamily=\"${fontFamily}\"
  cornerRadius={${cornerRadius}}
>
  <Card title=\"Playground Card\">Hello World</Card>
  <Button>Primary</Button>
  <TextInput value={\"${input}\"} />
  <ToggleSwitch checked={${toggle}} />
</ThemeProvider>`;

  return (
    <div
      style={{
        fontFamily: "Montserrat",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
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
          Experiment with theme and components. Tweak colors, font, and see live
          code updates!
        </p>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginBottom: 32,
            flexWrap: "wrap",
            alignItems: "center",
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 12px #0001",
            padding: 24,
          }}
        >
          <div>
            <label style={{ fontWeight: 500 }}>Primary Color: </label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{
                marginLeft: 8,
                width: 32,
                height: 32,
                border: "none",
                background: "none",
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Secondary Color: </label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              style={{
                marginLeft: 8,
                width: 32,
                height: 32,
                border: "none",
                background: "none",
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Font Family: </label>
            <Dropdown
              width="200px"
              options={["Montserrat", "Poppins", "Roboto", "Arial"]}
              defaultOption="Montserrat"
              onChange={(value) => setFontFamily(value)}
            />
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Corner Radius: </label>
            <input
              type="range"
              min={0}
              max={48}
              value={cornerRadius}
              onChange={(e) => setCornerRadius(Number(e.target.value))}
              style={{ marginLeft: 8 }}
            />
            <span style={{ marginLeft: 8, fontWeight: 500 }}>
              {cornerRadius}px
            </span>
          </div>
        </div>
        <ThemeProvider
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontFamily={fontFamily}
          cornerRadius={cornerRadius}
        >
          <div
            style={{
              display: "flex",
              gap: 32,
              marginBottom: 32,
              flexWrap: "wrap",
              alignItems: "flex-start",
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px #0001",
              padding: 24,
            }}
          >
            <Card title="Playground Card">Hello World</Card>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Button>Primary</Button>
              <ToggleSwitch
                checked={toggle}
                onChange={() => setToggle((t) => !t)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <TextInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
              />
              <Table
                columns={["Name", "Value"]}
                data={[
                  ["Primary Color", primaryColor],
                  ["Secondary Color", secondaryColor],
                  ["Font Family", fontFamily],
                ]}
              />
            </div>
          </div>
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
    </div>
  );
};

export default Playground;
