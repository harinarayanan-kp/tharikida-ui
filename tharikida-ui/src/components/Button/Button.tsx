import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "primary",
}) => {
  const theme = useTheme();

  const buttonClass = type === "primary" ? "tharikida-btn-primary" : "tharikida-btn-secondary";

  return (
    <button className={`tharikida-btn ${buttonClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
