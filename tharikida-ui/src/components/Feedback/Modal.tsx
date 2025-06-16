"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  showCloseButton?: boolean;
}

const Modal = ({
  open,
  onClose,
  title,
  children,
  styles = {},
  className = "",
  showCloseButton = true,
}: ModalProps) => {
  const theme = useTheme();
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className={className}
        style={{
          background: theme.backgroundColor,
          border: `2px solid ${theme.borderColor}`,
          borderRadius: theme.spacingfactor * 2,
          boxShadow: `2px 2px 0px ${theme.shadowColor}`,
          minWidth: 320,
          maxWidth: 480,
          padding: theme.spacingfactor * 5,
          fontFamily: theme.fontFamily,
          ...styles,
        }}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              background: "transparent",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: theme.textColor,
            }}
            aria-label="Close"
          >
            ×
          </button>
        )}
        {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
