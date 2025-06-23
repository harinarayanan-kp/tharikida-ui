"use client";

import React, { useState } from "react";

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
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState("");
  const isControlled = typeof value === "string";
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  return (
    <label
      className={`tharikida-textarea-label ${className}`}
      style={{ display: "flex", flexDirection: "column", gap: 6, ...styles }}
    >
      {label && (
        <span style={{ fontFamily: "Montserrat", fontSize: 16 }}>{label}</span>
      )}
      <textarea
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        style={{
          fontFamily: "Montserrat",
          fontSize: 16,
          border: "2px solid black",
          borderRadius: 12,
          padding: 10,
          resize: "vertical",
          outline: "none",
          background: disabled ? "#f5f5f5" : "#fff",
          transition: "border 0.2s",
        }}
      />
    </label>
  );
};

export default TextArea;
