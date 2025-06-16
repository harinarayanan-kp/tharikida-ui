"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
const LoadingButton = ({ icon, type = "primary", initialText = "Submit", loadingText = "Loading...", doneText = "Done!", loadingDuration = 1500, styles = {}, onClick, className = "", children, }) => {
    const theme = useTheme();
    const [state, setState] = useState("idle");
    const handleClick = (e) => {
        if (state === "idle") {
            setState("loading");
            setTimeout(() => setState("done"), loadingDuration);
            if (onClick)
                onClick();
        }
    };
    let content = (_jsxs(_Fragment, { children: [icon && _jsx("span", { style: { marginRight: 8 }, children: icon }), initialText, children] }));
    if (state === "loading") {
        content = (_jsxs(_Fragment, { children: [_jsx("span", { className: "tharikida-loading-spinner", style: { marginRight: 8 } }), loadingText] }));
    }
    else if (state === "done") {
        content = doneText;
    }
    const buttonStyles = {
        backgroundColor: type === "primary" ? theme.primaryColor : theme.secondaryColor,
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        padding: `${theme.spacingfactor}px 20px`,
        borderRadius: `${theme.spacingfactor}px`,
        margin: `${theme.spacingfactor}px`,
        transition: "background-color 0.3s ease, box-shadow 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        boxShadow: state === "loading" ? "1px 1px 0px grey" : "2px 2px 0px black",
        width: "fit-content",
        cursor: state === "loading" ? "not-allowed" : "pointer",
        opacity: state === "loading" ? 0.7 : 1,
        ...styles,
    };
    return (_jsxs("button", { className: `tharikida-loading-btn ${className}`, style: buttonStyles, onClick: handleClick, disabled: state === "loading", children: [content, _jsx("style", { children: `
        .tharikida-loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top: 2px solid #888;
          border-radius: 50%;
          animation: tharikida-spin 0.7s linear infinite;
        }
        @keyframes tharikida-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      ` })] }));
};
export default LoadingButton;
