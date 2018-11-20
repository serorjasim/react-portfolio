import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home!!!!!</h2>,
  },
  {
    path: "/About",
    main: () => <h2>About</h2>,
  },
  {
    path: "/Skills",
    main: () => <h2>Skills</h2>,
  },
  {
    path: "/Projects",
    main: () => <h2>Projects</h2>,
  },
  {
    path: "/Resume",
    main: () => <h2>Resume</h2>,
  },
];

class SideBar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="side-bar">
            <div className="toggle-btn">&#9776;</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Resume">Resume</Link>
              </li>
            </ul>
          </div>
          {routes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
          ))}
        </div>
      </Router>
    );
  }
}

export default SideBar;
