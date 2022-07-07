import React from "react";

export default function Schedule(props) {
  return (
    <ul>
      {props.schedule.map((schedule, k) => (
        <li key={k}>
          <span> -></span>
          {schedule.message === "Train a quai" && <span> ⚠️ </span>}
          {schedule.message === "Train a l'approche" && <span> 🏃 </span>}
          {schedule.message === "1 mn" && <span> ⏱️ </span>}
          {schedule.message === "Train retarde" && <span> 😴 </span>}
          <span className="schedule-time"> {schedule.message}</span> -{" "}
          {schedule.destination}
        </li>
      ))}
    </ul>
  );
}
