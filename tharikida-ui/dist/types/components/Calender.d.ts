import React from "react";
interface calendarProps {
    handleDateClick?: (day: number | null) => void;
    size?: string;
}
declare const CustomCalendar: ({ size }: calendarProps) => React.JSX.Element;
export default CustomCalendar;
