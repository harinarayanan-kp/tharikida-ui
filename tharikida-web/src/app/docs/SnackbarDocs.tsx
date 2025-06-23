"use client";

import React, { useState } from "react";
import { Snackbar } from "tharikida-ui/feedback";
import { Button } from "tharikida-ui/button";
import Code from "./Code";

const SnackbarDocs = () => {
  const [open, setOpen] = useState(false);
  const [openTop, setOpenTop] = useState(false);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>Snackbar / Toast</h1>
      <p>
        <b>Snackbar</b> provides brief feedback about an operation through a
        message at the top or bottom of the screen. It can auto-dismiss, be
        closed manually, and support an action button.
      </p>
      <h2>Basic Usage</h2>
      <Button onClick={() => setOpen(true)} styles={{ marginBottom: 12 }}>
        Show Snackbar (Bottom)
      </Button>
      <Button
        onClick={() => setOpenTop(true)}
        styles={{ marginLeft: 8, marginBottom: 12 }}
      >
        Show Snackbar (Top)
      </Button>
      <Snackbar
        open={open}
        message="This is a snackbar message!"
        onClose={() => setOpen(false)}
        action={
          <Button
            onClick={() => {
              alert("Action clicked!");
              setOpen(false);
            }}
            styles={{
              background: "#eee",
              color: "#333",
              fontSize: 13,
              padding: "2px 10px",
            }}
          >
            UNDO
          </Button>
        }
        duration={3500}
        position="bottom"
      />
      <Snackbar
        open={openTop}
        message="Snackbar at the top!"
        onClose={() => setOpenTop(false)}
        duration={2500}
        position="top"
      />
      <h2>Props</h2>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}
      >
        <thead>
          <tr style={{ background: "#f5e9d7" }}>
            <th style={{ textAlign: "left", padding: 6 }}>Prop</th>
            <th style={{ textAlign: "left", padding: 6 }}>Type</th>
            <th style={{ textAlign: "left", padding: 6 }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>open</td>
            <td>boolean</td>
            <td>Whether the snackbar is visible.</td>
          </tr>
          <tr>
            <td>message</td>
            <td>string</td>
            <td>The message to display.</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>() =&gt; void</td>
            <td>Callback when snackbar closes (auto or manual).</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td>How long to show (ms). Set 0 for persistent.</td>
          </tr>
          <tr>
            <td>action</td>
            <td>ReactNode</td>
            <td>Optional action button (e.g., Undo).</td>
          </tr>
          <tr>
            <td>styles</td>
            <td>CSSProperties</td>
            <td>Custom styles for the snackbar.</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>Custom class name.</td>
          </tr>
          <tr>
            <td>position</td>
            <td>&quot;top&quot; | &quot;bottom&quot;</td>
            <td>Where to show the snackbar.</td>
          </tr>
        </tbody>
      </table>
      <h2>Example</h2>
      <Code>{`
import { Snackbar } from 'tharikida-ui/feedback';
import { Button } from 'tharikida-ui/button';

function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar
        open={open}
        message="Saved successfully!"
        onClose={() => setOpen(false)}
        action={<Button onClick={() => alert('Undo!')}>UNDO</Button>}
        duration={3000}
        position="bottom"
      />
    </>
  );
}
      `}</Code>
      <h2>Accessibility</h2>
      <ul>
        <li>
          Snackbar uses <code>role=&quot;status&quot;</code> and{" "}
          <code>aria-live=&quot;polite&quot;</code> for screen readers.
        </li>
        <li>Close button is keyboard accessible and labelled.</li>
      </ul>
    </div>
  );
};

export default SnackbarDocs;
