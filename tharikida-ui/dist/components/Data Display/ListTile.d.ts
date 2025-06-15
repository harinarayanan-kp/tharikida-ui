import React from "react";
export interface ListTileProps {
    /** Leading icon or element */
    leading?: React.ReactNode;
    /** Main text */
    title: string;
    /** Optional subtitle */
    subtitle?: string;
    /** Trailing icon or element */
    trailing?: React.ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Custom styles */
    styles?: React.CSSProperties;
    /** Additional className */
    className?: string;
}
declare const ListTile: ({ leading, title, subtitle, trailing, onClick, styles, className, }: ListTileProps) => import("react/jsx-runtime").JSX.Element;
export default ListTile;
