import Divided from "@/app/components/divided";
import Image from "@/app/components/image"
import CarouselWithImages from "@/app/components/carouselwithimages";
import styles from "./page.module.css";

export default function AboutPage() {
  const images = [
    '/images/no1.jpg',
    '/images/no2.jpg',
    '/images/no3.jpg',
    '/images/no4.jpg',
    '/images/no5.jpg',
  ];
  const header = "About DARB ALHOOQUL";
  const text = "ADARB ALHOOQUL is a proudly Syrian-owned company with strong partnerships spanning across India, Syria, Oman, and Dubai. Our commitment to excellence has allowed us to expand into both local and international markets, exporting premium products such as olive oil, pickles, sauces, jams, and much more to the USA, Canada, Oman, the UAE, and Saudi Arabia. While we have a growing global presence, we remain deeply rooted in Egypt, where we continue to serve the local market with products that reflect our passion for quality and authenticity. At DARB ALHOOQUL, we are dedicated to delivering nature's best to your table, with a focus on artisanal craftsmanship."
  return (
    <>
      <div><Image src="/images/about.jpg" alt="" /></div>
      <div><Divided mode={2} image1="/images/logo.png" text={text} header={header}/></div>
      <div className={styles.container}><CarouselWithImages images={images} /></div>
    </>
  );
}