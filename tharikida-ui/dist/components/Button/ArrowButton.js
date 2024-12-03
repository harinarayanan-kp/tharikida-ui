"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * `ArrowButton` is a customizable button component that displays an arrow.
 * The button can have various shapes, directions, and colors, and it rotates on hover.
 * The button's appearance and behavior can be controlled using props.
 *
 * @param {Props} props - The properties to customize the `ArrowButton` component.
 * @returns {JSX.Element} A styled button element with an arrow inside.
 */
const ArrowButton = ({ 
// Destructure props with default values
type = "hybrid", initialDirection = "topright", finalDirection = "right", backgroundColor = "transparent", shadowColor = "black", borderColor = "black", size = 48, onClick, arrowFillColor = "black", arrowStrokeColor = "transparent", borderRadiusPercentage = 25, }) => {
    // Helper function to calculate the rotation angle between initial and final direction
    const getRotationAngle = () => {
        const directionMap = {
            topleft: -135,
            top: -90,
            topright: -45,
            right: 0,
            bottomright: 45,
            bottom: 90,
            bottomleft: 135,
            left: 180,
        };
        const initialAngle = directionMap[initialDirection] || 0;
        const finalAngle = directionMap[finalDirection] || 0;
        return finalAngle - initialAngle;
    };
    // Compute border-radius value based on the type ('rounded', 'box', or 'hybrid')
    const borderRadiusValue = type === "hybrid"
        ? (size * borderRadiusPercentage) / 100 // 'hybrid' uses percentage-based rounding
        : type === "rounded"
            ? size / 2 // 'rounded' makes the button a perfect circle
            : 0; // 'box' has sharp corners (no border-radius)
    return (react_1.default.createElement("div", { onClick: onClick, style: {
            borderRadius: borderRadiusValue,
            border: `2px solid ${borderColor}`,
            backgroundColor,
            width: size,
            height: size,
            display: "flex",
            boxShadow: `4px 2px 0px ${shadowColor}`,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease", // Smooth transition for button rotation
        }, onMouseEnter: (e) => {
            e.currentTarget.style.boxShadow = `1px 1px 0px ${shadowColor}`; // Change box-shadow on hover
        }, onMouseLeave: (e) => {
            e.currentTarget.style.boxShadow = `4px 2px 0px ${shadowColor}`; // Reset box-shadow when hover ends
        } },
        react_1.default.createElement("div", { style: {
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease",
                rotate: `${-1 * getRotationAngle()}deg`, // Initial rotation angle calculation
            }, onMouseEnter: (e) => {
                const angle = getRotationAngle(); // Get rotation angle based on direction difference
                e.currentTarget.style.transform = `rotate(${angle}deg)`; // Rotate button on hover
            }, onMouseLeave: (e) => {
                e.currentTarget.style.transform = "rotate(0deg)"; // Reset rotation when hover ends
            } },
            react_1.default.createElement("svg", { style: {
                    width: `${size * 0.75}`,
                    height: `${size * 0.5}`,
                }, viewBox: "0 0 18 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.91229 10.6961L17.4123 6.36601C18.079 5.98111 18.079 5.01886 17.4123 4.63396L9.91229 0.30383C9.24563 -0.08107 8.41229 0.400055 8.41229 1.16985L8.41229 3.49998C8.41229 4.05227 7.96458 4.49998 7.41229 4.49998L1.59598 4.49998C1.04369 4.49998 0.595978 4.9477 0.595978 5.49998C0.595977 6.05227 1.04369 6.49998 1.59598 6.49998L7.41229 6.49998C7.96458 6.49998 8.41229 6.9477 8.41229 7.49998L8.41229 9.83011C8.41229 10.5999 9.24562 11.081 9.91229 10.6961Z", fill: arrowFillColor, stroke: arrowStrokeColor })))));
};
exports.default = ArrowButton;
