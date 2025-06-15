"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
const ToggleSwitch = ({ checked, // Controlled checked state
onChange, // Change handler
styles, // Custom styles
className = "", // Custom className
disabled = false, // Disabled state
 }) => {
    const theme = useTheme();
    // Internal state for uncontrolled usage
    const [internalChecked, setInternalChecked] = useState(false);
    // Determine if the component is controlled
    const isControlled = typeof checked === "boolean";
    // Use controlled or internal state
    const currentChecked = isControlled ? checked : internalChecked;
    // Handles toggle action
    const handleChange = (event) => {
        if (!isControlled) {
            setInternalChecked(event.target.checked);
        }
        onChange?.(event);
    };
    // Switch dimensions
    const switchWidth = 40;
    const switchHeight = 22;
    const knobSize = 15;
    const spacing = (switchHeight - knobSize) / 2;
    return (_jsxs("label", { className: `tharikida-toggle-switch ${className}`, style: {
            display: "inline-block",
            position: "relative",
            width: switchWidth,
            height: switchHeight,
            ...styles,
            opacity: disabled ? 0.6 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
        }, children: [_jsx("input", { type: "checkbox", checked: currentChecked, onChange: handleChange, disabled: disabled, style: {
                    opacity: 0,
                    width: 0,
                    height: 0,
                    position: "absolute",
                } }), _jsx("span", { style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: currentChecked
                        ? theme.primaryColor || "#4caf50"
                        : theme.backgroundColor || "#ccc",
                    borderRadius: switchHeight / 2,
                    transition: "background 0.3s",
                    border: `2px solid ${theme.textColor || "#000"}`,
                } }), _jsx("span", { style: {
                    position: "absolute",
                    top: spacing,
                    left: currentChecked ? switchWidth - knobSize - spacing : spacing,
                    width: knobSize,
                    height: knobSize,
                    background: theme.textColor || "#fff",
                    borderRadius: "50%",
                    transition: "left 0.3s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                } })] }));
};
export default ToggleSwitch;
