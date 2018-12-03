import React from "react";
import EDC from "../images/EDC.png";
import train from "../images/train.png";

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1>
    <img className="projects-images" src={EDC} alt={"Eat-Drink-Cook"} />
    <img className="projects-images" src={train} alt={"train"} />
  </div>
);

export default Projects;
