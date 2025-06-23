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
}: LoadingButtonProps) => {
  const theme = useTheme();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state === "idle") {
      setState("loading");
      setTimeout(() => setState("done"), loadingDuration);
      if (onClick) onClick();
    }
  };

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
    backgroundColor:
      type === "primary" ? theme.primaryColor : theme.secondaryColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: `${theme.spacingfactor}px 20px`,
    borderRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor,
    margin: `${theme.spacingfactor}px`,
    transition: "background-color 0.3s ease, box-shadow 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    boxShadow: state === "loading" ? "1px 1px 0px grey" : "2px 2px 0px black",
    width: "fit-content",
    cursor: state === "loading" ? "not-allowed" : "pointer",
    opacity: state === "loading" ? 0.7 : 1,
    ...styles,
  };

  return (
    <button
      className={`tharikida-loading-btn ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      disabled={state === "loading"}
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
