"use client"

import React, { useEffect, useState } from 'react'
import styles from './projectCard.module.css'
import { FaLink } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

const ProjectCard: React.FC = () => {
  const [data, setData] = useState([
    {
      id: "",
      image: "",
      title: "",
      details: "",
      href: ""
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
          <a className={styles.card} key={projectCard.id} href={projectCard.href} target='_blank'>
            <div className={styles.imageContainer}>
              <img src={projectCard.image}/>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{projectCard.title}<IoIosLink/></div>
              <div className={styles.details}>{projectCard.details}</div>
              <div className={styles.languages}></div>
            </div>
            <span className={styles.showProject}>Show Project</span>
          </a>
        ))}
    </div>
  )
}

export default ProjectCard