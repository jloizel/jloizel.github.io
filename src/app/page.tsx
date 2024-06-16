import React from 'react';
import logo from './logo.svg';
import styles from "./page.module.css" 
import NavBar from "../../components/navbar/navbar"
import Home from '../../components/home/home';
import Projects from '../../components/projects/projects';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Home/>  
      <Projects/>
    </div>
  );
}

export default App;
