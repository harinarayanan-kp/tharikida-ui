"use client";
import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface TabItem {
  label: string;
  key: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

/**
 * `Tabs` is a tab navigation component supporting icons, extra content, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `Tabs` component.
 * @param {TabItem[]} props.items - Array of tab items with label, key, optional icon, and disabled state.
 * @param {string} props.activeKey - The key of the currently active tab.
 * @param {(key: string) => void} props.onChange - Callback when a tab is selected.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the tabs container.
 * @param {string} [props.className] - Additional className for the tabs container.
 * @param {React.ReactNode} [props.tabBarExtraContent] - Extra content to display at the end of the tab bar.
 *
 * @returns {JSX.Element} A styled tab navigation component.
 */
export interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  styles?: React.CSSProperties;
  className?: string;
  tabBarExtraContent?: React.ReactNode;
}

const Tabs = ({
  items,
  activeKey,
  onChange,
  styles = {},
  className = "",
  tabBarExtraContent,
}: TabsProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: theme.fontFamily,
        ...styles,
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: `2px solid ${theme.borderColor}`,
        }}
      >
        {items.map((tab) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              onClick={() => !tab.disabled && onChange(tab.key)}
              disabled={tab.disabled}
              style={{
                background: isActive ? theme.primaryColor : "transparent",
                color: isActive ? theme.textColor : theme.primaryColor,
                border: "none",
                borderBottom: isActive
                  ? `3px solid ${theme.secondaryColor}`
                  : "3px solid transparent",
                fontWeight: isActive ? 700 : 500,
                fontSize: theme.fontSize,
                fontFamily: theme.fontFamily,
                padding: `${theme.spacingfactor * 2}px ${
                  theme.spacingfactor * 3
                }px`,
                marginRight: 8,
                cursor: tab.disabled ? "not-allowed" : "pointer",
                outline: "none",
                transition: "all 0.2s",
                opacity: tab.disabled ? 0.5 : 1,
                borderRadius: `${theme.spacingfactor}px ${theme.spacingfactor}px 0 0`,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {tab.icon && <span style={{ marginRight: 4 }}>{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
        {tabBarExtraContent && (
          <div style={{ marginLeft: "auto" }}>{tabBarExtraContent}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
