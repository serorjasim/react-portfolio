import React, { Component } from "react";
import { Route } from "react-router-dom";

import { routes } from "../routes";

import Particle from "./Particles";
import SideBar from "./SideBar";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ display: "flex" }}>
        <SideBar />
        <Content />
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

const Content = props => {
  return (
    <div
      style={{
        background: "white",

        // margin: "auto",
        borderRadius: "5px",
        boxShadow: "5px 10px 10px #888888",

        height: "300px",
        width: "300px",

        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)",
      }}
    >
      {routes.map(({ path, main, ...rest }) => (
        <Route path={path} component={main} {...rest} />
      ))}
    </div>
  );
};

export default App;
