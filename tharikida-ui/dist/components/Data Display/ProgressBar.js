"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const ProgressBar = ({ value, height = 12, styles, className = "", }) => {
    const theme = useTheme();
    return (_jsx("div", { className: `tharikida-progress-bar ${className}`, style: {
            width: "100%",
            height,
            background: theme.backgroundColor,
            border: "2px solid black",
            borderRadius: height,
            overflow: "hidden",
            ...styles,
        }, children: _jsx("div", { style: {
                width: `${Math.max(0, Math.min(100, value))}%`,
                height: "100%",
                background: theme.primaryColor,
                borderRadius: height,
                transition: "width 0.3s",
            } }) }));
};
export default ProgressBar;
