"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Card = ({ title, children, styles, className = "" }) => {
    const theme = useTheme();
    const cardStyles = {
        border: "2px solid black",
        borderRadius: `${theme.spacingfactor * 4}px`,
        boxShadow: "2px 2px 0px black",
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        padding: theme.spacingfactor * 2,
        margin: theme.spacingfactor,
        ...styles,
    };
    const titleStyles = {
        fontWeight: 600,
        fontSize: theme.fontSize * 1.1,
        marginBottom: theme.spacingfactor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
    };
    return (_jsxs("div", { className: `tharikida-card ${className}`, style: cardStyles, children: [title && _jsx("div", { style: titleStyles, children: title }), _jsx("div", { children: children })] }));
};
export default Card;
