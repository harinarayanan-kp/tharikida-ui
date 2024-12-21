"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const defaultTheme = {
    primaryColor: "#2ecc71",
    secondaryColor: "#3498db",
    tertiaryColor: "#4dff00",
    textColor: "#000000",
    backgroundColor: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
    spacingfactor: 4,
};
const ThemeContext = createContext(defaultTheme);
export const ThemeProvider = ({ children, primaryColor, secondaryColor, tertiaryColor, textColor, backgroundColor, fontSize, fontFamily, spacingfactor, }) => {
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
    return (_jsx(ThemeContext.Provider, { value: theme, children: children }));
};
// Custom hook to use the theme in other components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context; // The context will either return the custom theme or the default theme
};
export default ThemeProvider;
