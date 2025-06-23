"use client";

import { useTheme } from "../../theme/ThemeProvider";

/**
 * `List` is a container for list items, typically used with ListTile components, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `List` component.
 * @param {React.ReactNode} props.children - List items as ListTile components or any ReactNode.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the list container.
 * @param {string} [props.className] - Additional className for the list.
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
}

const List = ({ children, styles, className = "" }: ListProps) => {
  const theme = useTheme();

  return (
    <div
      className={`tharikida-list ${className}`}
      style={{
        border: "2px solid black",
        borderRadius: `${theme.spacingfactor * 2}px`,
        background: theme.backgroundColor,
        overflow: "hidden",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default List;
