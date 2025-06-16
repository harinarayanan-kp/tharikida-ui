interface calendarProps {
    handleDateClick?: (day: number | null) => void;
    size?: string;
}
declare const Calendar: ({ size }: calendarProps) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
