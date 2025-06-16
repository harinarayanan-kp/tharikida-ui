import React from "react";
import { Alert } from "tharikida-ui/feedback";
import Code from "./Code";

const AlertDocs = () => {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>Alert</h1>
      <p>
        <b>Alert</b> is a theme-aware popup/modal alert component. It can be
        triggered by a button and displays a message with a title and a close
        button.
      </p>
      <h2>Basic Usage</h2>
      <Alert />
      <Code>{`
import { Alert } from 'tharikida-ui/feedback';

<Alert />
`}</Code>
      <h2>Custom Message, Title, and Button</h2>
      <Alert
        title="Custom Alert!"
        message="You can customize the title, message, and button text."
        buttonText="Open Custom Alert"
      />
      <Code>{`
<Alert
  title="Custom Alert!"
  message="You can customize the title, message, and button text."
  buttonText="Open Custom Alert"
/>
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
            <td style={{ border: "1px solid #ccc", padding: 6 }}>message</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Alert message text
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>title</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Alert title
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>buttonText</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Text for the trigger button
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>styles</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.CSSProperties
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom styles for the popup content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>className</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom className for the root element
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlertDocs;
