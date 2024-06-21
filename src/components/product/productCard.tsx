import { FC } from "react";
import { Product } from "@/app/types";
import { Button } from "@/components/buttons/button";

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
      {Object.entries(attributes).map(([key, value], index) => (
        <div
          key={key + index}
          className={"flex flex-row items-center justify-between p-2"}
        >
          <p className={"text-sm font-medium"}>{key}</p>
          <p className={"text-xs"}>{value}</p>
        </div>
      ))}
      <div className={"p-2"}>
        <Button
          title={`Edit ${sku}`}
          callback={() => console.log("clicked")}
          style={"w-full"}
        />
      </div>
    </div>
  );
};
