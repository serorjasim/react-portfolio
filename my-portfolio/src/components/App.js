import React, { Component } from "react";
import "../App.css";
import Particle from "./Particles";
import SideBar from "./SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
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
