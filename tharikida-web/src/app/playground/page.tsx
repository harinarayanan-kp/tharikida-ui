"use client";

import React, { useState } from "react";
import { ThemeProvider } from "tharikida-ui";
import { Button } from "tharikida-ui/button";
import { Card } from "tharikida-ui/datadisplay";
import { TextInput } from "tharikida-ui/input";
import { ToggleSwitch } from "tharikida-ui/input";
import { Table } from "tharikida-ui/datadisplay";

const Playground = () => {
  const [primaryColor, setPrimaryColor] = useState("#4caf50");
  const [secondaryColor, setSecondaryColor] = useState("#ff9800");
  const [fontFamily, setFontFamily] = useState("'Montserrat', sans-serif");
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");

  const code = `import { ThemeProvider, Button, Card, TextInput, ToggleSwitch, Table } from 'tharikida-ui';

<ThemeProvider
  primaryColor=\"${primaryColor}\"
  secondaryColor=\"${secondaryColor}\"
  fontFamily=\"${fontFamily}\"
>
  <Card title=\"Playground Card\">Hello World</Card>
  <Button>Primary</Button>
  <TextInput value={\"${input}\"} />
  <ToggleSwitch checked={${toggle}} />
</ThemeProvider>`;

  return (
    <div style={{ padding: 24, fontFamily: "Montserrat" }}>
      <h1>Tharikida UI Playground</h1>
      <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
        <div>
          <label>Primary Color: </label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </div>
        <div>
          <label>Secondary Color: </label>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </div>
        <div>
          <label>Font Family: </label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="'Montserrat', sans-serif">Montserrat</option>
            <option value="'Poppins', sans-serif">Poppins</option>
            <option value="'Roboto', sans-serif">Roboto</option>
            <option value="'Arial', sans-serif">Arial</option>
          </select>
        </div>
      </div>
      <ThemeProvider
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        fontFamily={fontFamily}
      >
        <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
          <Card title="Playground Card">Hello World</Card>
          <Button>Primary</Button>
          <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
          <ToggleSwitch
            checked={toggle}
            onChange={() => setToggle((t) => !t)}
          />
        </div>
        <Table
          columns={["Name", "Value"]}
          data={[
            ["Primary Color", primaryColor],
            ["Secondary Color", secondaryColor],
            ["Font Family", fontFamily],
          ]}
        />
      </ThemeProvider>
      <h2>Generated Code</h2>
      <pre
        style={{
          background: "#f4f4f4",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {code}
      </pre>
    </div>
  );
};

export default Playground;
