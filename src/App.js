import React from "react";
import TrafficLight from "./component/TrafficLight.js";
import "../src/styles/App.css";

export default function App() {
  const [currentColor, setCurrentColor] = React.useState("red"); //set default state to 'Red'

  const handleState = () => {
    if (currentColor === "red") {
      setCurrentColor("green");
    } else if (currentColor === "green") {
      setCurrentColor("yellow");
    } else if (currentColor === "yellow") {
      setCurrentColor("red");
    }
  };

  return (
    <div className="app">
      <TrafficLight color={currentColor} />
      <button className={`btn ${currentColor}`} onClick={handleState}>
        Change Color
      </button>
    </div>
  );
}
