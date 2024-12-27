import React from "react";
export interface IconButtonProps {
    icon: React.ReactNode;
    type?: "primary" | "secondary";
    href?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
}
declare const IconButton: ({ icon, type, href, children, onClick, styles, className, }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export default IconButton;
