"use client";

import { useTheme } from "../../theme/ThemeProvider";

/**
 * `List` is a container for list items, typically used with ListTile components, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `List` component.
 * @param {React.ReactNode} props.children - List items as ListTile components or any ReactNode.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the list container.
 * @param {string} [props.className] - Additional className for the list.
 * @param {number} [props.cornerRadius] - Border radius for the list. Overrides theme.cornerRadius if provided.
 * @param {string} [props.backgroundColor] - Background color for the list.
 * @param {string} [props.borderColor] - Border color for the list.
 * @param {string} [props.borderWidth] - Border width for the list.
 * @param {string} [props.borderStyle] - Border style for the list.
 * @param {string} [props.fontFamily] - Font family for the list.
 * @param {number} [props.fontSize] - Font size for the list.
 * @param {string} [props.fontWeight] - Font weight for the list.
 * @param {string} [props.transitionDuration] - Transition duration for the list.
 * @param {number} [props.spacingfactor] - Spacing factor for the list.
 *
 * @returns {JSX.Element} A styled list container.
 */
export interface ListProps {
  /** List items as ListTile components or any ReactNode */
  children: React.ReactNode;
  /** Custom styles for the list container */
  styles?: React.CSSProperties;
  /** Additional className for the list */
  className?: string;
  /** Border radius for the list. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
  /** Background color for the list. */
  backgroundColor?: string;
  /** Border color for the list. */
  borderColor?: string;
  /** Border width for the list. */
  borderWidth?: string;
  /** Border style for the list. */
  borderStyle?: string;
  /** Font family for the list. */
  fontFamily?: string;
  /** Font size for the list. */
  fontSize?: number;
  /** Font weight for the list. */
  fontWeight?: string;
  /** Transition duration for the list. */
  transitionDuration?: string;
  /** Spacing factor for the list. */
  spacingfactor?: number;
}

const List = ({
  children,
  styles,
  className = "",
  cornerRadius,
  backgroundColor,
  borderColor,
  borderWidth,
  borderStyle,
  fontFamily,
  fontSize,
  fontWeight,
  transitionDuration,
  spacingfactor,
}: ListProps) => {
  const theme = useTheme();
  const t = {
    cornerRadius:
      cornerRadius !== undefined ? cornerRadius : theme.cornerRadius,
    backgroundColor: backgroundColor || theme.backgroundColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
  };

  return (
    <div
      className={`tharikida-list ${className}`}
      style={{
        border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
        borderRadius: t.cornerRadius,
        background: t.backgroundColor,
        overflow: "hidden",
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        transition: t.transitionDuration,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default List;
