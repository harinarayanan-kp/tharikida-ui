"use client";
import React, { useState } from "react";
import Dropdown from "./DropDown";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Calendar` is a date picker component with theming, custom styles, and initial date support.
 *
 * @param {object} props - The properties to customize the `Calendar` component.
 * @param {(day: number | null) => void} [props.handleDateClick] - Callback when a date is selected.
 * @param {string} [props.size] - Width of the calendar component.
 * @param {Date} [props.initialDate] - The initial date to display as selected.
 * @param {number} [props.cornerRadius] - Custom border radius for the calendar. Overrides theme.cornerRadius if provided.
 *
 * @returns {JSX.Element} A styled calendar date picker component.
 */
interface CalendarProps {
  /** Callback when a date is selected */
  handleDateClick?: (day: number | null) => void;
  /** Width of the calendar component */
  size?: string;
  /** The initial date to display as selected */
  initialDate?: Date;
  /** Custom border radius for the calendar. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
}

const Calendar = ({
  size,
  handleDateClick,
  initialDate,
  cornerRadius,
}: CalendarProps) => {
  const theme = useTheme();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );

  const generateCalendar = (month: number, year: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const dates: (number | null)[] = Array(firstDay).fill(null);
    for (let i = 1; i <= daysInMonth; i++) dates.push(i);
    return dates;
  };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const dates = generateCalendar(currentMonth, currentYear);

  const handleDateClickInternal = (day: number | null) => {
    if (day !== null) {
      const date = new Date(currentYear, currentMonth, day);
      setSelectedDate(date);
      setShowCalendar(false);
      handleDateClick && handleDateClick(day);
    }
  };

  const changeMonth = (offset: number) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleMonthChange = (value: string) => {
    setCurrentMonth(months.indexOf(value)); // Find the index of the month string
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(parseInt(event.target.value, 10));
  };

  const years = Array.from({ length: 101 }, (_, i) => 1950 + i); // Years from 1950 to 2050
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format selectedDate for display
  const formatDate = (date: Date | null) => {
    if (!date) return "Pick a Date"; // If no date selected, show placeholder
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // "short" gives abbreviated month names
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options); // Formats to "Dec 2, 2024"
  };

  const borderRadius =
    typeof cornerRadius === "number"
      ? cornerRadius
      : theme.cornerRadius ?? theme.spacingfactor * 2;

  return (
    <div style={{ width: size || "300px" }}>
      <div
        style={{ ...styles.container, backgroundColor: theme.backgroundColor }}
      >
        <div
          style={styles.dateInput}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {formatDate(selectedDate)}
        </div>
        {showCalendar && (
          <div
            style={{
              ...styles.calendar,
              borderRadius: borderRadius,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <div style={styles.header}>
              <Dropdown
                options={months}
                defaultOption={months[currentMonth]}
                onChange={handleMonthChange}
              />
              <Dropdown
                options={years.map(String)}
                defaultOption={String(currentYear)}
                onChange={(value) =>
                  handleYearChange({
                    target: { value },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              />
            </div>
            <div style={styles.daysRow}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} style={styles.dayName}>
                  {day}
                </div>
              ))}
            </div>
            <div style={styles.datesGrid}>
              {dates.map((day, index) => {
                const isSelected =
                  day !== null &&
                  selectedDate &&
                  selectedDate.toISOString().split("T")[0] ===
                    new Date(currentYear, currentMonth, day)
                      .toISOString()
                      .split("T")[0];
                const isToday =
                  day !== null &&
                  today.getDate() === day &&
                  today.getMonth() === currentMonth &&
                  today.getFullYear() === currentYear;
                return (
                  <div
                    key={index}
                    style={{
                      ...styles.dateCell,
                      borderRadius: borderRadius,
                      ...(day && { cursor: "pointer" }),
                      ...(isSelected && {
                        backgroundColor: theme.primaryColor,
                        color: "#fff",
                        borderRadius: "50%",
                        border: `2px solid ${theme.primaryColor}`,
                      }),
                      ...(!isSelected &&
                        isToday && {
                          border: `2px solid ${theme.primaryColor}`,
                        }),
                    }}
                    onClick={() => handleDateClickInternal(day)}
                  >
                    {day || ""}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    boxSizing: "border-box" as "border-box",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    position: "relative" as "relative",
    width: "100%",
    padding: "7px 24px",
    fontFamily: "'Arial', sans-serif",
  },
  dateInput: {
    boxSizing: "border-box" as "border-box",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center" as "center",
    cursor: "pointer",
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "4px 4px 0px black",
    fontSize: "16px",
  },
  calendar: {
    position: "absolute" as "absolute",
    top: "60px",
    backgroundColor: "#fff",
    zIndex: 10,
    width: "100%",
    border: "1px black solid",
    boxShadow: "4px 4px 0px black",
    borderRadius: "16px",
    gap: "5px",
    padding: "24px 7px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  daysRow: {
    boxSizing: "border-box" as "border-box",
    textAlign: "center" as "center",
    padding: "8px 6px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    width: "100%",
  },
  datesGrid: {
    boxSizing: "border-box" as "border-box",
    padding: "10px",
    gap: "10px",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center" as "center",
  },
  dayName: {
    fontFamily: "Montserrat",
  },
  dateCell: {
    boxSizing: "border-box" as "border-box",
    width: "100%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "500px",
    transition: "0.3s ease-in-out",
  },
  selectedDate: {
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "50%",
  },
  dateCellHover: {
    backgroundColor: "red",
    cursor: "pointer",
  },
};

export default Calendar;
