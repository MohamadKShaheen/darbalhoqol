'use client'
import styles from './CategorySelector.module.css';
import {useRouter} from "next/navigation";
import {useState} from "react";

const CategorySelector = ({className}) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClick = (category) => {
    router.push(`/ourproducts/${category}`);
    setSelectedCategory(category);
  }

  return (
    <div className={`${styles.sidebar} ${className}`}>
      <ul className={styles.categoryList}>
        <li
          onClick={() => handleClick("Jams")}
          style={selectedCategory === "Jams" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Jams</span>
          <span className={`${styles.sign} ${selectedCategory === "Jams" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("Pickles")}
          style={selectedCategory === "Pickles" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Pickles</span>
          <span className={`${styles.sign} ${selectedCategory === "Pickles" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("Others")}
          style={selectedCategory === "Others" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Others</span>
          <span className={`${styles.sign} ${selectedCategory === "Others" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("Vinegar")}
          style={selectedCategory === "Vinegar" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Vinegar</span>
          <span className={`${styles.sign} ${selectedCategory === "Vinegar" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("Sauces")}
          style={selectedCategory === "Sauces" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Sauces</span>
          <span className={`${styles.sign} ${selectedCategory === "Sauces" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("OliveOil")}
          style={selectedCategory === "OliveOil" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Olive Oil</span>
          <span className={`${styles.sign} ${selectedCategory === "OliveOil" ? styles.selected : ''}`}></span>
        </li>
        <li
          onClick={() => handleClick("Dry")}
          style={selectedCategory === "Dry" ? {backgroundColor: "#223521"} : {}}
        >
          <span>Dry</span>
          <span className={`${styles.sign} ${selectedCategory === "Dry" ? styles.selected : ''}`}></span>
        </li>
      </ul>
    </div>
  );
}

export default CategorySelector;