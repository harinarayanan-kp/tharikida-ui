"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
const Alert = ({ message = "This is a simple popup alert box.", title = "Alert", buttonText = "Show Alert", styles = {}, className = "", }) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const alertButtonStyles = {
        padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`,
        fontSize: theme.fontSize,
        backgroundColor: theme.primaryColor,
        color: theme.textColor,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: `${theme.spacingfactor}px`,
        cursor: "pointer",
        fontFamily: theme.fontFamily,
        fontWeight: 600,
        boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black",
        transition: "background-color 0.3s, box-shadow 0.2s",
        margin: `${theme.spacingfactor * 2}px 0`,
    };
    const popupStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    };
    const popupContentStyles = {
        fontFamily: theme.fontFamily,
        backgroundColor: theme.backgroundColor,
        padding: `${theme.spacingfactor * 5}px`,
        border: `2px solid ${theme.borderColor}`,
        textAlign: "center",
        width: 300,
        borderRadius: `${theme.spacingfactor * 2}px`,
        boxShadow: `2px 2px 0px ${theme.shadowColor}`,
        ...styles,
    };
    const closeButtonStyles = {
        marginTop: `${theme.spacingfactor * 2}px`,
        padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`,
        backgroundColor: theme.secondaryColor,
        color: theme.textColor,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: `${theme.spacingfactor}px`,
        cursor: "pointer",
        fontFamily: theme.fontFamily,
        fontWeight: 600,
        boxShadow: "1px 1px 0px grey",
        transition: "background-color 0.3s, box-shadow 0.2s",
    };
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    return (_jsxs("div", { className: className, style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }, children: [_jsx("button", { style: alertButtonStyles, onClick: handleOpen, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, children: buttonText }), isOpen && (_jsx("div", { style: popupStyles, children: _jsxs("div", { style: popupContentStyles, children: [_jsx("h2", { children: title }), _jsx("p", { children: message }), _jsx("button", { style: closeButtonStyles, onClick: handleClose, children: "Close" })] }) }))] }));
};
export default Alert;
