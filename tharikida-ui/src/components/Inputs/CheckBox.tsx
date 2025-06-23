"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `CheckBox` is a customizable checkbox component that supports theming, custom styles, controlled/uncontrolled usage, and accessibility.
 *
 * @param {object} props - The properties to customize the CheckBox component.
 * @param {boolean} [props.checked] - If provided, the checkbox is controlled.
 * @param {(checked: boolean) => void} [props.onChange] - Callback when the checked state changes.
 * @param {string} [props.label] - Optional label to display next to the checkbox.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the checkbox container.
 * @param {string} [props.className] - Additional className for the checkbox container.
 * @param {boolean} [props.disabled=false] - Whether the checkbox is disabled.
 * @param {number} [props.cornerRadius] - Custom border radius for the checkbox. Overrides theme.cornerRadius if provided.
 * @returns {JSX.Element} A styled, accessible checkbox component.
 */
export interface CheckBoxProps {
  /**
   * If provided, the checkbox is controlled.
   */
  checked?: boolean;
  /**
   * Callback when the checked state changes.
   */
  onChange?: (checked: boolean) => void;
  /**
   * Optional label to display next to the checkbox.
   */
  label?: string;
  /**
   * Custom styles for the checkbox container.
   */
  styles?: React.CSSProperties;
  /**
   * Additional className for the checkbox container.
   */
  className?: string;
  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom border radius for the checkbox. Overrides theme.cornerRadius if provided.
   */
  cornerRadius?: number;
}

const CheckBox = ({
  checked,
  onChange,
  label,
  styles,
  className = "",
  disabled = false,
  cornerRadius,
}: CheckBoxProps) => {
  const theme = useTheme();
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = typeof checked === "boolean";
  const currentChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    if (!isControlled) {
      setInternalChecked((prev) => !prev);
    }
    if (!disabled) {
      onChange?.(!currentChecked);
    }
  };

  const boxRadius =
    typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius ?? 6;

  return (
    <label
      className={`tharikida-checkbox ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...styles,
      }}
    >
      <span
        onClick={disabled ? undefined : handleClick}
        style={{
          width: 22,
          height: 22,
          border: "2px solid black",
          borderRadius: boxRadius,
          background: currentChecked
            ? theme.primaryColor ?? "#4caf50"
            : theme.backgroundColor ?? "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s, border 0.2s",
          marginRight: 8,
        }}
      >
        {currentChecked && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7L6 10L11 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label && (
        <span
          style={{
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize,
            color: theme.textColor,
          }}
        >
          {label}
        </span>
      )}
      <input
        type="checkbox"
        checked={currentChecked}
        onChange={() => {}}
        disabled={disabled}
        style={{ display: "none" }}
      />
    </label>
  );
};

export default CheckBox;
