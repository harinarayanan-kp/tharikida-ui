"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Pagination = ({ page, pageCount, onPageChange, styles = {}, className = "", }) => {
    const theme = useTheme();
    // Helper to generate page numbers with ellipsis
    const getPages = () => {
        const pages = [];
        if (pageCount <= 7) {
            for (let i = 1; i <= pageCount; i++)
                pages.push(i);
        }
        else {
            if (page <= 4) {
                pages.push(1, 2, 3, 4, 5, "...", pageCount);
            }
            else if (page >= pageCount - 3) {
                pages.push(1, "...", pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount);
            }
            else {
                pages.push(1, "...", page - 1, page, page + 1, "...", pageCount);
            }
        }
        return pages;
    };
    const pages = getPages();
    return (_jsxs("nav", { style: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacingfactor,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize,
            ...styles,
        }, className: className, "aria-label": "pagination", children: [_jsx("button", { onClick: () => onPageChange(Math.max(1, page - 1)), disabled: page === 1, style: {
                    background: theme.primaryColor,
                    color: theme.textColor,
                    border: "1px solid black",
                    borderRadius: theme.spacingfactor,
                    padding: `4px 12px`,
                    fontWeight: 600,
                    cursor: page === 1 ? "not-allowed" : "pointer",
                    opacity: page === 1 ? 0.5 : 1,
                    boxShadow: "1px 1px 0px #000",
                }, children: "Prev" }), pages.map((p, idx) => p === "..." ? (_jsx("span", { style: {
                    padding: "0 6px",
                    color: theme.textColor,
                    fontWeight: 700,
                }, children: "..." }, "ellipsis-" + idx)) : (_jsx("button", { onClick: () => onPageChange(Number(p)), style: {
                    background: p === page ? theme.textColor : theme.primaryColor,
                    color: p === page ? theme.primaryColor : theme.textColor,
                    border: "1px solid black",
                    borderRadius: theme.spacingfactor,
                    padding: `4px 12px`,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: p === page ? "2px 2px 0px #000" : "1px 1px 0px #000",
                    margin: "0 2px",
                    transition: "all 0.2s",
                }, children: p }, p))), _jsx("button", { onClick: () => onPageChange(Math.min(pageCount, page + 1)), disabled: page === pageCount, style: {
                    background: theme.primaryColor,
                    color: theme.textColor,
                    border: "1px solid black",
                    borderRadius: theme.spacingfactor,
                    padding: `4px 12px`,
                    fontWeight: 600,
                    cursor: page === pageCount ? "not-allowed" : "pointer",
                    opacity: page === pageCount ? 0.5 : 1,
                    boxShadow: "1px 1px 0px #000",
                }, children: "Next" })] }));
};
export default Pagination;
