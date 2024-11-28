import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import "./Button.css";

interface ButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
  styles?: React.CSSProperties; // Typing the styles as React.CSSProperties
  onClick?: () => void; // Function passed from the parent to handle click events
  className?: string; // Prop to allow custom className with top priority
}

const Button = ({ type, children, onClick, styles, className }: ButtonProps) => {
  const theme = useTheme();

  // // Determine button class based on type
  // const buttonClass =
  //   type === "primary" ? "tharikida-btn-primary" : "tharikida-btn-secondary";

  // Default button styles without active state logic
  const buttonStyles: React.CSSProperties = {
    backgroundColor:
      type === "primary" ? theme.primaryColor : theme.secondaryColor, // Default color based on type
    color: theme.textColor,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    paddingLeft: `${theme.spacingfactor * 1}px`, // Correct template literal usage
    paddingRight: `${theme.spacingfactor * 2}px`, // Correct template literal usage
    paddingTop: `${theme.spacingfactor * 1}px`, // Correct template literal usage
    paddingBottom: `${theme.spacingfactor * 1}px`, // Correct template literal usage
    borderRadius: `${theme.spacingfactor * 1}px`, // Correct template literal usage
    margin: `${theme.spacingfactor * 1}px`,
    transition: "background-color 0.3s ease",
  };

  const mergedStyles = { ...buttonStyles, ...styles };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`tharikida-btn ${className}`} // Add className prop with top priority
      style={mergedStyles}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
