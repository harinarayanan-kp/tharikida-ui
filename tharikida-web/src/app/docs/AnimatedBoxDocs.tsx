import React from "react";
import Code from "./Code";
import { AnimatedBox, ThemeProvider } from "tharikida-ui"; // Adjust the import if needed

const AnimatedBoxDocs = () => {
  const tableRows = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "The content inside the animated box, usually text or other components.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles that will be applied to the animated box.",
    },
    {
      prop: "height",
      type: "number",
      default: "100",
      description: "Height of the animated box.",
    },
    {
      prop: "width",
      type: "number",
      default: "100",
      description: "Width of the animated box.",
    },
    {
      prop: "frequency",
      type: "number",
      default: "1",
      description: "Frequency of new animations per second.",
    },
    {
      prop: "maxDivs",
      type: "number",
      default: "10",
      description: "Maximum number of animated divs.",
    },
    {
      prop: "animationSpeed",
      type: "number",
      default: "1",
      description: "Speed of the animation in seconds.",
    },
    {
      prop: "starSize",
      type: "number",
      default: "40",
      description: "Size of the star and wrapper div.",
    },
    {
      prop: "color",
      type: "string",
      default: '"#000000"',
      description: "Color of the animated box.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Animated Box Component</h1>
      <AnimatedBox />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>AnimatedBox</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { AnimatedBox } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <AnimatedBox
        height={100}
        width={100}
        frequency={1}
        maxDivs={10}
        animationSpeed={1}
        starSize={40}
        color="#ff5733"
      >
        Animated Content
      </AnimatedBox>
    </div>
  );
}
`}</Code>
      <AnimatedBox
        height={100}
        width={100}
        frequency={1}
        maxDivs={10}
        animationSpeed={1}
        starSize={40}
        color="#ff5733"
      >
        Animated Content
      </AnimatedBox>
      <p>
        In this example, an animated box is displayed with custom height, width,
        frequency, maxDivs, animationSpeed, starSize, and color.
      </p>

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
              Default
            </th>
            <th
              style={{
                padding: "10px 15px",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr
              key={row.prop}
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
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.type}
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.default}
              </td>
              <td
                style={{
                  padding: "10px 15px",
                }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the animated box&apos;s appearance using various props like{" "}
        <code>height</code>, <code>width</code>, <code>frequency</code>,{" "}
        <code>maxDivs</code>, <code>animationSpeed</code>, <code>starSize</code>
        , and <code>color</code>.
      </p>
      <Code>{`<AnimatedBox
  height={150}
  width={150}
  frequency={2}
  maxDivs={15}
  animationSpeed={2}
  starSize={50}
  color="#33c1ff"
>
  Custom Animated Content
</AnimatedBox>
`}</Code>
      <AnimatedBox
        height={150}
        width={150}
        frequency={2}
        maxDivs={15}
        animationSpeed={2}
        starSize={50}
        color="#33c1ff"
      >
        Custom Animated Content
      </AnimatedBox>

      <h2>Theming</h2>
      <p>
        The animated box automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the box will use those theme values (like
        colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <AnimatedBox
    height={100}
    width={100}
    frequency={1}
    maxDivs={10}
    animationSpeed={1}
    starSize={40}
    color="#ff5733"
  >
    Themed Animated Content
  </AnimatedBox>
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <AnimatedBox
          height={100}
          width={100}
          frequency={1}
          maxDivs={10}
          animationSpeed={1}
          starSize={40}
          color="#ff5733"
        >
          Themed Animated Content
        </AnimatedBox>
      </ThemeProvider>

      <h2>Box Variations</h2>
      <p>
        You can create different animated box styles by changing the{" "}
        <code>height</code>, <code>width</code>, <code>frequency</code>,{" "}
        <code>maxDivs</code>, <code>animationSpeed</code>, <code>starSize</code>
        , and <code>color</code> props.
      </p>
      <Code>{`<AnimatedBox
  height={200}
  width={200}
  frequency={3}
  maxDivs={20}
  animationSpeed={3}
  starSize={60}
  color="#ffcc00"
>
  Variation 1
</AnimatedBox>
<AnimatedBox
  height={120}
  width={120}
  frequency={1.5}
  maxDivs={8}
  animationSpeed={1.5}
  starSize={30}
  color="#00ff00"
>
  Variation 2
</AnimatedBox>
`}</Code>
      <AnimatedBox
        height={200}
        width={200}
        frequency={3}
        maxDivs={20}
        animationSpeed={3}
        starSize={60}
        color="#ffcc00"
      >
        Variation 1
      </AnimatedBox>
      <AnimatedBox
        height={120}
        width={120}
        frequency={1.5}
        maxDivs={8}
        animationSpeed={1.5}
        starSize={30}
        color="#00ff00"
      >
        Variation 2
      </AnimatedBox>
    </div>
  );
};

export default AnimatedBoxDocs;
