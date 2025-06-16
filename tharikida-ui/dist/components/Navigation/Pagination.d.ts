import React from "react";
export interface PaginationProps {
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    styles?: React.CSSProperties;
    className?: string;
}
declare const Pagination: ({ page, pageCount, onPageChange, styles, className, }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export default Pagination;
