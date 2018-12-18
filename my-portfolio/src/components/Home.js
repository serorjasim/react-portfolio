import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Home = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
    transitionAppearTimeout={1000}
  >
    <div className="home-container">
      <h1 className="title">Seror Jasim</h1>
      <h3 className="work">Software Engineer</h3>
      <div className="icons">
        <a href="https://github.com/serorjasim" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://www.linkedin.com/in/seror-jasim/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="mailto:serorajasim@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </ReactCSSTransitionGroup>
);

export default Home;
