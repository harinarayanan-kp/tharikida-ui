import React from "react";
import Code from "./Code";
import { ThemeProvider } from "tharikida-ui";
import { ArrowButton } from "tharikida-ui/button";

const ArrowButtonDocs = () => {
  const tableRows = [
    {
      prop: "cornerRadius",
      type: "number",
      default: "theme.cornerRadius",
      description:
        "Custom border radius for the button. Overrides the theme's cornerRadius if provided.",
    },
    {
      prop: "initialDirection",
      type: '"topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom"',
      default: '"topright"',
      description: "Sets the initial direction of the arrow.",
    },
    {
      prop: "finalDirection",
      type: '"topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom"',
      default: '"right"',
      description: "Sets the final direction of the arrow after hover.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"transparent"',
      description: "Background color of the button.",
    },
    {
      prop: "arrowFillColor",
      type: "string",
      default: '"black"',
      description: "Fill color of the arrow.",
    },
    {
      prop: "arrowStrokeColor",
      type: "string",
      default: '"transparent"',
      description: "Stroke color of the arrow.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"black"',
      description: "Border color of the button.",
    },
    {
      prop: "shadowColor",
      type: "string",
      default: '"black"',
      description: "Shadow color of the button.",
    },
    {
      prop: "size",
      type: "number",
      default: "48",
      description: "Size of the button (width and height in px).",
    },
    {
      prop: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Function to be executed when the button is clicked.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Arrow Button Component</h1>
      <ArrowButton />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the{" "}
        <strong>ArrowButton</strong> component in your application:
      </p>
      <Code>{`import { ArrowButton } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <ArrowButton initialDirection="bottomright" />
      <ArrowButton initialDirection="topleft" cornerRadius={24} />
    </div>
  );
}
`}</Code>
      <ArrowButton initialDirection="bottomright" />
      <ArrowButton initialDirection="topleft" cornerRadius={24} />
      <p>
        In this example, two arrow buttons are displayed: one with the default
        theme border radius and another with a custom <code>cornerRadius</code>.
      </p>

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
          <tr
            style={{
              backgroundColor: "#eeeeee",
              fontWeight: "bold",
            }}
          >
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
                style={{ padding: "10px 15px", borderRight: "2px solid #ddd" }}
              >
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{ borderRight: "2px solid #ddd", padding: "10px 15px" }}
              >
                {row.type}
              </td>
              <td
                style={{ borderRight: "2px solid #ddd", padding: "10px 15px" }}
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
        You can customize the arrow button&apos;s appearance using various props
        like <code>cornerRadius</code>, <code>backgroundColor</code>,{" "}
        <code>arrowFillColor</code>, and more.
      </p>
      <Code>{`<ArrowButton
  initialDirection="top"
  backgroundColor="#ffcc00"
  arrowFillColor="#ffffff"
  size={50}
  cornerRadius={16}
/>
`}</Code>
      <ArrowButton
        initialDirection="top"
        backgroundColor="#ffcc00"
        arrowFillColor="#ffffff"
        size={50}
        cornerRadius={16}
      />

      <h2>Interactive Effects</h2>
      <p>
        The <strong>ArrowButton</strong> component includes an interactive
        effect when clicked. When you press the button, it appears to be
        &quot;active&quot; (pressed), giving users a clear visual feedback.
      </p>
      <Code>{`<ArrowButton
  initialDirection="right"
  onClick={() => alert("Arrow Button clicked!")}
/>
`}</Code>
      <ArrowButton
        initialDirection="right"
        onClick={() => alert("Arrow Button clicked!")}
      />

      <h2>Theming</h2>
      <p>
        The arrow button automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the button will use those theme values (like
        colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff" cornerRadius={20}>
  <ArrowButton initialDirection="bottomleft" />
</ThemeProvider>
`}</Code>
      <ThemeProvider
        primaryColor="#ff5733"
        secondaryColor="#33c1ff"
        cornerRadius={20}
      >
        <ArrowButton initialDirection="bottomleft" />
      </ThemeProvider>
    </div>
  );
};

export default ArrowButtonDocs;
