import React, { Component } from "react";
import "../App.css";
import About from "./About";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      speed: 8
    },
    size: {
      value: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true
      }
    },
    modes: {
      push: {
        particles_nb: 12
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />

        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default App;
