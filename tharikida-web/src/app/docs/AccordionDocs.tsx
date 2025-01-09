import React from "react";
import { Accordion } from "tharikida-ui";
import Code from "./Code"; // Assuming you have a Code component for displaying code snippets

const AccordionDocs: React.FC = () => {
  const items = [
    {
      title: "Section 1",
      content: <p>This is the content of section 1.</p>,
    },
    {
      title: "Section 2",
      content: <p>This is the content of section 2.</p>,
    },
    {
      title: "Section 3",
      content: <p>This is the content of section 3.</p>,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Accordion Component</h1>
      <Accordion items={}/>

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>Accordion</strong>{" "}
        component in your application:
      </p>
      <Code>{`import React from "react";
import Accordion from "./Accordion";

const App: React.FC = () => {
  const items = [
    {
      title: "Section 1",
      content: <p>This is the content of section 1.</p>,
    },
    {
      title: "Section 2",
      content: <p>This is the content of section 2.</p>,
    },
    {
      title: "Section 3",
      content: <p>This is the content of section 3.</p>,
    },
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
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
              <strong>items</strong>
            </td>
            <td
              style={{
                borderRight: "2px solid #ddd",
                padding: "10px 15px",
              }}
            >
              AccordionItem[]
            </td>
            <td
              style={{
                padding: "10px 15px",
              }}
            >
              An array of accordion items, where each item has a title and content.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the accordion&apos;s appearance using inline styles.
      </p>
      <Code>{`<Accordion
  items={[
    {
      title: "Custom Section",
      content: <p>This is custom content.</p>,
    },
  ]}
  style={{ border: "2px solid blue", borderRadius: "8px" }}
/>
`}</Code>

      <h2>Interactive Effects</h2>
      <p>
        The <strong>Accordion</strong> component includes an interactive effect
        when a header is clicked. The content of the clicked section is toggled,
        giving users a clear visual feedback.
      </p>
      <Code>{`<Accordion
  items={[
    {
      title: "Interactive Section",
      content: <p>This content toggles on click.</p>,
    },
  ]}
/>
`}</Code>

      <h2>Theming</h2>
      <p>
        The accordion automatically inherits styles from the parent component.
        You can customize the styles by passing inline styles to the Accordion component.
      </p>
      <Code>{`<Accordion
  items={[
    {
      title: "Themed Section",
      content: <p>This is themed content.</p>,
    },
  ]}
  style={{ backgroundColor: "#f9f9f9", color: "#333" }}
/>
`}</Code>
    </div>
  );
};

export default AccordionDocs;
