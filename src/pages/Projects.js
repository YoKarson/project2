import React from "react";
import ProjectItem from "../components/ProjectItem";
import ExpenseTrackerImg from "../assets/ExpenseTrackerImg.jpg";
import QuizAppImg from "../assets/QuizAppImg.png";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList"></div>
      <ProjectItem name="Expense Tracker" image={ExpenseTrackerImg} />
      <ProjectItem name="Quiz App" image={QuizAppImg} />
    </div>
  );
}

export default Projects;
