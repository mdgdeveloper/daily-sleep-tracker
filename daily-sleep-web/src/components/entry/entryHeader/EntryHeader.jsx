import "./entryHeader.css";
import { useState } from "react";

const EntryHeader = () => {
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date(Date.now());
  const currDay = day[today.getDay() - 1];
  const currMonth = month[today.getMonth()];

  // ================
  // Entry Header
  // ================
  // Pending
  // TODO: Populate with additional information (maybe informational)
  return (
    <div className="eh-main">
      <div className="eh-title">💤 SleepTrack</div>
      <div className="eh-greet">
        <div className="eh-hello">Hello, Sergio</div>
        <div className="eh-date">
          {currDay}, {today.getDate()} {currMonth}
        </div>
      </div>
    </div>
  );
};

export default EntryHeader;
