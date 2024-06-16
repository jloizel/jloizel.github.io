import React from 'react';
import styles from "./home.module.css"
import TextScrambler from '../textScrambler/textScrambler';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { IoIosArrowForward } from "react-icons/io";

const phrases = [
  'Hello World!',
  'This is a test.',
  'JavaScript is fun.',
  'Welcome to my portfolio.',
  'Enjoy your stay!'
];

function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.header}>
        JACK LOIZEL
      </div>
      <div className={styles.scrambler}>
        {/* <IoIosArrowForward className={styles.icon}/> */}
        <TextScrambler phrases={phrases} scrambleDuration={2} displayDuration={2} />
        <span className={styles.cursor}></span>
      </div>
      
      <div className={styles.text}>

      </div>

      
    </div>
  );
}

export default Home;
