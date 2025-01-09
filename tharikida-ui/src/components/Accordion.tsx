"use client";

import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  styles?: React.CSSProperties;
  className?: string;
}

const Accordion = ({ items, styles, className = "" }: AccordionProps) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionStyles: React.CSSProperties = {
    border: `1px solid ${theme.secondaryColor}`,
    borderRadius: `${theme.spacingfactor}px`,
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
    borderTop: `1px solid ${theme.secondaryColor}`,
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
  };

  return (
    <div className={`tharikida-accordion ${className}`} style={accordionStyles}>
      {items.map((item: AccordionItem, index: number) => (
        <div
          key={index}
          style={{ borderBottom: `1px solid ${theme.secondaryColor}` }}
        >
          <div
            style={{
              ...headerStyles,
              backgroundColor:
                index === activeIndex
                  ? theme.primaryColor
                  : theme.backgroundColor,
            }}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span style={{ marginLeft: "10px" }}>
              {index === activeIndex ? "-" : "+"}
            </span>
          </div>
          {index === activeIndex && (
            <div style={contentStyles}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
