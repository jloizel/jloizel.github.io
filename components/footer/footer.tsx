import React from 'react';
import styles from "./footer.module.css"
import { AiOutlineCopyright } from "react-icons/ai";

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

      </div>
    </div>
  );
}

export default Footer;

