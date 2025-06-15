"use client";

import React from "react";
import { ThemeProvider } from "tharikida-ui";
import { Button } from "tharikida-ui/button";
import Code from "./Code";

const ThemeProviderDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>ThemeProvider</h1>
    <p>
      <b>ThemeProvider</b> provides theming context to all child components. Use
      it to set primary/secondary colors, font, and more.
    </p>
    <h2>Usage</h2>
    <Code>{`import { ThemeProvider, Button } from 'tharikida-ui';

<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff" fontFamily="'Poppins', sans-serif">
  <Button>Custom Themed Button</Button>
</ThemeProvider>`}</Code>
    <h2>Example</h2>
    <ThemeProvider
      primaryColor="#ff5733"
      secondaryColor="#33c1ff"
      fontFamily="'Poppins', sans-serif"
    >
      <Button>Custom Themed Button</Button>
    </ThemeProvider>
    <h2>Props</h2>
    <ul>
      <li>
        <b>primaryColor</b>: <i>string</i> — (optional) Main color for your app.
      </li>
      <li>
        <b>secondaryColor</b>: <i>string</i> — (optional) Accent color for your
        app.
      </li>
      <li>
        <b>fontFamily</b>: <i>string</i> — (optional) Font for all children.
      </li>
      <li>
        <b>children</b>: <i>ReactNode</i> — Components to receive the theme.
      </li>
    </ul>
  </div>
);

export default ThemeProviderDocs;
