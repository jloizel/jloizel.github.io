import React, { useEffect, useState } from 'react';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
// import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./menu.module.css";
import Image from 'next/image';




const Menu: React.FC = ({}) => {
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
    <div className={styles.menuContainer}>
      {/* <div className={styles.menuButton}> */}
        <MenuIcon onClick={handleDrawerOpen} className={styles.menuIcon}/>
      {/* </div> */}
      {/* <div className={styles.drawerContainer}> */}
      <Drawer 
        sx={{height: "100%", width: "100%"}}
        open={open} 
        anchor={"right"} 
        hideBackdrop={false}
      >
        <div className={styles.container}>
          <div>
            <CloseIcon className={styles.closeIcon} onClick={handleDrawerClose}
            />
          </div>
          <div className={styles.menuLinks}>
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
            <div className={styles.link} onClick={() => jumpToSection("contact")}>
              // contact
            </div>
          </div>
        </div>
      </Drawer>
      {/* </div> */}
    </div>
  );
};

export default Menu;
