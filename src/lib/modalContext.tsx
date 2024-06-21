"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { Modal } from "@/components/modals/Modal";

type ModalContextValue = {
  isOpen: boolean;
  openModal: (arg0: ReactNode) => void;
  closeModal: () => void;
};

const defaultValues: ModalContextValue = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextValue>(defaultValues);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (modalChildren: ReactNode) => {
    setIsOpen(true);
    setModalChildren(modalChildren);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      <div ref={modalRef} />
      <Modal modalChildren={modalChildren} modalRef={modalRef.current!} />
      {children}
    </ModalContext.Provider>
  );
};
