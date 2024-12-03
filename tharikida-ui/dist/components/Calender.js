"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DropDown_1 = __importDefault(require("./DropDown"));
const CustomCalendar = ({ size }) => {
    const [showCalendar, setShowCalendar] = (0, react_1.useState)(false);
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(null);
    const generateCalendar = (month, year) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const dates = Array(firstDay).fill(null); // Fill empty spaces
        for (let i = 1; i <= daysInMonth; i++)
            dates.push(i);
        return dates;
    };
    const today = new Date();
    const [currentMonth, setCurrentMonth] = (0, react_1.useState)(today.getMonth());
    const [currentYear, setCurrentYear] = (0, react_1.useState)(today.getFullYear());
    const dates = generateCalendar(currentMonth, currentYear);
    const handleDateClick = (day) => {
        if (day !== null) {
            const date = new Date(currentYear, currentMonth, day);
            setSelectedDate(date);
            setShowCalendar(false);
        }
    };
    const changeMonth = (offset) => {
        let newMonth = currentMonth + offset;
        let newYear = currentYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }
        else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };
    const handleMonthChange = (value) => {
        setCurrentMonth(months.indexOf(value)); // Find the index of the month string
    };
    const handleYearChange = (event) => {
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
    const formatDate = (date) => {
        if (!date)
            return "Pick a Date"; // If no date selected, show placeholder
        const options = {
            year: "numeric",
            month: "short", // "short" gives abbreviated month names
            day: "numeric",
        };
        return date.toLocaleDateString(undefined, options); // Formats to "Dec 2, 2024"
    };
    return (react_1.default.createElement("div", { style: { width: size || "300px" } },
        react_1.default.createElement("div", { style: styles.container },
            react_1.default.createElement("div", { style: styles.dateInput, onClick: () => setShowCalendar(!showCalendar) }, formatDate(selectedDate)),
            showCalendar && (react_1.default.createElement("div", { style: styles.calendar },
                react_1.default.createElement("div", { style: styles.header },
                    react_1.default.createElement(DropDown_1.default, { options: months, defaultOption: months[currentMonth], onChange: handleMonthChange }),
                    react_1.default.createElement(DropDown_1.default, { options: years.map(String), defaultOption: String(currentYear), onChange: (value) => handleYearChange({
                            target: { value },
                        }) })),
                react_1.default.createElement("div", { style: styles.daysRow }, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (react_1.default.createElement("div", { key: day, style: styles.dayName }, day)))),
                react_1.default.createElement("div", { style: styles.datesGrid }, dates.map((day, index) => (react_1.default.createElement("div", { key: index, style: Object.assign(Object.assign(Object.assign({}, styles.dateCell), (day && { cursor: "pointer" })), (day !== null &&
                        selectedDate &&
                        selectedDate.toISOString().split("T")[0] ===
                            new Date(currentYear, currentMonth, day)
                                .toISOString()
                                .split("T")[0] &&
                        styles.selectedDate)), onClick: () => handleDateClick(day) }, day || "")))))))));
};
const styles = {
    container: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        padding: "7px 24px",
        fontFamily: "'Arial', sans-serif",
    },
    dateInput: {
        boxSizing: "border-box",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#fff",
        width: "100%",
        boxShadow: "4px 4px 0px black",
        fontSize: "16px",
    },
    calendar: {
        position: "absolute",
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
        boxSizing: "border-box",
        textAlign: "center",
        padding: "8px 6px",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        width: "100%",
    },
    datesGrid: {
        boxSizing: "border-box",
        padding: "10px",
        gap: "10px",
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center",
    },
    dayName: {
        fontFamily: "Montserrat",
    },
    dateCell: {
        boxSizing: "border-box",
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
exports.default = CustomCalendar;
