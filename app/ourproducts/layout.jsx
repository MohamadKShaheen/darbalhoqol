import CategorySelector from '@/app/components/CategorySelector';

export default function OurProductsLayout({ children }) {
  return (
    <div className={"flex"}>
      <CategorySelector className={"flex-grow basis-[10%]"} />
      <main className={"flex-grow basis-[90%]"}>
        {children}
      </main>
    </div>
  );
}