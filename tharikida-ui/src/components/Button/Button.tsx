"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ButtonProps {
  type?: "primary" | "secondary";
  children: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  type = "primary",
  children,
  onClick,
  styles,
  className = "",
}: ButtonProps) => {
  const theme = useTheme();
  
  const [isActive, setIsActive] = useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor:
      type === "primary" ? theme.primaryColor : theme.secondaryColor, // Default color based on type
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
    width: "fit-content",
    boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black", // Red shadow when active
  };

  const mergedStyles = { ...buttonStyles, ...styles };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`tharikida-btn ${className}`}
      style={mergedStyles}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `1px 1px 0px black`; // Change box-shadow on hover
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.boxShadow = `2px 2px 0px black`; // Reset box-shadow when hover ends (if not active)
        }
      }}
      onMouseDown={() => {
        setIsActive(true); // Set active state when mouse is down
      }}
      onMouseUp={() => {
        setIsActive(false); // Reset active state when mouse is released
      }}
    >
      {children}
    </button>
  );
};

export default Button;
