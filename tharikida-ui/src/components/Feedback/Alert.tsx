"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Alert` is a popup alert component with a customizable message, title, button text, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `Alert` component.
 * @param {string} [props.message] - The message to display in the alert popup.
 * @param {string} [props.title] - The title of the alert popup.
 * @param {string} [props.buttonText] - The text for the button that opens the alert.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the alert popup content.
 * @param {string} [props.className] - Additional className for the alert container.
 * @param {number} [props.cornerRadius] - Border radius for the alert popup. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for the alert. Overrides theme.primaryColor if provided.
 * @param {string} [props.secondaryColor] - Secondary color for the alert. Overrides theme.secondaryColor if provided.
 * @param {string} [props.textColor] - Text color for the alert. Overrides theme.textColor if provided.
 * @param {string} [props.backgroundColor] - Background color for the alert. Overrides theme.backgroundColor if provided.
 * @param {number} [props.fontSize] - Font size for the alert. Overrides theme.fontSize if provided.
 * @param {string} [props.fontFamily] - Font family for the alert. Overrides theme.fontFamily if provided.
 * @param {number} [props.spacingfactor] - Spacing factor for the alert. Overrides theme.spacingfactor if provided.
 * @param {string} [props.borderColor] - Border color for the alert. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Shadow color for the alert. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Border width for the alert. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the alert. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Font weight for the alert. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Line height for the alert. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Letter spacing for the alert. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the alert. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Padding for the alert. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Margin for the alert. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Shadow offset X for the alert. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Shadow offset Y for the alert. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Shadow blur for the alert. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Shadow spread for the alert. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Shadow inset for the alert. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Hover color for the alert. Overrides theme.hoverColor if provided.
 *
 * @returns {JSX.Element} A styled popup alert component.
 */
export interface AlertProps {
  message?: string;
  title?: string;
  buttonText?: string;
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

const Alert = ({
  message = "This is a simple popup alert box.",
  title = "Alert",
  buttonText = "Show Alert",
  styles = {},
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
}: AlertProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
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
  const alertButtonStyles: React.CSSProperties = {
    padding:
      resolvedPadding ||
      `${resolvedSpacingfactor * 2}px ${resolvedSpacingfactor * 4}px`,
    fontSize: resolvedFontSize,
    backgroundColor: resolvedPrimaryColor,
    color: resolvedTextColor,
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    borderRadius: resolvedSpacingfactor,
    cursor: "pointer",
    fontFamily: resolvedFontFamily,
    fontWeight: 600,
    boxShadow: isActive
      ? `1px 1px 0px ${resolvedShadowColor}`
      : `2px 2px 0px ${resolvedShadowColor}`,
    transition: `background-color ${resolvedTransitionDuration}, box-shadow 0.2s`,
    margin: resolvedMargin || `${resolvedSpacingfactor * 2}px 0`,
  };
  const popupStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };
  const popupContentStyles: React.CSSProperties = {
    fontFamily: resolvedFontFamily,
    backgroundColor: resolvedBackgroundColor,
    padding: resolvedPadding || `${resolvedSpacingfactor * 5}px`,
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    textAlign: "center",
    width: 300,
    borderRadius: resolvedCornerRadius,
    boxShadow: `2px 2px 0px ${resolvedShadowColor}`,
    color: resolvedTextColor,
    fontSize: resolvedFontSize,
    fontWeight: resolvedFontWeight,
    lineHeight: resolvedLineHeight,
    letterSpacing: resolvedLetterSpacing,
    margin: resolvedMargin,
    transition: resolvedTransitionDuration,
    ...styles,
  };
  const closeButtonStyles: React.CSSProperties = {
    marginTop: resolvedPadding || `${resolvedSpacingfactor * 2}px`,
    padding:
      resolvedPadding ||
      `${resolvedSpacingfactor * 2}px ${resolvedSpacingfactor * 4}px`,
    backgroundColor: resolvedSecondaryColor,
    color: resolvedTextColor,
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    borderRadius: resolvedSpacingfactor,
    cursor: "pointer",
    fontFamily: resolvedFontFamily,
    fontWeight: 600,
    boxShadow: `1px 1px 0px ${resolvedShadowColor}`,
    transition: `background-color ${resolvedTransitionDuration}, box-shadow 0.2s`,
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={alertButtonStyles}
        onClick={handleOpen}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {buttonText}
      </button>
      {isOpen && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <h2>{title}</h2>
            <p>{message}</p>
            <button style={closeButtonStyles} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
