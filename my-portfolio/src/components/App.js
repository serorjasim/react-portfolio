import React, { Component } from "react";
import "../App.css";
import About from "./About";
import Particle from "./Particles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Particle />
      </div>
    );
  }
}

export default App;
