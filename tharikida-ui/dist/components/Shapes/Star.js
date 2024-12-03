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
class Star extends react_1.Component {
    constructor() {
        super(...arguments);
        this.size = this.props.size;
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("svg", { width: this.size, height: this.size, viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M17.5156 8.32592L18 4.24361L18.4844 8.32592C19.0561 13.1446 22.8554 16.9439 27.6741 17.5156L31.7564 18L27.6741 18.4844C22.8554 19.0561 19.0561 22.8554 18.4844 27.6741L18 31.7564L17.5156 27.6741C16.9439 22.8554 13.1446 19.0561 8.32592 18.4844L4.24361 18L8.32592 17.5156C13.1446 16.9439 16.9439 13.1446 17.5156 8.32592Z", fill: "#E5ED9F", stroke: "black" }))));
    }
}
exports.default = Star;
