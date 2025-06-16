"use client";

import React, { useState } from "react";
import { TextArea } from "tharikida-ui/input";
import Code from "./Code";

const TextAreaDocs = () => {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h1>TextArea</h1>
      <p>
        <b>TextArea</b> is a custom-styled multi-line input component supporting
        controlled and uncontrolled usage, labels, and custom styles.
      </p>
      <h2>Usage</h2>
      <Code>{`import { TextArea } from 'tharikida-ui/input';

export default function Example() {
  const [value, setValue] = useState("");
  return (
    <TextArea
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Description"
      placeholder="Type your message..."
      rows={4}
    />
  );
}`}</Code>
      <h2>Example</h2>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Description"
        placeholder="Type your message..."
        rows={4}
      />
      <h2>Props</h2>
      <ul>
        <li>
          <b>value</b>: <i>string</i> — Controls the textarea value (for
          controlled usage).
        </li>
        <li>
          <b>onChange</b>: <i>function</i> — Called with the change event when
          the value changes.
        </li>
        <li>
          <b>label</b>: <i>string</i> — Optional label to display above the
          textarea.
        </li>
        <li>
          <b>placeholder</b>: <i>string</i> — Placeholder text for the textarea.
        </li>
        <li>
          <b>rows</b>: <i>number</i> — Number of visible text lines.
        </li>
        <li>
          <b>styles</b>: <i>object</i> — Custom styles for the label container.
        </li>
        <li>
          <b>className</b>: <i>string</i> — Additional className for the label
          container.
        </li>
        <li>
          <b>disabled</b>: <i>boolean</i> — Disables the textarea if true.
        </li>
      </ul>
    </div>
  );
};

export default TextAreaDocs;
