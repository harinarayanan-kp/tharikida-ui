import React from "react";
export interface ColumnProps {
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    gap?: number | string;
    children: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Column: ({ justifyContent, alignItems, gap, children, styles, className, }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export default Column;
