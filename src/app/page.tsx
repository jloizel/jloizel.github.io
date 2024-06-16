import React from 'react';
import logo from './logo.svg';
import styles from "./app.module.css" 
import NavBar from "../../components/navbar/navbar"
import Home from '../../components/home/home';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Home/>  
    </div>
  );
}

export default App;
