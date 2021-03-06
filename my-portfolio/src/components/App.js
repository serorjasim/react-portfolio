import React from "react";
import { Route } from "react-router-dom";
import { routes } from "../routes";
import SideBar from "./SideBar";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ display: "flex" }}>
        <SideBar />
        <Content />
      </div>
    );
  }
}

const Content = props => {
  return (
    <div className="content">
      {routes.map(({ path, main, ...rest }) => (
        <Route path={path} component={main} {...rest} />
      ))}
    </div>
  );
};

export default App;
