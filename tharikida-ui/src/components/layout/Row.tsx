"use client";

import React from "react";

export interface RowProps {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: number | string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

const Row = ({
  justifyContent = "flex-start",
  alignItems = "center",
  gap = 0,
  children,
  styles,
  className = "",
}: RowProps) => {
  const rowStyles: React.CSSProperties = {
    display: "flex",
    justifyContent,
    alignItems,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    ...styles,
  };

  return (
    <div className={`tharikida-row ${className}`} style={rowStyles}>
      {children}
    </div>
  );
};

export default Row;
