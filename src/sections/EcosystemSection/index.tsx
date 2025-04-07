'use client';
import React, { JSX, useEffect, useState } from 'react';
import styles from './EcosystemSection.module.css';
import { dataApps } from '../../data';
import { useScroll } from '../../resources/useScroll';
import {
  cardsGAnimation,
  cardsCAnimation,
} from '../../resources/animations';
import { motion } from 'framer-motion';
import { AboutProps } from '../ProductDemoSection';
import Image from 'next/image';

function Countdown({
  target,
  onAvailabilityChange,
}: {
  target: string;
  onAvailabilityChange: (available: boolean) => void;
}) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(target);
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('Disponível');
        onAvailabilityChange(true);
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setTimeLeft(`${days} dias e ${hours} horas`);
        onAvailabilityChange(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target, onAvailabilityChange]);

  return <p className={styles.countdown}>{timeLeft}</p>;
}

export default function EcosystemSection({ id = 'ecosystem' }: AboutProps): JSX.Element {
  const [element, controls] = useScroll();

  // Estados mapeados por índice do array
  const [availability, setAvailability] = useState<boolean[]>(() =>
    dataApps.map(() => false)
  );
  const [modals, setModals] = useState<boolean[]>(() =>
    dataApps.map(() => false)
  );

  const handleAvailabilityChange = (index: number, available: boolean) => {
    setAvailability((prev) => {
      const updated = [...prev];
      updated[index] = available;
      return updated;
    });
  };

  const toggleModal = (index: number, open: boolean) => {
    setModals((prev) => {
      const updated = [...prev];
      updated[index] = open;
      return updated;
    });
  };

  return (
    <div className={styles.container} id={id} ref={element}>
      <h1 className={styles.sectionTitle}>Nosso Ecossistema de Aplicações</h1>
      <p className={styles.sectionText}>
        A Social Market é composta por três aplicações integradas e complementares: 
        a <strong>Rede Social</strong>, que conecta consumidores às suas marcas favoritas; 
        o <strong>Painel da Empresa</strong>, voltado à gestão completa de produtos, serviços e vendas; 
        e o <strong>App do Entregador</strong>, que garante entregas rápidas, seguras e eficientes.
      </p>
      <div>
        <motion.div
          className={styles.gallery}
          variants={cardsGAnimation}
          animate={controls}
        >
          {dataApps.map((app, index) => (
            <motion.div key={index} className={styles.card} variants={cardsCAnimation}>
              <div className={styles.imageWrapper}>
                <Image
                  src={app.imageUrl}
                  alt={app.title}
                  className={styles.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.title}>{app.title}</h2>
                <button
                  className={styles.button}
                  onClick={() => {
                    if (availability[index]) {
                      window.open(app.link, '_blank');
                    } else {
                      toggleModal(index, true);
                    }
                  }}
                >
                  Acessar Aplicação
                </button>
                <Countdown
                  target={app.releaseDate}
                  onAvailabilityChange={(available) =>
                    handleAvailabilityChange(index, available)
                  }
                />
              </div>

              {modals[index] && (
                <div className={styles.modalOverlay} onClick={() => toggleModal(index, false)}>
                  <div className={styles.modal} onClick={e => e.stopPropagation()}>
                    <p>Este aplicativo ainda não está disponível. Por favor, aguarde o lançamento oficial!</p>
                    <button onClick={() => toggleModal(index, false)} className={styles.closeModal}>Fechar</button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
