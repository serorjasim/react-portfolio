import React from "react";
import EDC from "../images/EDC.png";
import train from "../images/train.png";
import giphy from "../images/giphy.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Projects = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
    transitionAppearTimeout={1000}
  >
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-group">
        <a className="anchor" href="https://serorjasim.github.io/TeamProject1/" target="_blank">
          <img className="projects-images" src={EDC} alt={"Eat-Drink-Cook"} />
          <h3 className="project-name">EDC</h3>
          <a className="anchor" href="https://github.com/serorjasim/TeamProject1" target="_blank">
            <h3 className="repo">Github</h3>
          </a>
        </a>

        <a className="anchor" href="https://serorjasim.github.io/Train-Scheduler/" target="_blank">
          <img className="projects-images" src={train} alt={"train"} />
          <h3 className="project-name">Train Scheduler</h3>
          <a className="anchor" href="https://github.com/serorjasim/Train-Scheduler" target="_blank">
            <h3 className="repo">Github</h3>
          </a>
        </a>

        <a className="anchor" href="https://serorjasim.github.io/GIPHY/" target="_blank">
          <img className="projects-images" src={giphy} alt={"giphy"} />
          <h3 className="project-name">Giphy</h3>
          <a className="anchor" href="https://github.com/serorjasim/GIPHY" target="_blank">
            <h3 className="repo">Github</h3>
          </a>
        </a>
      </div>
    </div>
  </ReactCSSTransitionGroup>
);

export default Projects;
