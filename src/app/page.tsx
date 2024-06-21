import { Products } from "@/components/product/product";

const revalidate = 0;

export default function Home() {
  return (
    <main className={"mx-auto max-w-[760px] p-4"}>
      <Products />
    </main>
  );
}
