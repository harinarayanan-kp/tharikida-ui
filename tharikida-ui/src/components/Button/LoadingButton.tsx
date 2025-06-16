"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface LoadingButtonProps {
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
  initialText?: string;
  loadingText?: string;
  doneText?: string;
  loadingDuration?: number; // ms
  styles?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
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
    borderRadius: `${theme.spacingfactor}px`,
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
