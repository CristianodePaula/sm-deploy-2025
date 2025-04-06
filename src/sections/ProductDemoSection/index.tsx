'use client';
import React from 'react';
import styles from './ProductDemoSection.module.css';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useScroll } from '../../resources/useScroll';
import {  productDemoTextAnimation, valuesSectionAnimation } from '../../resources/animations';

export interface AboutProps {
  id?: string;
}

const HeroVideo = dynamic(() => import('../../subcomponents/Header'), { ssr: false });

export default function ProductDemoSection({ id = 'platform' }: AboutProps) {
  const [element, controls] = useScroll();

  return (
    <section id={id} className={styles.sectionWhite} ref={element}>
      <motion.h2
        className={styles.sectionTitle}
        variants={productDemoTextAnimation}
        animate={controls}
        initial="hidden"
      >
        Inclusão Digital e Recompensa
      </motion.h2>

      <motion.p
        className={styles.sectionText}
        variants={productDemoTextAnimation}
        animate={controls}
        initial="hidden"
      >
        A Social Market é baseada na exclusão digital e recompensa, pois permite que qualquer empresa 
        tenha uma página, venda produtos, ofereça serviços, colete insights e 
        cresça com nossa IA inteligente.
        Enquanto isso, consumidores interagem e são recompensados financeiramente.
      </motion.p>

      <motion.p
        className={styles.sectionText}
        variants={valuesSectionAnimation}
        animate={controls}
        initial="hidden"
      >
      <HeroVideo />
      </motion.p>
    </section>
  );
}
