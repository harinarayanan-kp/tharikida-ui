"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface LoaderProps {
  /** Size of the loader in px */
  size?: number;
  /** Loader color */
  color?: string;
  /** Custom styles */
  styles?: React.CSSProperties;
  /** Additional className */
  className?: string;
}

const Loader = ({ size = 32, color, styles, className = "" }: LoaderProps) => {
  const theme = useTheme();
  const loaderColor = color || theme.primaryColor || "#000";
  return (
    <div
      className={`tharikida-loader ${className}`}
      style={{ display: "inline-block", ...styles }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ display: "block" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
          stroke={loaderColor}
          strokeWidth="4"
          fill="none"
          strokeDasharray={Math.PI * (size - 8)}
          strokeDashoffset={Math.PI * (size - 8) * 0.25}
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${size / 2} ${size / 2}`}
            to={`360 ${size / 2} ${size / 2}`}
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
