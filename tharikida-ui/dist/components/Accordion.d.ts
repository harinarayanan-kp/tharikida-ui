import React from "react";
export interface AccordionItem {
    title: string;
    content: React.ReactNode;
}
export interface AccordionProps {
    items: AccordionItem[];
    styles?: React.CSSProperties;
    className?: string;
}
declare const Accordion: ({ items, styles, className }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
