"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Button` is a customizable button component that supports theming, custom styles, and both anchor and button elements.
 *
 * @param {object} props - The properties to customize the `Button` component.
 * @param {"primary" | "secondary"} [props.type='primary'] - The button style variant.
 *   - `primary`: Uses the theme's primary color.
 *   - `secondary`: Uses the theme's secondary color.
 * @param {string} [props.href] - If provided, renders an anchor (`<a>`) instead of a `<button>`.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the button.
 * @param {() => void} [props.onClick] - Click handler for the button.
 * @param {string} [props.className] - Custom class name for the button.
 * @param {number} [props.cornerRadius] - Custom border radius for the button. Overrides theme.cornerRadius if provided.
 *
 * @returns {JSX.Element} A styled button or anchor element.
 */
export interface ButtonProps {
  /**
   * The button style variant.
   * @default 'primary'
   */
  type?: "primary" | "secondary";
  /**
   * If provided, renders an anchor (`<a>`) instead of a `<button>`.
   */
  href?: string;
  /**
   * The content of the button.
   */
  children: React.ReactNode;
  /**
   * Custom styles for the button.
   */
  styles?: React.CSSProperties;
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Custom class name for the button.
   */
  className?: string;
  /**
   * Custom border radius for the button. Overrides theme.cornerRadius if provided.
   */
  cornerRadius?: number;
}

const Button = ({
  type = "primary",
  href,
  children,
  onClick,
  styles,
  className = "",
  cornerRadius,
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
    borderRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor,
    margin: `${theme.spacingfactor}px`,
    transition: "background-color 0.3s ease, box-shadow 0.2s ease",
    height: "fit-content",
    width: "fit-content",
    border: `1px solid black`,
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
