"use client"

import React from 'react';
import styles from "./home.module.css"
import TextScrambler from '../textScrambler/textScrambler';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IoIosArrowForward } from "react-icons/io";
import { FaGithubSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import OrbitingCircles from './orbitingCircles/orbitingCircles';
import SplineScene from '../spline/spline';
import Bounce from '../scrollAnimations/bounce';

const phrases = [
  'Part time coder',
  'Tech enthusiast',
  'Problem solver'
];

function Home() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.home} id="home">
      {/* <div className={styles.orbitingCircles}> */}
        {/* <OrbitingCircles/> */}
      {/* </div> */}
      <div className={styles.splineSceneContainer}>
        {/* <SplineScene /> */}
      </div>
      <Bounce>
        <div className={styles.header}>
          JACK LOIZEL
        </div>
      </Bounce>    
      <div className={styles.scrambler}>
        {/* <IoIosArrowForward className={styles.icon}/> */}
        <TextScrambler phrases={phrases} scrambleDuration={2} displayDuration={2} />
        <span className={styles.cursor}></span>
      </div>
      <div className={styles.logos}>
        <a href="https://github.com/jloizel" target="_blank" style={{textDecoration: "none"}}>
          <FaGithub className={styles.logo}/>
        </a>
        <a href="https://www.linkedin.com/in/jackloizel/" target="_blank" style={{textDecoration: "none"}}>
          <FaLinkedin className={styles.logo}/>
        </a>
      </div>
      <div className={styles.scroller} onClick={() => scrollToSection("focus")}>
        <span className={styles.scrollerIcon}>
          <FaLongArrowAltDown className={styles.scrollerArrow}/>
       </span>
      </div>
    </div>
  );
}

export default Home;
