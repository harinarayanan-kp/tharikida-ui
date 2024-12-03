"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemeProvider_1 = require("../../theme/ThemeProvider");
require("./Button.css");
const Button = ({ type, children, onClick, styles, className }) => {
    const theme = (0, ThemeProvider_1.useTheme)();
    // // Determine button class based on type
    // const buttonClass =
    //   type === "primary" ? "tharikida-btn-primary" : "tharikida-btn-secondary";
    // Default button styles without active state logic
    const buttonStyles = {
        backgroundColor: type === "primary" ? theme.primaryColor : theme.secondaryColor, // Default color based on type
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        paddingLeft: `${theme.spacingfactor * 1}px`, // Correct template literal usage
        paddingRight: `${theme.spacingfactor * 2}px`, // Correct template literal usage
        paddingTop: `${theme.spacingfactor * 1}px`, // Correct template literal usage
        paddingBottom: `${theme.spacingfactor * 1}px`, // Correct template literal usage
        borderRadius: `${theme.spacingfactor * 1}px`, // Correct template literal usage
        margin: `${theme.spacingfactor * 1}px`,
        transition: "background-color 0.3s ease",
        height: "fit-content",
        width: "fit-content"
    };
    const mergedStyles = Object.assign(Object.assign({}, buttonStyles), styles);
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (react_1.default.createElement("button", { className: `tharikida-btn ${className}`, style: mergedStyles, onClick: handleClick }, children));
};
exports.default = Button;
