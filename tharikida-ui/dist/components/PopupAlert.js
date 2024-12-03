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
const react_1 = __importStar(require("react"));
const ThemeProvider_1 = require("../theme/ThemeProvider");
// PopupAlert component
const PopupAlert = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false); // State to control popup visibility
    const theme = (0, ThemeProvider_1.useTheme)(); // Call hook inside the component
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Arial', sans-serif",
        },
        button: {
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
        popup: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        },
        popupContent: {
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "#fff",
            padding: "20px",
            border: "2px solid black",
            textAlign: "center",
            width: "300px",
        },
        closeButton: {
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: theme.primaryColor, // Use theme here
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
    };
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("button", { onClick: togglePopup, style: styles.button }, "Show Alert"),
        isOpen && (react_1.default.createElement("div", { style: styles.popup },
            react_1.default.createElement("div", { style: styles.popupContent },
                react_1.default.createElement("h2", null, "Alert"),
                react_1.default.createElement("p", null, "This is a simple popup alert box."),
                react_1.default.createElement("button", { onClick: togglePopup, style: styles.closeButton }, "Close"))))));
};
exports.default = PopupAlert;
