"use client";
import { Button } from "@/components/buttons/button";
import QuickViewWrapper from "@/components/modals/quickViewWrapper";
import { useModalContext } from "@/lib/modalContext";

export default function ProductCardButton() {
  const { openModal } = useModalContext();

  return (
    <div className={"p-2"}>
      <Button
        title={`Edit`}
        callback={() => openModal(<QuickViewWrapper />)}
        style={"w-full p-2"}
      />
    </div>
  );
}
