"use client"

import React, { useEffect, useState } from 'react'
import styles from './projectCard.module.css'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import Bounce from '../../scrollAnimations/bounce';

const ProjectCard: React.FC = () => {
  const [data, setData] = useState([
    {
      id: "",
      image: "",
      title: "",
      details: "",
      languages: "",
      summary: "",
      href: "",
      github: "",
      liveProject: ""
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

  const handleCardClick = (href: string) => {
    window.location.href = href; // Navigate to the project's href
  };


  return (
    <div className={styles.projectCardContainer}>
        {data.map((project, index) => (
          <Bounce className={styles.card} key={project.id}>
            <div className={styles.card}>
              <div className={styles.imageContainer} onClick={() => handleCardClick(project.href)}>
                <img className={styles.image} src={project.image} alt={project.title}/>
                <span className={styles.showProject}>Show Project</span>
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.title}>{project.title}</div>
                  {/* <div className={styles.details}>{projectCard.details}</div> */}
                  <div className={styles.line}></div>
                  <div className={styles.icons}>
                    <a href={project.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                      <FaGithub className={styles.icon}/>
                    </a>
                    <a href={project.liveProject} target="_blank" onClick={(e) => e.stopPropagation()}>
                      <IoIosLink className={styles.icon}/>
                    </a>
                  </div>
                </div>
                <div className={styles.languages}>
                  {project.languages}
                </div>
                <div className={styles.summary}>
                  {project.summary}
                  <span onClick={(e) =>  {e.stopPropagation(); window.open(project.href)}}> 
                    View &gt;
                  </span>
                </div>
              </div>
            </div>
          </Bounce>
        ))}
    </div>
  )
}

export default ProjectCard