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
exports.default = ActiveTag;
const React = __importStar(require("react"));
const ThemeProvider_1 = require("../../theme/ThemeProvider");
function ActiveTag(props) {
    const theme = (0, ThemeProvider_1.useTheme)();
    const { size, hideCircle, backGroundColor, color, fontFamily, fontSize } = props;
    return (React.createElement("div", { style: {
            backgroundColor: backGroundColor ? backGroundColor : "#CCFFCC",
            padding: size ? size : theme.spacingfactor,
            borderRadius: size ? size * 10 : theme.spacingfactor * 10,
            border: "2px solid black",
            width: "fit-content",
            fontFamily: fontFamily ? fontFamily : theme.fontFamily,
            fontSize: fontSize ? fontSize : theme.fontSize,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            paddingRight: "10px",
        } },
        hideCircle ? (React.createElement(React.Fragment, null)) : (React.createElement("div", { style: {
                height: size ? size * 5 : theme.spacingfactor * 5,
                width: size ? size : theme.spacingfactor * 5,
                backgroundColor: "#62FF00",
                borderRadius: size ? size * 10 : theme.spacingfactor * 10,
                border: "2px solid black",
            } })),
        "Active"));
}
