import React from 'react';
import logo from './logo.svg';
import styles from "./page.module.css" 
import NavBar from "../../components/navbar/navbar"
import Home from '../../components/home/home';
import Projects from '../../components/projects/projects';
import Resume from '../../components/resume/resume';
import Focus from '../../components/focus/focus';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Home/> 
      <Focus/> 
      <Projects/>
      <Resume/>
    </div>
  );
}

export default App;
