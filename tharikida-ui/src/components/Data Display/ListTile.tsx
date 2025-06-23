"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `ListTile` is a flexible row component for lists, supporting leading/trailing icons, title, subtitle, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `ListTile` component.
 * @param {React.ReactNode} [props.leading] - Leading icon or element.
 * @param {string} props.title - Main text (required).
 * @param {string} [props.subtitle] - Optional subtitle text.
 * @param {React.ReactNode} [props.trailing] - Trailing icon or element.
 * @param {() => void} [props.onClick] - Click handler for the tile.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the tile container.
 * @param {string} [props.className] - Additional className for the tile.
 * @param {number} [props.cornerRadius] - Border radius for the tile. Overrides theme.cornerRadius if provided.
 * @param {string} [props.hoverColor] - Background color on hover. Defaults to theme.secondaryColor.
 *
 * @returns {JSX.Element} A styled list tile component.
 */
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
  /** Border radius for the tile. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
  /** Background color on hover. Defaults to theme.secondaryColor. */
  hoverColor?: string;
}

const ListTile = ({
  leading,
  title,
  subtitle,
  trailing,
  onClick,
  styles,
  className = "",
  cornerRadius,
  hoverColor,
}: ListTileProps) => {
  const theme = useTheme();
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;
  const [isHovered, setIsHovered] = React.useState(false);
  const hoverBg = hoverColor || theme.secondaryColor;

  return (
    <div
      className={`tharikida-list-tile ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        padding: `${theme.spacingfactor * 1.5}px ${theme.spacingfactor * 2}px`,
        borderBottom: "1px solid #ddd",
        cursor: onClick ? "pointer" : "default",
        background: isHovered ? hoverBg : theme.backgroundColor,
        borderRadius: radius,
        transition: "background 0.2s",
        ...styles,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
