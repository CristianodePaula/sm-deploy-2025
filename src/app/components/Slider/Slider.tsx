'use client';
import React, { JSX, useState } from 'react';
import styles from './Slider.module.css';
import { dataSlide } from '../../../app/data';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useScroll } from '../../resources/useScroll';
import { sliderAnimation } from '../../resources/animations';
import { motion } from 'framer-motion';
import { AboutProps } from '../About/About';

export default function Slider({ id = 'identity' }: AboutProps): JSX.Element {
  const [slideIndex, setSlideIndex] = useState(0);
  const [element, controls] = useScroll();

  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : dataSlide.length - 1);
    } else {
      setSlideIndex(slideIndex < dataSlide.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div id={id} className={styles.container} ref={element}>
      <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick('left')}>
        <FaAngleDoubleLeft />
      </div>

      <div
        className={styles.sliders}
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
      >
        {dataSlide.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <motion.img
              className={styles.image}
              src={typeof slide.imageUrl === 'string' ? slide.imageUrl : slide.imageUrl.src}
              alt={`Slide ${index}`}
              initial="hidden"
              animate={controls}
              variants={sliderAnimation}
            />
            <motion.h1 className={styles.title} variants={sliderAnimation} animate={controls}>
              {slide.title}
            </motion.h1>
            <motion.p className={styles.paragraph} variants={sliderAnimation} animate={controls}>
              {slide.desc}
            </motion.p>
          </div>
        ))}
      </div>

      <div className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick('right')}>
        <FaAngleDoubleRight />
      </div>
    </div>
  );
}