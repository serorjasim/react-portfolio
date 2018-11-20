import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Particle from "./components/Particles";
import "./App.css";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
    <Particle
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  </React.Fragment>,
  document.getElementById("root")
);
