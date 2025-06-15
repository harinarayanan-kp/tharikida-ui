"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface ListProps {
  /** List items as ListTile components or any ReactNode */
  children: React.ReactNode;
  /** Custom styles for the list container */
  styles?: React.CSSProperties;
  /** Additional className for the list */
  className?: string;
}

const List = ({ children, styles, className = "" }: ListProps) => {
  const theme = useTheme();

  return (
    <div
      className={`tharikida-list ${className}`}
      style={{
        border: "2px solid black",
        borderRadius: `${theme.spacingfactor * 2}px`,
        background: theme.backgroundColor,
        overflow: "hidden",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default List;
