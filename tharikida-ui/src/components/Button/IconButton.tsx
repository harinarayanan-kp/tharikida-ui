"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface IconButtonProps {
  icon: React.ReactNode;
  type?: "primary" | "secondary";
  href?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({
  icon,
  type = "primary",
  href,
  children,
  onClick,
  styles,
  className = "",
}: IconButtonProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor:
      type === "primary" ? theme.primaryColor : theme.secondaryColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: `${theme.spacingfactor}px`,
    borderRadius: `${theme.spacingfactor}px`,
    margin: `${theme.spacingfactor}px`,
    transition: "background-color 0.3s ease, box-shadow 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black",
    width: "fit-content",
    ...styles,
  };

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`tharikida-icon-btn ${className}`}
      style={buttonStyles}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {icon}
      {children && <span style={{ marginLeft: `${theme.spacingfactor / 2}px` }}>{children}</span>}
    </Component>
  );
};

export default IconButton;
