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
const Dropdown = ({ options, defaultOption, onChange, width, }) => {
    const [selected, setSelected] = (0, react_1.useState)(defaultOption || options[0]);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const dropdownRef = (0, react_1.useRef)(null);
    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
        onChange && onChange(value);
    };
    (0, react_1.useEffect)(() => {
        var _a;
        if (isOpen && dropdownRef.current) {
            const selectedOptionIndex = options.indexOf(selected);
            const selectedOptionElement = (_a = dropdownRef.current) === null || _a === void 0 ? void 0 : _a.children[selectedOptionIndex];
            if (selectedOptionElement) {
                selectedOptionElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center", // Ensures the selected item is vertically centered
                });
            }
        }
    }, [isOpen, selected, options]);
    return (react_1.default.createElement("div", { style: { position: "relative", width: width || "100%" } },
        react_1.default.createElement("div", { style: {
                fontFamily: "montserrat",
                width: "100%",
                boxSizing: "border-box",
                padding: "6px 10px",
                border: "1px solid black",
                borderRadius: "500px",
                cursor: "pointer",
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
                height: "40px",
            }, onClick: () => setIsOpen(!isOpen) },
            selected,
            react_1.default.createElement("svg", { style: {
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                }, width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M1.37565 0.499999L7.43782 6.5L13.5 0.5", stroke: "black", "stroke-linecap": "round" }))),
        isOpen && (react_1.default.createElement("ul", { ref: dropdownRef, style: {
                boxSizing: "border-box",
                zIndex: 1000,
                margin: 0,
                padding: "10px",
                listStyle: "none",
                background: "white",
                border: "1px solid black",
                borderRadius: "15px",
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                maxHeight: "300px",
                overflowY: "auto",
            } }, options.map((option, index) => (react_1.default.createElement("li", { key: index, style: {
                fontFamily: "montserrat",
                padding: "8px 10px",
                cursor: "pointer",
                background: selected === option ? "#e6e6e6" : "white",
                borderRadius: "15px",
                transition: "background 0.2s",
            }, onClick: () => handleSelect(option), onMouseEnter: (e) => (e.currentTarget.style.background = "#f5f5f5"), onMouseLeave: (e) => (e.currentTarget.style.background =
                selected === option ? "#e6e6e6" : "white") }, option)))))));
};
exports.default = Dropdown;
