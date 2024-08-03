import React, { useEffect, useState } from 'react';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
// import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./menu.module.css";
import Image from 'next/image';

interface MenuProps {

}


const Menu: React.FC<MenuProps> = ({}) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.menuButton}>
        <MenuIcon onClick={handleDrawerOpen} className={styles.icon}/>
      </div>
      <Drawer 
        sx={{height: "100%", width: "100%"}}
        open={open} 
        anchor={"right"} 
        onClose={handleDrawerClose}
        hideBackdrop={false}
      >
        <div className={styles.container}>
          <div className={styles.link} onClick={() => jumpToSection("home")}>
            // home
          </div>
          <div className={styles.link} onClick={() => jumpToSection("focus")}>
            // focus
          </div>
          <div className={styles.link} onClick={() => jumpToSection("projects")}>
            // projects
          </div>
          <div className={styles.link} onClick={() => jumpToSection("resume")}>
            // résumé
          </div>
          <div className={styles.link}>
            // contact
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
