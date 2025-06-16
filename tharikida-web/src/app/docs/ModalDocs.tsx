import React, { useState } from "react";
import { Modal } from "tharikida-ui/feedback";
import Code from "./Code";
import { Button } from "tharikida-ui/button";

const ModalDocs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>Modal</h1>
      <p>
        <b>Modal</b> is a theme-aware popup/modal dialog component. It can
        display any content, supports a title, and can be closed by a button.
      </p>
      <h2>Basic Usage</h2>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Hello Modal!">
        <p>This is a modal dialog. You can put any content here.</p>
        <Button onClick={() => setOpen(false)} styles={{ marginTop: 16 }}>
          Close Modal
        </Button>
      </Modal>
      <Code>{`
import { Modal } from 'tharikida-ui/feedback';
import { useState } from 'react';
import { Button } from 'tharikida-ui/button';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Hello Modal!">
  <p>This is a modal dialog. You can put any content here.</p>
  <Button onClick={() => setOpen(false)} styles={{ marginTop: 16 }}>
    Close Modal
  </Button>
</Modal>
`}</Code>
      <h2>Props</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>Prop</th>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>Type</th>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>open</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>boolean</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Whether the modal is open
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>onClose</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              () =&gt; void
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Callback to close the modal
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>title</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Optional modal title
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>children</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Modal content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>styles</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.CSSProperties
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom styles for the modal content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>className</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom className for the modal content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              showCloseButton
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>boolean</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Show the close (×) button (default: true)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModalDocs;
