"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Pagination` is a navigation component for paginated content, supporting theming, custom styles, and corner radius.
 *
 * @param {object} props - The properties to customize the `Pagination` component.
 * @param {number} props.page - The current page number (1-based).
 * @param {number} props.pageCount - The total number of pages.
 * @param {(page: number) => void} props.onPageChange - Callback when the page changes.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the pagination container.
 * @param {string} [props.className] - Additional className for the pagination container.
 * @param {number} [props.cornerRadius] - Custom border radius for pagination buttons. Overrides theme.cornerRadius if provided.
 * @param {string} [props.primaryColor] - Primary color for pagination buttons.
 * @param {string} [props.textColor] - Text color for pagination.
 * @param {string} [props.backgroundColor] - Background color for pagination container.
 * @param {string} [props.borderColor] - Border color for pagination buttons.
 * @param {string} [props.borderWidth] - Border width for pagination buttons.
 * @param {string} [props.borderStyle] - Border style for pagination buttons.
 * @param {string} [props.fontFamily] - Font family for pagination.
 * @param {number} [props.fontSize] - Font size for pagination.
 * @param {string} [props.fontWeight] - Font weight for pagination.
 * @param {string} [props.transitionDuration] - Transition duration for pagination.
 * @param {number} [props.spacingfactor] - Spacing factor for pagination.
 * @param {string} [props.hoverColor] - Hover color for pagination buttons.
 *
 * @returns {JSX.Element} A styled pagination navigation component.
 */
export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  styles?: React.CSSProperties;
  className?: string;
  cornerRadius?: number;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  transitionDuration?: string;
  spacingfactor?: number;
  hoverColor?: string;
}

const Pagination = ({
  page,
  pageCount,
  onPageChange,
  styles = {},
  className = "",
  cornerRadius,
  primaryColor,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderStyle,
  fontFamily,
  fontSize,
  fontWeight,
  transitionDuration,
  spacingfactor,
  hoverColor,
}: PaginationProps) => {
  const theme = useTheme();
  const t = {
    primaryColor: primaryColor || theme.primaryColor,
    textColor: textColor || theme.textColor,
    backgroundColor: backgroundColor || theme.backgroundColor,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    cornerRadius:
      typeof cornerRadius === "number" ? cornerRadius : theme.cornerRadius,
    fontFamily: fontFamily || theme.fontFamily,
    fontSize: fontSize || theme.fontSize,
    fontWeight: fontWeight || theme.fontWeight,
    transitionDuration: transitionDuration || theme.transitionDuration,
    spacingfactor: spacingfactor || theme.spacingfactor,
    hoverColor: hoverColor || theme.hoverColor,
  };

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
        gap: t.spacingfactor,
        fontFamily: t.fontFamily,
        fontSize: t.fontSize,
        background: t.backgroundColor,
        ...styles,
      }}
      className={className}
      aria-label="pagination"
    >
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        style={{
          background: t.primaryColor,
          color: t.textColor,
          border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
          borderRadius: t.cornerRadius,
          padding: `4px 12px`,
          fontWeight: t.fontWeight,
          fontFamily: t.fontFamily,
          fontSize: t.fontSize,
          cursor: page === 1 ? "not-allowed" : "pointer",
          opacity: page === 1 ? 0.5 : 1,
          boxShadow: `1px 1px 0px ${t.borderColor}`,
          transition: t.transitionDuration,
        }}
      >
        Prev
      </button>
      {pages.map((p, idx) =>
        p === "..." ? (
          <span
            key={"ellipsis-" + idx}
            style={{
              padding: `0 ${t.spacingfactor}px`,
              color: t.textColor,
              fontWeight: t.fontWeight,
              fontFamily: t.fontFamily,
              fontSize: t.fontSize,
            }}
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(Number(p))}
            style={{
              background: p === page ? t.textColor : t.primaryColor,
              color: p === page ? t.primaryColor : t.textColor,
              border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
              borderRadius: t.cornerRadius,
              padding: `4px 12px`,
              fontWeight: t.fontWeight,
              fontFamily: t.fontFamily,
              fontSize: t.fontSize,
              cursor: "pointer",
              boxShadow:
                p === page
                  ? `2px 2px 0px ${t.borderColor}`
                  : `1px 1px 0px ${t.borderColor}`,
              margin: `0 2px`,
              transition: t.transitionDuration,
            }}
            onMouseOver={(e) => {
              if (p !== page)
                (e.currentTarget as HTMLButtonElement).style.background =
                  t.hoverColor;
            }}
            onMouseOut={(e) => {
              if (p !== page)
                (e.currentTarget as HTMLButtonElement).style.background =
                  t.primaryColor;
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
          background: t.primaryColor,
          color: t.textColor,
          border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
          borderRadius: t.cornerRadius,
          padding: `4px 12px`,
          fontWeight: t.fontWeight,
          fontFamily: t.fontFamily,
          fontSize: t.fontSize,
          cursor: page === pageCount ? "not-allowed" : "pointer",
          opacity: page === pageCount ? 0.5 : 1,
          boxShadow: `1px 1px 0px ${t.borderColor}`,
          transition: t.transitionDuration,
        }}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
