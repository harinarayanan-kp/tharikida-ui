"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Accordion` is a collapsible content panel that supports theming, custom styles, and smooth transitions.
 *
 * @param {object} props - The properties to customize the Accordion component.
 * @param {string} props.title - The title displayed in the Accordion header.
 * @param {React.ReactNode} props.content - The content to show when expanded.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the Accordion container.
 * @param {string} [props.className] - Custom class name for the Accordion container.
 * @param {number} [props.cornerRadius] - Custom border radius for the Accordion. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for the Accordion. Overrides theme.primaryColor if provided.
 * @param {string} [props.secondaryColor] - Secondary color for the Accordion. Overrides theme.secondaryColor if provided.
 * @param {string} [props.textColor] - Text color for the Accordion. Overrides theme.textColor if provided.
 * @param {string} [props.backgroundColor] - Background color for the Accordion. Overrides theme.backgroundColor if provided.
 * @param {number} [props.fontSize] - Font size for the Accordion. Overrides theme.fontSize if provided.
 * @param {string} [props.fontFamily] - Font family for the Accordion. Overrides theme.fontFamily if provided.
 * @param {number} [props.spacingfactor] - Spacing factor for the Accordion. Overrides theme.spacingfactor if provided.
 * @param {string} [props.borderColor] - Border color for the Accordion. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Shadow color for the Accordion. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Border width for the Accordion. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the Accordion. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Font weight for the Accordion. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Line height for the Accordion. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Letter spacing for the Accordion. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the Accordion. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Padding for the Accordion. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Margin for the Accordion. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Shadow offset X for the Accordion. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Shadow offset Y for the Accordion. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Shadow blur for the Accordion. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Shadow spread for the Accordion. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Shadow inset for the Accordion. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Hover color for the Accordion header. Overrides theme.hoverColor if provided.
 * @returns {JSX.Element} A styled, collapsible Accordion component.
 */
export interface AccordionProps {
  title: string;
  content: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  cornerRadius?: number;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontFamily?: string;
  spacingfactor?: number;
  borderColor?: string;
  shadowColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  transitionDuration?: string;
  padding?: string;
  margin?: string;
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  shadowBlur?: string;
  shadowSpread?: string;
  shadowInset?: boolean;
  hoverColor?: string;
}

const Accordion = ({
  title,
  content,
  styles,
  className = "",
  cornerRadius,
  primaryColor,
  secondaryColor,
  textColor,
  backgroundColor,
  fontSize,
  fontFamily,
  spacingfactor,
  borderColor,
  shadowColor,
  borderWidth,
  borderStyle,
  fontWeight,
  lineHeight,
  letterSpacing,
  transitionDuration,
  padding,
  margin,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowSpread,
  shadowInset,
  hoverColor,
}: AccordionProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Use prop override, then theme, then fallback to default
  const getThemeValue = (prop: any, themeKey: keyof typeof theme) =>
    prop !== undefined ? prop : theme[themeKey];

  const resolvedCornerRadius = getThemeValue(cornerRadius, "cornerRadius");
  const resolvedPrimaryColor = getThemeValue(primaryColor, "primaryColor");
  const resolvedSecondaryColor = getThemeValue(
    secondaryColor,
    "secondaryColor"
  );
  const resolvedTextColor = getThemeValue(textColor, "textColor");
  const resolvedBackgroundColor = getThemeValue(
    backgroundColor,
    "backgroundColor"
  );
  const resolvedFontSize = getThemeValue(fontSize, "fontSize");
  const resolvedFontFamily = getThemeValue(fontFamily, "fontFamily");
  const resolvedSpacingfactor = getThemeValue(spacingfactor, "spacingfactor");
  const resolvedBorderColor = getThemeValue(borderColor, "borderColor");
  const resolvedShadowColor = getThemeValue(shadowColor, "shadowColor");
  const resolvedBorderWidth = getThemeValue(borderWidth, "borderWidth");
  const resolvedBorderStyle = getThemeValue(borderStyle, "borderStyle");
  const resolvedFontWeight = getThemeValue(fontWeight, "fontWeight");
  const resolvedLineHeight = getThemeValue(lineHeight, "lineHeight");
  const resolvedLetterSpacing = getThemeValue(letterSpacing, "letterSpacing");
  const resolvedTransitionDuration = getThemeValue(
    transitionDuration,
    "transitionDuration"
  );
  const resolvedPadding = getThemeValue(padding, "padding");
  const resolvedMargin = getThemeValue(margin, "margin");
  const resolvedShadowOffsetX = getThemeValue(shadowOffsetX, "shadowOffsetX");
  const resolvedShadowOffsetY = getThemeValue(shadowOffsetY, "shadowOffsetY");
  const resolvedShadowBlur = getThemeValue(shadowBlur, "shadowBlur");
  const resolvedShadowSpread = getThemeValue(shadowSpread, "shadowSpread");
  const resolvedShadowInset = getThemeValue(shadowInset, "shadowInset");
  const resolvedHoverColor = getThemeValue(hoverColor, "hoverColor");

  const boxShadow = `${
    resolvedShadowInset ? "inset " : ""
  }${resolvedShadowOffsetX} ${resolvedShadowOffsetY} ${resolvedShadowBlur} ${resolvedShadowSpread} ${resolvedShadowColor}`;

  const accordionStyles: React.CSSProperties = {
    overflow: "hidden",
    transition: resolvedTransitionDuration,
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    borderRadius: resolvedCornerRadius,
    boxShadow: boxShadow,
    backgroundColor: resolvedBackgroundColor,
    color: resolvedTextColor,
    fontSize: resolvedFontSize,
    fontFamily: resolvedFontFamily,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    margin: resolvedMargin,
    ...styles,
  };

  const headerStyles: React.CSSProperties = {
    padding: resolvedPadding,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isHovered ? resolvedHoverColor : resolvedBackgroundColor,
    color: resolvedTextColor,
    fontSize: resolvedFontSize,
    fontFamily: resolvedFontFamily,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    transition: `background-color ${resolvedTransitionDuration}`,
    borderBottom: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
  };

  const contentStyles: React.CSSProperties = {
    padding: resolvedPadding,
    backgroundColor: resolvedBackgroundColor,
    color: resolvedTextColor,
    fontSize: resolvedFontSize,
    fontFamily: resolvedFontFamily,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    borderTop: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    transition: resolvedTransitionDuration,
  };

  return (
    <div className={`tharikida-accordion ${className}`} style={accordionStyles}>
      <div
        style={headerStyles}
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
        <svg
          style={{
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
            transition: `transform ${resolvedTransitionDuration}`,
          }}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.37565 0.499999L7.43782 6.5L13.5 0.5"
            stroke={resolvedTextColor}
            strokeLinecap="round"
          />
        </svg>
      </div>
      {isActive && <div style={contentStyles}>{content}</div>}
    </div>
  );
};

export default Accordion;
