"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ButtonProps {
  type?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  type = "primary",
  href,
  children,
  onClick,
  styles,
  className = "",
}: ButtonProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor:
      type === "primary" ? theme.primaryColor : theme.secondaryColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: `${theme.spacingfactor}px ${theme.spacingfactor * 2}px`,
    borderRadius: `${theme.spacingfactor}px`,
    margin: `${theme.spacingfactor}px`,
    transition: "background-color 0.3s ease, box-shadow 0.2s ease",
    height: "fit-content",
    width: "fit-content",
    border: "1px solid black",
    boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black",
    ...styles,
  };

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`tharikida-btn ${className}`}
      style={buttonStyles}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </Component>
  );
};

export default Button;
