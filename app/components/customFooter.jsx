import styles from './customFooter.module.css';

const CustomFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.third}>
          <p>
            address address address <br/>
            address address address <br/>
            address address address <br/>
          </p>
        </div>
        <div className={`${styles.third} ${styles.border} ${styles.middle}`}>
          <h2 className={styles.operatingHours}>operating hours</h2>
          <p>
            <b>Saturday:</b> 8:00 AM to 5:00 PM <br />
            <b>Sunday:</b> 8:00 AM to 5:00 PM <br />
            <b>Monday:</b> 8:00 AM to 5:00 PM <br />
            <b>Tuesday:</b> 8:00 AM to 5:00 PM <br />
            <b>Wednesday:</b> 8:00 AM to 5:00 PM <br />
            <b>Thursday:</b> 8:00 AM to 5:00 PM <br />
            <b>Friday:</b> 8:00 AM to 5:00 PM <br />
          </p>
        </div>
        <div className={`${styles.imageContainer} ${styles.third}`}>
          <img src="/images/logo.png" className={styles.image}/>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={`${styles.media} ${styles.rightBorder}`}>
          <a href="">facebook</a>
        </div>
        <div className={`${styles.media} ${styles.rightBorder}`}>
          <a href="">instagram</a>
        </div>
        <div className={`${styles.media} ${styles.rightBorder}`}>
          <a href="">email</a>
        </div>
        <div className={styles.media}>
          <a href="">whatsapp</a>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;