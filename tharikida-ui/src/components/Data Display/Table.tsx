"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Table` is a flexible table component for displaying tabular data, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Table` component.
 * @param {string[]} props.columns - Table column headers.
 * @param {(string | number | React.ReactNode)[][]} props.data - Table data as array of rows.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the table.
 * @param {string} [props.className] - Additional className for the table.
 *
 * @returns {JSX.Element} A styled table component.
 */
export interface TableProps {
  /** Table column headers */
  columns: string[];
  /** Table data as array of rows */
  data: (string | number | React.ReactNode)[][];
  /** Custom styles for the table */
  styles?: React.CSSProperties;
  /** Additional className for the table */
  className?: string;
}

const Table = ({ columns, data, styles, className = "" }: TableProps) => {
  const theme = useTheme();
  return (
    <table
      className={`tharikida-table ${className}`}
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        border: "2px solid black",
        ...styles,
      }}
    >
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th
              key={col + idx}
              style={{
                border: "2px solid black",
                padding: theme.spacingfactor,
                background: theme.primaryColor,
                color: theme.textColor,
                fontWeight: 600,
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((cell, cIdx) => (
              <td
                key={cIdx}
                style={{
                  border: "1px solid black",
                  padding: theme.spacingfactor,
                  textAlign: "center",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
