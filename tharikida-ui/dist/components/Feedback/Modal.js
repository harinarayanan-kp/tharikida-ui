"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Modal = ({ open, onClose, title, children, styles = {}, className = "", showCloseButton = true, }) => {
    const theme = useTheme();
    if (!open)
        return null;
    return (_jsx("div", { style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        }, children: _jsxs("div", { className: className, style: {
                background: theme.backgroundColor,
                border: `2px solid ${theme.borderColor}`,
                borderRadius: theme.spacingfactor * 2,
                boxShadow: `2px 2px 0px ${theme.shadowColor}`,
                minWidth: 320,
                maxWidth: 480,
                padding: theme.spacingfactor * 5,
                fontFamily: theme.fontFamily,
                ...styles,
            }, children: [showCloseButton && (_jsx("button", { onClick: onClose, style: {
                        position: "absolute",
                        top: 24,
                        right: 32,
                        background: "transparent",
                        border: "none",
                        fontSize: 24,
                        cursor: "pointer",
                        color: theme.textColor,
                    }, "aria-label": "Close", children: "\u00D7" })), title && _jsx("h2", { style: { marginTop: 0 }, children: title }), _jsx("div", { children: children })] }) }));
};
export default Modal;
