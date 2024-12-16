import React from "react";
import Code from "./Code";
import { ArrowButton } from "tharikida-ui";

const ArrowButtonDocs = () => {
  return (
    <div>
      <h1>Arrow Button Component</h1>
      <ArrowButton />
      <h2>Usage</h2>
      <Code>{`<ArrowButton />`}</Code>
      <h2>Props</h2>
      <ul>
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

export default ArrowButtonDocs;
