import styles from './CarouselWithCards.module.css';
import Card from "@/app/components/card";

export default function CarouselWithCards() {
  // Array of cards (you can adjust these as needed)
  const cards = [
    {
      image: '/images/B1.jpeg',
      description: "Jams",
    },
    {
      image: '/images/B2.jpeg',
      description: "Pickles",
    },
    {
      image: '/images/B3.jpeg',
      description: "Others",
    },
    {
      image: '/images/B4.jpeg',
      description: "Vinegar",
    },
    {
      image: '/images/B5.jpeg',
      description: "Sauces",
    },
    {
      image: '/images/B6.jpeg',
      description: "Olive Oil",
    },
    {
      image: '/images/B7.jpeg',
      description: "Dry",
    }
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <p>
          Our Products
        </p>
      </div>
      <div className={styles.cardWrapper}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <Card image={card.image} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}