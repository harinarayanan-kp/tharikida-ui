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
 * @param {string} [props.primaryColor] - Primary color for selected date and highlights.
 * @param {string} [props.textColor] - Text color for calendar.
 * @param {string} [props.backgroundColor] - Background color for calendar.
 * @param {number} [props.fontSize] - Font size for calendar text.
 * @param {string} [props.fontFamily] - Font family for calendar text.
 * @param {string} [props.borderColor] - Border color for calendar.
 * @param {string} [props.borderWidth] - Border width for calendar.
 * @param {string} [props.borderStyle] - Border style for calendar.
 * @param {string} [props.fontWeight] - Font weight for calendar text.
 * @param {string} [props.transitionDuration] - Transition duration for calendar popup.
 * @param {string} [props.hoverColor] - Hover color for date cells.
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
  /** Primary color for selected date and highlights */
  primaryColor?: string;
  /** Text color for calendar */
  textColor?: string;
  /** Background color for calendar */
  backgroundColor?: string;
  /** Font size for calendar text */
  fontSize?: number;
  /** Font family for calendar text */
  fontFamily?: string;
  /** Border color for calendar */
  borderColor?: string;
  /** Border width for calendar */
  borderWidth?: string;
  /** Border style for calendar */
  borderStyle?: string;
  /** Font weight for calendar text */
  fontWeight?: string;
  /** Transition duration for calendar popup */
  transitionDuration?: string;
  /** Hover color for date cells */
  hoverColor?: string;
}

const Calendar = ({
  size,
  handleDateClick,
  initialDate,
  cornerRadius,
  primaryColor,
  textColor,
  backgroundColor,
  fontSize,
  fontFamily,
  borderColor,
  borderWidth,
  borderStyle,
  fontWeight,
  transitionDuration,
  hoverColor,
}: CalendarProps) => {
  const theme = useTheme();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );

  // Use prop > theme > fallback
  const t = {
    primaryColor: primaryColor || theme.primaryColor,
    textColor: textColor || theme.textColor,
    backgroundColor: backgroundColor || theme.backgroundColor,
    fontSize: fontSize || theme.fontSize,
    fontFamily: fontFamily || theme.fontFamily,
    cornerRadius:
      typeof cornerRadius === "number"
        ? cornerRadius
        : theme.cornerRadius ?? theme.spacingfactor * 2,
    borderColor: borderColor || theme.borderColor,
    borderWidth: borderWidth ?? theme.borderWidth,
    borderStyle: borderStyle ?? theme.borderStyle,
    fontWeight: fontWeight ?? theme.fontWeight,
    transitionDuration: transitionDuration ?? theme.transitionDuration,
    hoverColor: hoverColor || theme.hoverColor,
    // fallback for removed props
    padding: theme.padding,
    margin: theme.margin,
    shadowOffsetX: theme.shadowOffsetX,
    shadowOffsetY: theme.shadowOffsetY,
    shadowBlur: theme.shadowBlur,
    shadowSpread: theme.shadowSpread,
    shadowColor: theme.shadowColor,
    shadowInset: theme.shadowInset,
  };

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
    setCurrentMonth(months.indexOf(value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(parseInt(event.target.value, 10));
  };

  const years = Array.from({ length: 101 }, (_, i) => 1950 + i);
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

  const formatDate = (date: Date | null) => {
    if (!date) return "Pick a Date";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div style={{ width: size || "300px" }}>
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          padding: t.padding,
          fontFamily: t.fontFamily,
          fontSize: t.fontSize,
          fontWeight: t.fontWeight,
          lineHeight: theme.lineHeight,
          letterSpacing: theme.letterSpacing,
          margin: t.margin,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            padding: t.padding,
            border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
            borderRadius: t.cornerRadius,
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: t.backgroundColor,
            width: "100%",
            boxShadow: `${t.shadowOffsetX} ${t.shadowOffsetY} ${t.shadowBlur} ${t.shadowSpread} ${t.shadowColor}`,
            fontSize: t.fontSize,
            color: t.textColor,
            transition: t.transitionDuration,
          }}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {formatDate(selectedDate)}
        </div>
        {showCalendar && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              backgroundColor: t.backgroundColor,
              zIndex: 10,
              width: "100%",
              border: `${t.borderWidth} ${t.borderStyle} ${t.borderColor}`,
              boxShadow: `${t.shadowInset ? "inset " : ""}${t.shadowOffsetX} ${
                t.shadowOffsetY
              } ${t.shadowBlur} ${t.shadowSpread} ${t.shadowColor}`,
              borderRadius: t.cornerRadius,
              gap: theme.spacingfactor,
              padding: t.padding,
              transition: t.transitionDuration,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: theme.spacingfactor,
              }}
            >
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
            <div
              style={{
                boxSizing: "border-box",
                textAlign: "center",
                padding: `${theme.spacingfactor * 2}px ${
                  theme.spacingfactor * 1.5
                }px`,
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                width: "100%",
                color: t.textColor,
                fontFamily: t.fontFamily,
                fontWeight: t.fontWeight,
                fontSize: t.fontSize,
              }}
            >
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} style={{ fontFamily: t.fontFamily }}>
                  {day}
                </div>
              ))}
            </div>
            <div
              style={{
                boxSizing: "border-box",
                padding: t.padding,
                gap: theme.spacingfactor,
                display: "grid",
                width: "100%",
                gridTemplateColumns: "repeat(7, 1fr)",
                textAlign: "center",
              }}
            >
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
                      boxSizing: "border-box",
                      width: "100%",
                      aspectRatio: "1/1",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: t.cornerRadius,
                      transition: t.transitionDuration,
                      color: t.textColor,
                      fontFamily: t.fontFamily,
                      fontWeight: t.fontWeight,
                      fontSize: t.fontSize,
                      ...(day && { cursor: "pointer" }),
                      ...(isSelected && {
                        backgroundColor: t.primaryColor,
                        color: "#fff",
                        borderRadius: "50%",
                        border: `2px solid ${t.primaryColor}`,
                      }),
                      ...(!isSelected &&
                        isToday && {
                          border: `2px solid ${t.primaryColor}`,
                        }),
                    }}
                    onClick={() => handleDateClickInternal(day)}
                    onMouseOver={(e) => {
                      if (day && !isSelected) {
                        (
                          e.currentTarget as HTMLDivElement
                        ).style.backgroundColor = t.hoverColor;
                      }
                    }}
                    onMouseOut={(e) => {
                      if (day && !isSelected) {
                        (
                          e.currentTarget as HTMLDivElement
                        ).style.backgroundColor = "";
                      }
                    }}
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

export default Calendar;
