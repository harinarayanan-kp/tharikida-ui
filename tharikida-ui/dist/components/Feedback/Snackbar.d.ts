import React from "react";
export interface SnackbarProps {
    open: boolean;
    message: string;
    duration?: number;
    onClose: () => void;
    action?: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
    position?: "top" | "bottom";
}
declare const Snackbar: ({ open, message, duration, onClose, action, styles, className, position, }: SnackbarProps) => import("react/jsx-runtime").JSX.Element | null;
export default Snackbar;
