"use client";
import { Button } from "@/components/buttons/button";
import { useModalContext } from "@/lib/modalContext";
import QuickViewWrapper from "@/components/modals/quickViewWrapper";

export default function NewProductButton() {
  const { openModal } = useModalContext();

  return (
    <Button
      title={"New Product"}
      callback={() => openModal(<QuickViewWrapper />)}
      style={"!from-gray-100 !to-gray-50 !text-gray-950"}
    />
  );
}
