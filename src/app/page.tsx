// app/page.tsx (SSR habilitado com Next.js 14+ App Router e TypeScript)
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStore, FaComments, FaChartLine, FaGift, FaUsers, FaChartBar, FaMapMarkedAlt } from 'react-icons/fa';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import heroImage from '../app/assets/header.jpg'

const HeroVideo = dynamic(() => import('./components/HeroVideo'), { ssr: false });

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>A Revolução Social do Mercado</h1>
        <p className={styles.heroSubtitle}>Conectamos empresas e consumidores com inteligência, propósito e recompensa.</p>
        <a href="#sobre" className={styles.heroButton}>Conheça o projeto</a>
      </section>

      {/* 2. Sobre a Social Market */}
      <section id="sobre" className={styles.sectionWhite}>
        <h2 className={styles.sectionTitle}>Sobre a Social Market</h2>
        <p className={styles.sectionText}>
          Nossa missão é empoderar negócios e consumidores com tecnologia justa, acessível e eficiente.
          Conectamos pessoas e empresas, promovendo um ecossistema onde todos ganham.
        </p>
        <HeroVideo />
      </section>

      {/* 3. Problemas que Resolvemos */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>Problemas que Resolvemos</h2>
        <ul className={styles.problemList}>
          <li>🔒 Frustração dos pequenos negócios com alcance limitado</li>
          <li>🧩 Falta de ferramentas completas (venda, serviço, pesquisa, entrega)</li>
          <li>🗣️ Consumidores sem voz ou retorno no consumo digital</li>
        </ul>
      </section>

      {/* 4. Como Funciona a Plataforma */}
      <section className={styles.sectionWhite}>
        <h2 className={styles.sectionTitle}>Como Funciona</h2>
        <div className={styles.featuresGrid}>
          {[
            { icon: FaStore, title: 'Página da Empresa' },
            { icon: FaChartBar, title: 'Produtos e Serviços' },
            { icon: FaUsers, title: 'Pesquisas de Opinião' },
            { icon: FaRocket, title: 'Inteligência de Negócios' },
            { icon: FaMapMarkedAlt, title: 'Entregas Inteligentes' },
            { icon: FaGift, title: 'Recompensas ao Consumidor' },
          ].map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <item.icon size={32} className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Modelos de Receita e Diferenciais */}
      <section className={styles.sectionLightIndigo}>
        <h2 className={styles.sectionTitle}>Modelos de Receita e Diferenciais</h2>
        <ul className={styles.problemList}>
          <li>💸 Monetização via SaaS, comissões e anúncios inteligentes</li>
          <li>🧠 IA integrada para análise e gestão</li>
          <li>🌐 Ecossistema completo B2B2C + C2B</li>
          <li>🎁 Recompensas para consumidores ativos</li>
        </ul>
      </section>

      {/* 6. Impacto e Escalabilidade */}
      <section className={styles.sectionWhite}>
        <h2 className={styles.sectionTitle}>Impacto e Escalabilidade</h2>
        <p className={styles.sectionText}>
          Social Market tem potencial de escalar globalmente, impactando milhões de pessoas e empresas com uma plataforma ética, lucrativa e inovadora.
        </p>
      </section>

      {/* 7. Time de Fundadores */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>Time de Fundadores</h2>
        <div className={styles.teamGrid}>
          {[
            { name: 'João Silva', role: 'CEO - Visão & Estratégia' },
            { name: 'Maria Souza', role: 'CTO - Tecnologia & Produto' },
            { name: 'Carlos Lima', role: 'CMO - Marketing & Parcerias' },
          ].map((person, i) => (
            <div key={i} className={styles.teamCard}>
              <div className={styles.avatar}></div>
              <h3 className={styles.teamName}>{person.name}</h3>
              <p className={styles.teamRole}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Roadmap */}
      <section className={styles.sectionWhite}>
        <h2 className={styles.sectionTitle}>Roadmap</h2>
        <ul className={styles.roadmapList}>
          <li>✅ MVP funcional com entregas, agendamentos, vendas e IA inicial</li>
          <li>🚧 Lançamento beta público e feedback de mercado</li>
          <li>🌍 Internacionalização e IA evolutiva adaptável por país</li>
        </ul>
      </section>

      {/* 9. Contato / Call to Action */}
      <section className={styles.sectionIndigoDark}>
        <h2 className={styles.sectionTitleLight}>Vamos conversar?</h2>
        <p className={styles.sectionTextLight}>Quer investir, apoiar ou ser um dos primeiros a usar?</p>
        <a href="mailto:contato@socialmarket.com" className={styles.ctaButton}>Entrar em Contato</a>
      </section>

      {/* 10. Rodapé */}
      <footer className={styles.footer}>
        <p>© 2025 Social Market. Todos os direitos reservados.</p>
        <p>Siga-nos: @socialmarket</p>
      </footer>
    </main>
  );
}