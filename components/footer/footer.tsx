import React from 'react';
import styles from "./footer.module.css"
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


function Footer() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <AiOutlineCopyright/>
        Jack Loizel 2024. All rights reserved.
      </div>
      <div className={styles.right}>
        <FaLinkedin/>
        <FaGithub/>
      </div>
    </div>
  );
}

export default Footer;

