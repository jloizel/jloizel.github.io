"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import AnimatedCursor from 'react-animated-cursor'
import NavBar from '../../../../components/navbar/navbar'
import Toggle from '../../../../components/toggle/toggle'
import { FiArrowLeft } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../../../../components/footer/footer'


const metroguessrPage = () => {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    setMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
  };

  const getLinkClassName = () => mode === 'dark' ? styles.link : styles.linkDark;

  return (
    <div className={mode === 'dark' ? styles.darkPage : styles.lightPage}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='225, 142, 236'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        showSystemCursor={false}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <div className={styles.navbar} id="navbar">
        <a className={getLinkClassName()} href="/">
          // home
        </a>
        <span className={mode === 'dark' ? styles.arrowDark : styles.arrowLight}>
          <MdKeyboardArrowRight/>
        </span>
        <a className={getLinkClassName()} href="/">
          metroguessr
        </a>
      </div>
      <div className={styles.arrowContainer}>
        <a href="/">
          <FiArrowLeft className={mode === 'dark' ? styles.darkArrow : styles.lightArrow} />
        </a>
        <span className={styles.backText}>Back</span>
      </div>
      <div className={styles.toggleContainer}>
        <Toggle handleModeChange={handleModeChange} mode={mode}/>
      </div>
      <div className={styles.content}>
        <div className={mode === 'dark' ? styles.darkHeader : styles.lightHeader}>
          metroguessr
        </div>
        <div className={styles.subHeader}>
          <div className={mode === 'dark' ? styles.darkDescription : styles.lightDescription}>
            metroguessr is an interactive online game where the player selects between several cities to play and attempts to guess as many metro stations of that city within a set timeframe.
          </div>
          <div className={styles.info}>
            <div className={styles.detailsContainer}>
              <span className={mode === 'dark' ? styles.darkDetailsHeader : styles.lightDetailsHeader}>
                Technologies
              </span>
              <span className={mode === 'dark' ? styles.darkDetails : styles.lightDetails}>
                React, Typescript, MongoDB
              </span>
            </div>
            <div className={mode === 'dark' ? styles.darkOpen : styles.lightOpen}>
              Open Project <FaArrowRightLong className={mode === 'dark' ? styles.darkLongArrow : styles.lightLongArrow}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default metroguessrPage