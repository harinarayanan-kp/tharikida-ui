import React from "react";
export interface ListProps {
    /** List items as ListTile components or any ReactNode */
    children: React.ReactNode;
    /** Custom styles for the list container */
    styles?: React.CSSProperties;
    /** Additional className for the list */
    className?: string;
}
declare const List: ({ children, styles, className }: ListProps) => import("react/jsx-runtime").JSX.Element;
export default List;
