"use client"

import React from 'react';
import styles from "./navbar.module.css"

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.nameContainer}>
        JackLoizel<span style={{color: "white"}}>.</span>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link} onClick={() => scrollToSection("home")}>
          // home
        </div>
        <div className={styles.link}>
          // experience
        </div>
        <div className={styles.link}>
          // resume
        </div>
        <div className={styles.link}>
          // contact
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;
