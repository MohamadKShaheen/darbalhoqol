import CarouselWithImages from "@/app/components/carouselwithimages";
import CarouselWithCards from "@/app/components/carouselwithcards";
import Divided from "@/app/components/divided";
import Map from "@/app/components/map";

const Home = () => {
  const images = [
    '/images/A1.jpg',
    '/images/A3.jpg',
    '/images/A4.jpg',
  ];
  const header = "Why DARB ALHOOQUL?";
  const text = "At DARB ALHOOQUL, we blend tradition with innovation to deliver the finest quality products. From carefully selected olives and fresh vegetables to artisanal pickles, sauces, and jams, every product is crafted with a commitment to purity and excellence. Our farm-to-table approach ensures that each item is sustainably sourced and packed with natural flavors, bringing you the best that nature has to offer. Trust DARB ALHOOQUL for premium products that are as fresh as they are authentic."
  return (
    <main>
      <div><CarouselWithImages images={images} /></div>
      <div className="mt-[2vw]"><CarouselWithCards /></div>
      <div className="mt-[4vw] mb-[4vw]"><Divided mode={1} image1="/images/factory.jpeg"  image2="/images/field.jpg" text={text} header={header}/></div>
      <div><Map /></div>
    </main>
  );
}

export default Home;