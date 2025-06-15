"use client";

import React, { useState } from "react";
import { RadioButton } from "tharikida-ui/input";
import Code from "./Code";

const RadioButtonDocs = () => {
  const [selected, setSelected] = useState("");

  return (
    <div
      style={{
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h1>RadioButton</h1>
      <p>
        The <b>RadioButton</b> component lets users select a single option from
        a set. Supports controlled and uncontrolled usage, custom styles, and
        theming.
      </p>
      <h2>Usage</h2>
      <Code>{`import { RadioButton } from 'tharikida-ui/input';

export default function Example() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <RadioButton
        checked={selected === "option1"}
        onChange={() => setSelected("option1")}
        name="group"
        value="option1"
      /> Option 1
      <RadioButton
        checked={selected === "option2"}
        onChange={() => setSelected("option2")}
        name="group"
        value="option2"
      /> Option 2
    </>
  );
}`}</Code>
      <h2>Example</h2>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <RadioButton
          checked={selected === "option1"}
          onChange={() => setSelected(selected === "option1" ? "" : "option1")}
          name="group"
          value="option1"
        />
        <span>Option 1</span>
        <RadioButton
          checked={selected === "option2"}
          onChange={() => setSelected(selected === "option2" ? "" : "option2")}
          name="group"
          value="option2"
        />
        <span>Option 2</span>
      </div>
      <h2>Props</h2>
      <ul>
        <li>
          <b>checked</b>: <i>boolean</i> — Controls the checked state (for
          controlled usage).
        </li>
        <li>
          <b>onChange</b>: <i>function</i> — Called when the radio is
          selected/unselected.
        </li>
        <li>
          <b>name</b>: <i>string</i> — Name for grouping radios.
        </li>
        <li>
          <b>value</b>: <i>string</i> — Value for the radio input.
        </li>
        <li>
          <b>styles</b>: <i>object</i> — Custom styles for the label.
        </li>
        <li>
          <b>className</b>: <i>string</i> — Additional className for the label.
        </li>
        <li>
          <b>disabled</b>: <i>boolean</i> — Disables the radio if true.
        </li>
      </ul>
    </div>
  );
};

export default RadioButtonDocs;
