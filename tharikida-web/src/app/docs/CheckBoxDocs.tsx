"use client";

import React, { useState } from "react";
import { CheckBox } from "tharikida-ui/input";
import Code from "./Code";

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
      <h1>CheckBox</h1>
      <p>
        <b>CheckBox</b> is a custom-styled checkbox component supporting
        controlled and uncontrolled usage, labels, and custom styles.
      </p>
      <h2>Usage</h2>
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
      <h2>Example</h2>
      <CheckBox checked={checked} onChange={setChecked} label="Accept Terms" />
      <h2>Props</h2>
      <ul>
        <li>
          <b>checked</b>: <i>boolean</i> — Controls the checked state (for
          controlled usage).
        </li>
        <li>
          <b>onChange</b>: <i>function</i> — Called with the new checked value
          when toggled.
        </li>
        <li>
          <b>label</b>: <i>string</i> — Optional label to display next to the
          checkbox.
        </li>
        <li>
          <b>styles</b>: <i>object</i> — Custom styles for the label container.
        </li>
        <li>
          <b>className</b>: <i>string</i> — Additional className for the label
          container.
        </li>
        <li>
          <b>disabled</b>: <i>boolean</i> — Disables the checkbox if true.
        </li>
      </ul>
    </div>
  );
};

export default CheckBoxDocs;
