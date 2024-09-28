'use client'
import React, { useState, useEffect } from 'react';
import styles from './carouselwithimages.module.css';

const images = [
  'https://images.stockcake.com/public/e/b/a/eba91e95-1a4f-4420-addf-82a46ce2e54c_large/cardinal-in-snow-stockcake.jpg',
  'https://images.stockcake.com/public/0/7/7/077d1b67-4bb0-439b-b91f-7dfbe235c809_large/lighthouse-at-night-stockcake.jpg',
  'https://images.stockcake.com/public/f/7/a/f7a33c09-22e0-482c-b5f3-823d1fb60143_large/elderly-man-reading-stockcake.jpg',
];

const CarouselWithImages = () => {
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
          <img
            key={index}
            alt=''
            src={image}
            className={styles.slide}
          />
        ))}
      </div>
      <div className={styles.header}>
        <p>
          Fresh Produce Delivery
        </p>
      </div>
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