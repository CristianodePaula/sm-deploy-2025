'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { useScroll } from '../../resources/useScroll';
import { headerAnimation, headerTAnimation } from '../../resources/animations';
import { AboutProps } from '../About/About';

export default function Hero({ id = 'home' }:AboutProps) {
  const [element, controls] = useScroll();

  return (
    <div id={id} className={styles.container} ref={element}>
      <video
        className={styles.video}
        src="/videos/02.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.text}>
        <motion.p
          className={styles.paragraph}
          variants={headerAnimation}
          animate={controls}
        >
          A Revolução Social do Mercado
        </motion.p>
        <motion.p
          className={styles.subtitle}
          variants={headerTAnimation}
          animate={controls}
        >
          Conectamos empresas e consumidores com inteligência, propósito e recompensa.
        </motion.p>
      </div>
    </div>
  );
}
