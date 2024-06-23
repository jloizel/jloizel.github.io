"use client"

import React from 'react';
import styles from "./navbar.module.css"

function NavBar() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={styles.navbar}>
      <div className={styles.nameContainer}>
        JackLoizel<span style={{color: "white"}}>.</span>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link} onClick={() => scrollToSection("home")}>
          // home
        </div>
        <div className={styles.link} onClick={() => scrollToSection("focus")}>
          // focus
        </div>
        <div className={styles.link} onClick={() => scrollToSection("projects")}>
          // projects
        </div>
        <div className={styles.link} onClick={() => scrollToSection("resume")}>
          // résumé
        </div>
        <div className={styles.link}>
          // contact
        </div>
      </div>
      <div className={styles.hidden}></div>
      
    </div>
  );
}

export default NavBar;
