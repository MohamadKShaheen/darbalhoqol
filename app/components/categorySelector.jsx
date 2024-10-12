'use client'
import styles from './CategorySelector.module.css';
import {useRouter} from "next/navigation";

const CategorySelector = ({className}) => {
  const router = useRouter();
  const handleClick = (category) => {
    router.push(`/ourproducts/${category}`);
  }

  return (
    <div className={`${styles.sidebar} ${className}`}>
      <ul className={styles.categoryList}>
        <li onClick={() => handleClick("Jams")}>Jams</li>
        <li onClick={() => handleClick("Pickles")}>Pickles</li>
        <li onClick={() => handleClick("Others")}>Others</li>
        <li onClick={() => handleClick("Vinegar")}>Vinegar</li>
        <li onClick={() => handleClick("Sauces")}>Sauces</li>
        <li onClick={() => handleClick("OliveOil")}>Olive Oil</li>
        <li onClick={() => handleClick("Dry")}>Dry</li>
      </ul>
    </div>
  );
}

export default CategorySelector;