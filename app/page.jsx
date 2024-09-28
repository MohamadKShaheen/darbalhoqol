import CarouselWithImages from "@/app/components/carouselwithimages";
import CarouselWithCards from "@/app/components/carouselwithcards";
import Divided from "@/app/components/divided";

export default function Home() {
  return (
    <main>
      <CarouselWithImages />
      <CarouselWithCards />
      <Divided />
    </main>
  );
}
