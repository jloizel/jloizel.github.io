import React from 'react';
import styles from './projectNav.module.css';
import { LuArrowRight } from "react-icons/lu";


interface ProjectNavProps {
  nextProject: string;
}

const ProjectNav: React.FC<ProjectNavProps> = ({ nextProject }) => {

  const projectImages: { [key: string]: string } = {
    'metroguessr': '/images/metroguessr.jpg',
    'Engenious': '/images/project2.jpg',
    'HoopsToGlory': '/images/metroguessr.jpg',
  };

  const imageUrl = projectImages[nextProject] || '';

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={styles.top}>
        <span>Next Project</span>
        <LuArrowRight />
      </div>
      <div className={styles.bottom}>
        {nextProject}
      </div>
    </div>
  );
};

export default ProjectNav;