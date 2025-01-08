"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
const IconButton = ({ icon, type = "primary", href, children, onClick, styles, className = "", }) => {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(false);
    const buttonStyles = {
        backgroundColor: type === "primary" ? theme.primaryColor : theme.secondaryColor,
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        padding: `${theme.spacingfactor}px`,
        borderRadius: `${theme.spacingfactor}px`,
        margin: `${theme.spacingfactor}px`,
        transition: "background-color 0.3s ease, box-shadow 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black",
        width: "fit-content",
        ...styles,
    };
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const Component = href ? "a" : "button";
    return (_jsxs(Component, { href: href, className: `tharikida-icon-btn ${className}`, style: buttonStyles, onClick: onClick, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, children: [icon, children && _jsx("span", { style: { marginLeft: `${theme.spacingfactor / 2}px` }, children: children })] }));
};
export default IconButton;
