import React from "react";
export interface ProgressBarProps {
    /** Progress value (0-100) */
    value: number;
    /** Height of the bar in px */
    height?: number;
    /** Custom styles */
    styles?: React.CSSProperties;
    /** Additional className */
    className?: string;
}
declare const ProgressBar: ({ value, height, styles, className, }: ProgressBarProps) => import("react/jsx-runtime").JSX.Element;
export default ProgressBar;
