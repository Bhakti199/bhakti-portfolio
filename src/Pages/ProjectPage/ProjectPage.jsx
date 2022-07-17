import React from "react";
import { ProjectCard } from "../../Components";
import { projects } from "./ProjectData";
import "./ProjectPage.css";
export const ProjectPage = () => {
  console.log(projects);
  return (
    <div className="project-page">
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
