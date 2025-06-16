"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
const SideBar = ({ items, activeKey, onSelect, styles = {}, className = "", header, footer, }) => {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(null);
    const sidebarStyles = {
        width: 220,
        minWidth: 140,
        background: theme.sidebarBg || "#f5e9d7",
        borderRight: `1px solid ${theme.sidebarBorder || "#d1bfa3"}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        ...styles,
    };
    const buttonBase = {
        width: "100%",
        color: theme.sidebarText || "#222",
        border: "none",
        textAlign: "left",
        padding: "12px 20px",
        fontFamily: theme.fontFamily || "Montserrat, sans-serif",
        fontSize: theme.fontSize || 16,
        cursor: "pointer",
        outline: "none",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "transparent",
        borderLeft: "4px solid transparent",
        fontWeight: 500,
        transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
        boxShadow: "none",
    };
    return (_jsxs("aside", { style: sidebarStyles, className: className, children: [header && _jsx("div", { style: { padding: 16 }, children: header }), _jsx("nav", { style: { flex: 1, overflowY: "auto" }, children: items.map((item) => {
                    const isItemActive = activeKey === item.key;
                    const isPressed = isActive === item.key;
                    return (_jsxs("button", { onClick: () => onSelect(item.key), onMouseDown: () => setIsActive(item.key), onMouseUp: () => setIsActive(null), style: {
                            ...buttonBase,
                            background: isItemActive
                                ? theme.sidebarActiveBg || "#d1bfa3"
                                : buttonBase.background,
                            color: theme.sidebarText || "#222",
                            borderLeft: isItemActive
                                ? `4px solid ${theme.sidebarActiveBorder || "#bfa77a"}`
                                : buttonBase.borderLeft,
                            fontWeight: isItemActive ? 700 : 500,
                            boxShadow: isPressed
                                ? "1px 1px 0px grey"
                                : isItemActive
                                    ? "2px 2px 0px #bfa77a"
                                    : buttonBase.boxShadow,
                        }, children: [item.icon && _jsx("span", { style: { marginRight: 8 }, children: item.icon }), item.label] }, item.key));
                }) }), footer && _jsx("div", { style: { padding: 16 }, children: footer })] }));
};
export default SideBar;
