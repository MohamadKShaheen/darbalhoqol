import CarouselWithImages from "@/app/components/carouselwithimages";
import CarouselWithCards from "@/app/components/carouselwithcards";
import Divided from "@/app/components/divided";
import Map from "@/app/components/map";
import CustomFooter from "@/app/components/customFooter";

export default function Home() {
  return (
    <main>
      <CarouselWithImages />
      <CarouselWithCards />
      <Divided />
      <Map />
      <CustomFooter />
    </main>
  );
}
