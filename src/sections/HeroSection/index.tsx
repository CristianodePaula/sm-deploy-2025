'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { useScroll } from '../../resources/useScroll';
import { heroTitleAnimation, heroSubtitleAnimation } from '../../resources/animations';
import { AboutProps } from '../ProductDemoSection';

export default function HeroSection({ id = 'home' }: AboutProps) {
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
      <div className={styles.overlay} />
      <div className={styles.text}>
        <motion.h1
          className={styles.paragraph}
          variants={heroTitleAnimation}
          initial="hidden"
          animate={controls}
        >
          A Revolução Social do Mercado
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          variants={heroSubtitleAnimation}
          initial="hidden"
          animate={controls}
        >
          Conectamos empresas e consumidores com inteligência, propósito e recompensa.
        </motion.p>
      </div>
    </div>
  );
}
