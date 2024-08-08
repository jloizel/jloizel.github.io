"use client";

import React, { useRef, useState } from 'react';
import styles from './contact.module.css'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from './contactForm/contactForm';

export default function Contact() {
 
  return (
    <div className={styles.contactContainer} id="contact">
        <div className={styles.header}>
          Get in Touch 
        </div>
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <ContactForm/>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.detail}>
              <FaPhone/>
              447478218859
            </div>
            <div className={styles.detail}>
              <MdOutlineMail/>
              447478218859
            </div>
            <div className={styles.detail}>
              <FaLinkedin/>
              447478218859
            </div>
          </div>
      </div>
    </div>
    
  );
}