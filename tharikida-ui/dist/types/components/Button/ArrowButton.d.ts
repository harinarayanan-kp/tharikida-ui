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
    /**
     * Button style type. Can be one of 'box', 'rounded', or 'hybrid'.
     * - 'box' results in a square or rectangular button with sharp corners.
     * - 'rounded' results in a fully circular or oval button.
     * - 'hybrid' creates a button with a customizable border-radius, allowing smooth transitions between 'box' and 'rounded'.
     */
    type?: "box" | "rounded" | "hybrid";
    /**
     * The initial direction of the arrow when the button is rendered.
     * Determines where the arrow will be pointing initially.
     */
    initialDirection?: "topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom";
    /**
     * The final direction of the arrow after rotation (hover effect).
     * Defines the target direction of the arrow when the user hovers over the button.
     */
    finalDirection?: "topleft" | "topright" | "bottomleft" | "bottomright" | "left" | "right" | "top" | "bottom";
    /**
     * Background color of the button. Defaults to transparent.
     * Accepts any valid CSS color value.
     */
    backgroundColor?: string;
    /**
     * Fill color of the arrow. Defaults to black.
     * Accepts any valid CSS color value.
     */
    arrowFillColor?: string;
    /**
     * Stroke color of the arrow. Defaults to transparent.
     * Accepts any valid CSS color value.
     */
    arrowStrokeColor?: string;
    /**
     * Border color of the button. Defaults to black.
     * Accepts any valid CSS color value.
     */
    borderColor?: string;
    /**
     * Shadow color for the button. Defaults to black.
     * Accepts any valid CSS color value.
     */
    shadowColor?: string;
    /**
     * Size of the button. Affects width, height, and the arrow size. Defaults to 48px.
     * Accepts any positive number (in pixels).
     */
    size?: number;
    /**
     * Border-radius percentage for 'hybrid' type. Defaults to 25%.
     * Defines the level of roundness on the corners of the button.
     * Accepts a percentage value between 0 and 100.
     */
    borderRadiusPercentage?: number;
    /**
     * Optional click handler. Executes when the button is clicked.
     */
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
