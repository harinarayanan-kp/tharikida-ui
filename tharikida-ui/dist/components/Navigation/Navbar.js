"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Navbar = ({ logo, links = [], rightContent, styles = {}, className = "", }) => {
    const theme = useTheme();
    return (_jsxs("nav", { style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: theme.primaryColor,
            color: theme.textColor,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize,
            padding: `${theme.spacingfactor * 1.5}px ${theme.spacingfactor * 3}px`,
            borderBottom: "2px solid black",
            boxShadow: "0 2px 0 #000",
            ...styles,
        }, className: className, children: [_jsxs("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: theme.spacingfactor,
                }, children: [logo && _jsx("div", { style: { marginRight: theme.spacingfactor }, children: logo }), links.map((link) => (_jsxs("a", { href: link.href, style: {
                            color: link.active ? theme.primaryColor : theme.textColor,
                            background: link.active
                                ? theme.textColor
                                : "rgba(255,255,255,0.08)",
                            textDecoration: "none",
                            fontWeight: 700,
                            margin: `0 ${theme.spacingfactor / 2}px`,
                            padding: `6px 16px`,
                            borderRadius: 8,
                            border: link.active ? `2px solid ${theme.textColor}` : "none",
                            boxShadow: link.active ? `0 2px 0 ${theme.textColor}` : "none",
                            transition: "background 0.2s, color 0.2s, border 0.2s",
                            cursor: "pointer",
                            position: "relative",
                        }, children: [link.label, link.active && (_jsx("span", { style: {
                                    position: "absolute",
                                    left: 8,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: theme.primaryColor,
                                    border: `2px solid ${theme.textColor}`,
                                    marginRight: 8,
                                    display: "inline-block",
                                } }))] }, link.href)))] }), rightContent && _jsx("div", { children: rightContent })] }));
};
export default Navbar;
