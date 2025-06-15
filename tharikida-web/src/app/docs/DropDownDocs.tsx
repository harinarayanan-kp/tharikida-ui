import React from "react";
import Code from "./Code";
import { ThemeProvider } from "tharikida-ui";
import { Dropdown } from "tharikida-ui/input";

const DropdownDocs = () => {
  const tableRows = [
    {
      prop: "options",
      type: "string[]",
      default: "[]",
      description: "Array of options to display in the dropdown.",
    },
    {
      prop: "defaultOption",
      type: "string",
      default: '""',
      description: "The initially selected option.",
    },
    {
      prop: "onChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Function that gets called when an option is selected.",
    },
    {
      prop: "width",
      type: "string",
      default: '""',
      description: "Width of the dropdown.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles that will be applied to the dropdown.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Dropdown Component</h1>
      <Dropdown
        width="200px"
        options={["Option 1", "Option 2", "Option 3"]}
        defaultOption="Option 1"
        onChange={(value) => console.log(value)}
      />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>Dropdown</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { Dropdown } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <Dropdown
        width="200px"
        options={["Option 1", "Option 2", "Option 3"]}
        defaultOption="Option 1"
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
`}</Code>
      <Dropdown
        width="200px"
        options={["Option 1", "Option 2", "Option 3"]}
        defaultOption="Option 1"
        onChange={(value) => console.log(value)}
      />
      <p>
        In this example, a dropdown is displayed with a list of options, a
        default selected option, and a change handler.
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
        You can customize the dropdown&apos;s appearance using various props
        like <code>options</code>, <code>defaultOption</code>,{" "}
        <code>onChange</code>, <code>width</code>, and <code>styles</code>.
      </p>
      <Code>{`<Dropdown
  options={["Custom Option 1", "Custom Option 2", "Custom Option 3"]}
  defaultOption="Custom Option 1"
  onChange={(value) => alert("Selected option: " + value)}
  width="250px"
  styles={{ border: "2px solid #ff5733", padding: "10px" }}
/>
`}</Code>
      <Dropdown
        options={["Custom Option 1", "Custom Option 2", "Custom Option 3"]}
        defaultOption="Custom Option 1"
        onChange={(value) => alert("Selected option: " + value)}
        width="250px"
        styles={{ border: "2px solid #ff5733", padding: "10px" }}
      />

      <h2>Theming</h2>
      <p>
        The dropdown automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the dropdown will use those theme values
        (like colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <Dropdown
    options={["Themed Option 1", "Themed Option 2", "Themed Option 3"]}
    defaultOption="Themed Option 1"
    onChange={(value) => console.log(value)}
    width="200px"
  />
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <Dropdown
          options={["Themed Option 1", "Themed Option 2", "Themed Option 3"]}
          defaultOption="Themed Option 1"
          onChange={(value) => console.log(value)}
          width="200px"
        />
      </ThemeProvider>

      <h2>Dropdown Variations</h2>
      <p>
        You can create different dropdown styles by changing the{" "}
        <code>options</code>, <code>defaultOption</code>, <code>onChange</code>,{" "}
        <code>width</code>, and <code>styles</code> props.
      </p>
      <Code>{`<Dropdown
  options={["Variation 1", "Variation 2", "Variation 3"]}
  defaultOption="Variation 1"
  onChange={(value) => console.log(value)}
  width="150px"
/>
<Dropdown
  options={["Variation 4", "Variation 5", "Variation 6"]}
  defaultOption="Variation 4"
  onChange={(value) => console.log(value)}
  width="300px"
/>
`}</Code>
      <Dropdown
        options={["Variation 1", "Variation 2", "Variation 3"]}
        defaultOption="Variation 1"
        onChange={(value) => console.log(value)}
        width="150px"
      />
      <Dropdown
        options={["Variation 4", "Variation 5", "Variation 6"]}
        defaultOption="Variation 4"
        onChange={(value) => console.log(value)}
        width="300px"
      />
    </div>
  );
};

export default DropdownDocs;
