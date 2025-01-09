"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
const Accordion = ({ items, styles, className = "" }) => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const accordionStyles = {
        border: `1px solid ${theme.secondaryColor}`,
        borderRadius: `${theme.spacingfactor}px`,
        ...styles,
    };
    const headerStyles = {
        padding: "10px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        transition: "background-color 0.3s ease",
    };
    const contentStyles = {
        padding: "10px",
        borderTop: `1px solid ${theme.secondaryColor}`,
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
    };
    return (_jsx("div", { className: `tharikida-accordion ${className}`, style: accordionStyles, children: items.map((item, index) => (_jsxs("div", { style: { borderBottom: `1px solid ${theme.secondaryColor}` }, children: [_jsxs("div", { style: {
                        ...headerStyles,
                        backgroundColor: index === activeIndex
                            ? theme.primaryColor
                            : theme.backgroundColor,
                    }, onClick: () => handleClick(index), children: [item.title, _jsx("span", { style: { marginLeft: "10px" }, children: index === activeIndex ? "-" : "+" })] }), index === activeIndex && (_jsx("div", { style: contentStyles, children: item.content }))] }, index))) }));
};
export default Accordion;
