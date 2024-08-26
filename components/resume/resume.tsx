import React from 'react';
import styles from "./resume.module.css"
import ProjectCard from '../projects/projectCard/projectCard';
import { IoIosArrowForward } from "react-icons/io";
import FileTree from './fileTree/fileTree';

function Resume() {
  return (
    <div className={styles.resume} id="resume">
      <div className={styles.content}>
        <div className={styles.header}>
          <IoIosArrowForward className={styles.icon}/>
          Résumé
          <span className={styles.cursor}></span>
        </div>
        <a href="/resume.pdf" download className={styles.downloadButton}>
          &lt;Download Résumé&gt;          
        </a>
        <FileTree/>
      </div>
    </div>
  );
}

export default Resume;
