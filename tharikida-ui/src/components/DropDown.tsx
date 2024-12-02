import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  defaultOption?: string;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultOption || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange && onChange(value);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          fontFamily: "montserrat",
          width: "100%",
          boxSizing: "border-box" as "border-box",
          padding: "6px 10px",
          border: "1px solid black",
          borderRadius: "500px",
          cursor: "pointer",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
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
            stroke-linecap="round"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          style={{
            boxSizing: "border-box" as "border-box",
            zIndex: 1000,
            margin: 0,
            padding: "10px",
            listStyle: "none",
            background: "white",
            border: "1px solid black",
            borderRadius: "15px",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
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
                borderRadius: "15px",
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
