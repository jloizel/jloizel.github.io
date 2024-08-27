"use client"

import React, { useState, useEffect } from 'react';
import styles from "./navbar.module.css"
import { createTheme, useMediaQuery } from '@mui/material';
import Menu from './menu/menu';

const NavBar: React.FC = () => {
  const [isSlidingDown, setIsSlidingDown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;

      const homeBottom = homeSection.getBoundingClientRect().bottom;
      const scrollPosition = window.scrollY;

      if (scrollPosition > homeBottom) {
        setIsSlidingDown(true); // Navbar slides down when scrolling past home section
      } else {
        setIsSlidingDown(false); // Navbar hides when back on home section
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run the handler once on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div id="navbar">
      {isMobile ? (
        <Menu />
      ) : (
        <div>
          <div className={`${styles.fixedNavbar} ${isSlidingDown ? styles.hidden : ""}`}>
            <div className={styles.linksContainer}>
              {['// home', '// focus', '// projects', '// resume', '// contact'].map((section) => (
                <div
                  key={section}
                  className={`${styles.link}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.navbar} ${isSlidingDown ? styles.slideDown : styles.hidden}`}>
            <div className={styles.linksContainer}>
              {['// home', '// focus', '// projects', '// resume', '//  contact'].map((section) => (
                <div
                  key={section}
                  className={`${styles.link}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
