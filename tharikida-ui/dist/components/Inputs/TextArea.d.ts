import React from "react";
export interface TextAreaProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    styles?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    label?: string;
}
declare const TextArea: ({ value, onChange, placeholder, rows, styles, className, disabled, label, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default TextArea;
