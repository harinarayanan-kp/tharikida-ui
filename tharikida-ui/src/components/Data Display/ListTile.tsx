"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ListTileProps {
  /** Leading icon or element */
  leading?: React.ReactNode;
  /** Main text */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Trailing icon or element */
  trailing?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Custom styles */
  styles?: React.CSSProperties;
  /** Additional className */
  className?: string;
}

const ListTile = ({
  leading,
  title,
  subtitle,
  trailing,
  onClick,
  styles,
  className = "",
}: ListTileProps) => {
  const theme = useTheme();

  return (
    <div
      className={`tharikida-list-tile ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        padding: `${theme.spacingfactor * 1.5}px ${theme.spacingfactor * 2}px`,
        borderBottom: "1px solid #ddd",
        cursor: onClick ? "pointer" : "default",
        background: theme.backgroundColor,
        ...styles,
      }}
      onClick={onClick}
    >
      {leading && (
        <div style={{ marginRight: theme.spacingfactor * 2 }}>{leading}</div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: theme.fontSize }}>{title}</div>
        {subtitle && (
          <div
            style={{ color: theme.textColor, fontSize: theme.fontSize * 0.9 }}
          >
            {subtitle}
          </div>
        )}
      </div>
      {trailing && (
        <div style={{ marginLeft: theme.spacingfactor * 2 }}>{trailing}</div>
      )}
    </div>
  );
};

export default ListTile;
