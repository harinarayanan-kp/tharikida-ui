import React from "react";
import Code from "./Code";
import { LoadingButton } from "tharikida-ui/button";
import { FaSave } from "react-icons/fa";

const tableRows = [
  {
    prop: "icon",
    type: "ReactNode",
    default: "undefined",
    description: "Optional icon to display at the start of the button.",
  },
  {
    prop: "type",
    type: '"primary" | "secondary"',
    default: '"primary"',
    description: "Button style variant (primary/secondary).",
  },
  {
    prop: "initialText",
    type: "string",
    default: '"Submit"',
    description: "Text before loading.",
  },
  {
    prop: "loadingText",
    type: "string",
    default: '"Loading..."',
    description: "Text during loading.",
  },
  {
    prop: "doneText",
    type: "string",
    default: '"Done!"',
    description: "Text after loading.",
  },
  {
    prop: "loadingDuration",
    type: "number",
    default: "1500",
    description: "Loading time in ms.",
  },
  {
    prop: "styles",
    type: "React.CSSProperties",
    default: "undefined",
    description: "Custom styles for the button.",
  },
  {
    prop: "onClick",
    type: "() => void",
    default: "undefined",
    description: "Click handler (fires before loading).",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Custom className.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "undefined",
    description: "Additional content inside the button.",
  },
  {
    prop: "cornerRadius",
    type: "number",
    default: "theme.cornerRadius",
    description: "Custom border radius (overrides theme).",
  },
];

const LoadingButtonDocs = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "Montserrat",
      maxWidth: 600,
    }}
  >
    <h1>LoadingButton Component</h1>
    <LoadingButton
      initialText="Save"
      loadingText="Saving..."
      doneText="Saved!"
    />

    <h2>Usage</h2>
    <p>
      Here&apos;s a basic example of how to use the{" "}
      <strong>LoadingButton</strong> component in your application:
    </p>
    <Code>{`import { LoadingButton } from 'tharikida-ui/button';

export default function App() {
  return (
    <div>
      <LoadingButton initialText="Save" loadingText="Saving..." doneText="Saved!" />
      <LoadingButton icon={<FaSave />} type="secondary" />
      <LoadingButton icon={<FaSave />} cornerRadius={20} />
    </div>
  );
}`}</Code>
    <LoadingButton icon={<FaSave />} type="secondary" />
    <LoadingButton icon={<FaSave />} cornerRadius={20} />
    <p>
      In this example, three loading buttons are displayed: one with the default
      style, one with an icon and secondary style, and one with a custom{" "}
      <code>cornerRadius</code>.
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
                verticalAlign: "top",
              }}
            >
              <strong>{row.prop}</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
                verticalAlign: "top",
              }}
            >
              {row.type}
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
                verticalAlign: "top",
              }}
            >
              {row.default}
            </td>
            <td style={{ padding: "10px 15px", verticalAlign: "top" }}>
              {row.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Customization</h2>
    <p>
      You can customize the loading button&apos;s appearance using the{" "}
      <code>type</code> prop (which sets the button color based on the theme),
      the <code>cornerRadius</code> prop, and the <code>styles</code> prop to
      apply custom styles.
    </p>
    <Code>{`<LoadingButton
  icon={<FaSave />}
  type="primary"
  cornerRadius={20}
  styles={{ padding: "12px 24px", fontSize: "18px" }}
  initialText="Save"
  loadingText="Saving..."
  doneText="Saved!"
/>`}</Code>
    <LoadingButton
      icon={<FaSave />}
      type="primary"
      cornerRadius={20}
      styles={{ padding: "12px 24px", fontSize: "18px" }}
      initialText="Save"
      loadingText="Saving..."
      doneText="Saved!"
    />

    <h2>Interactive Effects</h2>
    <p>
      The <strong>LoadingButton</strong> component includes an interactive
      effect when clicked. When you press the button, it appears to be
      &quot;active&quot; (pressed), giving users a clear visual feedback.
    </p>
    <Code>{`<LoadingButton
  initialText="Click Me"
  loadingText="Loading..."
  doneText="Done!"
  onClick={() => alert("Button clicked!")}
/>`}</Code>
    <LoadingButton
      initialText="Click Me"
      loadingText="Loading..."
      doneText="Done!"
      onClick={() => alert("Button clicked!")}
    />

    <h2>Theming</h2>
    <p>
      The loading button automatically inherits theme styles from the{" "}
      <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
      <code>ThemeProvider</code>, the button will use those theme values (like
      colors, fonts, and spacing).
    </p>
    <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff" cornerRadius={20}>
  <LoadingButton initialText="Save" />
</ThemeProvider>`}</Code>
  </div>
);

export default LoadingButtonDocs;
