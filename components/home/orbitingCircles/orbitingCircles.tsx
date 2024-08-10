"use client"

import React from 'react';
import styles from "./orbitingCircles.module.css"
import { FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import type { siTypescript } from 'simple-icons';


function OrbitingCircles() {

  return (
    <div className={styles.circlesContainer}>
      <a className={styles.circle1} href="https://github.com/jloizel" style={{textDecoration: "none"}}>
        <FaGithub className={styles.logo1}/>
      </a>
      <a className={styles.circle2} href="https://www.linkedin.com/in/jackloizel/" style={{textDecoration: "none"}}>
        <FaLinkedin className={styles.logo2}/>
      </a>
      <img height="32" width="32" src="/icons/typescript.svg" />

    </div>
  );
}

export default OrbitingCircles;
