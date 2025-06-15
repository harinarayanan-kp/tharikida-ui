"use client";

import React from "react";
import { List, ListTile } from "tharikida-ui/datadisplay";
import Code from "./Code";

const ListDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>List & ListTile</h1>
    <p>
      <b>List</b> is a container for grouping list items. <b>ListTile</b> is a
      row for displaying a title, subtitle, and optional icons.
    </p>
    <h2>Usage</h2>
    <Code>{`import { List, ListTile } from 'tharikida-ui/datadisplay';

<List>
  <ListTile title="First Item" subtitle="This is the first item." />
  <ListTile title="Second Item" subtitle="This is the second item." />
</List>`}</Code>
    <h2>Example</h2>
    <List styles={{ maxWidth: 400 }}>
      <ListTile title="First Item" subtitle="This is the first item." />
      <ListTile title="Second Item" subtitle="This is the second item." />
      <ListTile title="Third Item" subtitle="This is the third item." />
    </List>
    <h2>Props (List)</h2>
    <ul>
      <li>
        <b>children</b>: <i>ReactNode</i> — List items.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — Custom styles for the list.
      </li>
      <li>
        <b>className</b>: <i>string</i> — Additional className for the list.
      </li>
    </ul>
    <h2>Props (ListTile)</h2>
    <ul>
      <li>
        <b>title</b>: <i>string</i> — Main text.
      </li>
      <li>
        <b>subtitle</b>: <i>string</i> — Optional subtitle.
      </li>
      <li>
        <b>leading</b>: <i>ReactNode</i> — Leading icon or element.
      </li>
      <li>
        <b>trailing</b>: <i>ReactNode</i> — Trailing icon or element.
      </li>
      <li>
        <b>onClick</b>: <i>function</i> — Click handler.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — Custom styles for the tile.
      </li>
      <li>
        <b>className</b>: <i>string</i> — Additional className for the tile.
      </li>
    </ul>
  </div>
);

export default ListDocs;
