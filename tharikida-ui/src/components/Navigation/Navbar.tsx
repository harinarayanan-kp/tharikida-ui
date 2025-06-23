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
 *
 * @returns {JSX.Element} A styled navigation bar component.
 */
export interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string; active?: boolean }[];
  rightContent?: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

const Navbar = ({
  logo,
  links = [],
  rightContent,
  styles = {},
  className = "",
}: NavbarProps) => {
  const theme = useTheme();
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: theme.primaryColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        padding: `${theme.spacingfactor * 1.5}px ${theme.spacingfactor * 3}px`,
        borderBottom: "2px solid black",
        boxShadow: "0 2px 0 #000",
        ...styles,
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacingfactor,
        }}
      >
        {logo && <div style={{ marginRight: theme.spacingfactor }}>{logo}</div>}
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: link.active ? theme.primaryColor : theme.textColor,
              background: link.active
                ? theme.textColor
                : "rgba(255,255,255,0.08)",
              textDecoration: "none",
              fontWeight: 700,
              margin: `0 ${theme.spacingfactor / 2}px`,
              padding: `6px 16px`,
              borderRadius: 8,
              border: link.active ? `2px solid ${theme.textColor}` : "none",
              boxShadow: link.active ? `0 2px 0 ${theme.textColor}` : "none",
              transition: "background 0.2s, color 0.2s, border 0.2s",
              cursor: "pointer",
              position: "relative",
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
                  background: theme.primaryColor,
                  border: `2px solid ${theme.textColor}`,
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
