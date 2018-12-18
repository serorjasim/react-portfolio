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
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <br />
      <p className="about-description">
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  </ReactCSSTransitionGroup>
);

export default About;
