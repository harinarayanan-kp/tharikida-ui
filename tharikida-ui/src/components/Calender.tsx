import React, { useState } from "react";

const CustomCalendar: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const generateCalendar = (month: number, year: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const dates: (number | null)[] = Array(firstDay).fill(null); // Fill empty spaces
    for (let i = 1; i <= daysInMonth; i++) dates.push(i);
    return dates;
  };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const dates = generateCalendar(currentMonth, currentYear);

  const handleDateClick = (day: number | null) => {
    if (day !== null) {
      const date = new Date(currentYear, currentMonth, day).toISOString().split("T")[0];
      setSelectedDate(date);
      console.log("Selected Date:", date);
      setShowCalendar(false);
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

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(parseInt(event.target.value));
  };

  const years = Array.from({ length: 101 }, (_, i) => 1950 + i); // Years from 1950 to 2050
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.dateInput} onClick={() => setShowCalendar(!showCalendar)}>
        {selectedDate || "Pick a Date"}
      </div>
      {showCalendar && (
        <div style={styles.calendar}>
          <div style={styles.header}>
            <select value={currentMonth} onChange={handleMonthChange} style={styles.select}>
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select value={currentYear} onChange={handleYearChange} style={styles.select}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.daysRow}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} style={styles.dayName}>
                {day}
              </div>
            ))}
          </div>
          <div style={styles.datesGrid}>
            {dates.map((day, index) => (
              <div
                key={index}
                style={{
                  ...styles.dateCell,
                  ...(day && { cursor: "pointer" }),
                  ...(day !== null &&
                    selectedDate ===
                      new Date(currentYear, currentMonth, day).toISOString().split("T")[0] &&
                    styles.selectedDate),
                }}
                onClick={() => handleDateClick(day)}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    position: "relative" as "relative",
    width: "350px",
    fontFamily: "'Arial', sans-serif",
  },
  dateInput: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center" as "center",
    cursor: "pointer",
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  },
  calendar: {
    position: "absolute" as "absolute",
    top: "60px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    zIndex: 10,
    width: "100%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    maxHeight: "400px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f7f7f7",
  },
  select: {
    backgroundColor: "beige",
    padding: "6px 10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    margin: "0 5px",
    cursor: "pointer",
    width: "45%",
    boxSizing: "border-box" as "border-box",
  },
  daysRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center" as "center",
    fontWeight: "bold" as "bold",
    padding: "5px",
    boxSizing: "border-box" as "border-box",
    width: "100%",
    borderBottom: "1px solid #ddd",
    backgroundColor: "blue",
  },
  datesGrid: {
    boxSizing: "border-box" as "border-box",
    backgroundColor: "yellow",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center" as "center",
    gap: "5px",
    padding: "5px",
  },
  dayName: {
    padding: "5px",
    fontSize: "12px",
    color: "#666",
  },
  dateCell: {
    padding: "10px",
    border: "1px solid red",
    margin: "2px",
    borderRadius: "50%",
    transition: "background-color 0.3s, color 0.3s",
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

export default CustomCalendar;
