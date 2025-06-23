"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Loader` is a circular spinner component for indicating loading states, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Loader` component.
 * @param {number} [props.size=32] - Size of the loader in px.
 * @param {string} [props.color] - Loader color. Defaults to theme primary color.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the loader container.
 * @param {string} [props.className] - Additional className for the loader.
 *
 * @returns {JSX.Element} A styled loader spinner.
 */
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
