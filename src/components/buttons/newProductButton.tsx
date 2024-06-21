"use client";
import { Button } from "@/components/buttons/button";
import { useModalContext } from "@/lib/modalContext";
import NewProductModal from "@/components/product/newProductModal";

export default function NewProductButton() {
  const { openModal } = useModalContext();

  return (
    <Button
      title={"New Product"}
      callback={() => openModal(<NewProductModal />)}
      style={"!from-gray-100 !to-gray-50 !text-gray-950"}
    />
  );
}
