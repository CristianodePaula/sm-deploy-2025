'use client';

import React, { JSX } from 'react';
import Image from 'next/image';
import styles from './Section.module.css';
import clients from '../../assets/pexels-photo-3184416.webp';
import { useScroll } from '../../resources/useScroll';
import { aboutTAnimation, aboutIAnimation } from '../../resources/animations';
import { motion } from 'framer-motion';
import { AboutProps } from '../About/About';

export default function Section({ id = 'section' }: AboutProps): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <div id="section"  className={styles.container} ref={element}>
      <motion.div
        className={styles.text}
        variants={aboutTAnimation}
        animate={controls}
      >
        <h1 className={styles.title}>Quem Somos</h1>
        <p className={styles.paragraph}>
          A seguradora Automotive tem o seguro ideal para o seu veículo.
          Além de assistência de qualidade, você pode contar com
          atendimento 24h e benefícios exclusivos. Não importa em que lugar
          esteja, estaremos lá. Confira as melhores condições para
          você renovar o seguro do seu veículo, seja ele carro, moto,
          pick up ou caminhão.
        </p>
      </motion.div>
      <motion.div
        className={styles.imageWrapper}
        variants={aboutIAnimation}
        animate={controls}
      >
        <Image
          src={clients}
          alt="Clientes satisfeitos"
          className={styles.image}
          priority
        />
      </motion.div>
    </div>
  );
}
