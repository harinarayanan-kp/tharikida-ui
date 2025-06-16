"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const TextArea = ({ value, onChange, placeholder = "", rows = 4, styles, className = "", disabled = false, label, }) => {
    const [internalValue, setInternalValue] = useState("");
    const isControlled = typeof value === "string";
    const currentValue = isControlled ? value : internalValue;
    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange?.(e);
    };
    return (_jsxs("label", { className: `tharikida-textarea-label ${className}`, style: { display: "flex", flexDirection: "column", gap: 6, ...styles }, children: [label && (_jsx("span", { style: { fontFamily: "Montserrat", fontSize: 16 }, children: label })), _jsx("textarea", { value: currentValue, onChange: handleChange, placeholder: placeholder, rows: rows, disabled: disabled, style: {
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    border: "2px solid black",
                    borderRadius: 12,
                    padding: 10,
                    resize: "vertical",
                    outline: "none",
                    background: disabled ? "#f5f5f5" : "#fff",
                    transition: "border 0.2s",
                } })] }));
};
export default TextArea;
