import React from "react";
import { Accordion } from "tharikida-ui";
import Code from "./Code"; // Assuming you have a Code component for displaying code snippets

const AccordionDocs = () => {
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
      <Code>{`import React from "react";
import Accordion from "./Accordion";

const App: React.FC = () => {
  return (
    <div>
      <h1>Accordion Example</h1>
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
};

export default App;
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
          <tr
            style={{
              backgroundColor: "#eeeeee",
              fontWeight: "bold",
            }}
          >
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Prop
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Type
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              borderBottom: "2px solid #ddd",
            }}
          >
            <td
              style={{
                padding: "10px 15px",
                borderRight: "2px solid #ddd",
              }}
            >
              <strong>title</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
              }}
            >
              string
            </td>
            <td
              style={{
                padding: "10px 15px",
              }}
            >
              The title of the accordion section.
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "2px solid #ddd",
            }}
          >
            <td
              style={{
                padding: "10px 15px",
                borderRight: "2px solid #ddd",
              }}
            >
              <strong>content</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
              }}
            >
              React.ReactNode
            </td>
            <td
              style={{
                padding: "10px 15px",
              }}
            >
              The content of the accordion section.
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "2px solid #ddd",
            }}
          >
            <td
              style={{
                padding: "10px 15px",
                borderRight: "2px solid #ddd",
              }}
            >
              <strong>styles</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
              }}
            >
              React.CSSProperties
            </td>
            <td
              style={{
                padding: "10px 15px",
              }}
            >
              Optional inline styles for the accordion.
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "2px solid #ddd",
            }}
          >
            <td
              style={{
                padding: "10px 15px",
                borderRight: "2px solid #ddd",
              }}
            >
              <strong>className</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
              }}
            >
              string
            </td>
            <td
              style={{
                padding: "10px 15px",
              }}
            >
              Optional additional CSS class names for the accordion.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the accordion&apos;s appearance using inline styles.
      </p>
      <Code>{`<Accordion
  title="Custom Section"
  content={<p>This is custom content.</p>}
  styles={{ border: "2px solid blue", borderRadius: "8px" }}
/>
`}</Code>

      <h2>Interactive Effects</h2>
      <p>
        The <strong>Accordion</strong> component includes an interactive effect
        when a header is clicked. The content of the clicked section is toggled,
        giving users a clear visual feedback.
      </p>
      <Code>{`<Accordion
  title="Interactive Section"
  content={<p>This content toggles on click.</p>}
/>
`}</Code>

      <h2>Theming</h2>
      <p>
        The accordion automatically inherits styles from the parent component.
        You can customize the styles by passing inline styles to the Accordion
        component.
      </p>
      <Code>{`<Accordion
  title="Themed Section"
  content={<p>This is themed content.</p>}
  styles={{ backgroundColor: "#f9f9f9", color: "#333" }}
/>
`}</Code>
    </div>
  );
};

export default AccordionDocs;
