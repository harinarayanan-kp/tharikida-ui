import React from "react";
export interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
    separator?: React.ReactNode;
    onNavigate?: (href: string) => void;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Breadcrumb: ({ items, separator, onNavigate, styles, className, }: BreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumb;
