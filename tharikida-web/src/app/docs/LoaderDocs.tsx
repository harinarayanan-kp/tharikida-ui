"use client";

import React from "react";
import { Loader } from "tharikida-ui/datadisplay";
import Code from "./Code";

const LoaderDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>Loader</h1>
    <p>
      <b>Loader</b> is a circular animated spinner for indicating loading state.
    </p>
    <h2>Usage</h2>
    <Code>{`import { Loader } from 'tharikida-ui/datadisplay';

<Loader size={40} />`}</Code>
    <h2>Example</h2>
    <Loader size={40} />
    <h2>Props</h2>
    <ul>
      <li>
        <b>size</b>: <i>number</i> — Size of the loader in px.
      </li>
      <li>
        <b>color</b>: <i>string</i> — Loader color.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — Custom styles for the loader.
      </li>
      <li>
        <b>className</b>: <i>string</i> — Additional className for the loader.
      </li>
    </ul>
  </div>
);

export default LoaderDocs;
