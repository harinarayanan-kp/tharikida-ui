import React from "react";
export interface RowProps {
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    gap?: number | string;
    children: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Row: ({ justifyContent, alignItems, gap, children, styles, className, }: RowProps) => import("react/jsx-runtime").JSX.Element;
export default Row;
