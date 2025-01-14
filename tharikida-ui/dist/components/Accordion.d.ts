import React from "react";
export interface AccordionProps {
    title: string;
    content: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Accordion: ({ title, content, styles, className }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
