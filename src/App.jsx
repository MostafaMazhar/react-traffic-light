import React from "react";
import TrafficLight from "./component/TrafficLight";

//include images into your bundle

export default function App() {
  const [currentColor, setCurrentColor] = React.useState("red"); //set default state to 'Red'

  return (
    <div>
      <TrafficLight />
    </div>
  );
}
