'use client';
import React, { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useScroll } from '../../resources/useScroll';
import { navbarAnimation } from '../../resources/animations';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logo from '../../assets/smlogo.png';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  open: boolean;
  alternate: () => void;
}

export default function Navbar({ open, alternate }: NavbarProps): JSX.Element {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const returnTop = () => {
    scroll.scrollToTop();
  };

  const [element, controls] = useScroll();

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'proposal', label: 'Problema Vs Solução' },
    { id: 'platform', label: 'Plataforma' },
    { id: 'technologies', label: 'Tecnologias' },
    { id: 'ecosystem', label: 'Ecossistema' },
    { id: 'identity', label: 'Identidade' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <motion.div
      className={`${styles.container} ${scrollNav ? styles.containerScrolled : ''}`}
      ref={element}
      variants={navbarAnimation}
      initial="show"
      animate={controls}
    >
      <Image src={logo} alt="Logo" className={styles.logo} onClick={returnTop} />
      <ul className={styles.menu}>
        {navItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              smooth
              duration={500}
              spy
              offset={-80}
              className={styles.menuLink}
              activeClass="active"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <a className={styles.button} onClick={alternate}>
        <FaBars />
      </a>
    </motion.div>
  );
}
