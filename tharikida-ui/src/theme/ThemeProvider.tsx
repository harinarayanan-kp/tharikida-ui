"use client";

import React, { createContext, useContext, ReactNode } from "react";

const defaultTheme = {
  primaryColor: "#2ecc71",
  secondaryColor: "#3498db",
  hoverColor: "#62f39f",
  textColor: "#000000",
  backgroundColor: "#fff",
  fontSize: 16,
  fontFamily: "Montserrat, sans-serif",
  spacingfactor: 4,
  borderColor: "#000000",
  shadowColor: "#000000",
  cornerRadius: 0,
  borderWidth: "1px",
  borderStyle: "solid",
  fontWeight: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  transitionDuration: "0.3s",
  padding: "10px",
  margin: "0px",
  shadowOffsetX: "4px",
  shadowOffsetY: "2px",
  shadowBlur: "0px",
  shadowSpread: "0px",
  shadowInset: false,
};

const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontFamily?: string;
  spacingfactor?: number;
  borderColor?: string;
  shadowColor?: string;
  cornerRadius?: number;
  borderWidth?: string;
  borderStyle?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  transitionDuration?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  shadowBlur?: string;
  shadowSpread?: string;
  shadowInset?: boolean;
  hoverColor?: string;
}

export const ThemeProvider = ({
  children,
  primaryColor,
  secondaryColor,
  textColor,
  backgroundColor,
  fontSize,
  fontFamily,
  spacingfactor,
  borderColor,
  shadowColor,
  cornerRadius,
  borderWidth,
  borderStyle,
  fontWeight,
  lineHeight,
  letterSpacing,
  transitionDuration,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowSpread,
  shadowInset,
  hoverColor,
}: ThemeProviderProps) => {
  const theme = {
    primaryColor: primaryColor || defaultTheme.primaryColor,
    secondaryColor: secondaryColor || defaultTheme.secondaryColor,
    textColor: textColor || defaultTheme.textColor,
    backgroundColor: backgroundColor || defaultTheme.backgroundColor,
    fontSize: fontSize || defaultTheme.fontSize,
    fontFamily: fontFamily || defaultTheme.fontFamily,
    spacingfactor: spacingfactor || defaultTheme.spacingfactor,
    borderColor: borderColor || defaultTheme.borderColor,
    shadowColor: shadowColor || defaultTheme.shadowColor,
    cornerRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : defaultTheme.cornerRadius,
    borderWidth: borderWidth ?? defaultTheme.borderWidth,
    borderStyle: borderStyle ?? defaultTheme.borderStyle,
    fontWeight: fontWeight ?? defaultTheme.fontWeight,
    lineHeight: lineHeight ?? defaultTheme.lineHeight,
    letterSpacing: letterSpacing ?? defaultTheme.letterSpacing,
    transitionDuration: transitionDuration ?? defaultTheme.transitionDuration,
    padding: padding ?? defaultTheme.padding,
    paddingTop: paddingTop ?? undefined,
    paddingRight: paddingRight ?? undefined,
    paddingBottom: paddingBottom ?? undefined,
    paddingLeft: paddingLeft ?? undefined,
    margin: margin ?? defaultTheme.margin,
    marginTop: marginTop ?? undefined,
    marginRight: marginRight ?? undefined,
    marginBottom: marginBottom ?? undefined,
    marginLeft: marginLeft ?? undefined,
    shadowOffsetX: shadowOffsetX ?? defaultTheme.shadowOffsetX,
    shadowOffsetY: shadowOffsetY ?? defaultTheme.shadowOffsetY,
    shadowBlur: shadowBlur ?? defaultTheme.shadowBlur,
    shadowSpread: shadowSpread ?? defaultTheme.shadowSpread,
    shadowInset: shadowInset ?? defaultTheme.shadowInset,
    hoverColor: hoverColor || defaultTheme.hoverColor,
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
