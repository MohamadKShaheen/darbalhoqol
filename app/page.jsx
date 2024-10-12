import CarouselWithImages from "@/app/components/carouselwithimages";
import CarouselWithCards from "@/app/components/carouselwithcards";
import Divided from "@/app/components/divided";
import Map from "@/app/components/map";

const Home = () => {
  return (
    <main>
      <CarouselWithImages />
      <CarouselWithCards />
      <Divided />
      <Map />
    </main>
  );
}

export default Home;