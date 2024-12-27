"use client";

import React from "react";

export interface ColumnProps {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: number | string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

const Column = ({
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = 0,
  children,
  styles,
  className = "",
}: ColumnProps) => {
  const columnStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent,
    alignItems,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    ...styles,
  };

  return (
    <div className={`tharikida-column ${className}`} style={columnStyles}>
      {children}
    </div>
  );
};

export default Column;
