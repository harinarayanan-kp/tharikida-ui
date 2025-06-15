"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Loader = ({ size = 32, color, styles, className = "" }) => {
    const theme = useTheme();
    const loaderColor = color || theme.primaryColor || "#000";
    return (_jsx("div", { className: `tharikida-loader ${className}`, style: { display: "inline-block", ...styles }, children: _jsx("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, style: { display: "block" }, children: _jsx("circle", { cx: size / 2, cy: size / 2, r: size / 2 - 4, stroke: loaderColor, strokeWidth: "4", fill: "none", strokeDasharray: Math.PI * (size - 8), strokeDashoffset: Math.PI * (size - 8) * 0.25, strokeLinecap: "round", children: _jsx("animateTransform", { attributeName: "transform", type: "rotate", from: `0 ${size / 2} ${size / 2}`, to: `360 ${size / 2} ${size / 2}`, dur: "1s", repeatCount: "indefinite" }) }) }) }));
};
export default Loader;
