"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `IconButton` is a customizable button component for displaying an icon (and optional label) with theming and custom styles.
 *
 * @param {object} props - The properties to customize the `IconButton` component.
 * @param {React.ReactNode} props.icon - The icon to display inside the button.
 * @param {"primary" | "secondary"} [props.type='primary'] - The button style variant.
 *   - `primary`: Uses the theme's primary color.
 *   - `secondary`: Uses the theme's secondary color.
 * @param {string} [props.href] - If provided, renders an anchor (`<a>`) instead of a `<button>`.
 * @param {React.ReactNode} [props.children] - Optional label or content next to the icon.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the button.
 * @param {() => void} [props.onClick] - Click handler for the button.
 * @param {string} [props.className] - Custom class name for the button.
 * @param {number} [props.cornerRadius] - Custom border radius for the button. Overrides theme.cornerRadius if provided.
 * @param {string} [props.backgroundColor] - Custom background color. Overrides theme.backgroundColor if provided.
 * @param {string} [props.textColor] - Custom text color. Overrides theme.textColor if provided.
 * @param {string} [props.borderColor] - Custom border color. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Custom shadow color. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Custom border width. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Custom border style. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Custom font weight. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Custom line height. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Custom letter spacing. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Custom transition duration. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Custom padding. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Custom margin. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Custom shadow offset X. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Custom shadow offset Y. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Custom shadow blur. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Custom shadow spread. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Custom shadow inset. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Custom hover color. Overrides theme.hoverColor if provided.
 *
 * @returns {JSX.Element} A styled button or anchor element with an icon.
 */
export interface IconButtonProps {
  /**
   * The icon to display inside the button.
   */
  icon: React.ReactNode;
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
   * Optional label or content next to the icon.
   */
  children?: React.ReactNode;
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
   * Custom background color. Overrides theme.backgroundColor if provided.
   */
  backgroundColor?: string;
  /**
   * Custom text color. Overrides theme.textColor if provided.
   */
  textColor?: string;
  /**
   * Custom border color. Overrides theme.borderColor if provided.
   */
  borderColor?: string;
  /**
   * Custom shadow color. Overrides theme.shadowColor if provided.
   */
  shadowColor?: string;
  /**
   * Custom border width. Overrides theme.borderWidth if provided.
   */
  borderWidth?: string;
  /**
   * Custom border style. Overrides theme.borderStyle if provided.
   */
  borderStyle?: string;
  /**
   * Custom font weight. Overrides theme.fontWeight if provided.
   */
  fontWeight?: string;
  /**
   * Custom line height. Overrides theme.lineHeight if provided.
   */
  lineHeight?: string;
  /**
   * Custom letter spacing. Overrides theme.letterSpacing if provided.
   */
  letterSpacing?: string;
  /**
   * Custom transition duration. Overrides theme.transitionDuration if provided.
   */
  transitionDuration?: string;
  /**
   * Custom padding. Overrides theme.padding if provided.
   */
  padding?: string;
  /**
   * Custom margin. Overrides theme.margin if provided.
   */
  margin?: string;
  /**
   * Custom shadow offset X. Overrides theme.shadowOffsetX if provided.
   */
  shadowOffsetX?: string;
  /**
   * Custom shadow offset Y. Overrides theme.shadowOffsetY if provided.
   */
  shadowOffsetY?: string;
  /**
   * Custom shadow blur. Overrides theme.shadowBlur if provided.
   */
  shadowBlur?: string;
  /**
   * Custom shadow spread. Overrides theme.shadowSpread if provided.
   */
  shadowSpread?: string;
  /**
   * Custom shadow inset. Overrides theme.shadowInset if provided.
   */
  shadowInset?: boolean;
  /**
   * Custom hover color. Overrides theme.hoverColor if provided.
   */
  hoverColor?: string;
}

const IconButton = ({
  icon,
  type = "primary",
  href,
  children,
  onClick,
  styles,
  className = "",
  cornerRadius,
  backgroundColor,
  textColor,
  borderColor,
  shadowColor,
  borderWidth,
  borderStyle,
  fontWeight,
  lineHeight,
  letterSpacing,
  transitionDuration,
  padding,
  margin,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowSpread,
  shadowInset,
  hoverColor,
}: IconButtonProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const resolved = {
    backgroundColor:
      backgroundColor ||
      (type === "primary" ? theme.primaryColor : theme.secondaryColor),
    textColor: textColor || theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: padding || `${theme.spacingfactor}px`,
    borderRadius:
      typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius,
    margin: margin || `${theme.spacingfactor}px`,
    transition: `background-color ${
      transitionDuration || theme.transitionDuration
    }, box-shadow 0.2s ease`,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth || theme.borderWidth,
    borderStyle: borderStyle || theme.borderStyle,
    fontWeight: fontWeight || theme.fontWeight,
    lineHeight: lineHeight || theme.lineHeight,
    letterSpacing: letterSpacing || theme.letterSpacing,
    shadowColor: shadowColor || theme.shadowColor,
    shadowOffsetX: shadowOffsetX || theme.shadowOffsetX,
    shadowOffsetY: shadowOffsetY || theme.shadowOffsetY,
    shadowBlur: shadowBlur || theme.shadowBlur,
    shadowSpread: shadowSpread || theme.shadowSpread,
    shadowInset:
      typeof shadowInset === "boolean" ? shadowInset : theme.shadowInset,
    hoverColor: hoverColor || theme.hoverColor,
  };

  const boxShadow = `${resolved.shadowInset ? "inset " : ""}${
    resolved.shadowOffsetX
  } ${resolved.shadowOffsetY} ${resolved.shadowBlur} ${resolved.shadowSpread} ${
    resolved.shadowColor
  }`;

  const buttonStyles: React.CSSProperties = {
    backgroundColor: isHovered ? resolved.hoverColor : resolved.backgroundColor,
    color: resolved.textColor,
    fontSize: resolved.fontSize,
    fontFamily: resolved.fontFamily,
    padding: resolved.padding,
    borderRadius: resolved.borderRadius,
    margin: resolved.margin,
    transition: resolved.transition,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `${resolved.borderWidth} ${resolved.borderStyle} ${resolved.borderColor}`,
    fontWeight: resolved.fontWeight,
    lineHeight: resolved.lineHeight,
    letterSpacing: resolved.letterSpacing,
    boxShadow: isActive ? `0 0 0 0 ${resolved.shadowColor}` : boxShadow,
    width: "fit-content",
    cursor: "pointer",
    ...styles,
  };

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`tharikida-icon-btn ${className}`}
      style={buttonStyles}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {children && (
        <span style={{ marginLeft: `${theme.spacingfactor / 2}px` }}>
          {children}
        </span>
      )}
    </Component>
  );
};

export default IconButton;
