import React from "react";
export interface ButtonProps {
    type?: "primary" | "secondary";
    children: React.ReactNode;
    styles?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
}
declare const Button: ({ type, children, onClick, styles, className, }: ButtonProps) => React.JSX.Element;
export default Button;
