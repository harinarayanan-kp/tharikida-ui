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
}

const TextInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  styles,
  className = "",
}: TextInputProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles: React.CSSProperties = {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    padding: `${theme.spacingfactor}px ${theme.spacingfactor * 2}px`,
    borderRadius: `${theme.spacingfactor}px`,
    border: "2px solid black",
    boxShadow: isFocused ? "1px 1px 0px black" : "2px 2px 0px black",
    boxSizing: "border-box" as "border-box",
    margin: `${theme.spacingfactor}px`,
    transition: "0.3s ease",
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
