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

class SideNav extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px", width: "40%", background: "f0f0f0" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
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
            {routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default SideNav;
