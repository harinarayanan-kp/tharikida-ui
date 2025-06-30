"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `ArrowButton` is a customizable button component that displays an arrow.
 * The button can have various shapes, directions, and colors, and it rotates on hover.
 * The button's appearance and behavior can be controlled using props or the theme provider.
 *
 * @param {object} props - The properties to customize the `ArrowButton` component.
 * @param {'topleft' | 'topright' | 'bottomleft' | 'bottomright' | 'left' | 'right' | 'top' | 'bottom'} [props.initialDirection='topright'] - The initial direction of the arrow.
 * @param {'topleft' | 'topright' | 'bottomleft' | 'bottomright' | 'left' | 'right' | 'top' | 'bottom'} [props.finalDirection='right'] - The final direction of the arrow after rotation.
 * @param {string} [props.backgroundColor] - Background color of the button (overrides theme.backgroundColor).
 * @param {string} [props.arrowFillColor] - The fill color of the arrow (overrides theme.textColor).
 * @param {string} [props.arrowStrokeColor] - The stroke (border) color of the arrow (overrides theme.borderColor).
 * @param {string} [props.borderColor] - Border color of the button (overrides theme.borderColor).
 * @param {string} [props.shadowColor] - Shadow color of the button (overrides theme.shadowColor).
 * @param {number} [props.size] - The size of the button. Both width and height are set to this value (overrides theme.spacingfactor).
 * @param {number} [props.cornerRadius] - Custom border radius for the button. Overrides theme.cornerRadius if provided.
 * @param {string} [props.borderWidth] - Border width for the button (overrides theme.borderWidth).
 * @param {string} [props.borderStyle] - Border style for the button (overrides theme.borderStyle).
 * @param {string} [props.transitionDuration] - Transition duration for the button (overrides theme.transitionDuration).
 * @param {string} [props.shadowOffsetX] - Horizontal shadow offset (overrides theme.shadowOffsetX).
 * @param {string} [props.shadowOffsetY] - Vertical shadow offset (overrides theme.shadowOffsetY).
 * @param {string} [props.shadowBlur] - Shadow blur radius (overrides theme.shadowBlur).
 * @param {string} [props.shadowSpread] - Shadow spread radius (overrides theme.shadowSpread).
 * @param {boolean} [props.shadowInset] - Whether the shadow is inset (overrides theme.shadowInset).
 * @param {Function} [props.onClick] - A function that will be called when the button is clicked.
 *
 * @returns {JSX.Element} A styled button element with an arrow inside.
 */
export interface ArrowButtonProps {
  initialDirection?:
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright"
    | "left"
    | "right"
    | "top"
    | "bottom";
  finalDirection?:
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright"
    | "left"
    | "right"
    | "top"
    | "bottom";
  backgroundColor?: string;
  arrowFillColor?: string;
  arrowStrokeColor?: string;
  borderColor?: string;
  shadowColor?: string;
  size?: number;
  borderWidth?: string;
  borderStyle?: string;
  transitionDuration?: string;
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  shadowBlur?: string;
  shadowSpread?: string;
  shadowInset?: boolean;
  onClick?: () => void;
  cornerRadius?: number;
}

const ArrowButton = ({
  initialDirection = "topright",
  finalDirection = "right",
  backgroundColor,
  shadowColor,
  borderColor,
  size,
  onClick,
  arrowFillColor,
  arrowStrokeColor,
  cornerRadius,
  borderWidth,
  borderStyle,
  transitionDuration,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowSpread,
  shadowInset,
}: ArrowButtonProps) => {
  const theme = useTheme();
  // Helper function to calculate the rotation angle between initial and final direction
  const getRotationAngle = () => {
    const directionMap: { [key: string]: number } = {
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
  // Use prop cornerRadius if provided, else theme.cornerRadius
  const borderRadiusValue =
    typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius ?? 0;
  // Compose boxShadow from theme and props
  const getBoxShadow = (active: boolean) =>
    `${shadowInset ?? theme.shadowInset ? "inset " : ""}${
      shadowOffsetX ?? theme.shadowOffsetX
    } ${shadowOffsetY ?? theme.shadowOffsetY} ${
      shadowBlur ?? theme.shadowBlur
    } ${shadowSpread ?? theme.shadowSpread} ${
      active
        ? shadowColor || theme.shadowColor
        : borderColor || theme.borderColor
    }`;
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: borderRadiusValue,
        border: `${borderWidth || theme.borderWidth} ${
          borderStyle || theme.borderStyle
        } ${borderColor || theme.borderColor}`,
        backgroundColor: backgroundColor || theme.backgroundColor,
        width: size || theme.spacingfactor * 12,
        height: size || theme.spacingfactor * 12,
        display: "flex",
        boxShadow: getBoxShadow(false),
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: transitionDuration || theme.transitionDuration,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = getBoxShadow(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = getBoxShadow(false);
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: transitionDuration || theme.transitionDuration,
          rotate: `${-1 * getRotationAngle()}deg`,
        }}
        onMouseEnter={(e) => {
          const angle = getRotationAngle();
          e.currentTarget.style.transform = `rotate(${angle}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotate(0deg)";
        }}
      >
        <svg
          style={{
            width: `${(size || theme.spacingfactor * 12) * 0.75}`,
            height: `${(size || theme.spacingfactor * 12) * 0.5}`,
          }}
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.91229 10.6961L17.4123 6.36601C18.079 5.98111 18.079 5.01886 17.4123 4.63396L9.91229 0.30383C9.24563 -0.08107 8.41229 0.400055 8.41229 1.16985L8.41229 3.49998C8.41229 4.05227 7.96458 4.49998 7.41229 4.49998L1.59598 4.49998C1.04369 4.49998 0.595978 4.9477 0.595978 5.49998C0.595977 6.05227 1.04369 6.49998 1.59598 6.49998L7.41229 6.49998C7.96458 6.49998 8.41229 6.9477 8.41229 7.49998L8.41229 9.83011C8.41229 10.5999 9.24562 11.081 9.91229 10.6961Z"
            fill={arrowFillColor || theme.textColor}
            stroke={arrowStrokeColor || theme.borderColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default ArrowButton;
