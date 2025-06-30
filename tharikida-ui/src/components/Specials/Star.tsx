import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Star` is an SVG star shape component supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Star` component.
 * @param {number} props.size - The size (width & height) of the star in pixels.
 * @param {string} [props.color] - The fill color of the star. Overrides theme.primaryColor if provided.
 * @param {string} [props.strokeColor] - The stroke color of the star. Overrides theme.borderColor if provided.
 * @param {string|number} [props.strokeWidth] - The stroke width of the star. Overrides theme.borderWidth if provided.
 * @param {string} [props.className] - Additional className for the star container.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the star container.
 *
 * @returns {JSX.Element} A themed SVG star shape.
 */
type Props = {
  size: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: string | number;
  className?: string;
  styles?: React.CSSProperties;
};

const Star: React.FC<Props> = ({
  size,
  color,
  strokeColor,
  strokeWidth,
  className = "",
  styles = {},
}) => {
  const theme = useTheme();
  const fillColor = color || theme.primaryColor;
  const stroke = strokeColor || theme.borderColor;
  const strokeW = strokeWidth !== undefined ? strokeWidth : theme.borderWidth;

  return (
    <div className={className} style={styles}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5156 8.32592L18 4.24361L18.4844 8.32592C19.0561 13.1446 22.8554 16.9439 27.6741 17.5156L31.7564 18L27.6741 18.4844C22.8554 19.0561 19.0561 22.8554 18.4844 27.6741L18 31.7564L17.5156 27.6741C16.9439 22.8554 13.1446 19.0561 8.32592 18.4844L4.24361 18L8.32592 17.5156C13.1446 16.9439 16.9439 13.1446 17.5156 8.32592Z"
          fill={fillColor}
          stroke={stroke}
          strokeWidth={strokeW}
        />
      </svg>
    </div>
  );
};

export default Star;
