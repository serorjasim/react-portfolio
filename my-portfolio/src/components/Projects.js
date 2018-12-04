import React from "react";
import EDC from "../images/EDC.png";
import train from "../images/train.png";

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1>
    <ul>
      <li>
        <a href="https://serorjasim.github.io/TeamProject1/" target="_blank">
          <img className="projects-images" src={EDC} alt={"Eat-Drink-Cook"} />
          EDC
        </a>
      </li>
      <li>
        <a href="https://serorjasim.github.io/Train-Scheduler/" target="_blank">
          <img className="projects-images" src={train} alt={"train"} />
        </a>
      </li>
    </ul>
  </div>
);

export default Projects;
