import React from 'react';
import styles from "./home.module.css"
import TextScrambler from '../textScrambler/textScrambler';

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
      <TextScrambler phrases={phrases}/>
      <div className={styles.text}>

      </div>

      
    </div>
  );
}

export default Home;
