import React from "react";

const Calendar = () => {
    const month = "April";
    const year = 2025;
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysInMonth = 30;
    const firstDay = 2; // April 1, 2025, falls on a Tuesday (index 2)

    const today = new Date();
    const isCurrentMonth = today.getMonth() === 3 && today.getFullYear() === 2025;
    const currentDate = today.getDate();

    let calendarCells = [];
    for (let i = 0; i < firstDay; i++) {
        calendarCells.push(<td key={"empty-" + i}></td>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = isCurrentMonth && day === currentDate;
        calendarCells.push(
            <td key={day} className={isToday ? "bg-blue-300" : ""}>{day}</td>
        );
    }

    const rows = [];
    for (let i = 0; i < calendarCells.length; i += 7) {
        rows.push(<tr key={i}>{calendarCells.slice(i, i + 7)}</tr>);
    }

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-4">Calendar for {month} {year} (India)</h1>
            <table className="mx-auto border border-collapse">
                <thead>
                    <tr className="bg-gray-500 text-white">
                        {daysOfWeek.map((day, index) => (
                            <th key={index} className="px-4 py-2">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default Calendar;
