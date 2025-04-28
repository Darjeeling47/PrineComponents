"use client";

import { useContext, useState, createContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { checkIsMobile } from "@/utils/device";
import clsx from "clsx";

// Context that provides the state and functions for the modal
type ModalContextType = {
  isModalOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  isModalLocked: boolean;
  lockModal: () => void;
  unlockModal: () => void;
};

// Create a context for the modal
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalProvider component that wraps the application and provides the modal context
// It manages the state of the modal (open/close) and provides functions to control it
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLocked, setIsModalLocked] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalLocked) return;
    setIsModalOpen(false);
    setContent(null);
  };

  const lockModal = () => {
    setIsModalLocked(true);
  };

  const unlockModal = () => {
    setIsModalLocked(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isModalLocked,
        lockModal,
        unlockModal,
      }}
    >
      {children}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal-backdrop"
            className={clsx(
              // --- Layout / Spacing ---
              "fixed inset-0 z-[1000] flex justify-center p-2 md:p-4",
              // --- Layout / Spacing (Custom) ---
              checkIsMobile() ? "items-end" : "items-center",
              // --- Color / Background ---
              "bg-gray-100/50",
              // --- Effect ---
              "backdrop-blur",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={closeModal}
            aria-hidden="true"
          >
            <div onClick={(e) => e.stopPropagation()}>{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
