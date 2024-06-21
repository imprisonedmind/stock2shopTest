import { FC } from "react";
import { Product } from "@/app/types";
import { Button } from "@/components/buttons/button";
import { ProductAttributes } from "@/components/product/productAttributes";

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

      <div className={"p-2"}>
        <Button
          title={`Edit`}
          callback={() => console.log("clicked")}
          style={"w-full p-2"}
        />
      </div>
    </div>
  );
};
