import React from "react";
import ProjectItem from "../components/ProjectItem";


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList"></div>
      <ProjectItem name="social" image={}/>
    </div>
  );
}

export default Projects;
