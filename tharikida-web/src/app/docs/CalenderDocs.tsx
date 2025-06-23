import React from "react";
import Code from "./Code";
import { ThemeProvider } from "tharikida-ui";
import { Calendar } from "tharikida-ui/input";

const CalendarDocs = () => {
  const tableRows = [
    {
      prop: "selectedDate",
      type: "string",
      default: '""',
      description: "The currently selected date.",
    },
    {
      prop: "onDateSelect",
      type: "() => void",
      default: "undefined",
      description: "Function that gets called when a date is selected.",
    },
    {
      prop: "minDate",
      type: "string",
      default: '""',
      description: "Minimum date that can be selected.",
    },
    {
      prop: "maxDate",
      type: "string",
      default: '""',
      description: "Maximum date that can be selected.",
    },
    {
      prop: "styles",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom styles that will be applied to the calendar.",
    },
    {
      prop: "handleDateClick",
      type: "(day: number | null) => void",
      default: "undefined",
      description: "Function that handles the click event on a date.",
    },
    {
      prop: "size",
      type: "string",
      default: '""',
      description: "Size of the calendar.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Calendar Component</h1>
      <Calendar />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>Calendar</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { Calendar } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <Calendar />
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
        You can customize the calendar&apos;s appearance using various props
        like <code>selectedDate</code>, <code>onDateSelect</code>,{" "}
        <code>minDate</code>, <code>maxDate</code>, <code>handleDateClick</code>
        , and <code>size</code>.
      </p>
      <Code>{`<Calendar
  selectedDate="2023-11-15"
  onDateSelect={(date) => alert("Selected date: " + date)}
  minDate="2023-01-01"
  maxDate="2023-12-31"
  handleDateClick={(day) => alert("Clicked day: " + day)}
  size="large"
  styles={{ border: "2px solid #ff5733" }}
/>
`}</Code>
      <Calendar />

      <h2>Theming</h2>
      <p>
        The calendar automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the calendar will use those theme values
        (like colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <Calendar
    selectedDate="2023-10-05"
    onDateSelect={(date) => console.log(date)}
    minDate="2023-01-01"
    maxDate="2023-12-31"
    handleDateClick={(day) => console.log(day)}
    size="medium"
  />
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <Calendar handleDateClick={(day) => console.log(day)} size="medium" />
      </ThemeProvider>
    </div>
  );
};

export default CalendarDocs;
