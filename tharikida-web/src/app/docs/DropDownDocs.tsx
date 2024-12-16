import React from "react";
import Code from "./Code";
import { Dropdown } from "tharikida-ui"; // Adjust the import if needed

const DropdownDocs = () => {
  return (
    <div>
      <h1>Dropdown Component</h1>
      <Dropdown width="200px" options={["Option 1", "Option 2", "Option 3"]} />
      <h2>Usage</h2>
      <Code>{`<Dropdown options={["Option 1", "Option 2", "Option 3"]} />`}</Code>
      <h2>Props</h2>
      <ul>
        <li>
          <strong>options</strong>: Array of options to display in the dropdown
          (array of strings).
        </li>
        <li>
          <strong>selectedOption</strong>: The currently selected option
          (string, optional).
        </li>
        <li>
          <strong>onSelect</strong>: Function that gets called when an option is
          selected (function, optional).
        </li>
        <li>
          <strong>styles</strong>: Custom styles (object, optional).
        </li>
      </ul>
    </div>
  );
};

export default DropdownDocs;
