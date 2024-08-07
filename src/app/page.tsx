import React from 'react';
import logo from './logo.svg';
import styles from "./page.module.css" 
import NavBar from "../../components/navbar/navbar"
import Home from '../../components/home/home';
import Projects from '../../components/projects/projects';
import Resume from '../../components/resume/resume';
import Focus from '../../components/focus/focus';
import Contact from '../../components/contact/contact';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Home/> 
      <Focus/> 
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
