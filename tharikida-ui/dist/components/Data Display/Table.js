"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Table = ({ columns, data, styles, className = "" }) => {
    const theme = useTheme();
    return (_jsxs("table", { className: `tharikida-table ${className}`, style: {
            width: "100%",
            borderCollapse: "collapse",
            background: theme.backgroundColor,
            color: theme.textColor,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize,
            border: "2px solid black",
            ...styles,
        }, children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((col, idx) => (_jsx("th", { style: {
                            border: "2px solid black",
                            padding: theme.spacingfactor,
                            background: theme.primaryColor,
                            color: theme.textColor,
                            fontWeight: 600,
                        }, children: col }, col + idx))) }) }), _jsx("tbody", { children: data.map((row, rIdx) => (_jsx("tr", { children: row.map((cell, cIdx) => (_jsx("td", { style: {
                            border: "1px solid black",
                            padding: theme.spacingfactor,
                            textAlign: "center",
                        }, children: cell }, cIdx))) }, rIdx))) })] }));
};
export default Table;
