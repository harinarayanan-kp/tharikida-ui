import React from "react";
export interface ToggleSwitchProps {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
}
declare const ToggleSwitch: ({ checked, onChange, styles, className, disabled, }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
