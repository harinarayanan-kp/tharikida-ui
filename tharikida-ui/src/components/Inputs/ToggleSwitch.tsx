"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `ToggleSwitch` is a custom switch component supporting controlled/uncontrolled usage, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `ToggleSwitch` component.
 * @param {boolean} [props.checked] - Controls the checked state (controlled component). If not provided, the switch manages its own state.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Called when the switch is toggled. Receives the change event.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the outer label.
 * @param {string} [props.className] - Additional className for the outer label.
 * @param {boolean} [props.disabled] - Disables the switch if true.
 *
 * @returns {JSX.Element} A styled toggle switch component.
 */
export interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styles?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const ToggleSwitch = ({
  checked,
  onChange,
  styles,
  className = "",
  disabled = false,
}: ToggleSwitchProps) => {
  const theme = useTheme();
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = typeof checked === "boolean";
  const currentChecked = isControlled ? checked : internalChecked;
  const switchWidth = 40;
  const switchHeight = 22;
  const knobSize = 15;
  const spacing = (switchHeight - knobSize) / 2;
  // Handles toggle action
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };
  // Compute shadow offsets based on checked state
  const computedShadowOffsetX = currentChecked ? "0px" : theme.shadowOffsetX;
  const computedShadowOffsetY = currentChecked ? "0px" : theme.shadowOffsetY;
  return (
    <label
      className={`tharikida-toggle-switch ${className}`}
      style={{
        display: "inline-block",
        position: "relative",
        width: switchWidth,
        height: switchHeight,
        ...styles,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        fontWeight: theme.fontWeight,
        lineHeight: theme.lineHeight,
        letterSpacing: theme.letterSpacing,
        padding: theme.padding,
        margin: theme.margin,
        transition: theme.transitionDuration,
      }}
    >
      <input
        type="checkbox"
        checked={currentChecked}
        onChange={handleChange}
        disabled={disabled}
        style={{
          opacity: 0,
          width: 0,
          height: 0,
          position: "absolute",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: currentChecked
            ? theme.primaryColor
            : theme.backgroundColor,
          borderRadius: switchHeight / 2,
          transitionDuration: theme.transitionDuration,
          border: `${theme.borderWidth} ${theme.borderStyle} ${theme.borderColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: currentChecked ? "flex-end" : "flex-start",
          padding: spacing,
          boxShadow: `${
            theme.shadowInset ? "inset " : ""
          }${computedShadowOffsetX} ${computedShadowOffsetY} ${
            theme.shadowBlur
          } ${theme.shadowSpread} ${theme.shadowColor}`,
        }}
      >
        <span
          style={{
            width: knobSize,
            height: knobSize,
            background: theme.textColor,
            borderRadius: "50%",
            transition: `all ${theme.transitionDuration}`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
