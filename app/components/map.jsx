import styles from './map.module.css';

const Map = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://globalmaps.org/wp-content/uploads/2023/10/World-Map-white-2048x1171.png" alt=""/>
    </div>
  );
}

export default Map;