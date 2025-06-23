"use client";

import React, { useState } from "react";
import { CheckBox } from "tharikida-ui/input";
import Code from "./Code";

const tableRows = [
  {
    prop: "checked",
    type: "boolean",
    default: "undefined",
    description: "Controls the checked state (for controlled usage).",
  },
  {
    prop: "onChange",
    type: "(checked: boolean) => void",
    default: "undefined",
    description: "Called with the new checked value when toggled.",
  },
  {
    prop: "label",
    type: "string",
    default: "undefined",
    description: "Optional label to display next to the checkbox.",
  },
  {
    prop: "styles",
    type: "React.CSSProperties",
    default: "undefined",
    description: "Custom styles for the checkbox container.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional className for the checkbox container.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the checkbox if true.",
  },
  {
    prop: "cornerRadius",
    type: "number",
    default: "theme.cornerRadius",
    description:
      "Custom border radius for the checkbox. Overrides theme.cornerRadius if provided.",
  },
];

const CheckBoxDocs = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h1>CheckBox Component</h1>
      <CheckBox checked={checked} onChange={setChecked} label="Accept Terms" />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>CheckBox</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { CheckBox } from 'tharikida-ui/input';

export default function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      checked={checked}
      onChange={setChecked}
      label="Accept Terms"
    />
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
        You can customize the checkbox&apos;s appearance using the{" "}
        <code>styles</code> prop and the <code>cornerRadius</code> prop.
      </p>
      <Code>{`<CheckBox
  label="Custom Checkbox"
  styles={{ border: '2px solid blue', background: '#f9f9f9' }}
  cornerRadius={10}
/>`}</Code>
      <CheckBox
        label="Custom Checkbox"
        styles={{ border: "2px solid blue", background: "#f9f9f9" }}
        cornerRadius={10}
      />

      <h2>Disabled State</h2>
      <p>
        The <strong>CheckBox</strong> component can be disabled using the{" "}
        <code>disabled</code> prop.
      </p>
      <Code>{`<CheckBox label="Disabled Checkbox" disabled />`}</Code>
      <CheckBox label="Disabled Checkbox" disabled />
    </div>
  );
};

export default CheckBoxDocs;
