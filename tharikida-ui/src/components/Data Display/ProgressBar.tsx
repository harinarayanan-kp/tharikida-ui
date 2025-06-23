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
}

const ProgressBar = ({
  value,
  height = 12,
  styles,
  className = "",
  cornerRadius,
}: ProgressBarProps) => {
  const theme = useTheme();
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;
  return (
    <div
      className={`tharikida-progress-bar ${className}`}
      style={{
        width: "100%",
        height,
        background: theme.backgroundColor,
        border: "2px solid black",
        borderRadius: radius,
        overflow: "hidden",
        ...styles,
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          height: "100%",
          background: theme.primaryColor,
          borderRadius: radius,
          transition: "width 0.3s",
        }}
      />
    </div>
  );
};

export default ProgressBar;
