'use client'
import React, { useState, useEffect } from 'react';
import styles from './carouselwithimages.module.css';



const CarouselWithImages = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slides}
        style={{transform: `translateX(-${currentImageIndex * 100}%)`}}
      >
        {images.map((image, index) => (
          <div className={styles.slideContainer} key={index}>
            <img
              alt=''
              src={image}
              className={styles.slide}
            />
          </div>
        ))}
      </div>
      {/*<div className={styles.header}>*/}
      {/*  <img src="/images/logo.png" alt="" className="w-full h-full"/>*/}
      {/*</div>*/}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWithImages;