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
 * @param {string} [props.backgroundColor] - Override background color for this button instance.
 * @param {string} [props.color] - Override text color for this button instance.
 * @param {number} [props.fontSize] - Override font size for this button instance.
 * @param {string} [props.fontFamily] - Override font family for this button instance.
 * @param {string} [props.fontWeight] - Override font weight for this button instance.
 * @param {string} [props.lineHeight] - Override line height for this button instance.
 * @param {string} [props.letterSpacing] - Override letter spacing for this button instance.
 * @param {string} [props.padding] - Override padding for this button instance.
 * @param {string} [props.margin] - Override margin for this button instance.
 * @param {string} [props.borderWidth] - Override border width for this button instance.
 * @param {string} [props.borderStyle] - Override border style for this button instance.
 * @param {string} [props.borderColor] - Override border color for this button instance.
 * @param {string} [props.boxShadow] - Override box shadow for this button instance.
 * @param {string} [props.transitionDuration] - Override transition duration for this button instance.
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
  /**
   * Override background color for this button instance.
   */
  backgroundColor?: string;
  /**
   * Override text color for this button instance.
   */
  color?: string;
  /**
   * Override font size for this button instance.
   */
  fontSize?: number;
  /**
   * Override font family for this button instance.
   */
  fontFamily?: string;
  /**
   * Override font weight for this button instance.
   */
  fontWeight?: string;
  /**
   * Override line height for this button instance.
   */
  lineHeight?: string;
  /**
   * Override letter spacing for this button instance.
   */
  letterSpacing?: string;
  /**
   * Override padding for this button instance.
   */
  padding?: string;
  /**
   * Override margin for this button instance.
   */
  margin?: string;
  /**
   * Override border width for this button instance.
   */
  borderWidth?: string;
  /**
   * Override border style for this button instance.
   */
  borderStyle?: string;
  /**
   * Override border color for this button instance.
   */
  borderColor?: string;
  /**
   * Override box shadow for this button instance.
   */
  boxShadow?: string;
  /**
   * Override transition duration for this button instance.
   */
  transitionDuration?: string;
}

const Button = ({
  type = "primary",
  href,
  children,
  onClick,
  styles,
  className = "",
  cornerRadius,
  backgroundColor,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  padding,
  margin,
  borderWidth,
  borderStyle,
  borderColor,
  boxShadow,
  transitionDuration,
}: ButtonProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor:
      backgroundColor ||
      (type === "primary"
        ? isHovered
          ? theme.hoverColor
          : theme.primaryColor
        : theme.secondaryColor),
    color: color || theme.textColor,
    fontSize: fontSize || theme.fontSize,
    fontFamily: fontFamily || theme.fontFamily,
    fontWeight: fontWeight || theme.fontWeight,
    lineHeight: lineHeight || theme.lineHeight,
    letterSpacing: letterSpacing || theme.letterSpacing,
    padding: padding || theme.padding,
    borderRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor,
    margin: margin || theme.margin,
    border: `${borderWidth || theme.borderWidth} ${
      borderStyle || theme.borderStyle
    } ${borderColor || theme.borderColor}`,
    boxShadow:
      boxShadow ||
      `${theme.shadowInset ? "inset " : ""}${
        isActive ? "0px 0px" : `${theme.shadowOffsetX} ${theme.shadowOffsetY}`
      } ${theme.shadowBlur} ${theme.shadowSpread} ${theme.shadowColor}`,
    transition: transitionDuration || theme.transitionDuration,
    height: "fit-content",
    width: "fit-content",
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Component>
  );
};

export default Button;
