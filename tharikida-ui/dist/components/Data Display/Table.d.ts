import React from "react";
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
declare const Table: ({ columns, data, styles, className }: TableProps) => import("react/jsx-runtime").JSX.Element;
export default Table;
