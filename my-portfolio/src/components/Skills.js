import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const SkillsGroup = ({ skills }) => {
  return (
    <div className="skills-group">
      {skills.map(skill => {
        return (
          <span className="skill">
            <i className={`${skill.icon} colored`} />
            <p>{skill.name}</p>
          </span>
        );
      })}
    </div>
  );
};

const Skills = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}
    transitionAppearTimeout={1000}
  >
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <SkillsGroup
        skills={[
          { name: "Javascript", icon: "devicon-javascript-plain" },
          { name: "React", icon: "devicon-react-original" },
          { name: "Node", icon: "devicon-nodejs-plain" },
        ]}
      />

      <SkillsGroup
        skills={[
          { name: "jQuery", icon: "devicon-jquery-plain" },
          { name: "MySQL", icon: "devicon-mysql-plain" },
          { name: "MongoDB", icon: "devicon-mongodb-plain" },
        ]}
      />

      <SkillsGroup
        skills={[
          { name: "Express", icon: "devicon-express-original" },
          { name: "HTML", icon: "devicon-html5-plain" },
          { name: "CSS", icon: "devicon-css3-plain" },
        ]}
      />
    </div>
  </ReactCSSTransitionGroup>
);

export default Skills;
