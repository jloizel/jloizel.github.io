import React from 'react';
import styles from "./focus.module.css"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { HiOutlineServerStack } from "react-icons/hi2";


function Focus() {
  return (
    <div className={styles.focusContainer} id="focus">
      <div className={styles.header}>
        My Focus
      </div>
      <div className={styles.box}>
        <div className={styles.focus}>
          <div className={styles.focusHeader}>
            <HiOutlineComputerDesktop className={styles.icon}/>
            <span>
              <div className={styles.underline1}>Software</div>
              Development
            </span>
          </div>
          
        </div>
        <div className={styles.focus}>
          <div className={styles.focusHeader}>
            <FaReact className={styles.icon}/>
            <span>
              <div className={styles.underline2}>Fontend Development</div>
              React, NextJS
            </span>
          </div>
          
        </div>
        <div className={styles.focus}>
          <div className={styles.focusHeader}>
            <HiOutlineServerStack className={styles.icon}/>
            <span>
              <div className={styles.underline3}>Backend</div>
              Development
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Focus;
