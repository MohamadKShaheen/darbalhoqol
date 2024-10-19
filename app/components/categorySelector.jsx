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
        <li onClick={() => handleClick("Jams")} style={selectedCategory === "Jams" ? {backgroundColor: "#223521"} : {}}>Jams</li>
        <li onClick={() => handleClick("Pickles")} style={selectedCategory === "Pickles" ? {backgroundColor: "#223521"} : {}}>Pickles</li>
        <li onClick={() => handleClick("Others")} style={selectedCategory === "Others" ? {backgroundColor: "#223521"} : {}}>Others</li>
        <li onClick={() => handleClick("Vinegar")} style={selectedCategory === "Vinegar" ? {backgroundColor: "#223521"} : {}}>Vinegar</li>
        <li onClick={() => handleClick("Sauces")} style={selectedCategory === "Sauces" ? {backgroundColor: "#223521"} : {}}>Sauces</li>
        <li onClick={() => handleClick("OliveOil")} style={selectedCategory === "OliveOil" ? {backgroundColor: "#223521"} : {}}>Olive Oil</li>
        <li onClick={() => handleClick("Dry")} style={selectedCategory === "Dry" ? {backgroundColor: "#223521"} : {}}>Dry</li>
      </ul>
    </div>
  );
}

export default CategorySelector;