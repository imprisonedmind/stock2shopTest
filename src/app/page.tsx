import { GetProducts } from "@/app/actions";

export default function Home() {
  return (
    <main className={"mx-auto max-w-[760px]"}>
      <Products />
    </main>
  );
}

export async function Products() {
  const data = await GetProducts();

  return (
    <div>
      {data.map((product) => (
        <div key={product.sku}>{product.sku}</div>
      ))}
    </div>
  );
}
