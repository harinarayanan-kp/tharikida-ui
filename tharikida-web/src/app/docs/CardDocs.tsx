"use client";

import React from "react";
import Code from "./Code";
import { Card } from "tharikida-ui/datadisplay";

const CardDocs = () => {
  const tableRows = [
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Title of the card, displayed at the top.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Content to display inside the card.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles for the card container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional className for the card container.",
    },
    {
      prop: "cornerRadius",
      type: "number",
      default: "theme.cornerRadius",
      description:
        "Custom border radius for the card. Overrides theme.cornerRadius if provided.",
    },
  ];
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h1>Card Component</h1>
      <Card title="Welcome!">
        <p>
          This is a simple card component. You can put any content here, such as
          text, images, or even other components.
        </p>
      </Card>

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>Card</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { Card } from 'tharikida-ui/datadisplay';

<Card title="Welcome!">
  <p>This is a simple card component.</p>
</Card>`}</Code>

      <h2>Props</h2>
      <table
        style={{
          width: "100%",
          marginBottom: "20px",
          borderCollapse: "collapse",
          border: "2px solid black",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "#f3f3f3",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#eeeeee", fontWeight: "bold" }}>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Prop</th>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Type</th>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Default</th>
            <th style={{ padding: "10px 15px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.prop} style={{ borderBottom: "2px solid #ddd" }}>
              <td
                style={{
                  padding: "10px 15px",
                  borderRight: "2px solid #ddd",
                }}
              >
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.type}
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.default}
              </td>
              <td style={{ padding: "10px 15px" }}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the card&apos;s appearance using the{" "}
        <code>styles</code> prop and the <code>cornerRadius</code> prop.
      </p>
      <Code>{`<Card
  title="Custom Card"
  styles={{ border: '2px solid blue', backgroundColor: '#f9f9f9' }}
  cornerRadius={16}
>
  <p>This card has custom styles and a custom border radius.</p>
</Card>`}</Code>
      <Card
        title="Custom Card"
        styles={{ border: "2px solid blue", backgroundColor: "#f9f9f9" }}
        cornerRadius={16}
      >
        <p>This card has custom styles and a custom border radius.</p>
      </Card>

      <h2>Theming</h2>
      <p>
        The Card automatically inherits styles from the{" "}
        <code>ThemeProvider</code>. You can customize the theme globally, and
        the Card will use those theme values (like colors, fonts, and spacing).
        The <code>cornerRadius</code> prop overrides the theme value for border
        radius.
      </p>
      <Code>{`import { ThemeProvider } from 'tharikida-ui/theme';
import { Card } from 'tharikida-ui/datadisplay';

<ThemeProvider cornerRadius={24} primaryColor="#ff5733">
  <Card title="Themed Card">
    <p>This card uses the theme's corner radius and colors.</p>
  </Card>
</ThemeProvider>`}</Code>
      {/*
      <ThemeProvider cornerRadius={24} primaryColor="#ff5733">
        <Card title="Themed Card">
          <p>This card uses the theme's corner radius and colors.</p>
        </Card>
      </ThemeProvider>
      */}
    </div>
  );
};

export default CardDocs;
