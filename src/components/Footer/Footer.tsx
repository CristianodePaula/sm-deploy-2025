'use client';

import React, { JSX } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { footerBAnimation } from '@/resources/animations';
import { useScroll } from '@/resources/useScroll';


export default function Footer(): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <footer className={styles.footer} ref={element}>
      <motion.div
        className={styles.socialWrapper}
        variants={footerBAnimation}
        animate={controls}
      >
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        <p className={styles.text}>© 2025 Social Market. Todos os direitos reservados.</p>
      </motion.div>
    </footer>
  );
}
