import React from "react";
import Code from "./Code";
import { AnimatedBox } from "tharikida-ui"; // Adjust the import if needed

const AnimatedBoxDocs = () => {
  return (
    <div>
      <h1>Animated Box Component</h1>
      <AnimatedBox />
      <h2>Usage</h2>
      <Code>{`<AnimatedBox />`}</Code>
      <h2>Props</h2>
      <ul>
        <li>
          <strong>animation</strong>: Animation style (string).
        </li>
        <li>
          <strong>styles</strong>: Custom styles (object, optional).
        </li>
      </ul>
    </div>
  );
};

export default AnimatedBoxDocs;
