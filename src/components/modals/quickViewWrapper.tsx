"use client";
import { useModalContext } from "@/lib/modalContext";

export default function QuickViewWrapper() {
  const { isOpen } = useModalContext();

  return (
    <div
      className={`
        h-[100vh] w-[80svw] bg-gray-50 transition duration-300 ease-out sm:w-[60svw]
        md:w-[30svw]
      `}
    >
      <p>tesadasd</p>
    </div>
  );
}
