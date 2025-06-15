import React from "react";
export interface RadioButtonProps {
    /**
     * Controls the checked state (controlled component). If not provided, the radio manages its own state.
     */
    checked?: boolean;
    /**
     * Called when the radio is selected. Receives the change event.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Custom styles for the outer label.
     */
    styles?: React.CSSProperties;
    /**
     * Additional className for the outer label.
     */
    className?: string;
    /**
     * Disables the radio if true.
     */
    disabled?: boolean;
    /**
     * Name for the radio group (required for grouping radios)
     */
    name?: string;
    /**
     * Value for the radio input
     */
    value?: string;
}
declare const RadioButton: ({ checked, onChange, styles, className, disabled, name, value, }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export default RadioButton;
