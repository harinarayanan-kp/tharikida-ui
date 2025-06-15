"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const ListTile = ({ leading, title, subtitle, trailing, onClick, styles, className = "", }) => {
    const theme = useTheme();
    return (_jsxs("div", { className: `tharikida-list-tile ${className}`, style: {
            display: "flex",
            alignItems: "center",
            padding: `${theme.spacingfactor * 1.5}px ${theme.spacingfactor * 2}px`,
            borderBottom: "1px solid #ddd",
            cursor: onClick ? "pointer" : "default",
            background: theme.backgroundColor,
            ...styles,
        }, onClick: onClick, children: [leading && (_jsx("div", { style: { marginRight: theme.spacingfactor * 2 }, children: leading })), _jsxs("div", { style: { flex: 1 }, children: [_jsx("div", { style: { fontWeight: 600, fontSize: theme.fontSize }, children: title }), subtitle && (_jsx("div", { style: { color: theme.textColor, fontSize: theme.fontSize * 0.9 }, children: subtitle }))] }), trailing && (_jsx("div", { style: { marginLeft: theme.spacingfactor * 2 }, children: trailing }))] }));
};
export default ListTile;
