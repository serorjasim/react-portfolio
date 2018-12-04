import React from "react";
import EDC from "../images/EDC.png";
import train from "../images/train.png";

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-group">
      <a className="anchor" href="https://serorjasim.github.io/TeamProject1/" target="_blank">
        <img className="projects-images" src={EDC} alt={"Eat-Drink-Cook"} />
        <h3 className="project-name">EDC</h3>
      </a>

      <a className="anchor" href="https://serorjasim.github.io/Train-Scheduler/" target="_blank">
        <img className="projects-images" src={train} alt={"train"} />
        <h3 className="project-name">Train Scheduler</h3>
      </a>
    </div>
  </div>
);

export default Projects;
