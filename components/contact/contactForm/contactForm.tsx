"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { sendEmail } from '../../../src/app/utils/sendEmail';
import styles from './page.module.css'
import { createTheme, TextareaAutosize, useMediaQuery } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field cannot be left blank.",
  }),
  message: z.string().min(1, {
    message: "This field cannot be left blank.",
  }),
  email: z.string().email({
    message: "Email must be in proper format.",
  })
});

export type FormData = z.infer<typeof formSchema>;

const ContactForm: FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
    reset,
    trigger,
    clearErrors
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
    email: ''
  });

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [isMultiLine, setIsMultiLine] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    sendEmail(data);
    setMessageSent(true);
    // reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));

    // Calculate the number of lines in the textarea
    if (e.target.name === 'message') {
      const textArea = e.target;
      const lines = textArea.value.split('\n').length;

      // Update the state if the user is on the second line or more
      if (lines > 1) {
        setIsMultiLine(true);
      } else {
        setIsMultiLine(false);
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      {!messageSent && (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <IoIosArrowForward className={styles.icon}/>
              MESSAGE FROM: 
            </div>
            <input
              {...register('name')}
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="{enter user name}"
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <IoIosArrowForward className={styles.icon}/>
              EMAIL: 
            </div>
            <input
              {...register('email')}
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="{enter user email}"
            />
          </div>
          <div className={`${styles.textAreaContainer} ${isMultiLine ? styles.multiLine : ''}`}>
            <div className={styles.label}>
              <IoIosArrowForward className={styles.icon}/>
              MESSAGE: 
            </div>
            <TextareaAutosize 
              {...register('message')}
              value={formData.message}
              onChange={handleChange}
              className={styles.textArea}
              placeholder="{enter user message}"
              // minRows={2}
            />

          </div>
          <button
            className={styles.button} type="submit"
          >
            Send Message
          </button>
        </form>
      )}
      {messageSent && (
        <div className={styles.successMessageContainer}>
          <div className={styles.successMessage}>
            Thank you for your message, we will be in contact as soon as possible.
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm