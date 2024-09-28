'use client'
import { useState } from "react";
import styles from './CarouselWithCards.module.css';
import Card from "@/app/components/card";

export default function CarouselWithCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of cards (you can adjust these as needed)
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7"];

  const cardsToShow = 3; // Number of visible cards

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? 0 : prev - 1 // Prevents scrolling past the first card
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= cards.length - cardsToShow ? prev : prev + 1 // Prevents scrolling past the last visible set
    );
  };

  return (
    <div className={styles.carouselContainer}>
      {currentIndex > 0 && (
        <button className={`${styles.chevron} ${styles.left}`} onClick={prevSlide}>
          {"<"}
        </button>
      )}

      <div className={styles.cardWrapper}>
        <div
          className={styles.cardContainer}
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <Card />
            </div>
          ))}
        </div>
      </div>

      {currentIndex < cards.length - cardsToShow && (
        <button className={`${styles.chevron} ${styles.right}`} onClick={nextSlide}>
          {">"}
        </button>
      )}
    </div>
  );
}