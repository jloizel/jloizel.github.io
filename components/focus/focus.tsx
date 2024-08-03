"use client"

import React, { useEffect, useState } from 'react';
import styles from "./focus.module.css"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { HiOutlineServerStack } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { createTheme, useMediaQuery } from '@mui/material';


const Focus: React.FC = () => {
  const [data, setData] = useState([
    {
      id: "",
      icon: "",
      header: "",
      subheader: "",
      content: ""
    },
  ]);

  const getData=()=>{
    fetch('/data/focusItems.json',{
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

  const iconComponents: { [key: string]: React.ElementType } = {
    FaReact: FaReact,
    HiOutlineServerStack: HiOutlineServerStack,
    HiOutlineComputerDesktop: HiOutlineComputerDesktop,
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const customButtonStyles = {
    color: 'red',
    background: '#6F6B71',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
  };

  return (
    <div className={styles.focusContainer} id="focus">
      <div className={styles.header}>
        Areas of Focus
      </div>
      {isMobile ? (
        <div className={styles.swiperContainer}>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            initialSlide={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className={styles.swiper}
            speed={800}
          >
            {data.map((item, index) => {
              // const IconComponent = iconComponents[item.icon];
              return (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <div className={styles.focus}>
                  <div className={styles.focusHeader}>
                    {/* <IconComponent className={styles.icon} /> */}
                    <span>
                      <div className={styles.underline2}>{item.header}</div>
                      {item.subheader}
                    </span>
                  </div>
                  <div className={styles.focusContent}>
                    <pre>&lt;body&gt;</pre>
                    <div className={styles.focusContentText}>
                      {item.content}
                    </div>
                    <pre>&lt;/body&gt;</pre>
                  </div>
                </div>
              </SwiperSlide>
              )
            })}
            <div className="swiper-button-prev swiper-button-prev-custom" style={{...customButtonStyles, marginTop: isMobile ? '100px' : '80px'}}></div>
            <div className="swiper-button-next swiper-button-next-custom" style={{...customButtonStyles, marginTop: isMobile ? '100px' : '80px'}}></div>
          </Swiper>
        </div>
      ) : (
        <div className={styles.box}>
          <div className={styles.focus}>
            <div className={styles.focusHeader}>
              <FaReact className={styles.icon}/>
              <span>
                <div className={styles.underline2}>Fontend Development</div>
                React, NextJS
              </span>
            </div>
            <div className={styles.focusContent}>
              <pre>&lt;body&gt;</pre>
              <div className={styles.focusContentText}>
                Experienced in both functional and OOP:<br/>
                Dart, Python, Java,<br/>
                JavaScript, TypeScript.
              </div>
              <pre>&lt;/body&gt;</pre>
            </div>
          </div>
          <div className={styles.focus}>
            <div className={styles.focusHeader}>
              <HiOutlineServerStack className={styles.icon}/>
              <span>
                <div className={styles.underline3}>Backend</div>
                Development
              </span>
            </div>
            <div className={styles.focusContent}>
              <pre>&lt;body&gt;</pre>
              <div className={styles.focusContentText}>
                Experienced in both functional and OOP:<br/>
                Dart, Python, Java,<br/>
                JavaScript, TypeScript.
              </div>
              <pre>&lt;/body&gt;</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Focus;
