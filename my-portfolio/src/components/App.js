import React, { Component } from "react";
import "../App.css";
import About from "./About";
import Particle from "./Particles";
import SideNav from "./SideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <SideNav />
        <Particle
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>
    );
  }
}

export default App;
