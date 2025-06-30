"use client";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Table` is a flexible table component for displaying tabular data, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Table` component.
 * @param {string[]} props.columns - Table column headers.
 * @param {(string | number | React.ReactNode)[][]} props.data - Table data as array of rows.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the table.
 * @param {string} [props.className] - Additional className for the table.
 * @param {number} [props.cornerRadius] - Border radius for the table. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for the table. Overrides theme.primaryColor if provided.
 * @param {string} [props.secondaryColor] - Secondary color for the table. Overrides theme.secondaryColor if provided.
 * @param {string} [props.textColor] - Text color for the table. Overrides theme.textColor if provided.
 * @param {string} [props.backgroundColor] - Background color for the table. Overrides theme.backgroundColor if provided.
 * @param {number} [props.fontSize] - Font size for the table. Overrides theme.fontSize if provided.
 * @param {string} [props.fontFamily] - Font family for the table. Overrides theme.fontFamily if provided.
 * @param {number} [props.spacingfactor] - Spacing factor for the table. Overrides theme.spacingfactor if provided.
 * @param {string} [props.borderColor] - Border color for the table. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Shadow color for the table. Overrides theme.shadowColor if provided.
 * @param {string} [props.borderWidth] - Border width for the table. Overrides theme.borderWidth if provided.
 * @param {string} [props.borderStyle] - Border style for the table. Overrides theme.borderStyle if provided.
 * @param {string} [props.fontWeight] - Font weight for the table. Overrides theme.fontWeight if provided.
 * @param {string} [props.lineHeight] - Line height for the table. Overrides theme.lineHeight if provided.
 * @param {string} [props.letterSpacing] - Letter spacing for the table. Overrides theme.letterSpacing if provided.
 * @param {string} [props.transitionDuration] - Transition duration for the table. Overrides theme.transitionDuration if provided.
 * @param {string} [props.padding] - Padding for the table. Overrides theme.padding if provided.
 * @param {string} [props.margin] - Margin for the table. Overrides theme.margin if provided.
 * @param {string} [props.shadowOffsetX] - Shadow offset X for the table. Overrides theme.shadowOffsetX if provided.
 * @param {string} [props.shadowOffsetY] - Shadow offset Y for the table. Overrides theme.shadowOffsetY if provided.
 * @param {string} [props.shadowBlur] - Shadow blur for the table. Overrides theme.shadowBlur if provided.
 * @param {string} [props.shadowSpread] - Shadow spread for the table. Overrides theme.shadowSpread if provided.
 * @param {boolean} [props.shadowInset] - Shadow inset for the table. Overrides theme.shadowInset if provided.
 * @param {string} [props.hoverColor] - Hover color for the table. Overrides theme.hoverColor if provided.
 *
 * @returns {JSX.Element} A styled table component.
 */
export interface TableProps {
  /** Table column headers */
  columns: string[];
  /** Table data as array of rows */
  data: (string | number | React.ReactNode)[][];
  /** Custom styles for the table */
  styles?: React.CSSProperties;
  /** Additional className for the table */
  className?: string;
  /** Border radius for the table. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
  /** Primary color for the table. Overrides theme.primaryColor if provided. */
  primaryColor?: string;
  /** Secondary color for the table. Overrides theme.secondaryColor if provided. */
  secondaryColor?: string;
  /** Text color for the table. Overrides theme.textColor if provided. */
  textColor?: string;
  /** Background color for the table. Overrides theme.backgroundColor if provided. */
  backgroundColor?: string;
  /** Font size for the table. Overrides theme.fontSize if provided. */
  fontSize?: number;
  /** Font family for the table. Overrides theme.fontFamily if provided. */
  fontFamily?: string;
  /** Spacing factor for the table. Overrides theme.spacingfactor if provided. */
  spacingfactor?: number;
  /** Border color for the table. Overrides theme.borderColor if provided. */
  borderColor?: string;
  /** Shadow color for the table. Overrides theme.shadowColor if provided. */
  shadowColor?: string;
  /** Border width for the table. Overrides theme.borderWidth if provided. */
  borderWidth?: string;
  /** Border style for the table. Overrides theme.borderStyle if provided. */
  borderStyle?: string;
  /** Font weight for the table. Overrides theme.fontWeight if provided. */
  fontWeight?: string;
  /** Line height for the table. Overrides theme.lineHeight if provided. */
  lineHeight?: string;
  /** Letter spacing for the table. Overrides theme.letterSpacing if provided. */
  letterSpacing?: string;
  /** Transition duration for the table. Overrides theme.transitionDuration if provided. */
  transitionDuration?: string;
  /** Padding for the table. Overrides theme.padding if provided. */
  padding?: string;
  /** Margin for the table. Overrides theme.margin if provided. */
  margin?: string;
  /** Shadow offset X for the table. Overrides theme.shadowOffsetX if provided. */
  shadowOffsetX?: string;
  /** Shadow offset Y for the table. Overrides theme.shadowOffsetY if provided. */
  shadowOffsetY?: string;
  /** Shadow blur for the table. Overrides theme.shadowBlur if provided. */
  shadowBlur?: string;
  /** Shadow spread for the table. Overrides theme.shadowSpread if provided. */
  shadowSpread?: string;
  /** Shadow inset for the table. Overrides theme.shadowInset if provided. */
  shadowInset?: boolean;
  /** Hover color for the table. Overrides theme.hoverColor if provided. */
  hoverColor?: string;
}

const Table = ({
  columns,
  data,
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
}: TableProps) => {
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
  // Only apply shadow offset if explicitly provided as prop
  const resolvedShadowOffsetX =
    shadowOffsetX !== undefined ? shadowOffsetX : undefined;
  const resolvedShadowOffsetY =
    shadowOffsetY !== undefined ? shadowOffsetY : undefined;
  const resolvedShadowBlur = getThemeValue(shadowBlur, "shadowBlur");
  const resolvedShadowSpread = getThemeValue(shadowSpread, "shadowSpread");
  const resolvedShadowInset = getThemeValue(shadowInset, "shadowInset");
  const resolvedHoverColor = getThemeValue(hoverColor, "hoverColor");
  const wrapperStyle: React.CSSProperties = {
    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
    borderRadius: resolvedCornerRadius,
    overflow: "hidden",
    margin: resolvedMargin,
    boxShadow:
      [
        resolvedShadowInset ? "inset" : null,
        resolvedShadowOffsetX,
        resolvedShadowOffsetY,
        resolvedShadowBlur,
        resolvedShadowSpread,
        resolvedShadowColor,
      ]
        .filter(Boolean)
        .join(" ") || undefined,
    transition: resolvedTransitionDuration,
    width: "100%",
    ...styles,
  };
  return (
    <div
      style={wrapperStyle}
      className={
        className
          ? `tharikida-table-wrapper ${className}`
          : "tharikida-table-wrapper"
      }
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: resolvedBackgroundColor,
          color: resolvedTextColor,
          fontFamily: resolvedFontFamily,
          fontSize: resolvedFontSize,
          fontWeight: resolvedFontWeight,
          lineHeight: resolvedLineHeight,
          letterSpacing: resolvedLetterSpacing,
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          padding: resolvedPadding,
          // margin, overflow, borderRadius, boxShadow, transition handled by wrapper
        }}
      >
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={col + idx}
                style={{
                  border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
                  padding: resolvedPadding || resolvedSpacingfactor,
                  background: resolvedPrimaryColor,
                  color: resolvedTextColor,
                  fontWeight: 600,
                  fontFamily: resolvedFontFamily,
                  fontSize: resolvedFontSize,
                  lineHeight: resolvedLineHeight,
                  letterSpacing: resolvedLetterSpacing,
                  transition: resolvedTransitionDuration,
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  style={{
                    border: `${resolvedBorderWidth} ${resolvedBorderStyle} ${resolvedBorderColor}`,
                    padding: resolvedPadding || resolvedSpacingfactor,
                    textAlign: "center",
                    color: resolvedTextColor,
                    fontFamily: resolvedFontFamily,
                    fontSize: resolvedFontSize,
                    lineHeight: resolvedLineHeight,
                    letterSpacing: resolvedLetterSpacing,
                    transition: resolvedTransitionDuration,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
