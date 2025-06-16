import React from "react";
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    styles?: React.CSSProperties;
    className?: string;
    transitionDuration?: number;
}
declare const Tooltip: ({ content, children, position, styles, className, transitionDuration, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
