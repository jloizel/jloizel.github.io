import React from 'react';
import styles from './projectNav.module.css';
import { LuArrowRight } from "react-icons/lu";


interface ProjectNavProps {
  mode: string;
  nextProject: string;
}

const ProjectNav: React.FC<ProjectNavProps> = ({ mode, nextProject }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Next Project</span>
        <LuArrowRight/>
      </div>
      <div className={styles.bottom}>
        {nextProject}
      </div>
    </div>
  );
};

export default ProjectNav;
