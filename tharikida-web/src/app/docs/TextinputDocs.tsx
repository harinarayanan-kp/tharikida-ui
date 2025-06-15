import React, { useState } from "react";
import Code from "./Code";
import { ThemeProvider } from "tharikida-ui";
import { TextInput } from "tharikida-ui/input";

const TextInputDocs = () => {
  const tableRows = [
    {
      prop: "type",
      type: '"text" | "password" | "email"',
      default: '"text"',
      description: "Defines the type of the input field.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text for the input field.",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "The value of the input field.",
    },
    {
      prop: "onChange",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Function to be executed when the input value changes.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles that will be applied to the input field.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class for custom styling.",
    },
  ];

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>TextInput Component</h1>
      <TextInput placeholder="Enter text" />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>TextInput</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { TextInput } from 'tharikida-ui';

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
`}</Code>
      <TextInput
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />

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
        You can customize the input field&apos;s appearance using both the{" "}
        <code>type</code> prop (which sets the input type) and the{" "}
        <code>styles</code> prop to apply custom styles.
      </p>
      <Code>{`<TextInput
  type="email"
  placeholder="Enter email"
  styles={{ padding: "12px 24px", fontSize: "18px" }}
/>
`}</Code>
      <TextInput
        type="email"
        placeholder="Enter email"
        styles={{ padding: "12px 24px", fontSize: "18px" }}
      />

      <h2>Interactive Effects</h2>
      <p>
        The <strong>TextInput</strong> component includes an interactive effect
        when focused. When you focus on the input field, it appears to be
        &quot;active&quot; (focused), giving users a clear visual feedback.
      </p>
      <Code>{`<TextInput
  type="password"
  placeholder="Enter password"
  onChange={(event) => console.log(event.target.value)}
/>
`}</Code>
      <TextInput
        type="password"
        placeholder="Enter password"
        onChange={(event) => console.log(event.target.value)}
      />

      <h2>Theming</h2>
      <p>
        The input field automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the input field will use those theme values
        (like colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider backgroundColor="#f0f0f0" textColor="#333">
  <TextInput type="text" placeholder="Themed Input" />
</ThemeProvider>
`}</Code>
      <ThemeProvider backgroundColor="#f0f0f0" textColor="#333">
        <TextInput type="text" placeholder="Themed Input" />
      </ThemeProvider>

      <h2>Input Variations</h2>
      <p>
        You can create different input field styles by changing the{" "}
        <code>type</code> prop. The default value is{" "}
        <code>&quot;text&quot;</code>, but you can also set it to{" "}
        <code>&quot;password&quot;</code> or <code>&quot;email&quot;</code> for
        different input types.
      </p>
      <Code>{`<TextInput type="text" placeholder="Text Input" />
<TextInput type="password" placeholder="Password Input" />
<TextInput type="email" placeholder="Email Input" />
`}</Code>
      <TextInput type="text" placeholder="Text Input" />
      <TextInput type="password" placeholder="Password Input" />
      <TextInput type="email" placeholder="Email Input" />
    </div>
  );
};

export default TextInputDocs;
