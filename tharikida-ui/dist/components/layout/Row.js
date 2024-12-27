"use client";
import { jsx as _jsx } from "react/jsx-runtime";
const Row = ({ justifyContent = "flex-start", alignItems = "center", gap = 0, children, styles, className = "", }) => {
    const rowStyles = {
        display: "flex",
        justifyContent,
        alignItems,
        gap: typeof gap === "number" ? `${gap}px` : gap,
        ...styles,
    };
    return (_jsx("div", { className: `tharikida-row ${className}`, style: rowStyles, children: children }));
};
export default Row;
