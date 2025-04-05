'use client';

import React, { JSX } from 'react';
import styles from './Contact.module.css';

import { useScroll } from '../../resources/useScroll';
import { contactAnimation } from '../../resources/animations';
import { motion } from 'framer-motion';

export default function Contact(): JSX.Element {
  const [element, controls] = useScroll();

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  return (
    <div className={styles.container} id="contact" ref={element}>
      <motion.form
        className={styles.form}
        onSubmit={sendEmail}
        variants={contactAnimation}
        animate={controls}
      >
        <h1 className={styles.title}>Entre em Contato</h1>
        <input type="text" placeholder="Nome" name="name" className={styles.input} required />
        <input type="email" placeholder="Email" name="email" className={styles.input} required />
        <textarea placeholder="Escreva sua Mensagem" name="message" className={styles.textarea} required />
        <button type="submit" className={styles.button}>Enviar</button>
      </motion.form>
    </div>
  );
}
