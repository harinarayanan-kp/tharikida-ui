"use client";

import React from "react";
import { Column } from "tharikida-ui";
import { Button } from "tharikida-ui/button";
import Code from "./Code";

const ColumnDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>Column</h1>
    <p>
      <b>Column</b> is a layout component that arranges its children vertically
      in a flex column.
    </p>
    <h2>Usage</h2>
    <Code>{`import { Column, Button } from 'tharikida-ui';

<Column>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Column>`}</Code>
    <h2>Example</h2>
    <Column>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Column>
    <h2>Props</h2>
    <ul>
      <li>
        <b>children</b>: <i>ReactNode</i> — Elements to display in a column.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — (optional) Custom styles for the column
        container.
      </li>
      <li>
        <b>className</b>: <i>string</i> — (optional) Additional className for
        the column.
      </li>
    </ul>
  </div>
);

export default ColumnDocs;
