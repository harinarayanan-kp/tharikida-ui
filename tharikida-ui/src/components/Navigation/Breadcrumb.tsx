import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Breadcrumb` is a navigation component for displaying a breadcrumb trail, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Breadcrumb` component.
 * @param {{ label: string; href?: string }[]} props.items - Array of breadcrumb items with label and optional href.
 * @param {React.ReactNode} [props.separator] - Custom separator element between items.
 * @param {(href: string) => void} [props.onNavigate] - Callback when a breadcrumb link is clicked.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the breadcrumb container.
 * @param {string} [props.className] - Additional className for the breadcrumb container.
 * @param {string} [props.primaryColor] - Primary color for the breadcrumb background.
 * @param {string} [props.textColor] - Text color for the breadcrumb.
 * @param {string} [props.backgroundColor] - Background color for the breadcrumb (overrides primaryColor if provided).
 * @param {string} [props.borderColor] - Border color for the breadcrumb.
 * @param {string} [props.borderWidth] - Border width for the breadcrumb.
 * @param {string} [props.borderStyle] - Border style for the breadcrumb.
 * @param {number} [props.cornerRadius] - Border radius for the breadcrumb.
 * @param {string} [props.fontFamily] - Font family for the breadcrumb.
 * @param {number} [props.fontSize] - Font size for the breadcrumb.
 * @param {string} [props.fontWeight] - Font weight for the breadcrumb.
 * @param {string} [props.transitionDuration] - Transition duration for the breadcrumb.
 * @param {number} [props.spacingfactor] - Spacing factor for the breadcrumb.
 * @param {string} [props.hoverColor] - Hover color for breadcrumb links.
 *
 * @returns {JSX.Element} A styled breadcrumb navigation component.
 */
export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  separator?: React.ReactNode;
  onNavigate?: (href: string) => void;
  styles?: React.CSSProperties;
  className?: string;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  cornerRadius?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  transitionDuration?: string;
  spacingfactor?: number;
  hoverColor?: string;
}

const Breadcrumb = ({
  items,
  separator = <span style={{ margin: "0 8px" }}>/</span>,
  onNavigate,
  styles = {},
  className = "",
  primaryColor,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderStyle,
  cornerRadius,
  fontFamily,
  fontSize,
  fontWeight,
  transitionDuration,
  spacingfactor,
  hoverColor,
}: BreadcrumbProps) => {
  const theme = useTheme();
  const t = {
    primaryColor: primaryColor || theme.primaryColor,
    textColor: textColor || theme.textColor,
    backgroundColor: backgroundColor || primaryColor || theme.primaryColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    cornerRadius:
      typeof cornerRadius === "number" ? cornerRadius : theme.spacingfactor,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
    hoverColor: hoverColor || theme.hoverColor,
  };
  return (
    <nav
      aria-label="breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        background: t.backgroundColor,
        color: t.textColor,
        border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
        borderRadius: t.cornerRadius,
        boxShadow: `2px 2px 0px ${t.borderColor}`,
        padding: `${t.spacingfactor}px ${t.spacingfactor * 2}px`,
        margin: `${t.spacingfactor}px`,
        fontWeight: t.fontWeight,
        transition: t.transitionDuration,
        ...styles,
      }}
      className={className}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.label + idx}>
          {item.href ? (
            <a
              href={item.href}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(item.href!);
                }
              }}
              style={{
                color: t.textColor,
                textDecoration: "none",
                fontWeight: 600,
                transition: `color ${t.transitionDuration}`,
                cursor: "pointer",
                padding: `0 ${t.spacingfactor / 2}px`,
                borderRadius: t.spacingfactor / 2,
                background: "rgba(255,255,255,0.08)",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  t.hoverColor;
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.08)";
              }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{ color: t.textColor, fontWeight: 600 }}>
              {item.label}
            </span>
          )}
          {idx < items.length - 1 && separator}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
