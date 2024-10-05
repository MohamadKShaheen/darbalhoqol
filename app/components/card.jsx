import styles from './card.module.css';

const Card = ({image, description}) => {
  return (
    <div className={styles.container}>
      <img src={image ?? ''} className={styles.image} />
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;