import React from "react";
import seror from "../images/seror.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const About = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
    transitionAppearTimeout={1000}
  >
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <br />
      <img className="about-image" src={seror} alt={"seror"} />
      <p className="about-description">
        I’m software engineer based in Austin, TX. I enjoy playing soccer, live music, and learning new things.
      </p>
      <br />
      <p className="about-description">
        After moving to Austin few years ago, I met people who did computer programming. As I learned about it, I knew
        right away that’s what I wanted to do. I took a coding bootcamp at the University of Texas. There I learned the
        fundemantals of programming in different languages and frameworks.
      </p>
    </div>
  </ReactCSSTransitionGroup>
);

export default About;
