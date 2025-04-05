'use client'
import React from 'react'
import styles from './About.module.css'
import dynamic from 'next/dynamic'

export interface AboutProps {
  id?: string
}

const HeroVideo = dynamic(() => import('../subcomponents/Header/HeroVideo'), { ssr: false });

export default function About({ id = 'platform' }: AboutProps) {
  return (
    <section id={id} className={styles.sectionWhite}>
      <h2 className={styles.sectionTitle}>Inclusão Digital e Recompensa</h2>
      <p className={styles.sectionText}>
      A Social Market é baseada na exclusão digital e recopensa, pois permite que qualquer empresa 
      tenha uma página, venda produtos, ofereça serviços, colete insights e 
      cresça com nossa IA inteligente.
      Enquanto isso, consumidores interagem e são recompensados financeiramente.

      </p>
      <HeroVideo />
    </section>
  )
}
