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
 * @param {number} [props.cornerRadius] - Border radius for the snackbar. Overrides theme.cornerRadius if provided.
 * @param {string} [props.backgroundColor] - Snackbar background color. Overrides theme.backgroundColor if provided.
 * @param {string} [props.borderColor] - Snackbar border color. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Snackbar shadow color. Overrides theme.shadowColor if provided.
 * @param {string} [props.boxShadow] - Snackbar box-shadow. Overrides theme values if provided.
 * @param {string|number} [props.padding] - Snackbar padding. Overrides theme.padding if provided.
 * @param {string|number} [props.margin] - Snackbar margin. Overrides theme.margin if provided.
 * @param {string} [props.fontFamily] - Snackbar font family. Overrides theme.fontFamily if provided.
 * @param {string} [props.textColor] - Snackbar text color. Overrides theme.textColor if provided.
 * @param {string} [props.transitionDuration] - Snackbar transition duration. Overrides theme.transitionDuration if provided.
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
  cornerRadius?: number;
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  boxShadow?: string;
  padding?: string | number;
  margin?: string | number;
  fontFamily?: string;
  textColor?: string;
  transitionDuration?: string;
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
  cornerRadius,
  backgroundColor,
  borderColor,
  shadowColor,
  boxShadow,
  padding,
  margin,
  fontFamily,
  textColor,
  transitionDuration,
}: SnackbarProps) => {
  const theme = useTheme();
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;
  const bg = backgroundColor || theme.backgroundColor;
  const borderCol = borderColor || theme.borderColor;
  const shadowCol = shadowColor || theme.shadowColor;
  const boxSh = boxShadow || `2px 2px 0px ${shadowCol}`;
  const pad =
    padding !== undefined
      ? padding
      : `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`;
  const marg = margin !== undefined ? margin : theme.margin;
  const fontFam = fontFamily || theme.fontFamily;
  const txtColor = textColor || theme.textColor;
  const transition = transitionDuration || theme.transitionDuration;

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
        background: bg,
        color: txtColor,
        border: `1px solid ${borderCol}`,
        borderRadius: radius,
        boxShadow: boxSh,
        padding: pad,
        margin: marg,
        fontFamily: fontFam,
        fontSize: theme.fontSize * 0.95,
        minWidth: 180,
        maxWidth: 400,
        display: "flex",
        alignItems: "center",
        gap: 16,
        zIndex: 1200,
        transition: transition,
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
          color: txtColor,
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
