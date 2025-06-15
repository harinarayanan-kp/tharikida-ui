import React from "react";
export interface CardProps {
    /** Title of the card */
    title?: string;
    /** Content to display inside the card */
    children?: React.ReactNode;
    /** Custom styles for the card */
    styles?: React.CSSProperties;
    /** Additional className for the card */
    className?: string;
}
declare const Card: ({ title, children, styles, className }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
