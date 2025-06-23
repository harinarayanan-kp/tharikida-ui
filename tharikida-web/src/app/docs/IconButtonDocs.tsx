import React from "react";
import Code from "./Code";
import { ThemeProvider } from "tharikida-ui";
import { IconButton } from "tharikida-ui/button";
import { FaHome } from "react-icons/fa";

const IconButtonDocs = () => {
  const tableRows = [
    {
      prop: "icon",
      type: "React.ReactNode",
      default: "required",
      description: "The icon to be displayed inside the button.",
    },
    {
      prop: "type",
      type: '"primary" | "secondary"',
      default: '"primary"',
      description:
        "Defines the type of the button, which changes its background color.",
    },
    {
      prop: "href",
      type: "string",
      default: "undefined",
      description:
        "If specified, the button renders as a link (<a>), otherwise, it renders as a regular <button>.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "The content inside the button, usually text that accompanies the icon.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles that will be applied to the button.",
    },
    {
      prop: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Function to be executed when the button is clicked.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class for custom styling.",
    },
    {
      prop: "cornerRadius",
      type: "number",
      default: "theme.cornerRadius",
      description:
        "Custom border radius for the button. Overrides the theme's cornerRadius if provided.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>IconButton Component</h1>
      <IconButton icon={<FaHome />}>Home</IconButton>

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the{" "}
        <strong>IconButton</strong> component in your application:
      </p>
      <Code>{`import { IconButton } from 'tharikida-ui';
import { FaHome } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <IconButton icon={<FaHome />} type="primary">Home</IconButton>
      <IconButton icon={<FaHome />} type="secondary">Home</IconButton>
      <IconButton icon={<FaHome />} cornerRadius={16}>Rounded Home</IconButton>
    </div>
  );
}
`}</Code>
      <IconButton icon={<FaHome />} type="primary">
        Home
      </IconButton>
      <IconButton icon={<FaHome />} type="secondary">
        Home
      </IconButton>
      <IconButton icon={<FaHome />} cornerRadius={16}>
        Rounded Home
      </IconButton>
      <p>
        In this example, three icon buttons are displayed: one with the default
        primary style, one with the secondary style, and one with a custom{" "}
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
        You can customize the icon button&apos;s appearance using the{" "}
        <code>type</code> prop (which sets the button color based on the theme),
        the <code>cornerRadius</code> prop, and the <code>styles</code> prop to
        apply custom styles.
      </p>
      <Code>{`<IconButton
  icon={<FaHome />}
  type="primary"
  cornerRadius={20}
  styles={{ padding: "12px", fontSize: "18px" }}
>
  Custom Primary Button
</IconButton>
`}</Code>
      <IconButton
        icon={<FaHome />}
        type="primary"
        cornerRadius={20}
        styles={{ padding: "12px", fontSize: "18px" }}
      >
        Custom Primary Button
      </IconButton>

      <h2>
        Example with <code>href</code> Prop
      </h2>
      <p>
        To use the <strong>IconButton</strong> component as a link, simply set
        the <code>href</code> prop:
      </p>
      <Code>{`<IconButton
  icon={<FaHome />}
  href="https://www.tharikida-ui.com"
  type="secondary"
>
  Visit Tharikida UI
</IconButton>`}</Code>
      <IconButton
        icon={<FaHome />}
        href="https://www.tharikida-ui.com"
        type="secondary"
      >
        Visit Tharikida UI
      </IconButton>

      <h2>Interactive Effects</h2>
      <p>
        The <strong>IconButton</strong> component includes an interactive effect
        when clicked. When you press the button, it appears to be
        &quot;active&quot; (pressed), giving users a clear visual feedback.
      </p>
      <Code>{`<IconButton
  icon={<FaHome />}
  type="primary"
  onClick={() => alert("Button clicked!")}
>
  Click Me
</IconButton>`}</Code>
      <IconButton
        icon={<FaHome />}
        type="primary"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </IconButton>

      <h2>Theming</h2>
      <p>
        The icon button automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the button will use those theme values (like
        colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff" cornerRadius={20}>
  <IconButton icon={<FaHome />} type="primary">Custom Themed Button</IconButton>
</ThemeProvider>
`}</Code>
      <ThemeProvider
        primaryColor="#ff5733"
        secondaryColor="#33c1ff"
        cornerRadius={20}
      >
        <IconButton icon={<FaHome />} type="primary">
          Custom Themed Button
        </IconButton>
      </ThemeProvider>
    </div>
  );
};

export default IconButtonDocs;
