"use client"

import React, { useEffect, useState } from 'react'
import styles from './projectCard.module.css'


const ProjectCard: React.FC = () => {
  const [data, setData] = useState([
    {
      id: "",
      image: "",
      title: "",
      details: ""
    },
  ]);

  const getData=()=>{
    fetch('/data/projects.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
    }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className={styles.projectCardContainer}>
        {data.map((projectCard, index) => (
          <div className={styles.card} key={projectCard.id}>
            <div className={styles.imageContainer}>
              <img src={projectCard.image}/>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{projectCard.title}</div>
              <div className={styles.details}>{projectCard.details}</div>
              <div className={styles.languages}></div>
            </div>
            <span className={styles.showProject}>Show Project</span>
          </div>
        ))}
    </div>
  )
}

export default ProjectCard