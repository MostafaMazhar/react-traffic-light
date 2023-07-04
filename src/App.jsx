import React from "react";
import TrafficLight from "./component/TrafficLight";

//include images into your bundle

export default function App() {
  const [currentColor, setCurrentColor] = React.useState("red"); //set default state to 'Red'

  const handleState = () => {
    if (currentColor === "red") {
      setCurrentColor("green");
    } else if (currentColor === "yellow") {
      setCurrentColor("yellow");
    } else if (currentColor === "green") {
      setCurrentColor("green");
    }
  };

  return (
    <div className="app">
      <TrafficLight className={currentColor} />
      <button className="btn" onClick={handleState}></button>
    </div>
  );
}
