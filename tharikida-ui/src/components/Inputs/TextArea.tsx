"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `TextArea` is a multi-line text input component supporting controlled/uncontrolled usage, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `TextArea` component.
 * @param {string} [props.value] - The value of the textarea (controlled component).
 * @param {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange] - Callback when the value changes.
 * @param {string} [props.placeholder] - Placeholder text for the textarea.
 * @param {number} [props.rows=4] - Number of visible text lines.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the textarea container.
 * @param {string} [props.className] - Additional className for the textarea container.
 * @param {boolean} [props.disabled] - Disables the textarea if true.
 * @param {string} [props.label] - Optional label to display above the textarea.
 * @param {number} [props.cornerRadius] - Custom border radius for the textarea. Overrides theme.cornerRadius if provided.
 * @param {string} [props.backgroundColor] - Textarea background color. Overrides theme.backgroundColor if provided.
 * @param {string} [props.borderColor] - Textarea border color. Overrides theme.borderColor if provided.
 * @param {string} [props.textColor] - Textarea text color. Overrides theme.textColor if provided.
 * @param {string|number} [props.padding] - Textarea padding. Overrides theme.padding if provided.
 * @param {string|number} [props.margin] - Textarea margin. Overrides theme.margin if provided.
 * @param {string} [props.fontFamily] - Textarea font family. Overrides theme.fontFamily if provided.
 * @param {string|number} [props.fontSize] - Textarea font size. Overrides theme.fontSize if provided.
 * @param {string} [props.transitionDuration] - Textarea transition duration. Overrides theme.transitionDuration if provided.
 *
 * @returns {JSX.Element} A styled textarea component.
 */
export interface TextAreaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  styles?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  label?: string;
  /** Custom border radius for the textarea. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  padding?: string | number;
  margin?: string | number;
  fontFamily?: string;
  fontSize?: string | number;
  transitionDuration?: string;
}

const TextArea = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  styles,
  className = "",
  disabled = false,
  label,
  cornerRadius,
  backgroundColor,
  borderColor,
  textColor,
  padding,
  margin,
  fontFamily,
  fontSize,
  transitionDuration,
}: TextAreaProps) => {
  const theme = useTheme();
  const [internalValue, setInternalValue] = useState("");
  const isControlled = typeof value === "string";
  const currentValue = isControlled ? value : internalValue;

  const borderRadius =
    typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius ?? 12;
  const bg = backgroundColor || theme.backgroundColor;
  const borderCol = borderColor || theme.borderColor;
  const txtColor = textColor || theme.textColor;
  const pad = padding !== undefined ? padding : theme.padding;
  const marg = margin !== undefined ? margin : theme.margin;
  const fontFam = fontFamily || theme.fontFamily;
  const fSize = fontSize !== undefined ? fontSize : theme.fontSize;
  const transition = transitionDuration || theme.transitionDuration;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  return (
    <label
      className={`tharikida-textarea-label ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        margin: marg,
        fontFamily: fontFam,
        ...styles,
      }}
    >
      {label && (
        <span style={{ fontFamily: fontFam, fontSize: fSize }}>{label}</span>
      )}
      <textarea
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        style={{
          fontFamily: fontFam,
          fontSize: fSize,
          border: `2px solid ${borderCol}`,
          borderRadius: borderRadius,
          padding: pad,
          resize: "vertical",
          outline: "none",
          background: disabled ? "#f5f5f5" : bg,
          color: txtColor,
          transition: `border ${transition}`,
        }}
      />
    </label>
  );
};

export default TextArea;
