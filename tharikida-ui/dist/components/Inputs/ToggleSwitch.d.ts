import React from "react";
export interface ToggleSwitchProps {
    /**
     * Controls the checked state (controlled component). If not provided, the switch manages its own state.
     */
    checked?: boolean;
    /**
     * Called when the switch is toggled. Receives the change event.
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
     * Disables the switch if true.
     */
    disabled?: boolean;
}
declare const ToggleSwitch: ({ checked, onChange, styles, className, disabled, }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
