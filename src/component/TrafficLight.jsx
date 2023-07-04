import React from "react";

export default function TrafficLight({ color }) {
  return (
    <div className="traffic-light">
      <div className={`light red ${color === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${color === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${color === "green" ? "active" : ""}`}></div>
    </div>
  );
}
