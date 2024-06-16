import React from 'react';
import styles from "./projects.module.css"
import ProjectCard from '../projectCard/projectCard';

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <ProjectCard/>
    </div>
  );
}

export default Projects;
