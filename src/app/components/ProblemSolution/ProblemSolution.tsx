// Problema vs Solução
'use client';

import React, { JSX } from 'react';
import styles from './ProblemSolution.module.css';
import { motion } from 'framer-motion';
import { useScroll } from '../../resources/useScroll';
import { aboutTAnimation, aboutIAnimation } from '../../resources/animations';
import Image from 'next/image';
import problemImg from '../../assets/problem.webp';
import solutionImg from '../../assets/solution.webp';
import { AboutProps } from '../About/About';

export default function ProblemSolution({ id = 'proposal' }:AboutProps): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <div id="proposal" className={styles.container} ref={element}>
      <motion.div className={styles.block} variants={aboutTAnimation} animate={controls}>
        <h2 className={styles.title}>O Problema</h2>
        <p className={styles.text}>
        O mercado digital está fragmentado. Empresas precisam vender, agendar serviços e interagir com consumidores, 
        mas não existe uma plataforma única que resolva tudo. A Social Market é essa revolução.
          </p>
        <Image src={problemImg} alt="Problem" className={styles.image} priority />
      </motion.div>
      <motion.div className={styles.block} variants={aboutIAnimation} animate={controls}>
        <h2 className={styles.title}>A Solução</h2>
        <p className={styles.text}>
        Combinamos rede social, e-commerce, serviço, pesquisas e entregas em um único ecossistema, 
        onde consumidores ganham dinheiro interagindo e empresas crescem com inteligência artificial.
          </p>
        <Image src={solutionImg} alt="Solution" className={styles.image} priority />
      </motion.div>
    </div>
  );
}