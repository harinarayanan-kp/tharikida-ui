"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Card` is a container component for displaying content with optional title, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the Card component.
 * @param {string} [props.title] - Title of the card, displayed at the top.
 * @param {React.ReactNode} [props.children] - Content to display inside the card.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the card container.
 * @param {string} [props.className] - Additional className for the card container.
 * @param {number} [props.cornerRadius] - Custom border radius for the card. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for the card. Overrides theme.primaryColor if provided.
 * @param {string} [props.secondaryColor] - Secondary color for the card. Overrides theme.secondaryColor if provided.
 * @param {string} [props.textColor] - Text color for the card. Overrides theme.textColor if provided.
 * @param {string} [props.backgroundColor] - Background color for the card. Overrides theme.backgroundColor if provided.
 * @param {number} [props.fontSize] - Font size for the card. Overrides theme.fontSize if provided.
 * @param {string} [props.fontFamily] - Font family for the card. Overrides theme.fontFamily if provided.
 * @param {number} [props.spacingfactor] - Spacing factor for the card. Overrides theme.spacingfactor if provided.
 * @param {string} [props.borderColor] - Border color for the card. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Shadow color for the card. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Border width for the card. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the card. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Font weight for the card. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Line height for the card. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Letter spacing for the card. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the card. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Padding for the card. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Margin for the card. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Shadow offset X for the card. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Shadow offset Y for the card. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Shadow blur for the card. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Shadow spread for the card. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Shadow inset for the card. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Hover color for the card. Overrides theme.hoverColor if provided.
 *
 * @returns {JSX.Element} A styled card container.
 */
export interface CardProps {
  /**
   * Title of the card, displayed at the top.
   */
  title?: string;
  /**
   * Content to display inside the card.
   */
  children?: React.ReactNode;
  /**
   * Custom styles for the card container.
   */
  styles?: React.CSSProperties;
  /**
   * Additional className for the card container.
   */
  className?: string;
  /**
   * Custom border radius for the card. Overrides theme.cornerRadius if provided.
   */
  cornerRadius?: number;
  /**
   * Primary color for the card. Overrides theme.primaryColor if provided.
   */
  primaryColor?: string;
  /**
   * Secondary color for the card. Overrides theme.secondaryColor if provided.
   */
  secondaryColor?: string;
  /**
   * Text color for the card. Overrides theme.textColor if provided.
   */
  textColor?: string;
  /**
   * Background color for the card. Overrides theme.backgroundColor if provided.
   */
  backgroundColor?: string;
  /**
   * Font size for the card. Overrides theme.fontSize if provided.
   */
  fontSize?: number;
  /**
   * Font family for the card. Overrides theme.fontFamily if provided.
   */
  fontFamily?: string;
  /**
   * Spacing factor for the card. Overrides theme.spacingfactor if provided.
   */
  spacingfactor?: number;
  /**
   * Border color for the card. Overrides theme.borderColor if provided.
   */
  borderColor?: string;
  /**
   * Shadow color for the card. Overrides theme.shadowColor if provided.
   */
  shadowColor?: string;
  /**
   * Border width for the card. Overrides theme.borderWidth if provided.
   */
  borderWidth?: string;
  /**
   * Border style for the card. Overrides theme.borderStyle if provided.
   */
  borderStyle?: string;
  /**
   * Font weight for the card. Overrides theme.fontWeight if provided.
   */
  fontWeight?: string;
  /**
   * Line height for the card. Overrides theme.lineHeight if provided.
   */
  lineHeight?: string;
  /**
   * Letter spacing for the card. Overrides theme.letterSpacing if provided.
   */
  letterSpacing?: string;
  /**
   * Transition duration for the card. Overrides theme.transitionDuration if provided.
   */
  transitionDuration?: string;
  /**
   * Padding for the card. Overrides theme.padding if provided.
   */
  padding?: string;
  /**
   * Margin for the card. Overrides theme.margin if provided.
   */
  margin?: string;
  /**
   * Shadow offset X for the card. Overrides theme.shadowOffsetX if provided.
   */
  shadowOffsetX?: string;
  /**
   * Shadow offset Y for the card. Overrides theme.shadowOffsetY if provided.
   */
  shadowOffsetY?: string;
  /**
   * Shadow blur for the card. Overrides theme.shadowBlur if provided.
   */
  shadowBlur?: string;
  /**
   * Shadow spread for the card. Overrides theme.shadowSpread if provided.
   */
  shadowSpread?: string;
  /**
   * Shadow inset for the card. Overrides theme.shadowInset if provided.
   */
  shadowInset?: boolean;
  /**
   * Hover color for the card. Overrides theme.hoverColor if provided.
   */
  hoverColor?: string;
}

const Card = ({
  title,
  children,
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
}: CardProps) => {
  const theme = useTheme();

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

  const cardStyles: React.CSSProperties = {
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    borderRadius: resolvedCornerRadius,
    boxShadow: boxShadow,
    backgroundColor: resolvedBackgroundColor,
    color: resolvedTextColor,
    fontFamily: resolvedFontFamily,
    fontSize: resolvedFontSize,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    padding: resolvedPadding,
    margin: resolvedMargin,
    transition: resolvedTransitionDuration,
    ...styles,
  };

  const titleStyles: React.CSSProperties = {
    fontWeight: 600,
    fontSize:
      typeof resolvedFontSize === "number"
        ? resolvedFontSize * 1.1
        : resolvedFontSize,
    marginBottom: resolvedSpacingfactor,
    color: resolvedTextColor,
    fontFamily: resolvedFontFamily,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
  };

  return (
    <div className={`tharikida-card ${className}`} style={cardStyles}>
      {title && <div style={titleStyles}>{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
