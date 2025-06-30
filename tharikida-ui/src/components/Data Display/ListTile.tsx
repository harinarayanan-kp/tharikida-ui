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
 * @param {string} [props.backgroundColor] - Background color for the tile.
 * @param {string} [props.borderColor] - Border color for the tile.
 * @param {string} [props.borderWidth] - Border width for the tile.
 * @param {string} [props.borderStyle] - Border style for the tile.
 * @param {string} [props.fontFamily] - Font family for the tile.
 * @param {number} [props.fontSize] - Font size for the tile.
 * @param {string} [props.fontWeight] - Font weight for the tile.
 * @param {string} [props.transitionDuration] - Transition duration for the tile.
 * @param {number} [props.spacingfactor] - Spacing factor for the tile.
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
  /** Background color for the tile. */
  backgroundColor?: string;
  /** Border color for the tile. */
  borderColor?: string;
  /** Border width for the tile. */
  borderWidth?: string;
  /** Border style for the tile. */
  borderStyle?: string;
  /** Font family for the tile. */
  fontFamily?: string;
  /** Font size for the tile. */
  fontSize?: number;
  /** Font weight for the tile. */
  fontWeight?: string;
  /** Transition duration for the tile. */
  transitionDuration?: string;
  /** Spacing factor for the tile. */
  spacingfactor?: number;
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
  backgroundColor,
  borderColor,
  borderWidth,
  borderStyle,
  fontFamily,
  fontSize,
  fontWeight,
  transitionDuration,
  spacingfactor,
}: ListTileProps) => {
  const theme = useTheme();
  const t = {
    cornerRadius:
      cornerRadius !== undefined ? cornerRadius : theme.cornerRadius,
    hoverColor: hoverColor || theme.secondaryColor,
    backgroundColor: backgroundColor || theme.backgroundColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
    textColor: theme.textColor,
  };
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`tharikida-list-tile ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        padding: `${t.spacingfactor * 1.5}px ${t.spacingfactor * 2}px`,
        borderBottom: `${t.borderWidth} ${t.borderStyle} #ddd`,
        cursor: onClick ? "pointer" : "default",
        background: isHovered ? t.hoverColor : t.backgroundColor,
        borderRadius: t.cornerRadius,
        transition: t.transitionDuration,
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        color: t.textColor,
        ...styles,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {leading && (
        <div style={{ marginRight: t.spacingfactor * 2 }}>{leading}</div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: t.fontSize }}>{title}</div>
        {subtitle && (
          <div style={{ color: t.textColor, fontSize: t.fontSize * 0.9 }}>
            {subtitle}
          </div>
        )}
      </div>
      {trailing && (
        <div style={{ marginLeft: t.spacingfactor * 2 }}>{trailing}</div>
      )}
    </div>
  );
};

export default ListTile;
