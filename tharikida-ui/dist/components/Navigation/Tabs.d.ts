import React from "react";
export interface TabItem {
    label: string;
    key: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabItem[];
    activeKey: string;
    onChange: (key: string) => void;
    styles?: React.CSSProperties;
    className?: string;
    tabBarExtraContent?: React.ReactNode;
}
declare const Tabs: ({ items, activeKey, onChange, styles, className, tabBarExtraContent, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
