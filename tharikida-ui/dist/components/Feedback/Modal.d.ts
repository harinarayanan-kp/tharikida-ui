import React from "react";
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
    showCloseButton?: boolean;
}
declare const Modal: ({ open, onClose, title, children, styles, className, showCloseButton, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
