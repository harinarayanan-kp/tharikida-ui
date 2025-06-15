"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Height of the bar in px */
  height?: number;
  /** Custom styles */
  styles?: React.CSSProperties;
  /** Additional className */
  className?: string;
}

const ProgressBar = ({
  value,
  height = 12,
  styles,
  className = "",
}: ProgressBarProps) => {
  const theme = useTheme();
  return (
    <div
      className={`tharikida-progress-bar ${className}`}
      style={{
        width: "100%",
        height,
        background: theme.backgroundColor,
        border: "2px solid black",
        borderRadius: height,
        overflow: "hidden",
        ...styles,
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          height: "100%",
          background: theme.primaryColor,
          borderRadius: height,
          transition: "width 0.3s",
        }}
      />
    </div>
  );
};

export default ProgressBar;
