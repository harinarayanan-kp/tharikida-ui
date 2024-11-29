"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = exports.defaultTheme = void 0;
const react_1 = __importStar(require("react"));
// Default theme
exports.defaultTheme = {
    primaryColor: "#3498db",
    secondaryColor: "#2ecc71",
    tertiaryColor: "#4dff00",
    textColor: "#000000",
    backgroundColor: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
    spacingfactor: 4,
};
const ThemeContext = (0, react_1.createContext)(undefined);
// ThemeProvider component
const ThemeProvider = ({ children, primaryColor, secondaryColor, tertiaryColor, textColor, backgroundColor, fontSize, fontFamily, spacingfactor, }) => {
    const theme = {
        primaryColor: primaryColor || exports.defaultTheme.primaryColor,
        secondaryColor: secondaryColor || exports.defaultTheme.secondaryColor,
        tertiaryColor: tertiaryColor || exports.defaultTheme.tertiaryColor,
        textColor: textColor || exports.defaultTheme.textColor,
        backgroundColor: backgroundColor || exports.defaultTheme.backgroundColor,
        fontSize: fontSize || exports.defaultTheme.fontSize,
        fontFamily: fontFamily || exports.defaultTheme.fontFamily,
        spacingfactor: spacingfactor || exports.defaultTheme.spacingfactor,
    };
    return (react_1.default.createElement(ThemeContext.Provider, { value: theme }, children));
};
exports.ThemeProvider = ThemeProvider;
// useTheme hook with fallback to defaultTheme
const useTheme = () => {
    const context = (0, react_1.useContext)(ThemeContext);
    // If context is undefined, fallback to defaultTheme
    return context || exports.defaultTheme;
};
exports.useTheme = useTheme;
