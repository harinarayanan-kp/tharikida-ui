import React from "react";
import Code from "./Code";
import { ArrowButton, ThemeProvider } from "tharikida-ui";

const ArrowButtonDocs = () => {
  const tableRows = [
    {
      prop: "type",
      type: '"box" | "rounded" | "hybrid"',
      default: '"box"',
      description: "Defines the shape of the button.",
    },
    {
      prop: "initialDirection",
      type: '"topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom"',
      default: '"bottomright"',
      description: "Sets the initial direction of the arrow.",
    },
    {
      prop: "finalDirection",
      type: '"topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom"',
      default: '"bottomright"',
      description: "Sets the final direction of the arrow.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#ffffff"',
      description: "Background color of the button.",
    },
    {
      prop: "arrowFillColor",
      type: "string",
      default: '"#000000"',
      description: "Fill color of the arrow.",
    },
    {
      prop: "arrowStrokeColor",
      type: "string",
      default: '"#000000"',
      description: "Stroke color of the arrow.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"#000000"',
      description: "Border color of the button.",
    },
    {
      prop: "shadowColor",
      type: "string",
      default: '"rgba(0, 0, 0, 0.1)"',
      description: "Shadow color of the button.",
    },
    {
      prop: "size",
      type: "number",
      default: "40",
      description: "Size of the button.",
    },
    {
      prop: "borderRadiusPercentage",
      type: "number",
      default: "50",
      description: "Border radius percentage of the button.",
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
        Here&apos;s a basic example of how to use the <strong>ArrowButton</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { ArrowButton } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <ArrowButton type="box" initialDirection="bottomright" />
      <ArrowButton type="rounded" initialDirection="topleft" />
    </div>
  );
}
`}</Code>
      <ArrowButton type="box" initialDirection="bottomright" />
      <ArrowButton type="rounded" initialDirection="topleft" />
      <p>
        In this example, two arrow buttons are displayed: one with a box shape
        and another with a rounded shape.
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
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Prop
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Type
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Default
            </th>
            <th
              style={{
                padding: "10px 15px",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr
              key={row.prop}
              style={{
                borderBottom: "2px solid #ddd",
              }}
            >
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
              <td
                style={{
                  padding: "10px 15px",
                }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the arrow button&apos;s appearance using various props like{" "}
        <code>type</code>, <code>backgroundColor</code>,{" "}
        <code>arrowFillColor</code>, and more.
      </p>
      <Code>{`<ArrowButton
  type="hybrid"
  initialDirection="top"
  backgroundColor="#ffcc00"
  arrowFillColor="#ffffff"
  size={50}
/>
`}</Code>
      <ArrowButton
        type="hybrid"
        initialDirection="top"
        backgroundColor="#ffcc00"
        arrowFillColor="#ffffff"
        size={50}
      />

      <h2>Interactive Effects</h2>
      <p>
        The <strong>ArrowButton</strong> component includes an interactive
        effect when clicked. When you press the button, it appears to be
        &quot;active&quot; (pressed), giving users a clear visual feedback.
      </p>
      <Code>{`<ArrowButton
  type="rounded"
  initialDirection="right"
  onClick={() => alert("Arrow Button clicked!")}
/>
`}</Code>
      <ArrowButton
        type="rounded"
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
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <ArrowButton type="box" initialDirection="bottomleft" />
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <ArrowButton type="box" initialDirection="bottomleft" />
      </ThemeProvider>

      <h2>Button Variations</h2>
      <p>
        You can create different arrow button styles by changing the{" "}
        <code>type</code> and <code>initialDirection</code> props.
      </p>
      <Code>{`<ArrowButton type="box" initialDirection="topleft" />
<ArrowButton type="rounded" initialDirection="bottomright" />
<ArrowButton type="hybrid" initialDirection="left" />
`}</Code>
      <ArrowButton type="box" initialDirection="topleft" />
      <ArrowButton type="rounded" initialDirection="bottomright" />
      <ArrowButton type="hybrid" initialDirection="left" />
    </div>
  );
};

export default ArrowButtonDocs;
