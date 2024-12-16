import React from "react";
import Code from "./Code";
import { Button } from "tharikida-ui";

const ButtonDocs = () => {
  return (
    <div>
      <h1>Button Component</h1>
      <Button>Click Me</Button>
      <h2>Usage</h2>
      <Code>{`<Button>Click Me</Button>`}</Code>
      <h2>Props</h2>
      <ul>
        <li>
          <strong>children</strong>: Content inside the button (string or JSX
          element).
        </li>
        <li>
          <strong>styles</strong>: Custom styles (object, optional).
        </li>
        <li>
          <strong>onClick</strong>: Click handler (function, optional).
        </li>
      </ul>
    </div>
  );
};

export default ButtonDocs;
