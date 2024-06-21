import { FC } from "react";
import { Product } from "@/app/types";
import { ProductAttributes } from "@/components/product/productAttributes";
import ProductCardButton from "@/components/buttons/productCardButton";

interface ProductCardProps {
  sku: string;
  attributes: Product["attributes"];
}

export const ProductCard: FC<ProductCardProps> = ({ sku, attributes }) => {
  return (
    <div
      className={`
        flex flex-col divide-y divide-gray-100 rounded-md bg-white shadow-sm
      `}
    >
      <p className={"py-2 text-center uppercase"}>
        <span className={"text-xs"}>Sku:</span>{" "}
        <span className={"font-medium"}>{sku}</span>
      </p>

      <ProductAttributes attributes={attributes} />
      <ProductCardButton />
    </div>
  );
};
