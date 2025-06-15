import React from "react";
export interface LoaderProps {
    /** Size of the loader in px */
    size?: number;
    /** Loader color */
    color?: string;
    /** Custom styles */
    styles?: React.CSSProperties;
    /** Additional className */
    className?: string;
}
declare const Loader: ({ size, color, styles, className }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export default Loader;
