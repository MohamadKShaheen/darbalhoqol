import CardDisplayer from "@/app/components/cardDisplayer";
import products from "@/public/Data/products";

const OurProducts = () => {
  return (
    <CardDisplayer data={products} category="Main"/>
  );
}

export default OurProducts;