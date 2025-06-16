"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  separator?: React.ReactNode;
  onNavigate?: (href: string) => void;
  styles?: React.CSSProperties;
  className?: string;
}

const Breadcrumb = ({
  items,
  separator = <span style={{ margin: "0 8px" }}>/</span>,
  onNavigate,
  styles = {},
  className = "",
}: BreadcrumbProps) => {
  const theme = useTheme();
  return (
    <nav
      aria-label="breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        background: theme.primaryColor,
        color: theme.textColor,
        border: "1px solid black",
        borderRadius: theme.spacingfactor,
        boxShadow: "2px 2px 0px black",
        padding: `${theme.spacingfactor}px ${theme.spacingfactor * 2}px`,
        margin: `${theme.spacingfactor}px`,
        ...styles,
      }}
      className={className}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.label + idx}>
          {item.href ? (
            <a
              href={item.href}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(item.href!);
                }
              }}
              style={{
                color: theme.textColor,
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
                cursor: "pointer",
                padding: `0 ${theme.spacingfactor / 2}px`,
                borderRadius: theme.spacingfactor / 2,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{ color: theme.textColor, fontWeight: 600 }}>
              {item.label}
            </span>
          )}
          {idx < items.length - 1 && separator}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
