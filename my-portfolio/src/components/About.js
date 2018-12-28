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
        I’m a software engineer based in Austin, TX. I enjoy playing soccer, live music, and learning new things.
      </p>
      <br />
      <p className="about-description">
        After moving to Austin few years ago, I began meeting people around town who were computer programers. Once I
        learned the content of their work, I immediately knew it was the career I wanted to pursue. My interest inspired
        me to take a coding bootcamp at the University of Texas, where I learned the fundemantals of programming in
        different languages and frameworks.
      </p>
      <br />
      <p className="about-description">
        I also have worked as an Interpreter where I learned that attention to detail is key to being successful. I’m
        always eager to improve my skills and learn new technologies. As a result I believe I can contribute to the
        success of any team when given the opportunity.
      </p>
    </div>
  </ReactCSSTransitionGroup>
);

export default About;
