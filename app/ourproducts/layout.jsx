import CategorySelector from '@/app/components/CategorySelector';

export default function OurProductsLayout({ children }) {
  return (
    <div className={"flex"}>
      <CategorySelector className={"flex-grow-[1]"} />
      <main className={"flex-grow-[18]"}>
        {children}
      </main>
    </div>
  );
}