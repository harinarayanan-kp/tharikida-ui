"use client";

import React, { useState } from "react";

// Props for the RadioButton component
export interface RadioButtonProps {
  /**
   * Controls the checked state (controlled component). If not provided, the radio manages its own state.
   */
  checked?: boolean;
  /**
   * Called when the radio is selected. Receives the change event.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Custom styles for the outer label.
   */
  styles?: React.CSSProperties;
  /**
   * Additional className for the outer label.
   */
  className?: string;
  /**
   * Disables the radio if true.
   */
  disabled?: boolean;
  /**
   * Name for the radio group (required for grouping radios)
   */
  name?: string;
  /**
   * Value for the radio input
   */
  value?: string;
}

const RadioButton = ({
  checked,
  onChange,
  styles,
  className = "",
  disabled = false,
  name,
  value,
}: RadioButtonProps) => {
  // Internal state for uncontrolled usage
  const [internalChecked, setInternalChecked] = useState(false);
  // Determine if the component is controlled
  const isControlled = typeof checked === "boolean";
  // Use controlled or internal state
  const currentChecked = isControlled ? checked : internalChecked;

  // Handles selection and unchecking on click
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      // If already checked, uncheck on click
      setInternalChecked((prev) => !prev);
    }
    // For controlled, send toggled value
    if (onChange) {
      // Create a synthetic event with toggled checked value
      const syntheticEvent = {
        ...event,
        target: {
          ...event.target,
          checked: !currentChecked,
        },
      };
      onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Radio dimensions
  const radioSize = 22;
  const dotSize = 12;
  const dotOffset = (radioSize - dotSize) / 2;

  return (
    <label
      className={`tharikida-custom-radio ${className}`}
      style={{
        display: "inline-block",
        position: "relative",
        width: radioSize,
        height: radioSize,
        ...styles,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {/* Hidden radio input for accessibility and state */}
      <input
        type="checkbox"
        checked={currentChecked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        style={{
          opacity: 0,
          width: 0,
          height: 0,
          position: "absolute",
        }}
      />
      {/* Outer circle */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: radioSize,
          height: radioSize,
          background: "#fff",
          border: `2px solid #000`,
          borderRadius: "50%",
          transition: "border 0.3s",
          boxSizing: "border-box",
        }}
      />
      {/* Inner dot when checked */}
      {currentChecked && (
        <span
          style={{
            position: "absolute",
            top: dotOffset,
            left: dotOffset,
            width: dotSize,
            height: dotSize,
            background: "#000",
            borderRadius: "50%",
            transition: "background 0.3s",
          }}
        />
      )}
    </label>
  );
};

export default RadioButton;
