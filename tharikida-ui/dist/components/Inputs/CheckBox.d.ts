import React from "react";
export interface CheckBoxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    styles?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
}
declare const CheckBox: ({ checked, onChange, label, styles, className, disabled, }: CheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export default CheckBox;
