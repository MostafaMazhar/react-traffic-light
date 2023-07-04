//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../src/styles/App.css";

//import your own components
import App from "./App.js";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
