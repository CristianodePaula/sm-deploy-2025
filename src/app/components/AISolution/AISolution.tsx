// Inteligência Artificial da SM
'use client';

import React, { JSX } from 'react';
import styles from './AISolution.module.css';
import { motion } from 'framer-motion';
import { useScroll } from '../../resources/useScroll';
import { aboutTAnimation } from '../../resources/animations';
import aiImage from '../../assets/iasolution.jpg';
import Image from 'next/image';
import { AboutProps } from '../About/About';

export default function AISolution({ id = 'technologies' }: AboutProps): JSX.Element {
  const [element, controls] = useScroll();

  return (
    <div id="technologies" className={styles.container} ref={element}>
      <div className={styles.left}>
      <h1 className={styles.title}>Inovação Tecnológica e I.A</h1>
      <motion.div className={styles.content} variants={aboutTAnimation} animate={controls}>
        <p className={styles.text}>
        Nossas aplicações foram desenvolvidas com as mais avançadas 
        tecnologias para garantir performance, segurança e escalabilidade.
        Criamos um ecossistema digital robusto, acessível em qualquer dispositivo, 
        que conecta empresas, consumidores e entregadores de forma intuitiva e inteligente. 
        Tudo foi pensado para proporcionar uma experiência eficiente, confiável e preparada para o futuro.
        </p>
      </motion.div>
      <motion.div className={styles.content} variants={aboutTAnimation} animate={controls}>
        <p className={styles.text}>
        Na Social Market, desenvolvemos uma inteligência artificial própria, 
        projetada para transformar completamente a 
        forma como empresas e consumidores interagem. 
        Nossa IA atua como um verdadeiro copiloto inteligente, analisando dados em tempo 
        real para otimizar vendas, agendamentos, entregas, pesquisas de opinião e 
        estratégias de mercado.
        </p>
      </motion.div>
      </div>
      
      <motion.div className={styles.imageWrapper} variants={aboutTAnimation} animate={controls}>
        <Image src={aiImage} alt="AI SM" className={styles.image} priority />
      </motion.div>
    </div>
  );
}
