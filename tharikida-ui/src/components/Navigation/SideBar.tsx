"use client";
import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `SideBar` is a vertical navigation component supporting icons, active state, header/footer, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `SideBar` component.
 * @param {{ label: string; key: string; icon?: React.ReactNode }[]} props.items - Array of sidebar items with label, key, and optional icon.
 * @param {string} props.activeKey - The key of the currently active item.
 * @param {(key: string) => void} props.onSelect - Callback when an item is selected.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the sidebar container.
 * @param {string} [props.className] - Additional className for the sidebar container.
 * @param {React.ReactNode} [props.header] - Optional header content for the sidebar.
 * @param {React.ReactNode} [props.footer] - Optional footer content for the sidebar.
 *
 * @returns {JSX.Element} A styled sidebar navigation component.
 */
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
    background: theme.backgroundColor,
    borderRight: `1px solid ${theme.borderColor}`,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    ...styles,
  };

  const buttonBase: React.CSSProperties = {
    width: "100%",
    color: theme.textColor,
    border: "none",
    textAlign: "left",
    padding: theme.padding || "12px 20px",
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    cursor: "pointer",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    borderLeft: "4px solid transparent",
    fontWeight: 500,
    transition:
      theme.transitionDuration ||
      "background 0.2s, border 0.2s, box-shadow 0.2s",
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
                  ? theme.primaryColor
                  : buttonBase.background,
                color: theme.textColor,
                borderLeft: isItemActive
                  ? `4px solid ${theme.secondaryColor}`
                  : buttonBase.borderLeft,
                fontWeight: isItemActive ? 700 : 500,
                boxShadow: isPressed
                  ? `${theme.shadowInset ? "inset " : ""}${
                      theme.shadowOffsetX
                    } ${theme.shadowOffsetY} ${theme.shadowBlur} ${
                      theme.shadowSpread
                    } ${theme.shadowColor}`
                  : isItemActive
                  ? `${theme.shadowInset ? "inset " : ""}${
                      theme.shadowOffsetX
                    } ${theme.shadowOffsetY} ${theme.shadowBlur} ${
                      theme.shadowSpread
                    } ${theme.secondaryColor}`
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
