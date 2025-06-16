import { ReactNode } from "react";
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
export declare const ThemeProvider: ({ children, primaryColor, secondaryColor, tertiaryColor, textColor, backgroundColor, fontSize, fontFamily, spacingfactor, borderColor, shadowColor, sidebarBg, sidebarBorder, sidebarActiveBg, sidebarText, sidebarActiveBorder, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    spacingfactor: number;
    borderColor: string;
    shadowColor: string;
    sidebarBg: string;
    sidebarBorder: string;
    sidebarActiveBg: string;
    sidebarText: string;
    sidebarActiveBorder: string;
};
export default ThemeProvider;
