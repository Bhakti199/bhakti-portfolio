import React from "react";
import "./ProjectCard.css";
export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt="project-img" className="project-img" />
      <div className="card-content">
        <div className="margin-top-bottom-zero white-text card-title">
          {project.projectName}
        </div>
        <div className="white-text">
          {project.projectDescription}
          <span className="tech-stack">{project.tectStack}</span>.
        </div>
        <div className="card-btn-container">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <button className="card-btn white-text pointer live-btn">
              Live
            </button>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <button className="card-btn white-text pointer">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
};
