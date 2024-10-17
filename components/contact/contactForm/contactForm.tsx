"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from '@emailjs/browser';  
import styles from './page.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { TextareaAutosize } from "@mui/material";

const formSchema = z.object({
  user_name: z.string().min(1, "This field cannot be left blank."),
  user_email: z.string().email("Email must be in proper format."),
  message: z.string().min(1, "This field cannot be left blank."),
});

export type FormData = z.infer<typeof formSchema>;

const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null); 
  const [messageSent, setMessageSent] = useState(false); 

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    if (formRef.current) {
      emailjs.sendForm(
        'Portfolio',
        "Email Template",
        formRef.current,
        "5sXrDZuoGKK_BsarB"
      ).then(
        (result) => {
          setMessageSent(true);
          reset();
        },
        (error) => {
        }
      );
    }
  };

  return (
    <div className={styles.formContainer}>
      {!messageSent ? (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
          {/* Name input */}
          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <div className={styles.label}>
                <IoIosArrowForward className={styles.icon} />
                MESSAGE FROM:
              </div>
              <input
                {...register('user_name')}
                name="user_name"
                className={styles.input}
                placeholder="{enter name}"
                autoComplete="new-password"
              />
            </div>
            {errors?.user_name && (
              <p className={styles.errorMessage}>
                {errors.user_name.message}
              </p>
            )}
          </div>

          {/* Email input */}
          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <div className={styles.label}>
                <IoIosArrowForward className={styles.icon} />
                EMAIL:
              </div>
              <input
                {...register('user_email')}
                name="user_email"
                className={styles.input}
                placeholder="{enter email}"
                autoComplete="new-password"
              />
            </div>
            {errors?.user_email && (
              <p className={styles.errorMessage}>
                {errors.user_email.message}
              </p>
            )}
          </div>

          {/* Message textarea */}
          <div className={styles.container}>
            <div className={styles.textAreaContainer}>
              <div className={styles.label}>
                <IoIosArrowForward className={styles.icon} />
                MESSAGE:
              </div>
              <TextareaAutosize
                {...register('message')}
                name="message"
                className={styles.textArea}
                placeholder="{enter message}"
                autoComplete="new-password"
              />
            </div>
            {errors?.message && (
              <p className={styles.errorMessage}>
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.successMessageContainer}>
          <div className={styles.successMessage}>
            Thank you for your message, I will be in contact with you as soon as possible.
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
