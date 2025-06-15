"use client";

import React from "react";
import { Row } from "tharikida-ui";
import { Button } from "tharikida-ui/button";
import Code from "./Code";

const RowDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>Row</h1>
    <p>
      <b>Row</b> is a layout component that arranges its children horizontally
      in a flex row.
    </p>
    <h2>Usage</h2>
    <Code>{`import { Row, Button } from 'tharikida-ui';

<Row>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Row>`}</Code>
    <h2>Example</h2>
    <Row>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Row>
    <h2>Props</h2>
    <ul>
      <li>
        <b>children</b>: <i>ReactNode</i> — Elements to display in a row.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — (optional) Custom styles for the row
        container.
      </li>
      <li>
        <b>className</b>: <i>string</i> — (optional) Additional className for
        the row.
      </li>
    </ul>
  </div>
);

export default RowDocs;
