"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `ProgressBar` is a horizontal bar component for displaying progress, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `ProgressBar` component.
 * @param {number} props.value - Progress value (0-100).
 * @param {number} [props.height=12] - Height of the bar in px.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the progress bar container.
 * @param {string} [props.className] - Additional className for the progress bar.
 * @param {number} [props.cornerRadius] - Border radius for the progress bar. Overrides theme.cornerRadius if provided.
 * @param {string} [props.backgroundColor] - Background color for the progress bar. Overrides theme.backgroundColor if provided.
 * @param {string} [props.primaryColor] - Primary color for the progress bar. Overrides theme.primaryColor if provided.
 * @param {string} [props.borderColor] - Border color for the progress bar. Overrides theme.borderColor if provided.
 * @param {string} [props.borderWidth] - Border width for the progress bar. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the progress bar. Overrides theme.borderStyle if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the progress bar. Overrides theme.transitionDuration if provided.
 *
 * @returns {JSX.Element} A styled progress bar component.
 */
export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Height of the bar in px */
  height?: number;
  /** Custom styles */
  styles?: React.CSSProperties;
  /** Additional className */
  className?: string;
  /** Border radius for the progress bar. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
  /** Background color for the progress bar. Overrides theme.backgroundColor if provided. */
  backgroundColor?: string;
  /** Primary color for the progress bar. Overrides theme.primaryColor if provided. */
  primaryColor?: string;
  /** Border color for the progress bar. Overrides theme.borderColor if provided. */
  borderColor?: string;
  /** Border width for the progress bar. Overrides theme.borderWidth if provided. */
  borderWidth?: string;
  /** Border style for the progress bar. Overrides theme.borderStyle if provided. */
  borderStyle?: string;
  /** Transition duration for the progress bar. Overrides theme.transitionDuration if provided. */
  transitionDuration?: string;
}

const ProgressBar = ({
  value,
  height = 12,
  styles,
  className = "",
  cornerRadius,
  backgroundColor,
  primaryColor,
  borderColor,
  borderWidth,
  borderStyle,
  transitionDuration,
}: ProgressBarProps) => {
  const theme = useTheme();
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;
  const resolvedBackgroundColor = backgroundColor || theme.backgroundColor;
  const resolvedPrimaryColor = primaryColor || theme.primaryColor;
  const resolvedBorderColor = borderColor || theme.borderColor;
  const resolvedBorderWidth = borderWidth || theme.borderWidth;
  const resolvedBorderStyle = borderStyle || theme.borderStyle;
  const resolvedTransitionDuration =
    transitionDuration || theme.transitionDuration;
  return (
    <div
      className={`tharikida-progress-bar ${className}`}
      style={{
        width: "100%",
        height,
        background: resolvedBackgroundColor,
        border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
        borderRadius: radius,
        overflow: "hidden",
        transition: resolvedTransitionDuration,
        ...styles,
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          height: "100%",
          background: resolvedPrimaryColor,
          borderRadius: radius,
          transition: `width ${resolvedTransitionDuration}`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
