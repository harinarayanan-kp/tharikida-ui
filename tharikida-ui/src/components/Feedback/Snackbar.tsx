"use client";

import React, { useEffect } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface SnackbarProps {
  open: boolean;
  message: string;
  duration?: number; // ms
  onClose: () => void;
  action?: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  position?: "top" | "bottom";
}

const Snackbar = ({
  open,
  message,
  duration = 3000,
  onClose,
  action,
  styles = {},
  className = "",
  position = "bottom",
}: SnackbarProps) => {
  const theme = useTheme();

  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      className={className}
      style={{
        position: "fixed",
        left: "50%",
        [position]: 32,
        transform: "translateX(-50%)",
        background: theme.backgroundColor,
        color: theme.textColor,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: theme.spacingfactor * 2,
        boxShadow: `2px 2px 0px ${theme.shadowColor}`,
        padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize * 0.95,
        minWidth: 180,
        maxWidth: 400,
        display: "flex",
        alignItems: "center",
        gap: 16,
        zIndex: 1200,
        ...styles,
      }}
      role="status"
      aria-live="polite"
    >
      <span style={{ flex: 1 }}>{message}</span>
      {action}
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: theme.textColor,
          fontSize: 18,
          cursor: "pointer",
          marginLeft: 8,
        }}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default Snackbar;
