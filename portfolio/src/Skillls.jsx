import React from "react";

const Skills = () => {
  const skillsList = ["HTML", "CSS", "JavaScript", "React", "Git", "Problem Solving"];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
