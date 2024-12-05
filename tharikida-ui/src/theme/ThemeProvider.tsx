"use client"
// import React, { createContext, useContext, ReactNode } from "react";

// export interface Theme {
//   primaryColor: string;
//   secondaryColor: string;
//   tertiaryColor: string;
//   textColor: string;
//   backgroundColor: string;
//   fontFamily: string;
//   fontSize: number;
//   spacingfactor: number;
// }

// export const defaultTheme: Theme = {
//   primaryColor: "#3498db",
//   secondaryColor: "#2ecc71",
//   tertiaryColor: "#4dff00",
//   textColor: "#000000",
//   backgroundColor: "#fff",
//   fontSize: 16,
//   fontFamily: "Montserrat, sans-serif",
//   spacingfactor: 4,
// };

// export interface ThemeProviderProps {
//   children: ReactNode;
//   primaryColor?: string;
//   secondaryColor?: string;
//   tertiaryColor?: string;
//   textColor?: string;
//   backgroundColor?: string;
//   fontFamily?: string;
//   fontSize?: number;
//   spacingfactor?: number;
// }

// const ThemeContext = createContext<Theme | undefined>(undefined);

// // ThemeProvider component
// export const ThemeProvider = ({
//   children,
//   primaryColor,
//   secondaryColor,
//   tertiaryColor,
//   textColor,
//   backgroundColor,
//   fontSize,
//   fontFamily,
//   spacingfactor,
// }: ThemeProviderProps) => {
//   const theme: Theme = {
//     primaryColor: primaryColor || defaultTheme.primaryColor,
//     secondaryColor: secondaryColor || defaultTheme.secondaryColor,
//     tertiaryColor: tertiaryColor || defaultTheme.tertiaryColor,
//     textColor: textColor || defaultTheme.textColor,
//     backgroundColor: backgroundColor || defaultTheme.backgroundColor,
//     fontSize: fontSize || defaultTheme.fontSize,
//     fontFamily: fontFamily || defaultTheme.fontFamily,
//     spacingfactor: spacingfactor || defaultTheme.spacingfactor,
//   };

//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };

// export const useTheme = (): Theme => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     return {
//      primaryColor: "#3498db",
//   secondaryColor: "#2ecc71",
//   tertiaryColor: "#4dff00",
//   textColor: "#000000",
//   backgroundColor: "#fff",
//   fontSize: 16,
//   fontFamily: "Montserrat, sans-serif",
//   spacingfactor: 4,
//     };
//   }
//   return context || defaultTheme;
// };

// export default ThemeProvider;

import React, { createContext, useContext, ReactNode } from 'react';

// Default theme values
const defaultTheme = {
  primaryColor: "#3498db",
  secondaryColor: "#2ecc71",
  tertiaryColor: "#4dff00",
  textColor: "#000000",
  backgroundColor: "#fff",
  fontSize: 16,
  fontFamily: "Montserrat, sans-serif",
  spacingfactor: 4,
};

// Create a context for the theme
const ThemeContext = createContext(defaultTheme);

// ThemeProvider component to provide theme values
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
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme in other components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context; // The context will either return the custom theme or the default theme
};
