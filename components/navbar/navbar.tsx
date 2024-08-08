"use client"

import React from 'react';
import styles from "./navbar.module.css"
import { createTheme, useMediaQuery } from '@mui/material';
import Menu from './menu/menu';

function NavBar() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.nameContainer}>
        JackLoizel<span style={{color: "white"}}>.</span>
      </div> */}
      {isMobile ? (
          <Menu/>
        ) : (
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
          <div className={styles.link} onClick={() => scrollToSection("contact")}>
            // contact
          </div>
      </div>
        )}
      <div className={styles.hidden}></div>
      
    </div>
  );
}

export default NavBar;
