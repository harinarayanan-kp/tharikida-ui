"use client";

import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

export interface AccordionProps {
  title: string;
  content: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

const Accordion = ({ title, content, styles, className = "" }: AccordionProps) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const accordionStyles: React.CSSProperties = {
    overflow: "hidden",
    transition: "0.3s ease",
    border: `2px solid black`,
    borderRadius: `${theme.spacingfactor * 4}px`,
    boxShadow: isActive ? "2px 2px 0px black" : "4px 4px 0px black",
    
    ...styles,
  };

  const headerStyles: React.CSSProperties = {
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    transition: "background-color 0.3s ease",
  };

  const contentStyles: React.CSSProperties = {
    padding: "10px",
    borderTop: `1px solid black`,
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    transition: "0.3s ease",
  };

  return (
    <div className={`tharikida-accordion ${className}`} style={accordionStyles}>
      <div
        style={{
          ...headerStyles,
        }}
        onClick={handleClick}
      >
        {title}
        <svg
          style={{
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
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
      {isActive && (
        <div style={contentStyles}>{content}</div>
      )}
    </div>
  );
};

export default Accordion;
