import React, { createContext, useContext, ReactNode } from "react";

// Define the type for your theme
export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textColor: string;
  backgroundColor: string;
  fontSize: string;
  fontFamily: string;
  spacingfactor: number;
}

// Default theme
export const defaultTheme: Theme = {
  primaryColor: "#3498db",
  secondaryColor: "#2ecc71",
  tertiaryColor: "#4dff00",
  textColor: "#000000",
  backgroundColor: "#fff",
  fontSize: "1rem",
  fontFamily: "Montserrat, sans-serif",
  spacingfactor: 4,
};

interface ThemeProviderProps {
  children: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  spacingfactor?: number;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

// ThemeProvider component
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
}: ThemeProviderProps) => {
  const theme: Theme = {
    primaryColor: primaryColor || defaultTheme.primaryColor,
    secondaryColor: secondaryColor || defaultTheme.secondaryColor,
    tertiaryColor: tertiaryColor || defaultTheme.tertiaryColor,
    textColor: textColor || defaultTheme.textColor,
    backgroundColor: backgroundColor || defaultTheme.backgroundColor,
    fontSize: fontSize || defaultTheme.fontSize,
    fontFamily: fontFamily || defaultTheme.fontFamily,
    spacingfactor: spacingfactor || defaultTheme.spacingfactor,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// useTheme hook with fallback to defaultTheme
export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  // If context is undefined, fallback to defaultTheme
  return context || defaultTheme;
};
