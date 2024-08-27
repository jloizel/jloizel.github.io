"use client"

import React from 'react';
import styles from "./projects.module.css"
import ProjectCard from './projectCard/projectCard';
import { IoIosArrowForward } from "react-icons/io";
import { createTheme, useMediaQuery } from '@mui/material';
import ScrollAnimation from '../scrollAnimations/bounce';
import Slide from '../scrollAnimations/slide';

const Projects: React.FC = () => {

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.content}>
        <div className={styles.header}>
        <Slide>
          <IoIosArrowForward className={styles.icon}/>
          Personal Projects
 
          <span className={styles.cursor}/>
        </Slide>
        </div>
        <Slide>
          <div className={styles.text}>
            Throughout the past year, I have embarked on numerous projects that reflect my passion for coding. These selected works demonstrate my proficiency in various programming languages, frameworks, and tools. Each project presented unique challenges and opportunities for growth, allowing me to refine my skills and expand my knowledge. Take a look at these highlights to get a sense of my capabilities and accomplishments.
          </div>
        </Slide>
      </div>
        <ProjectCard/>
    </div>
  );
}

export default Projects;
