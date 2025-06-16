"use client";

import React, { createContext, useContext, ReactNode } from "react";

const defaultTheme = {
  primaryColor: "#2ecc71",
  secondaryColor: "#3498db",
  tertiaryColor: "#4dff00",
  textColor: "#000000",
  backgroundColor: "#fff",
  fontSize: 16,
  fontFamily: "Montserrat, sans-serif",
  spacingfactor: 4,
  borderColor: "#000000",
  shadowColor: "#000000",
  // Sidebar specific
  sidebarBg: "#f5e9d7",
  sidebarBorder: "#d1bfa3",
  sidebarActiveBg: "#d1bfa3",
  sidebarText: "#222",
  sidebarActiveBorder: "#bfa77a",
};

const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontFamily?: string;
  spacingfactor?: number;
  borderColor?: string;
  shadowColor?: string;
  sidebarBg?: string;
  sidebarBorder?: string;
  sidebarActiveBg?: string;
  sidebarText?: string;
  sidebarActiveBorder?: string;
}

export const ThemeProvider = ({
  children,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  textColor,
  backgroundColor,
  fontSize,
  fontFamily,
  spacingfactor,
  borderColor,
  shadowColor,
  sidebarBg,
  sidebarBorder,
  sidebarActiveBg,
  sidebarText,
  sidebarActiveBorder,
}: ThemeProviderProps) => {
  const theme = {
    primaryColor: primaryColor || defaultTheme.primaryColor,
    secondaryColor: secondaryColor || defaultTheme.secondaryColor,
    tertiaryColor: tertiaryColor || defaultTheme.tertiaryColor,
    textColor: textColor || defaultTheme.textColor,
    backgroundColor: backgroundColor || defaultTheme.backgroundColor,
    fontSize: fontSize || defaultTheme.fontSize,
    fontFamily: fontFamily || defaultTheme.fontFamily,
    spacingfactor: spacingfactor || defaultTheme.spacingfactor,
    borderColor: borderColor || defaultTheme.borderColor,
    shadowColor: shadowColor || defaultTheme.shadowColor,
    sidebarBg: sidebarBg || defaultTheme.sidebarBg,
    sidebarBorder: sidebarBorder || defaultTheme.sidebarBorder,
    sidebarActiveBg: sidebarActiveBg || defaultTheme.sidebarActiveBg,
    sidebarText: sidebarText || defaultTheme.sidebarText,
    sidebarActiveBorder:
      sidebarActiveBorder || defaultTheme.sidebarActiveBorder,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default ThemeProvider;
