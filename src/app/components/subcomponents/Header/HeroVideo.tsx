// src/components/HeroVideo.tsx
'use client';
import React from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src="https://www.youtube.com/embed/r1c2MmiuCi8"
        title="Pitch Social Market"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.video}
      ></iframe>
    </div>
  );
}
