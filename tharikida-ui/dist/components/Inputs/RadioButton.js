"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const RadioButton = ({ checked, onChange, styles, className = "", disabled = false, name, value, }) => {
    // Internal state for uncontrolled usage
    const [internalChecked, setInternalChecked] = useState(false);
    // Determine if the component is controlled
    const isControlled = typeof checked === "boolean";
    // Use controlled or internal state
    const currentChecked = isControlled ? checked : internalChecked;
    // Handles selection and unchecking on click
    const handleChange = (event) => {
        if (!isControlled) {
            // If already checked, uncheck on click
            setInternalChecked((prev) => !prev);
        }
        // For controlled, send toggled value
        if (onChange) {
            // Create a synthetic event with toggled checked value
            const syntheticEvent = {
                ...event,
                target: {
                    ...event.target,
                    checked: !currentChecked,
                },
            };
            onChange(syntheticEvent);
        }
    };
    // Radio dimensions
    const radioSize = 22;
    const dotSize = 12;
    const dotOffset = (radioSize - dotSize) / 2;
    return (_jsxs("label", { className: `tharikida-custom-radio ${className}`, style: {
            display: "inline-block",
            position: "relative",
            width: radioSize,
            height: radioSize,
            ...styles,
            opacity: disabled ? 0.6 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
        }, children: [_jsx("input", { type: "checkbox", checked: currentChecked, onChange: handleChange, disabled: disabled, name: name, value: value, style: {
                    opacity: 0,
                    width: 0,
                    height: 0,
                    position: "absolute",
                } }), _jsx("span", { style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: radioSize,
                    height: radioSize,
                    background: "#fff",
                    border: `2px solid #000`,
                    borderRadius: "50%",
                    transition: "border 0.3s",
                    boxSizing: "border-box",
                } }), currentChecked && (_jsx("span", { style: {
                    position: "absolute",
                    top: dotOffset,
                    left: dotOffset,
                    width: dotSize,
                    height: dotSize,
                    background: "#000",
                    borderRadius: "50%",
                    transition: "background 0.3s",
                } }))] }));
};
export default RadioButton;
