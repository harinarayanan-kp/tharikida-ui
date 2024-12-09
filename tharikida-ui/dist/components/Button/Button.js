"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
const Button = ({ type, children, onClick, styles, className }) => {
    const theme = useTheme();
    const buttonStyles = {
        backgroundColor: type === "primary" ? theme.primaryColor : theme.secondaryColor, // Default color based on type
        color: theme.textColor,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily,
        paddingLeft: `${theme.spacingfactor * 1}px`,
        paddingRight: `${theme.spacingfactor * 2}px`,
        paddingTop: `${theme.spacingfactor * 1}px`,
        paddingBottom: `${theme.spacingfactor * 1}px`,
        borderRadius: `${theme.spacingfactor * 1}px`,
        margin: `${theme.spacingfactor * 1}px`,
        transition: "background-color 0.3s ease",
        height: "fit-content",
        width: "fit-content"
    };
    const mergedStyles = { ...buttonStyles, ...styles };
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (React.createElement("button", { className: `tharikida-btn ${className}`, style: mergedStyles, onClick: handleClick }, children));
};
export default Button;
