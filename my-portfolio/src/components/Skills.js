import React from "react";

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
        { name: "Javascript", icon: "devicon-javascript-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Node", icon: "devicon-nodejs-plain" },
      ]}
    />

    <SkillsGroup
      skills={[
        { name: "Javascript", icon: "devicon-javascript-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Node", icon: "devicon-nodejs-plain" },
      ]}
    />
    {/* <div className="skills-group">
      <span className="skill">
        <i className="devicon-jquery-plain colored" />
        <p>jQuery</p>
      </span>
      <span className="skill">
        <i className="devicon-mysql-plain colored" />
        <p>MySQL</p>
      </span>
      <span className="skill">
        <i className="devicon-mongodb-plain colored" />
        <p>MongoDB</p>
      </span>
    </div>
    <div className="skills-group">
      <span className="skill">
        <i className="devicon-express-original colored" />
        <p>Express</p>
      </span>
      <span className="skill">
        <i className="devicon-html5-plain colored" />
        <p>HTML</p>
      </span>
      <span className="skill">
        <i className="devicon-css3-plain colored" />
        <p>CSS</p>
      </span>
    </div> */}
  </div>
);

export default Skills;
