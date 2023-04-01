import React from "react";
const monthNames = [
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

export const Calendar = ({ date }) => {
  let startingDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let selectedDate = date.getDate();
  return (
    <div className="calendar">
      <div className="first-row">
        <p>{monthNames[date.getMonth()]},</p>
        <p>{date.getFullYear()}</p>
      </div>
      <div className="second-row">
        <p className="days">S</p>
        <p className="days">M</p>
        <p className="days">T</p>
        <p className="days">W</p>
        <p className="days">T</p>
        <p className="days">F</p>
        <p className="days">S</p>

        {/* Mapping WeekDays */}

        {[...Array(startingDay).keys()].map((item) => {
          return <p key={item}></p>;
        })}
        {[...Array(days).keys()].map((item) => {
          return (
            <p
              key={item}
              className={item + 1 === selectedDate ? "selected" : ""}
            >
              {item + 1}
            </p>
          );
        })}
      </div>
    </div>
  );
};
