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
 * @param {string} [props.primaryColor] - Primary color for active tab and border.
 * @param {string} [props.secondaryColor] - Secondary color for active tab underline.
 * @param {string} [props.textColor] - Text color for active tab.
 * @param {string} [props.backgroundColor] - Background color for the tabs container.
 * @param {string} [props.borderColor] - Border color for the tab bar.
 * @param {string} [props.borderWidth] - Border width for the tab bar.
 * @param {string} [props.borderStyle] - Border style for the tab bar.
 * @param {number} [props.cornerRadius] - Border radius for the tab buttons.
 * @param {string} [props.fontFamily] - Font family for the tabs.
 * @param {number} [props.fontSize] - Font size for the tabs.
 * @param {string} [props.fontWeight] - Font weight for the tabs.
 * @param {string} [props.transitionDuration] - Transition duration for the tabs.
 * @param {number} [props.spacingfactor] - Spacing factor for the tabs.
 * @param {string} [props.hoverColor] - Hover color for tab buttons.
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
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  cornerRadius?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  transitionDuration?: string;
  spacingfactor?: number;
  hoverColor?: string;
}

const Tabs = ({
  items,
  activeKey,
  onChange,
  styles = {},
  className = "",
  tabBarExtraContent,
  primaryColor,
  secondaryColor,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderStyle,
  cornerRadius,
  fontFamily,
  fontSize,
  fontWeight,
  transitionDuration,
  spacingfactor,
  hoverColor,
}: TabsProps) => {
  const theme = useTheme();
  const t = {
    primaryColor: primaryColor || theme.primaryColor,
    secondaryColor: secondaryColor || theme.secondaryColor,
    textColor: textColor || theme.textColor,
    backgroundColor: backgroundColor || theme.backgroundColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    cornerRadius:
      typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
    hoverColor: hoverColor || theme.hoverColor,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        background: t.backgroundColor,
        ...styles,
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
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
                background: isActive ? t.primaryColor : "transparent",
                color: isActive ? t.textColor : t.primaryColor,
                border: "none",
                borderBottom: isActive
                  ? `${t.borderWidth} solid ${t.secondaryColor}`
                  : `${t.borderWidth} solid transparent`,
                fontWeight: isActive ? 700 : t.fontWeight,
                fontSize: t.fontSize,
                fontFamily: t.fontFamily,
                padding: `${t.spacingfactor * 2}px ${t.spacingfactor * 3}px`,
                marginRight: t.spacingfactor * 2,
                cursor: tab.disabled ? "not-allowed" : "pointer",
                outline: "none",
                transition: t.transitionDuration,
                opacity: tab.disabled ? 0.5 : 1,
                borderRadius: `${t.cornerRadius}px ${t.cornerRadius}px 0 0`,
                display: "flex",
                alignItems: "center",
                gap: t.spacingfactor * 2,
              }}
              onMouseOver={(e) => {
                if (!isActive && !tab.disabled)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    t.hoverColor;
              }}
              onMouseOut={(e) => {
                if (!isActive && !tab.disabled)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
              }}
            >
              {tab.icon && (
                <span style={{ marginRight: t.spacingfactor }}>{tab.icon}</span>
              )}
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
