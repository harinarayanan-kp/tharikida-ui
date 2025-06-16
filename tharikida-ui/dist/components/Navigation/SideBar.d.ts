import React from "react";
export interface SideBarProps {
    items: Array<{
        label: string;
        key: string;
        icon?: React.ReactNode;
    }>;
    activeKey: string;
    onSelect: (key: string) => void;
    styles?: React.CSSProperties;
    className?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
declare const SideBar: ({ items, activeKey, onSelect, styles, className, header, footer, }: SideBarProps) => import("react/jsx-runtime").JSX.Element;
export default SideBar;
