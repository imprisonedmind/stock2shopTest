import { GetProducts } from "@/app/actions";
import { ProductCard } from "@/components/product/productCard";

export async function Products() {
  const data = await GetProducts();

  return (
    <section className={"grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3"}>
      {data.map((product) => (
        <ProductCard
          key={product.sku}
          sku={product.sku}
          attributes={product.attributes}
        />
      ))}
    </section>
  );
}
