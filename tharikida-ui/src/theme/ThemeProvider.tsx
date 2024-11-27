import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Theme } from './types'; // Import the Theme type

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    // Read the CSS variables from the root element (document.documentElement)
    const root = document.documentElement;

    const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    const secondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color').trim();
    const tertiaryColor = getComputedStyle(root).getPropertyValue('--tertiary-color').trim();
    const backgroundColor = getComputedStyle(root).getPropertyValue('--background-color').trim();
    const textColor = getComputedStyle(root).getPropertyValue('--text-color').trim();
    const fontFamily = getComputedStyle(root).getPropertyValue('--font-family').trim();
    const fontSize = getComputedStyle(root).getPropertyValue('--font-size').trim();
    const spacingFactor = getComputedStyle(root).getPropertyValue('--spacing-factor').trim();

    // Set the theme object based on the CSS variables
    setTheme({
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        tertiary: tertiaryColor,
        background: backgroundColor,
        text: textColor,
      },
      font: {
        family: fontFamily,
        size: fontSize,
      },
      spacing: (factor: number) => `${parseInt(spacingFactor) * factor}px`, // Convert to number and scale
    });
  }, []);

  // If the theme is not set yet, return a loading or fallback component
  if (!theme) return <div>Loading...</div>;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme | undefined => {
  return useContext(ThemeContext);
};
