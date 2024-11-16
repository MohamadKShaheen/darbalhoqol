import styles from './CarouselWithCards.module.css';
import Card from "@/app/components/card";

export default function CarouselWithCards() {
  // Array of cards (you can adjust these as needed)
  const cards = [
    {
      image: '/images/B1.jpeg',
      description: "Jams",
      url: '../ourproducts/Jams',
    },
    {
      image: '/images/B2.jpeg',
      description: "Pickles",
      url: '../ourproducts/Pickles',
    },
    {
      image: '/images/B3.jpeg',
      description: "Others",
      url: '../ourproducts/Others',
    },
    {
      image: '/images/B4.jpeg',
      description: "Vinegar",
      url: '../ourproducts/Vinegar',
    },
    {
      image: '/images/B5.jpeg',
      description: "Sauces",
      url: '../ourproducts/Sauces',
    },
    {
      image: '/images/B6.jpeg',
      description: "Olive Oil",
      url: '../ourproducts/OliveOil',
    },
    {
      image: '/images/B7.jpeg',
      description: "Dry",
      url: '../ourproducts/Dry',
    }
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <p>
          Our Products
        </p>
        <a href="../ourproducts" className={styles.headerLink}> </a>
      </div>
      <div className={styles.cardWrapper}>
        {cards.map((card, index) => (
          <a key={index} className={styles.card} href={card.url}>
            <Card image={card.image} description={card.description} />
          </a>
        ))}
      </div>
    </div>
  );
}