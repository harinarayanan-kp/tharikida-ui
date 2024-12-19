import { ReactNode } from 'react';
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
export declare const ThemeProvider: ({ children, primaryColor, secondaryColor, tertiaryColor, textColor, backgroundColor, fontSize, fontFamily, spacingfactor, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    spacingfactor: number;
};
export default ThemeProvider;
