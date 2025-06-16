import React from "react";
export interface AlertProps {
    message?: string;
    title?: string;
    buttonText?: string;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Alert: ({ message, title, buttonText, styles, className, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export default Alert;
