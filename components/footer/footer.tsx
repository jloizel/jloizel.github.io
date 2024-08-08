import React from 'react';
import styles from "./footer.module.css"
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <AiOutlineCopyright className={styles.icon}/>
        Jack Loizel 2024. All rights reserved.
      </div>
      <div className={styles.right}>
        <div className={styles.logoContainer}>
          <FaLinkedin className={styles.logo} href="https://www.linkedin.com/in/jackloizel/" target="_blank"/>
          <FaGithub className={styles.logo} href="https://github.com/jloizel" target='_blank'/>
        </div>
        <div className={styles.arrowContainer}>
          <FaArrowUp className={styles.arrow} onClick={() => scrollToSection("home")}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;

