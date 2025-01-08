import React from "react";
import Code from "./Code";
import { IconButton, ThemeProvider } from "tharikida-ui";
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
      description: "Defines the type of the button, which changes its background color.",
    },
    {
      prop: "href",
      type: "string",
      default: "undefined",
      description: "If specified, the button renders as a link (<code><a></code>), otherwise, it renders as a regular <code><button></code>.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "The content inside the button, usually text that accompanies the icon.",
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
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>IconButton Component</h1>
      <IconButton icon={<FaHome />}>Home</IconButton>

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>IconButton</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { IconButton } from 'tharikida-ui';
import { FaHome } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <IconButton icon={<FaHome />} type="primary">Home</IconButton>
      <IconButton icon={<FaHome />} type="secondary">Home</IconButton>
    </div>
  );
}
`}</Code>
      <IconButton icon={<FaHome />} type="primary">Home</IconButton>
      <IconButton icon={<FaHome />} type="secondary">Home</IconButton>
      <p>
        In this example, two icon buttons are displayed: one with the default primary
        style, and one with the secondary style.
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
        You can customize the icon button&apos;s appearance using both the{" "}
        <code>type</code> prop (which sets the button color based on the theme)
        and the <code>styles</code> prop to apply custom styles.
      </p>
      <Code>{`<IconButton
  icon={<FaHome />}
  type="primary"
  styles={{ padding: "12px", fontSize: "18px" }}
>
  Custom Primary Button
</IconButton>
`}</Code>
      <IconButton
        icon={<FaHome />}
        type="primary"
        styles={{ padding: "12px", fontSize: "18px" }}
      >
        Custom Primary Button
      </IconButton>

      <h2>
        Example with <code>href</code> Prop
      </h2>
      <p>
        To use the <strong>IconButton</strong> component as a link, simply set the{" "}
        <code>href</code> prop:
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
        when clicked. When you press the button, it appears to be &quot;active&quot;
        (pressed), giving users a clear visual feedback.
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
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <IconButton icon={<FaHome />} type="primary">Custom Themed Button</IconButton>
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <IconButton icon={<FaHome />} type="primary">Custom Themed Button</IconButton>
      </ThemeProvider>

      <h2>Button Variations</h2>
      <p>
        You can create different button styles by changing the <code>type</code>{" "}
        prop. The default value is <code>&quot;primary&quot;</code>, but you can also set
        it to <code>&quot;secondary&quot;</code> for an alternative style.
      </p>
      <Code>{`<IconButton icon={<FaHome />} type="primary">Primary Button</IconButton>
<IconButton icon={<FaHome />} type="secondary">Secondary Button</IconButton>`}</Code>
      <IconButton icon={<FaHome />} type="primary">Primary Button</IconButton>
      <IconButton icon={<FaHome />} type="secondary">Secondary Button</IconButton>
    </div>
  );
};

export default IconButtonDocs;