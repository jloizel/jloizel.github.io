import React from 'react';
import styles from "./resume.module.css"
import ProjectCard from '../projectCard/projectCard';
import { IoIosArrowForward } from "react-icons/io";

function Resume() {
  return (
    <div className={styles.resume} id="resume">
      <div className={styles.content}>
        <div className={styles.header}>
          <IoIosArrowForward className={styles.icon}/>
          Résumé
        </div>
        <div className={styles.text}> 
          Throughout the past year, I have embarked on numerous projects that reflect my passion for coding. These selected works demonstrate my proficiency in various programming languages, frameworks, and tools. Each project presented unique challenges and opportunities for growth, allowing me to refine my skills and expand my knowledge. Take a look at these highlights to get a sense of my capabilities and accomplishments.
        </div>
      </div>
    </div>
  );
}

export default Resume;
