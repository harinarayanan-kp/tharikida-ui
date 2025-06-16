"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
const Breadcrumb = ({ items, separator = _jsx("span", { style: { margin: "0 8px" }, children: "/" }), onNavigate, styles = {}, className = "", }) => {
    const theme = useTheme();
    return (_jsx("nav", { "aria-label": "breadcrumb", style: {
            display: "flex",
            alignItems: "center",
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize,
            background: theme.primaryColor,
            color: theme.textColor,
            border: "1px solid black",
            borderRadius: theme.spacingfactor,
            boxShadow: "2px 2px 0px black",
            padding: `${theme.spacingfactor}px ${theme.spacingfactor * 2}px`,
            margin: `${theme.spacingfactor}px`,
            ...styles,
        }, className: className, children: items.map((item, idx) => (_jsxs(React.Fragment, { children: [item.href ? (_jsx("a", { href: item.href, onClick: (e) => {
                        if (onNavigate) {
                            e.preventDefault();
                            onNavigate(item.href);
                        }
                    }, style: {
                        color: theme.textColor,
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "color 0.2s",
                        cursor: "pointer",
                        padding: `0 ${theme.spacingfactor / 2}px`,
                        borderRadius: theme.spacingfactor / 2,
                        background: "rgba(255,255,255,0.08)",
                    }, children: item.label })) : (_jsx("span", { style: { color: theme.textColor, fontWeight: 600 }, children: item.label })), idx < items.length - 1 && separator] }, item.label + idx))) }));
};
export default Breadcrumb;
