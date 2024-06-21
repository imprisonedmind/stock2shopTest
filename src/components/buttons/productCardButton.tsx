"use client";
import { Button } from "@/components/buttons/button";
import { useModalContext } from "@/lib/modalContext";
import { ProductOverview } from "@/components/product/productOverview";

import { FC } from "react";
import { InitialProductValues } from "@/app/types";

interface ProductCardButtonProps {
  initialValues: InitialProductValues;
}

export const ProductCardButton: FC<ProductCardButtonProps> = ({
  initialValues,
}) => {
  const { openModal } = useModalContext();

  return (
    <div className={"p-2"}>
      <Button
        title={`Edit`}
        callback={() =>
          openModal(<ProductOverview initialValues={initialValues} />)
        }
        style={"w-full p-2"}
      />
    </div>
  );
};
