"use client";
import { Button } from "@/components/buttons/button";
import { useModalContext } from "@/lib/modalContext";
import { ProductOverview } from "@/components/product/productOverview";

import { FC } from "react";
import { Product } from "@/app/types";

interface ProductCardButtonProps {
  initialValues: Product;
}

export const ProductCardButton: FC<ProductCardButtonProps> = ({
  initialValues,
}) => {
  const { openModal } = useModalContext();

  return (
    <div className={"flex h-full flex-col justify-end p-2"}>
      <Button
        title={`Edit`}
        callback={() =>
          openModal(
            <ProductOverview
              initialValues={initialValues}
              title={`Edit ${initialValues.sku}`}
            />,
          )
        }
        style={"w-full p-2 h-fit"}
      />
    </div>
  );
};
