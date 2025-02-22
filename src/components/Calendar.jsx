import React, { useState } from "react";
import { format, addMonths, subMonths, isSameMonth } from "date-fns";

const Calendar = ({ disabledDays = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const renderDays = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const days = [];

    // Render previous month's days
    let previousDaysOfMonth = subMonths(currentDate, 1);
    const endOfPreviousMonth = new Date(
      previousDaysOfMonth.getFullYear(),
      previousDaysOfMonth.getMonth() + 1,
      0
    );

    for (let i = 0; i < startOfMonth.getDay() - 1; i++) {
      days.unshift(
        <div className="day empty" key={`prev-${i}`}>
          <span className="text-xl font-semibold">
            {endOfPreviousMonth.getDate() - i}
          </span>
        </div>
      );
    }

    // Render current month's days
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const isDisabled = disabledDays.some(
        (day) => isSameMonth(day, dayDate) && day.getDate() === i
      );
      const className = isDisabled ? "day disabled" : "day";

      days.push(
        <div className={className} key={i}>
          <div className="text-xl font-semibold mb-2 number">{i}</div>
          <div className="text-lg text">{isDisabled ? "Occupé" : "Libre"}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="flex justify-center mb-7">
        <button onClick={handlePrevMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07999"
              stroke="#F2542D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="text-xl font-medium" style={{ color: "#562C2C" }}>
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
              stroke="#F2542D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="days">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold"
            style={{ color: "#562C2C" }}
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
