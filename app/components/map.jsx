import styles from './map.module.css';

const Map = () => {
  const customers = [
    {
      className: "canada",
      flag: '🇨🇦',
    },
    {
      className: "oman",
      flag: '🇴🇲',
    },
    {
      className: "UAE",
      flag: '🇦🇪',
    },
    {
      className: "saudi",
      flag: '🇸🇦',
    },
    {
      className: "syria",
      flag: '🇸🇾',
    },
    {
      className: "egypt",
      flag: '🇪🇬',
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
          <div className={`${styles[customer.className]} w-[15px]`} key={index}>
            <div className='relative w-full h-full'>
              <img src="/images/pin.svg" className={styles.pin}/>
              <div className={styles.flag}>{customer.flag}</div>
            </div>
          </div>
        ))}
        <img className={styles.image} src="/images/World_map.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Map;