"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const List = ({ children, styles, className = "" }) => {
    const theme = useTheme();
    return (_jsx("div", { className: `tharikida-list ${className}`, style: {
            border: "2px solid black",
            borderRadius: `${theme.spacingfactor * 2}px`,
            background: theme.backgroundColor,
            overflow: "hidden",
            ...styles,
        }, children: children }));
};
export default List;
