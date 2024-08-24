"use client"

import React from 'react';
import styles from "./footer.module.css"
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

interface FooterProps {
  mode?: string;
}

const Footer: React.FC<FooterProps> = ({mode}) => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkClassName = () => mode === 'dark' ? styles.logo : styles.logoDark;
  const getArrowContainerClassName = () => mode === 'dark' ? styles.arrowContainer : styles.arrowContainerDark;

  console.log(mode)

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <AiOutlineCopyright className={styles.icon}/>
        Jack Loizel 2024. All rights reserved.
      </div>
      <div className={styles.right}>
        <div className={styles.logoContainer}>
          <FaLinkedin className={getLinkClassName()} href="https://www.linkedin.com/in/jackloizel/" target="_blank"/>
          <FaGithub className={getLinkClassName()} href="https://github.com/jloizel" target='_blank'/>
        </div>
        <div className={getArrowContainerClassName()}>
          <FaArrowUp className={styles.arrow} onClick={() => scrollToSection("navbar")}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;

