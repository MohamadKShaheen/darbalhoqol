import styles from './divided.module.css';

const Divided = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_half}>
        <div className={styles.centered_image}>
          <img src="/images/factory.jpeg"/>
        </div>
      </div>
      <div className={styles.second_half}>
        <div className={styles.full_image}>
          <img src="/images/field.jpg"/>
        </div>
        <div className={styles.text}>
          <h2 className={styles.header}>
            Why DARB ALHOOQUL?
          </h2>
          <p>
            At DARB ALHOOQUL, we blend tradition with innovation to deliver the finest quality products. From carefully selected olives and fresh vegetables to artisanal pickles, sauces, and jams, every product is crafted with a commitment to purity and excellence. Our farm-to-table approach ensures that each item is sustainably sourced and packed with natural flavors, bringing you the best that nature has to offer. Trust DARB ALHOOQUL for premium products that are as fresh as they are authentic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Divided;