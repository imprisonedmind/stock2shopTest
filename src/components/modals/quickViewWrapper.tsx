"use client";
import { FC, ReactNode } from "react";
import { useModalContext } from "@/lib/modalContext";
import { QuickViewTitle } from "@/components/modals/quickViewTitle";

interface QuickViewWrapperProps {
  children: ReactNode;
  title: string;
}

export const QuickViewWrapper: FC<QuickViewWrapperProps> = ({
  children,
  title,
}) => {
  const { closeModal } = useModalContext();

  return (
    <div
      className={`
        h-[100vh] w-[80svw] min-w-[300px] max-w-[90svw] divide-y divide-gray-200 
        bg-gray-50 transition duration-300 ease-out sm:w-[60svw] md:w-[30svw]
      `}
    >
      <QuickViewTitle title={title} callback={() => closeModal()} />
      {children}
    </div>
  );
};
