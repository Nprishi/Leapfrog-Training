import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Calendar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view") || "month";
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="page">
      <h1>Calendar</h1>

      <div className="calendar-buttons">
        <button
          className={view === "month" ? "active" : ""}
          onClick={() => setSearchParams({ view: "month" })}
        >
          Month View
        </button>

        <button
          className={view === "week" ? "active" : ""}
          onClick={() => setSearchParams({ view: "week" })}
        >
          Week View
        </button>
      </div>

      <div className="calendar-card">
        <h2>{view === "month" ? "Monthly Calendar" : "Weekly Calendar"}</h2>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="calendar-input"
        />

        {selectedDate && (
          <p className="selected-date">
            Selected Date: <b>{selectedDate}</b>
          </p>
        )}

        <p className="info-text">
          {view === "month"
            ? "Select a date to view monthly schedule."
            : "Select a date to view weekly schedule."}
        </p>
      </div>
    </div>
  );
}

export default Calendar;