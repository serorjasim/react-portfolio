import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleSidebar = () => {
    const { open } = this.state;

    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div style={{ display: "flex", height: "100%" }}>
          <div className={cn("side-bar", { open: open })}>
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
                <a href="resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="toggle-btn" onClick={this.toggleSidebar}>
            &#9776;
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
