"use client"

import React from 'react';
import styles from "./orbitingCircles.module.css";
import { FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function OrbitingCircles() {

  return (
    <div className={styles.circlesContainer}>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/css.svg" className={`${styles.logo1} ${styles.logo1_1}`} />
      </div>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/html.svg" className={`${styles.logo1} ${styles.logo1_2}`} />
      </div>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/javascript.svg" className={`${styles.logo1} ${styles.logo1_3}`} />
      </div>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/mongodb.svg" className={`${styles.logo1} ${styles.logo1_4}`} />
      </div>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/mongoose.svg" className={`${styles.logo1} ${styles.logo1_5}`} />
      </div>
      <div className={styles.circle1}>
        <img height="32" width="32" src="/icons/python.svg" className={`${styles.logo1} ${styles.logo1_6}`} />
      </div>

      <div className={styles.circle2}>
        <img height="32" width="32" src="/icons/npm.svg" className={`${styles.logo2} ${styles.logo2_1}`} />
      </div>
      <div className={styles.circle2}>
        <img height="32" width="32" src="/icons/nodejs.svg" className={`${styles.logo2} ${styles.logo2_2}`}/>
      </div>
      <div className={styles.circle2}>
        <img height="32" width="32" src="/icons/react.svg" className={`${styles.logo2} ${styles.logo2_3}`} />
      </div>
      <div className={styles.circle2}>
        <img height="32" width="32" src="/icons/typescript.svg" className={`${styles.logo2} ${styles.logo2_4}`} />
      </div>
    </div>
  );
}

export default OrbitingCircles;
