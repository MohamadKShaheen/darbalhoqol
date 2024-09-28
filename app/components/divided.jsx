import styles from './divided.module.css';

const Divided = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_half}>
        <div className={styles.centered_image}></div>
      </div>
      <div className={styles.second_half}>
        <div className={styles.full_image}></div>
      </div>
    </div>
  );
}

export default Divided;