"use client";

/**
 * `LoadingButton` is a customizable button component that shows loading and done states, with theming and custom styles.
 *
 * @param {object} props - The properties to customize the `LoadingButton` component.
 * @param {React.ReactNode} [props.icon] - Optional icon to display at the start of the button.
 * @param {"primary" | "secondary"} [props.type='primary'] - The button style variant.
 *   - `primary`: Uses the theme's primary color.
 *   - `secondary`: Uses the theme's secondary color.
 * @param {string} [props.initialText='Submit'] - The text to display when idle.
 * @param {string} [props.loadingText='Loading...'] - The text to display while loading.
 * @param {string} [props.doneText='Done!'] - The text to display when done.
 * @param {number} [props.loadingDuration=1500] - How long to show the loading state (ms).
 * @param {React.CSSProperties} [props.styles] - Custom styles for the button.
 * @param {() => void} [props.onClick] - Click handler for the button.
 * @param {string} [props.className] - Custom class name for the button.
 * @param {React.ReactNode} [props.children] - Additional content inside the button.
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
 * @returns {JSX.Element} A styled button element with loading and done states.
 */

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface LoadingButtonProps {
  /**
   * Optional icon to display at the start of the button.
   */
  icon?: React.ReactNode;
  /**
   * The button style variant.
   * @default 'primary'
   */
  type?: "primary" | "secondary";
  /**
   * The text to display when idle.
   * @default 'Submit'
   */
  initialText?: string;
  /**
   * The text to display while loading.
   * @default 'Loading...'
   */
  loadingText?: string;
  /**
   * The text to display when done.
   * @default 'Done!'
   */
  doneText?: string;
  /**
   * How long to show the loading state (ms).
   * @default 1500
   */
  loadingDuration?: number;
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
   * Additional content inside the button.
   */
  children?: React.ReactNode;
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

const LoadingButton = ({
  icon,
  type = "primary",
  initialText = "Submit",
  loadingText = "Loading...",
  doneText = "Done!",
  loadingDuration = 1500,
  styles = {},
  onClick,
  className = "",
  children,
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
}: LoadingButtonProps) => {
  const theme = useTheme();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [isHovered, setIsHovered] = useState(false);

  const resolved = {
    backgroundColor:
      backgroundColor ||
      (type === "primary" ? theme.primaryColor : theme.secondaryColor),
    textColor: textColor || theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: padding || `${theme.spacingfactor}px 20px`,
    borderRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor,
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

  let content: React.ReactNode = (
    <>
      {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
      {initialText}
      {children}
    </>
  );
  if (state === "loading") {
    content = (
      <>
        <span
          className="tharikida-loading-spinner"
          style={{ marginRight: 8 }}
        />
        {loadingText}
      </>
    );
  } else if (state === "done") {
    content = doneText;
  }

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
    boxShadow:
      state === "loading" ? `0 0 0 0 ${resolved.shadowColor}` : boxShadow,
    width: "fit-content",
    cursor: state === "loading" ? "not-allowed" : "pointer",
    opacity: state === "loading" ? 0.7 : 1,
    ...styles,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state === "idle") {
      setState("loading");
      setTimeout(() => setState("done"), loadingDuration);
      if (onClick) onClick();
    }
  };

  return (
    <button
      className={`tharikida-loading-btn ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      disabled={state === "loading"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
      <style>{`
        .tharikida-loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top: 2px solid #888;
          border-radius: 50%;
          animation: tharikida-spin 0.7s linear infinite;
        }
        @keyframes tharikida-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

export default LoadingButton;
