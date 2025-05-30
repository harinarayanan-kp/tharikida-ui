import React from "react";
import Code from "./Code";
import { ToggleSwitch, ThemeProvider } from "tharikida-ui";

const ToggleSwitchDocs = () => {
  const tableRows = [
    {
      prop: "checked",
      type: "boolean",
      default: "false",
      description: "Controls the checked state (controlled component).",
    },
    {
      prop: "onChange",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Callback when switch is toggled.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles for the switch container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom class name for styling.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the switch interaction.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>ToggleSwitch Component</h1>
      <ToggleSwitch onChange={(e) => console.log(e.target.checked)} />

      <h2>Usage</h2>
      <Code>{`import ToggleSwitch from './ToggleSwitch';

export default function App() {
  return (
    <div>
      <ToggleSwitch onChange={(e) => console.log(e.target.checked)} />
    </div>
  );
}`}</Code>

      <h2>Props</h2>
      <table
        style={{
          width: "100%",
          marginBottom: "20px",
          borderCollapse: "collapse",
          border: "2px solid black",
          borderRadius: "5px",
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
                style={{ padding: "10px 15px", borderRight: "2px solid #ddd" }}
              >
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{ padding: "10px 15px", borderRight: "2px solid #ddd" }}
              >
                {row.type}
              </td>
              <td
                style={{ padding: "10px 15px", borderRight: "2px solid #ddd" }}
              >
                {row.default}
              </td>
              <td style={{ padding: "10px 15px" }}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <Code>{`<ToggleSwitch
  onChange={(e) => alert("Switch is " + (e.target.checked ? "on" : "off"))}
  styles={{ border: "2px solid #4caf50", padding: "5px" }}
  className="custom-toggle"
/>`}</Code>
      <ToggleSwitch
        onChange={(e) =>
          alert("Switch is " + (e.target.checked ? "on" : "off"))
        }
        styles={{ border: "2px solid #4caf50", padding: "5px" }}
        className="custom-toggle"
      />

      <h2>Theming</h2>
      <Code>{`<ThemeProvider primaryColor="#4caf50" backgroundColor="#ddd" textColor="#fff">
  <ToggleSwitch onChange={(e) => console.log(e.target.checked)} />
</ThemeProvider>`}</Code>
      <ThemeProvider
        primaryColor="#4caf50"
        backgroundColor="#ddd"
        textColor="#fff"
      >
        <ToggleSwitch onChange={(e) => console.log(e.target.checked)} />
      </ThemeProvider>

      <h2>Variations</h2>
      <Code>{`<ToggleSwitch checked={true} disabled />
<ToggleSwitch checked={false} />
<ToggleSwitch />`}</Code>
      <ToggleSwitch checked={true} disabled />
      <ToggleSwitch checked={false} />
      <ToggleSwitch />
    </div>
  );
};

export default ToggleSwitchDocs;
