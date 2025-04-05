// Visão de Futuro e Impacto
'use client';

import React from 'react';
import styles from './FutureVision.module.css';
import { motion } from 'framer-motion';
import { useScroll } from '../../resources/useScroll';
import { aboutIAnimation } from '../../resources/animations';

export default function FutureVision(): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <div id="future-vision" className={styles.container} ref={element}>
      <motion.div className={styles.box} variants={aboutIAnimation} animate={controls}>
        <h1 className={styles.title}>Shaping the Future of Commerce</h1>
        <p className={styles.text}>Our mission goes beyond business. We are building a global network where people, services, and products connect in meaningful ways.</p>
        <p className={styles.text}>With SM, commerce becomes smart, inclusive and impactful — economically, socially, and environmentally.</p>
      </motion.div>
    </div>
  );
}