"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `TextInput` is a single-line input component supporting controlled/uncontrolled usage, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `TextInput` component.
 * @param {"text" | "password" | "email"} [props.type="text"] - The input type.
 * @param {string} [props.placeholder] - Placeholder text for the input.
 * @param {string} [props.value] - The value of the input (controlled component).
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Callback when the value changes.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the input.
 * @param {string} [props.className] - Additional className for the input.
 * @param {number} [props.cornerRadius] - Border radius for the input. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for the input. Overrides theme.primaryColor if provided.
 * @param {string} [props.secondaryColor] - Secondary color for the input. Overrides theme.secondaryColor if provided.
 * @param {string} [props.textColor] - Text color for the input. Overrides theme.textColor if provided.
 * @param {string} [props.backgroundColor] - Background color for the input. Overrides theme.backgroundColor if provided.
 * @param {number} [props.fontSize] - Font size for the input. Overrides theme.fontSize if provided.
 * @param {string} [props.fontFamily] - Font family for the input. Overrides theme.fontFamily if provided.
 * @param {number} [props.spacingfactor] - Spacing factor for the input. Overrides theme.spacingfactor if provided.
 * @param {string} [props.borderColor] - Border color for the input. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Shadow color for the input. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Border width for the input. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the input. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Font weight for the input. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Line height for the input. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Letter spacing for the input. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the input. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Padding for the input. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Margin for the input. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Shadow offset X for the input. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Shadow offset Y for the input. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Shadow blur for the input. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Shadow spread for the input. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Shadow inset for the input. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Hover color for the input. Overrides theme.hoverColor if provided.
 *
 * @returns {JSX.Element} A styled text input component.
 */
export interface TextInputProps {
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styles?: React.CSSProperties;
  className?: string;
  /** Border radius for the input. Overrides theme.cornerRadius if provided. */
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

const TextInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
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
}: TextInputProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
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
  const inputStyles: React.CSSProperties = {
    backgroundColor: resolvedBackgroundColor,
    color: resolvedTextColor,
    fontSize: resolvedFontSize,
    fontFamily: resolvedFontFamily,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    padding:
      resolvedPadding ||
      `${resolvedSpacingfactor}px ${resolvedSpacingfactor * 2}px`,
    borderRadius: resolvedCornerRadius,
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    boxShadow: isFocused
      ? `0 0 0 2px ${resolvedPrimaryColor}`
      : `${
          resolvedShadowInset ? "inset " : ""
        }${resolvedShadowOffsetX} ${resolvedShadowOffsetY} ${resolvedShadowBlur} ${resolvedShadowSpread} ${resolvedShadowColor}`,
    boxSizing: "border-box" as "border-box",
    margin: resolvedMargin || `${resolvedSpacingfactor}px`,
    transition: resolvedTransitionDuration,
    width: "100%",
    outline: "none",
    ...styles,
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`tharikida-input ${className}`}
      style={inputStyles}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TextInput;
