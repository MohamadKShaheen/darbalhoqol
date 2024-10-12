import styles from "./cardDisplayer.module.css";
import Card from "@/app/components/card";

const CardDisplayer = ({ data, category }) => {
  return (
    <div className={styles.cardContainer}>
      {data[category].map((product, index) => (
        <div key={index} className={styles.card}>
          <Card image={product.image} description={product.description}></Card>
        </div>
      ))}
    </div>
  );
}

export default CardDisplayer;