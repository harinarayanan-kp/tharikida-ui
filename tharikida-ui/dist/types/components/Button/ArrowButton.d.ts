import React from "react";
/**
 * `ArrowButton` is a customizable button component that displays an arrow.
 * The button can have various shapes, directions, and colors, and it rotates on hover.
 * The button's appearance and behavior can be controlled using props.
 *
 * @param {object} props - The properties to customize the `ArrowButton` component.
 * @param {'box' | 'rounded' | 'hybrid'} [props.type='hybrid'] - Defines the border style of the button.
 *   - `box`: A square button with sharp corners.
 *   - `rounded`: A circular button with rounded corners.
 *   - `hybrid`: A hybrid between box and rounded with a customizable border radius percentage.
 * @param {'topleft' | 'topright' | 'bottomleft' | 'bottomright' | 'left' | 'right' | 'top' | 'bottom'} [props.initialDirection='topright'] - The initial direction of the arrow.
 *   - Controls the direction of the arrow before hover and rotation.
 * @param {'topleft' | 'topright' | 'bottomleft' | 'bottomright' | 'left' | 'right' | 'top' | 'bottom'} [props.finalDirection='right'] - The final direction of the arrow after rotation.
 *   - Controls the direction of the arrow when hovered or clicked.
 * @param {string} [props.backgroundColor='transparent'] - Background color of the button.
 * @param {string} [props.arrowFillColor='black'] - The fill color of the arrow.
 * @param {string} [props.arrowStrokeColor='transparent'] - The stroke (border) color of the arrow.
 * @param {string} [props.borderColor='black'] - Border color of the button.
 * @param {string} [props.shadowColor='black'] - Shadow color of the button.
 * @param {number} [props.size=48] - The size of the button. Both width and height are set to this value.
 * @param {number} [props.borderRadiusPercentage=25] - The border radius percentage for hybrid type buttons (if `type` is `hybrid`).
 * @param {Function} [props.onClick] - A function that will be called when the button is clicked.
 *
 * @returns {JSX.Element} A styled button element with an arrow inside.
 */
export interface Props {
    type?: "box" | "rounded" | "hybrid";
    initialDirection?: "topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom";
    finalDirection?: "topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom";
    backgroundColor?: string;
    arrowFillColor?: string;
    arrowStrokeColor?: string;
    borderColor?: string;
    shadowColor?: string;
    size?: number;
    borderRadiusPercentage?: number;
    onClick?: () => void;
}
/**
 * `ArrowButton` is a customizable button component that displays an arrow.
 * The button can have various shapes, directions, and colors, and it rotates on hover.
 * The button's appearance and behavior can be controlled using props.
 *
 * @param {Props} props - The properties to customize the `ArrowButton` component.
 * @returns {JSX.Element} A styled button element with an arrow inside.
 */
declare const ArrowButton: React.FC<Props>;
export default ArrowButton;
