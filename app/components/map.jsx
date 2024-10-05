import styles from './map.module.css';

const Map = () => {
  const customers = [
    {
      className: "canada"
    },
    {
      className: "oman",
    },
    {
      className: "UAE"
    },
    {
      className: "saudi"
    },
    {
      className: "syria"
    },
    {
      className: "egypt"
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.mapHeader}>
        <p>
          Our Customers
        </p>
      </div>
      <div className={styles.secondContainer}>
        {customers.map((customer, index) => (
          <img src="/images/pin.svg" alt="" className={styles[customer.className]} key={index}/>
        ))}
        <img className={styles.image} src="/images/World_map.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Map;