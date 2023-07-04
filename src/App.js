import React, { useState, useEffect } from "react";
import TrafficLight from "./component/TrafficLight.js";
import "../src/styles/App.css";

export default function App() {
  const [currentColor, setCurrentColor] = useState("red"); //set default state to 'Red'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        if (prevColor === "red") {
          return "green";
        } else if (prevColor === "green") {
          return "yellow";
        } else {
          return "red";
        }
      });
    }, 3000);
  }, []); // <--- empty dependency array

  // const handleState = () => {
  //   setCurrentColor((prevState) => {
  //     if (prevState === "red") return "green";
  //     else if (prevState === "green") return "yellow";
  //     else return "red";
  //   });
  // };

  return (
    <div className="app">
      <TrafficLight color={currentColor} />
      <button className={`btn ${currentColor}`}>Change Color</button>
      {/* onClick={handleState} */}
    </div>
  );
}
