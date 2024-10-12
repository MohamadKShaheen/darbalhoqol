import Divided from "@/app/components/divided";
import Image from "@/app/components/image"
import CarouselWithImages from "@/app/components/carouselwithimages";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <div><Image src="/images/A1.jpg" alt="" /></div>
      <div><Divided /></div>
      <div className={styles.container}><CarouselWithImages /></div>
    </>
  );
}