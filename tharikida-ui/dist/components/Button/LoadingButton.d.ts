import React from "react";
export interface LoadingButtonProps {
    icon?: React.ReactNode;
    type?: "primary" | "secondary";
    initialText?: string;
    loadingText?: string;
    doneText?: string;
    loadingDuration?: number;
    styles?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}
declare const LoadingButton: ({ icon, type, initialText, loadingText, doneText, loadingDuration, styles, onClick, className, children, }: LoadingButtonProps) => import("react/jsx-runtime").JSX.Element;
export default LoadingButton;
