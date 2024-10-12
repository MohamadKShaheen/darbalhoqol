import CardDisplayer from "@/app/components/cardDisplayer";
import products from "@/public/Data/products";

const category = ({ params }) => {
  const category = params.category;

  return (
    <CardDisplayer data={products} category={category}/>
  );
}

export default category;