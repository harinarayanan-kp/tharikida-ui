"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const CheckBox = ({ checked, onChange, label, styles, className = "", disabled = false, }) => {
    const [internalChecked, setInternalChecked] = useState(false);
    const isControlled = typeof checked === "boolean";
    const currentChecked = isControlled ? checked : internalChecked;
    const handleClick = () => {
        if (!isControlled) {
            setInternalChecked((prev) => !prev);
        }
        onChange?.(!currentChecked);
    };
    return (_jsxs("label", { className: `tharikida-checkbox ${className}`, style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
            ...styles,
        }, children: [_jsx("span", { onClick: disabled ? undefined : handleClick, style: {
                    width: 22,
                    height: 22,
                    border: "2px solid black",
                    borderRadius: 6,
                    background: currentChecked ? "#4caf50" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, border 0.2s",
                    marginRight: 8,
                }, children: currentChecked && (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M3 7L6 10L11 4", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })) }), label && (_jsx("span", { style: { fontFamily: "Montserrat", fontSize: 16 }, children: label })), _jsx("input", { type: "checkbox", checked: currentChecked, onChange: () => { }, disabled: disabled, style: { display: "none" } })] }));
};
export default CheckBox;
