import React from "react";
import { Tooltip } from "tharikida-ui/feedback";
import Code from "./Code";
import { Button } from "tharikida-ui/button";

const TooltipDocs = () => {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>Tooltip</h1>
      <p>
        <b>Tooltip</b> displays a small popup with information when hovering,
        focusing, or tapping on an element. Supports theming and four positions.
      </p>
      <h2>Basic Usage</h2>
      <Tooltip content="This is a tooltip!">
        <Button>Hover me</Button>
      </Tooltip>
      <Code>{`
import { Tooltip } from 'tharikida-ui/feedback';
import { Button } from 'tharikida-ui/button';

<Tooltip content="This is a tooltip!">
  <Button>Hover me</Button>
</Tooltip>
`}</Code>
      <h2>Positions</h2>
      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Tooltip content="Top tooltip" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <Button>Left</Button>
        </Tooltip>
      </div>
      <Code>{`
<Tooltip content="Top tooltip" position="top"><Button>Top</Button></Tooltip>
<Tooltip content="Right tooltip" position="right"><Button>Right</Button></Tooltip>
<Tooltip content="Bottom tooltip" position="bottom"><Button>Bottom</Button></Tooltip>
<Tooltip content="Left tooltip" position="left"><Button>Left</Button></Tooltip>
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
            <td style={{ border: "1px solid #ccc", padding: 6 }}>content</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Tooltip content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>children</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Element to wrap with tooltip
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>position</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              <code>
                &apos;top&apos; | &apos;bottom&apos; | &apos;left&apos; |
                &apos;right&apos;
              </code>
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Tooltip position (default: top)
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>styles</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.CSSProperties
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom styles for the tooltip popup
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>className</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom className for the wrapper
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TooltipDocs;
