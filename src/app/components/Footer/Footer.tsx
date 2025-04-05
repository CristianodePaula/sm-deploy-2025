'use client';

import React, { JSX } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useScroll } from '../../resources/useScroll';
import { footerBAnimation, footerTAnimation } from '../../resources/animations';
import { motion } from 'framer-motion';

export default function Footer(): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container} ref={element}>
      <div className={styles.desc}>
      <motion.div className={styles.box} variants={footerBAnimation} animate={controls}>
        <h2 className={styles.title}>Contate-nos</h2>
        <a className={styles.link}>Contato</a>
        <a className={styles.link}>Suporte</a>
        <a className={styles.link}>Qualificações</a>
        <a className={styles.link}>Premiações</a>
      </motion.div>
      <motion.div className={styles.box} variants={footerTAnimation} animate={controls}>
        <h2 className={styles.title}>Parcerias</h2>
        <a className={styles.link}>RedCar</a>
        <a className={styles.link}>SuperVeículos</a>
        <a className={styles.link}>SegurosVida</a>
        <a className={styles.link}>MegaRoda</a>
      </motion.div>
      <motion.div className={styles.box} variants={footerBAnimation} animate={controls}>
        <h2 className={styles.title}>Redes Sociais</h2>
        <a className={styles.icon}><FaFacebook /></a>
        <a className={styles.icon}><FaInstagram /></a>
        <a className={styles.icon}><FaTwitter /></a>
        <a className={styles.icon}><FaYoutube /></a>
      </motion.div>
      </div>
      <div className={styles.copryng}>
        <p>© 2025 Social Market. Todos os direitos reservados.</p>
        <p>Siga-nos: @socialmarket</p>
      </div>
    </div>
  );
}
