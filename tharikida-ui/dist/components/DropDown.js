"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const Dropdown = ({ options, defaultOption, onChange, width, }) => {
    const [selected, setSelected] = useState(defaultOption || options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
        onChange && onChange(value);
    };
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const selectedOptionIndex = options.indexOf(selected);
            const selectedOptionElement = dropdownRef.current?.children[selectedOptionIndex];
            if (selectedOptionElement) {
                selectedOptionElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center", // Ensures the selected item is vertically centered
                });
            }
        }
    }, [isOpen, selected, options]);
    return (_jsxs("div", { style: { position: "relative", width: width || "100%" }, children: [_jsxs("div", { style: {
                    fontFamily: "montserrat",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "6px 10px",
                    border: "1px solid black",
                    borderRadius: "500px",
                    cursor: "pointer",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                    height: "40px",
                }, onClick: () => setIsOpen(!isOpen), children: [selected, _jsx("svg", { style: {
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }, width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M1.37565 0.499999L7.43782 6.5L13.5 0.5", stroke: "black", "stroke-linecap": "round" }) })] }), isOpen && (_jsx("ul", { ref: dropdownRef, style: {
                    boxSizing: "border-box",
                    zIndex: 1000,
                    margin: 0,
                    padding: "10px",
                    listStyle: "none",
                    background: "white",
                    border: "1px solid black",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    maxHeight: "300px",
                    overflowY: "auto",
                }, children: options.map((option, index) => (_jsx("li", { style: {
                        fontFamily: "montserrat",
                        padding: "8px 10px",
                        cursor: "pointer",
                        background: selected === option ? "#e6e6e6" : "white",
                        borderRadius: "15px",
                        transition: "background 0.2s",
                    }, onClick: () => handleSelect(option), onMouseEnter: (e) => (e.currentTarget.style.background = "#f5f5f5"), onMouseLeave: (e) => (e.currentTarget.style.background =
                        selected === option ? "#e6e6e6" : "white"), children: option }, index))) }))] }));
};
export default Dropdown;
