import CarouselWithImages from "@/app/components/carouselwithimages";
import CarouselWithCards from "@/app/components/carouselwithcards";
import Divided from "@/app/components/divided";
import Map from "@/app/components/map";

const Home = () => {
  return (
    <main>
      <div><CarouselWithImages /></div>
      <div className="mt-[2vw]"><CarouselWithCards /></div>
      <div className="mt-[4vw] mb-[4vw]"><Divided /></div>
      <div><Map /></div>
    </main>
  );
}

export default Home;