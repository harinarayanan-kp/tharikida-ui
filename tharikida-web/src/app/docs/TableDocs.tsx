"use client";

import React from "react";
import { Table } from "tharikida-ui/datadisplay";
import Code from "./Code";

const TableDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>Table</h1>
    <p>
      <b>Table</b> is a styled table component for displaying tabular data.
    </p>
    <h2>Usage</h2>
    <Code>{`import { Table } from 'tharikida-ui/datadisplay';

<Table
  columns={["Name", "Age", "Country"]}
  data={[["Alice", 25, "USA"], ["Bob", 30, "UK"], ["Charlie", 28, "Canada"]]}
/>`}</Code>
    <h2>Example</h2>
    <div style={{ maxWidth: 400 }}>
      <Table
        columns={["Name", "Age", "Country"]}
        data={[
          ["Alice", 25, "USA"],
          ["Bob", 30, "UK"],
          ["Charlie", 28, "Canada"],
        ]}
      />
    </div>
    <h2>Props</h2>
    <ul>
      <li>
        <b>columns</b>: <i>string[]</i> — Table column headers.
      </li>
      <li>
        <b>data</b>: <i>array</i> — Table data as array of rows.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — Custom styles for the table.
      </li>
      <li>
        <b>className</b>: <i>string</i> — Additional className for the table.
      </li>
    </ul>
  </div>
);

export default TableDocs;
