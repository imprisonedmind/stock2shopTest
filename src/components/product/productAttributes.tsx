import { FC, Fragment } from "react";
import { Product } from "@/app/types";

interface ProductAttributesProps {
  attributes: Product["attributes"];
}

export const ProductAttributes: FC<ProductAttributesProps> = ({
  attributes,
}) => {
  return (
    <Fragment>
      {Object.entries(attributes).map(([key, value], index) => (
        <div
          key={key + index}
          className={"flex flex-row items-center justify-between p-2"}
        >
          <p className={"text-sm font-medium"}>{key}</p>
          <p className={"text-xs"}>{value}</p>
        </div>
      ))}
    </Fragment>
  );
};
