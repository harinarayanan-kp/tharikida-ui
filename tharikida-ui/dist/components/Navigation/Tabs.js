"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Tabs = ({ items, activeKey, onChange, styles = {}, className = "", tabBarExtraContent, }) => {
    const theme = useTheme();
    return (_jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            fontFamily: theme.fontFamily,
            ...styles,
        }, className: className, children: _jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                borderBottom: `2px solid ${theme.borderColor}`,
            }, children: [items.map((tab) => {
                    const isActive = tab.key === activeKey;
                    return (_jsxs("button", { onClick: () => !tab.disabled && onChange(tab.key), disabled: tab.disabled, style: {
                            background: isActive ? theme.primaryColor : "transparent",
                            color: isActive ? theme.textColor : theme.primaryColor,
                            border: "none",
                            borderBottom: isActive
                                ? `3px solid ${theme.secondaryColor}`
                                : "3px solid transparent",
                            fontWeight: isActive ? 700 : 500,
                            fontSize: theme.fontSize,
                            fontFamily: theme.fontFamily,
                            padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 3}px`,
                            marginRight: 8,
                            cursor: tab.disabled ? "not-allowed" : "pointer",
                            outline: "none",
                            transition: "all 0.2s",
                            opacity: tab.disabled ? 0.5 : 1,
                            borderRadius: `${theme.spacingfactor}px ${theme.spacingfactor}px 0 0`,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }, children: [tab.icon && _jsx("span", { style: { marginRight: 4 }, children: tab.icon }), tab.label] }, tab.key));
                }), tabBarExtraContent && (_jsx("div", { style: { marginLeft: "auto" }, children: tabBarExtraContent }))] }) }));
};
export default Tabs;
