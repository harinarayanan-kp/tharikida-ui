import React from "react";
export interface NavbarProps {
    logo?: React.ReactNode;
    links?: {
        label: string;
        href: string;
        active?: boolean;
    }[];
    rightContent?: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Navbar: ({ logo, links, rightContent, styles, className, }: NavbarProps) => import("react/jsx-runtime").JSX.Element;
export default Navbar;
