"use client"

import React, { useEffect, useState } from 'react';
import styles from "./contact.module.css"

const Contact: React.FC = () => {
  
  return (
    <div className={styles.focusContainer} id="contact">
      <div className={styles.header}>
        {/* <IoIosArrowForward className={styles.icon}/> */}
        Get in Touch 
      </div>
    </div>
  );
}

export default Contact;
