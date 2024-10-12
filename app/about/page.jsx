import Divided from "@/app/components/divided";
import Image from "@/app/components/image"
import CarouselWithImages from "@/app/components/carouselwithimages";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <Image src="/images/A1.jpg" alt="" />
      <Divided />
      <div className={styles.container}>
        <CarouselWithImages />
      </div>
    </>
  );
}