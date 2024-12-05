import React from "react";
interface DropdownProps {
    options: string[];
    defaultOption?: string;
    onChange?: (value: string) => void;
    width?: string;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
