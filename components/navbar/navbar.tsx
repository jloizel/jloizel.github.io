"use client"

import React from 'react';
import styles from "./navbar.module.css"
import { createTheme, useMediaQuery } from '@mui/material';
import Menu from './menu/menu';

interface NavbarProps {
  mode?: string;
}

const NavBar: React.FC<NavbarProps> = ({mode}) => {

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

  const getLinkClassName = () => mode === 'dark' ? styles.link : styles.linkDark;
  
  return (
    <div className={styles.navbar} id="navbar">
      {/* <div className={styles.nameContainer}>
        JackLoizel<span style={{color: "white"}}>.</span>
      </div> */}
      {isMobile ? (
          <Menu/>
        ) : (
        <div className={styles.linksContainer}>
          <div className={getLinkClassName()} onClick={() => scrollToSection("home")}>
            // home
          </div>
          <div className={getLinkClassName()} onClick={() => scrollToSection("focus")}>
            // focus
          </div>
          <div className={getLinkClassName()} onClick={() => scrollToSection("projects")}>
            // projects
          </div>
          <div className={getLinkClassName()} onClick={() => scrollToSection("resume")}>
            // résumé
          </div>
          <div className={getLinkClassName()} onClick={() => scrollToSection("contact")}>
            // contact
          </div>
      </div>
        )}
      {/* <div className={styles.hidden}></div> */}
      
    </div>
  );
}

export default NavBar;
