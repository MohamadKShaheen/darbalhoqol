import styles from './card.module.css';

const Card = ({image, description}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={image ?? ''} className={styles.image}>
        </img>
      </div>
      <div className={styles.description}>
        <p>
          { description ?? '' }
        </p>
      </div>
    </div>
  );
}

export default Card;