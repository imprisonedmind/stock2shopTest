"use client";
import { FC, Fragment, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "@/lib/modalContext";

interface ModalProps {
  modalChildren: ReactNode;
  modalRef: HTMLDivElement;
}

export const Modal: FC<ModalProps> = ({ modalChildren, m, modalRef }) => {
  const { isOpen, closeModal } = useModalContext();

  useEffect(() => {
    const modalChildren = document.getElementById("modalChildren");

    const handleClickOutside = (event: MouseEvent) => {
      if (modalChildren && !modalChildren.contains(event.target as Node)) {
        isOpen && closeModal();
      }
    };

    if (typeof window !== "undefined" && isOpen) {
      document.addEventListener("click", handleClickOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [isOpen, closeModal]);

  return (
    <Fragment>
      {modalRef?.current &&
        isOpen &&
        createPortal(
          <div
            className={`
            absolute left-0 top-0 flex h-[100svh] w-[100svw] justify-end bg-gray-950/10 
            drop-shadow-md
          `}
          >
            <div id={"modalChildren"}>{modalChildren}</div>
          </div>,
          modalRef.current,
        )}
    </Fragment>
  );
};
