"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Navbar` is a navigation bar component supporting logo, links, right content, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `Navbar` component.
 * @param {React.ReactNode} [props.logo] - Logo element to display at the start of the navbar.
 * @param {{ label: string; href: string; active?: boolean }[]} [props.links] - Array of navigation links with label, href, and optional active state.
 * @param {React.ReactNode} [props.rightContent] - Content to display at the end of the navbar (e.g., user menu).
 * @param {React.CSSProperties} [props.styles] - Custom styles for the navbar container.
 * @param {string} [props.className] - Additional className for the navbar container.
 * @param {string} [props.primaryColor] - Primary color for the navbar background.
 * @param {string} [props.textColor] - Text color for the navbar.
 * @param {string} [props.backgroundColor] - Background color for the navbar (overrides primaryColor if provided).
 * @param {string} [props.borderColor] - Border color for the navbar.
 * @param {string} [props.borderWidth] - Border width for the navbar.
 * @param {string} [props.borderStyle] - Border style for the navbar.
 * @param {number} [props.cornerRadius] - Border radius for the navbar.
 * @param {string} [props.fontFamily] - Font family for the navbar.
 * @param {number} [props.fontSize] - Font size for the navbar.
 * @param {string} [props.fontWeight] - Font weight for the navbar.
 * @param {string} [props.transitionDuration] - Transition duration for the navbar.
 * @param {number} [props.spacingfactor] - Spacing factor for the navbar.
 * @param {string} [props.hoverColor] - Hover color for navbar links.
 *
 * @returns {JSX.Element} A styled navigation bar component.
 */
export interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string; active?: boolean }[];
  rightContent?: React.ReactNode;
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

const Navbar = ({
  logo,
  links = [],
  rightContent,
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
}: NavbarProps) => {
  const theme = useTheme();
  const t = {
    primaryColor: primaryColor || theme.primaryColor,
    textColor: textColor || theme.textColor,
    backgroundColor: backgroundColor || primaryColor || theme.primaryColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    cornerRadius:
      typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
    hoverColor: hoverColor || theme.hoverColor,
  };
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: t.backgroundColor,
        color: t.textColor,
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        padding: `${t.spacingfactor * 1.5}px ${t.spacingfactor * 3}px`,
        borderBottom: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
        borderRadius: t.cornerRadius,
        boxShadow: `0 2px 0 ${t.borderColor}`,
        fontWeight: t.fontWeight,
        transition: t.transitionDuration,
        ...styles,
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: t.spacingfactor,
        }}
      >
        {logo && <div style={{ marginRight: t.spacingfactor }}>{logo}</div>}
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: link.active ? t.primaryColor : t.textColor,
              background: link.active ? t.textColor : "rgba(255,255,255,0.08)",
              textDecoration: "none",
              fontWeight: 700,
              margin: `0 ${t.spacingfactor / 2}px`,
              padding: `6px 16px`,
              borderRadius: t.cornerRadius,
              border: link.active ? `2px solid ${t.textColor}` : "none",
              boxShadow: link.active ? `0 2px 0 ${t.textColor}` : "none",
              transition: `background ${t.transitionDuration}, color ${t.transitionDuration}, border ${t.transitionDuration}`,
              cursor: "pointer",
              position: "relative",
            }}
            onMouseOver={(e) => {
              if (!link.active)
                (e.currentTarget as HTMLAnchorElement).style.background =
                  t.hoverColor;
            }}
            onMouseOut={(e) => {
              if (!link.active)
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.08)";
            }}
          >
            {link.label}
            {link.active && (
              <span
                style={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: t.primaryColor,
                  border: `2px solid ${t.textColor}`,
                  marginRight: 8,
                  display: "inline-block",
                }}
              />
            )}
          </a>
        ))}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </nav>
  );
};

export default Navbar;
