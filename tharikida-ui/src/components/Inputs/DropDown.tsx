"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Dropdown` is a customizable dropdown/select component that supports theming, custom styles, and controlled/uncontrolled usage.
 *
 * @param {object} props - The properties to customize the `Dropdown` component.
 * @param {string[]} props.options - The list of options to display in the dropdown.
 * @param {string} [props.defaultOption] - The default selected option.
 * @param {(value: string) => void} [props.onChange] - Callback when the selected option changes.
 * @param {string} [props.width] - Custom width for the dropdown.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the dropdown container.
 * @param {number} [props.cornerRadius] - Custom border radius for the dropdown and options. Overrides theme.cornerRadius if provided.
 *
 * @returns {JSX.Element} A styled dropdown component.
 */
interface DropdownProps {
  /**
   * The list of options to display in the dropdown.
   */
  options: string[];
  /**
   * The default selected option.
   */
  defaultOption?: string;
  /**
   * Callback when the selected option changes.
   */
  onChange?: (value: string) => void;
  /**
   * Custom width for the dropdown.
   */
  width?: string;
  /**
   * Custom styles for the dropdown container.
   */
  styles?: React.CSSProperties;
  /**
   * Custom border radius for the dropdown and options. Overrides theme.cornerRadius if provided.
   */
  cornerRadius?: number;
}

const Dropdown = ({
  options,
  defaultOption,
  onChange,
  width,
  styles,
  cornerRadius,
}: DropdownProps) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string>(defaultOption || options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const borderRadius =
    typeof cornerRadius === "number"
      ? cornerRadius
      : theme.cornerRadius ?? theme.spacingfactor;

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange && onChange(value);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const selectedOptionIndex = options.indexOf(selected);
      const selectedOptionElement = dropdownRef.current?.children[
        selectedOptionIndex
      ] as HTMLElement;
      if (selectedOptionElement) {
        selectedOptionElement.scrollIntoView({
          behavior: "smooth",
          block: "center", // Ensures the selected item is vertically centered
        });
      }
    }
  }, [isOpen, selected, options]);

  return (
    <div style={{ position: "relative", width: width || "100%", ...styles }}>
      <div
        style={{
          transition: "0.3s ease",
          boxShadow: isOpen ? "1px 1px 0px black" : "2px 2px 0px black",
          fontFamily: "montserrat",
          width: "100%",
          boxSizing: "border-box" as "border-box",
          padding: "6px 10px",
          border: "2px solid black",
          borderRadius: borderRadius,
          cursor: "pointer",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
          height: "40px",
          ...styles, // Apply the custom styles here
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.37565 0.499999L7.43782 6.5L13.5 0.5"
            stroke="black"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          ref={dropdownRef}
          style={{
            boxSizing: "border-box" as "border-box",
            zIndex: 1000,
            margin: 0,
            padding: "10px",
            listStyle: "none",
            background: "white",
            border: "2px solid black",
            borderRadius: borderRadius,
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              style={{
                fontFamily: "montserrat",
                padding: "8px 10px",
                cursor: "pointer",
                background: selected === option ? "#e6e6e6" : "white",
                borderRadius: borderRadius,
                transition: "background 0.2s",
              }}
              onClick={() => handleSelect(option)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  selected === option ? "#e6e6e6" : "white")
              }
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
