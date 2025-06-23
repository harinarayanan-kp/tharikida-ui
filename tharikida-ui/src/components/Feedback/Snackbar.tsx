"use client";

import React, { useEffect } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Snackbar` is a temporary notification component for brief messages, supporting theming, actions, and custom styles.
 *
 * @param {object} props - The properties to customize the `Snackbar` component.
 * @param {boolean} props.open - Whether the snackbar is visible.
 * @param {string} props.message - The message to display in the snackbar.
 * @param {number} [props.duration=3000] - Duration in milliseconds before auto-close.
 * @param {() => void} props.onClose - Function to call when closing the snackbar.
 * @param {React.ReactNode} [props.action] - Optional action element (e.g., button) to display.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the snackbar container.
 * @param {string} [props.className] - Additional className for the snackbar.
 * @param {"top" | "bottom"} [props.position="bottom"] - Position of the snackbar on the screen.
 *
 * @returns {JSX.Element | null} A styled snackbar notification, or null if not open.
 */
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
