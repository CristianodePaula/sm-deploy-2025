'use client'
import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import { motion } from "framer-motion"
import Hero from './components/Heeader/Hero'
import AboutSection from './components/About/About'
import Slider from './components/Slider/Slider'
import Adverts from './components/Adverts/Adverts'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProblemSolution from './components/ProblemSolution/ProblemSolution'
import AISolution from './components/AISolution/AISolution'

export default function App() {

    const [open, setOpen] = useState(false)
    const alternate = () => {
        setOpen(!open)
    }
    return (
      <motion.div initial="hidden" animate="show">
        <Navbar alternate={alternate} open={open} /> 
        <Hero />
        <ProblemSolution />
        <AboutSection />
        <AISolution />
        <Adverts />
        <Slider />
        <Contact />
        <Footer />
      </motion.div>
    )
} 




// // app/page.tsx
// 'use client';
// import React from 'react';
// // import { motion } from 'framer-motion';
// import { FaRocket, FaStore, FaComments, FaChartLine, FaGift, FaUsers, FaChartBar, FaMapMarkedAlt } from 'react-icons/fa';
// import styles from './page.module.css';
// import dynamic from 'next/dynamic';
// // import heroImage from '../app/assets/header.jpg';

// const HeroVideo = dynamic(() => import('./components/Header/HeroVideo'), { ssr: false });

// export default function Home() {
//   return (
//     <main>
//       {/* 1. Hero Section */}
//       <section className={styles.heroSection}>
//         <h1 className={styles.heroTitle}>A Revolução Social do Mercado</h1>
//         <p className={styles.heroSubtitle}>Conectamos empresas e consumidores com inteligência, propósito e recompensa.</p>
//         <a href="#sobre" className={styles.heroButton}>Conheça o projeto</a>
//       </section>

//       {/* 2. Sobre a Social Market */}
//       <section id="sobre" className={styles.sectionWhite}>
//         <h2 className={styles.sectionTitle}>Sobre a Social Market</h2>
//         <p className={styles.sectionText}>
//           Nossa missão é empoderar negócios e consumidores com tecnologia justa, acessível e eficiente.
//           Conectamos pessoas e empresas, promovendo um ecossistema onde todos ganham.
//         </p>
//         <HeroVideo />
//       </section>

//       {/* 3. Aplicações da Plataforma */}
//       <section className={styles.sectionGray}>
//         <h2 className={styles.sectionTitle}>Nosso Ecossistema</h2>
//         <div className={styles.cardsContainer}>
//           <div className={styles.card}><FaStore /> <h3>Rede Social</h3><p>Interação, descoberta e recompensas para consumidores.</p></div>
//           <div className={styles.card}><FaChartBar /> <h3>Painel da Empresa</h3><p>Gestão completa de vendas, serviços, marketing e logística.</p></div>
//           <div className={styles.card}><FaMapMarkedAlt /> <h3>App de Entregas</h3><p>Logística moderna com entregadores autônomos e transportadoras.</p></div>
//         </div>
//       </section>

//       {/* 4. Diferenciais */}
//       <section className={styles.sectionWhite}>
//         <h2 className={styles.sectionTitle}>Diferenciais da Social Market</h2>
//         <ul className={styles.bulletList}>
//           <li><FaRocket /> Plataforma global e flexível</li>
//           <li><FaChartLine /> Inteligência artificial para negócios</li>
//           <li><FaGift /> Recompensas para consumidores ativos</li>
//           <li><FaUsers /> Economia colaborativa e inclusiva</li>
//           <li><FaComments /> Pesquisa de opinião com retorno financeiro</li>
//         </ul>
//       </section>

//       {/* 5. Missão, Visão e Valores */}
//       <section className={styles.sectionGray}>
//         <h2 className={styles.sectionTitle}>Nossa Essência</h2>
//         <div className={styles.mvvsContainer}>
//           <div>
//             <h3>Missão</h3>
//             <p>Transformar o modo como empresas e pessoas se conectam, vendem e crescem.</p>
//           </div>
//           <div>
//             <h3>Visão</h3>
//             <p>Ser a maior rede social de negócios do mundo.</p>
//           </div>
//           <div>
//             <h3>Valores</h3>
//             <p>Inovação, Transparência, Cooperação, Justiça e Sustentabilidade.</p>
//           </div>
//         </div>
//       </section>

//       {/* 6. Contato */}
//       <section className={styles.sectionWhite}>
//         <h2 className={styles.sectionTitle}>Fale Conosco</h2>
//         <p className={styles.sectionText}>Quer nos conhecer melhor ou agendar uma demonstração? Envie um e-mail para <strong>contato@socialmarket.com</strong> ou fale conosco no Instagram <strong>@socialmarket</strong>.</p>
//       </section>

//       {/* Rodapé */}
//       <footer className={styles.footer}>
//         <p>© 2025 Social Market. Todos os direitos reservados.</p>
//         <p>Siga-nos: @socialmarket</p>
//       </footer>
//     </main>
//   );
// }
