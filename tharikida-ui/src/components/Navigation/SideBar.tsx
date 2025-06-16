"use client";
import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface SideBarProps {
  items: Array<{ label: string; key: string; icon?: React.ReactNode }>;
  activeKey: string;
  onSelect: (key: string) => void;
  styles?: React.CSSProperties;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const SideBar = ({
  items,
  activeKey,
  onSelect,
  styles = {},
  className = "",
  header,
  footer,
}: SideBarProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<string | null>(null);

  const sidebarStyles: React.CSSProperties = {
    width: 220,
    minWidth: 140,
    background: theme.sidebarBg || "#f5e9d7",
    borderRight: `1px solid ${theme.sidebarBorder || "#d1bfa3"}`,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    ...styles,
  };

  const buttonBase: React.CSSProperties = {
    width: "100%",
    color: theme.sidebarText || "#222",
    border: "none",
    textAlign: "left",
    padding: "12px 20px",
    fontFamily: theme.fontFamily || "Montserrat, sans-serif",
    fontSize: theme.fontSize || 16,
    cursor: "pointer",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    borderLeft: "4px solid transparent",
    fontWeight: 500,
    transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
    boxShadow: "none",
  };

  return (
    <aside style={sidebarStyles} className={className}>
      {header && <div style={{ padding: 16 }}>{header}</div>}
      <nav style={{ flex: 1, overflowY: "auto" }}>
        {items.map((item) => {
          const isItemActive = activeKey === item.key;
          const isPressed = isActive === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              onMouseDown={() => setIsActive(item.key)}
              onMouseUp={() => setIsActive(null)}
              style={{
                ...buttonBase,
                background: isItemActive
                  ? theme.sidebarActiveBg || "#d1bfa3"
                  : buttonBase.background,
                color: theme.sidebarText || "#222",
                borderLeft: isItemActive
                  ? `4px solid ${theme.sidebarActiveBorder || "#bfa77a"}`
                  : buttonBase.borderLeft,
                fontWeight: isItemActive ? 700 : 500,
                boxShadow: isPressed
                  ? "1px 1px 0px grey"
                  : isItemActive
                  ? "2px 2px 0px #bfa77a"
                  : buttonBase.boxShadow,
              }}
            >
              {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </nav>
      {footer && <div style={{ padding: 16 }}>{footer}</div>}
    </aside>
  );
};

export default SideBar;
