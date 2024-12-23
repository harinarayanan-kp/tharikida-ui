import React from "react";
interface DropdownProps {
    options: string[];
    defaultOption?: string;
    onChange?: (value: string) => void;
    width?: string;
    styles?: React.CSSProperties;
}
declare const Dropdown: ({ options, defaultOption, onChange, width, styles, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
