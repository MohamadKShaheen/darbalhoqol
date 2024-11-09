import CardDisplayer from "@/app/components/cardDisplayer";
import products from "@/public/Data/products";

const OurProducts = () => {
  return (
    <CardDisplayer data={products["Main"]} />
  );
}

export default OurProducts;