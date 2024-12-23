import React from "react";
export interface TextInputProps {
    type?: "text" | "password" | "email";
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties;
    className?: string;
}
declare const TextInput: ({ type, placeholder, value, onChange, styles, className, }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
export default TextInput;
