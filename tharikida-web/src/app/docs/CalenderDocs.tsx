import React from "react";
import Code from "./Code";
import { Calendar } from "tharikida-ui"; // Adjust the import if needed

const CalendarDocs = () => {
  return (
    <div>
      <h1>Calendar Component</h1>
      <Calendar />
      <h2>Usage</h2>
      <Code>{`<Calendar />`}</Code>
      <h2>Props</h2>
      <ul>
        <li>
          <strong>selectedDate</strong>: The currently selected date (string,
          optional).
        </li>
        <li>
          <strong>onDateSelect</strong>: Function that gets called when a date
          is selected (function, optional).
        </li>
        <li>
          <strong>minDate</strong>: Minimum date that can be selected (string,
          optional).
        </li>
        <li>
          <strong>maxDate</strong>: Maximum date that can be selected (string,
          optional).
        </li>
        <li>
          <strong>styles</strong>: Custom styles (object, optional).
        </li>
      </ul>
    </div>
  );
};

export default CalendarDocs;
