"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface CardProps {
  /** Title of the card */
  title?: string;
  /** Content to display inside the card */
  children?: React.ReactNode;
  /** Custom styles for the card */
  styles?: React.CSSProperties;
  /** Additional className for the card */
  className?: string;
}

const Card = ({ title, children, styles, className = "" }: CardProps) => {
  const theme = useTheme();

  const cardStyles: React.CSSProperties = {
    border: "2px solid black",
    borderRadius: `${theme.spacingfactor * 4}px`,
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
