import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: "Project One", description: "A cool project.", link: "#" },
    { name: "Project Two", description: "Another cool project.", link: "#" },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card zoom" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
