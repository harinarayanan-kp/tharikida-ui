"use client";

import React, { useState } from "react";

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
