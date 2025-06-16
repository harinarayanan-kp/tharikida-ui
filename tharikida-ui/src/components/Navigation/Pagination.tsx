"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  styles?: React.CSSProperties;
  className?: string;
}

const Pagination = ({
  page,
  pageCount,
  onPageChange,
  styles = {},
  className = "",
}: PaginationProps) => {
  const theme = useTheme();

  // Helper to generate page numbers with ellipsis
  const getPages = () => {
    const pages: (number | string)[] = [];
    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) pages.push(i);
    } else {
      if (page <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", pageCount);
      } else if (page >= pageCount - 3) {
        pages.push(
          1,
          "...",
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", pageCount);
      }
    }
    return pages;
  };

  const pages = getPages();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: theme.spacingfactor,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        ...styles,
      }}
      className={className}
      aria-label="pagination"
    >
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        style={{
          background: theme.primaryColor,
          color: theme.textColor,
          border: "1px solid black",
          borderRadius: theme.spacingfactor,
          padding: `4px 12px`,
          fontWeight: 600,
          cursor: page === 1 ? "not-allowed" : "pointer",
          opacity: page === 1 ? 0.5 : 1,
          boxShadow: "1px 1px 0px #000",
        }}
      >
        Prev
      </button>
      {pages.map((p, idx) =>
        p === "..." ? (
          <span
            key={"ellipsis-" + idx}
            style={{
              padding: "0 6px",
              color: theme.textColor,
              fontWeight: 700,
            }}
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(Number(p))}
            style={{
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
            }}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        disabled={page === pageCount}
        style={{
          background: theme.primaryColor,
          color: theme.textColor,
          border: "1px solid black",
          borderRadius: theme.spacingfactor,
          padding: `4px 12px`,
          fontWeight: 600,
          cursor: page === pageCount ? "not-allowed" : "pointer",
          opacity: page === pageCount ? 0.5 : 1,
          boxShadow: "1px 1px 0px #000",
        }}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
