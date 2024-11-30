import CategorySelector from '@/app/components/categorySelector';

export default function OurProductsLayout({ children }) {
  return (
    <div className={"flex"}>
      <CategorySelector className={"flex-grow-0 flex-shrink-0 basis-[10%]"} />
      <main className={"flex-grow basis-[90%] min-h-[1500px]"}>
        {children}
      </main>
    </div>
  );
}