import React from "react";
import Code from "./Code";
import { Accordion } from "tharikida-ui/datadisplay";

const AccordionDocs = () => {
  const tableRows = [
    {
      prop: "title",
      type: "string",
      default: "required",
      description: "The title displayed in the Accordion header.",
    },
    {
      prop: "content",
      type: "React.ReactNode",
      default: "required",
      description: "The content to show when expanded.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles for the Accordion container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom class name for the Accordion container.",
    },
    {
      prop: "cornerRadius",
      type: "number",
      default: "theme.cornerRadius",
      description:
        "Custom border radius for the Accordion. Overrides theme.cornerRadius if provided.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Accordion Component</h1>
      <Accordion
        title="Accordion Title"
        content={<p>This is the content of the accordion.</p>}
      />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>Accordion</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { Accordion } from 'tharikida-ui/datadisplay';

export default function App() {
  return (
    <div>
      <Accordion
        title="Section 1"
        content={<p>This is the content of section 1.</p>}
      />
      <Accordion
        title="Section 2"
        content={<p>This is the content of section 2.</p>}
      />
      <Accordion
        title="Section 3"
        content={<p>This is the content of section 3.</p>}
      />
    </div>
  );
}
`}</Code>

      <h2>Props</h2>
      <table
        style={{
          width: "100%",
          marginBottom: "20px",
          borderCollapse: "collapse",
          border: "2px solid black",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "#f3f3f3",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#eeeeee", fontWeight: "bold" }}>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Prop</th>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Type</th>
            <th style={{ padding: "10px 15px", textAlign: "left" }}>Default</th>
            <th style={{ padding: "10px 15px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.prop} style={{ borderBottom: "2px solid #ddd" }}>
              <td
                style={{ padding: "10px 15px", borderRight: "2px solid #ddd" }}
              >
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{ borderRight: "2px solid #ddd", padding: "10px 15px" }}
              >
                {row.type}
              </td>
              <td
                style={{ borderRight: "2px solid #ddd", padding: "10px 15px" }}
              >
                {row.default}
              </td>
              <td style={{ padding: "10px 15px" }}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the accordion&apos;s appearance using the{" "}
        <code>styles</code> prop and the <code>cornerRadius</code> prop.
      </p>
      <Code>{`<Accordion
  title="Custom Section"
  content={<p>This is custom content.</p>}
  styles={{ border: "2px solid blue", backgroundColor: "#f9f9f9" }}
  cornerRadius={12}
/>`}</Code>
      <Accordion
        title="Custom Section"
        content={<p>This is custom content.</p>}
        styles={{ border: "2px solid blue", backgroundColor: "#f9f9f9" }}
        cornerRadius={12}
      />

      <h2>Theming</h2>
      <p>
        The Accordion automatically inherits styles from the{" "}
        <code>ThemeProvider</code>. You can customize the theme globally, and
        the Accordion will use those theme values (like colors, fonts, and
        spacing). The <code>cornerRadius</code> prop overrides the theme value
        for border radius.
      </p>
      <Code>{`import { ThemeProvider } from 'tharikida-ui/theme';
import { Accordion } from 'tharikida-ui/datadisplay';

<ThemeProvider cornerRadius={20} primaryColor="#ff5733">
  <Accordion
    title="Themed Section"
    content={<p>This is themed content.</p>}
  />
</ThemeProvider>
`}</Code>
    </div>
  );
};

export default AccordionDocs;
