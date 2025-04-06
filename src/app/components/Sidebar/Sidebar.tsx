'use client';
import React, { JSX } from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-scroll';

interface SidebarProps {
  open: boolean;
  alternate: () => void;
}

export default function Sidebar({ open, alternate }: SidebarProps): JSX.Element {
  return (
    <div
      className={`${styles.container} ${open ? styles.open : ''}`}
      onClick={alternate}
    >
      <ul className={styles.menu}>
        {[
      { to: 'home', label: 'Início' },
      { to: 'proposal', label: 'Problema Vs Solução' },
      { to: 'platform', label: 'Plataforma' },
      { to: 'technologies', label: 'Tecnologias' },
      { to: 'ecosystem', label: 'Ecossistema' },
      { to: 'identity', label: 'Identidade' },
      { to: 'contact', label: 'Contato' }
        ].map((item) => (
          <Link
            key={item.to}
            className={styles.menuLink}
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            // exact="true"
            offset={-80}
            onClick={alternate}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}
