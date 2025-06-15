"use client";

import React, { useState } from "react";
import { ProgressBar } from "tharikida-ui/datadisplay";
import Code from "./Code";

const ProgressBarDocs = () => {
  const [progress, setProgress] = useState(60);
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h1>ProgressBar</h1>
      <p>
        <b>ProgressBar</b> is a horizontal bar for showing progress.
      </p>
      <h2>Usage</h2>
      <Code>{`import { ProgressBar } from 'tharikida-ui/datadisplay';

<ProgressBar value={60} />`}</Code>
      <h2>Example</h2>
      <ProgressBar value={progress} />
      <button
        onClick={() => setProgress((p) => (p + 10) % 110)}
        style={{ marginTop: 12 }}
      >
        Increase
      </button>
      <h2>Props</h2>
      <ul>
        <li>
          <b>value</b>: <i>number</i> — Progress value (0-100).
        </li>
        <li>
          <b>height</b>: <i>number</i> — Height of the bar in px.
        </li>
        <li>
          <b>styles</b>: <i>object</i> — Custom styles for the bar.
        </li>
        <li>
          <b>className</b>: <i>string</i> — Additional className for the bar.
        </li>
      </ul>
    </div>
  );
};

export default ProgressBarDocs;
