"use client";
import { jsx as _jsx } from "react/jsx-runtime";
const Column = ({ justifyContent = "flex-start", alignItems = "stretch", gap = 0, children, styles, className = "", }) => {
    const columnStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent,
        alignItems,
        gap: typeof gap === "number" ? `${gap}px` : gap,
        ...styles,
    };
    return (_jsx("div", { className: `tharikida-column ${className}`, style: columnStyles, children: children }));
};
export default Column;
