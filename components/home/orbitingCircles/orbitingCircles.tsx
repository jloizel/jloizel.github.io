"use client"

import React from 'react';
import styles from "./orbitingCircles.module.css"
import { FaNodeJs, FaReact } from "react-icons/fa";

function OrbitingCircles() {

  return (
    <div className={styles.circlesContainer}>
      <div className={`${styles.circle} ${styles.small}`}>
        <FaReact className={`${styles.orbitIcon} ${styles.orbitIcon1}`} />
      </div>
      <div className={`${styles.circle} ${styles.large}`}>
        <FaNodeJs className={`${styles.orbitIcon} ${styles.orbitIcon2}`} />
      </div>
      <div>
        <FaNodeJs className={styles.icon}/>
      </div>
    </div>
  );
}

export default OrbitingCircles;
