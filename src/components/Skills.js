import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS'];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card bounce" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
