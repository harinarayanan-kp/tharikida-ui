"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Card` is a container component for displaying content with optional title, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the Card component.
 * @param {string} [props.title] - Title of the card, displayed at the top.
 * @param {React.ReactNode} [props.children] - Content to display inside the card.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the card container.
 * @param {string} [props.className] - Additional className for the card container.
 * @param {number} [props.cornerRadius] - Custom border radius for the card. Overrides theme.cornerRadius if provided.
 *
 * @returns {JSX.Element} A styled card container.
 */
export interface CardProps {
  /**
   * Title of the card, displayed at the top.
   */
  title?: string;
  /**
   * Content to display inside the card.
   */
  children?: React.ReactNode;
  /**
   * Custom styles for the card container.
   */
  styles?: React.CSSProperties;
  /**
   * Additional className for the card container.
   */
  className?: string;
  /**
   * Custom border radius for the card. Overrides theme.cornerRadius if provided.
   */
  cornerRadius?: number;
}

const Card = ({
  title,
  children,
  styles,
  className = "",
  cornerRadius,
}: CardProps) => {
  const theme = useTheme();

  const cardStyles: React.CSSProperties = {
    border: "2px solid black",
    borderRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor,
    boxShadow: "2px 2px 0px black",
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    padding: theme.spacingfactor * 2,
    margin: theme.spacingfactor,
    ...styles,
  };

  const titleStyles: React.CSSProperties = {
    fontWeight: 600,
    fontSize: theme.fontSize * 1.1,
    marginBottom: theme.spacingfactor,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
  };

  return (
    <div className={`tharikida-card ${className}`} style={cardStyles}>
      {title && <div style={titleStyles}>{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
