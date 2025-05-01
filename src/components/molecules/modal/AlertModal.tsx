"use client";

import { useModal } from "@/context/ModalProvider";
import Modal from "../../atoms/modal/Modal";
import Button from "@/components/atoms/button/Button";
import clsx from "clsx";
import { colorMapperChip, colorMapperButton } from "@/utils/color";

export default function AlertModal({
  id,
  color = "gray",
  icon,
  title,
  message,
  confirmText,
  onConfirm,
}: AlertModalProps) {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    closeModal();
  };

  return (
    <Modal id={id}>
      {/* Body content */}
      <div
        className={clsx(
          "flex w-full flex-col items-center justify-center gap-y-2",
        )}
      >
        {/* Icon and title */}
        <div
          className={clsx("flex flex-col items-center justify-center gap-y-2")}
        >
          <div
            id={`alertModal-icon-${id}`}
            className={clsx(
              "h-fit w-fit p-3",
              "rounded-full",
              // --- Color / Background (Custom) ---
              colorMapperChip(color),
            )}
          >
            {icon}
          </div>
          <h1
            id={`alertModal-title-${id}`}
            className={clsx("text-center text-lg font-medium")}
          >
            {title}
          </h1>
        </div>

        {/* Message */}
        <p
          id={`alertModal-message-${id}`}
          className={clsx("text-center", "text-gray-600")}
        >
          {message}
        </p>
      </div>

      <Button
        id={`alertModal-confirm-${id}`}
        variant="custom"
        className={colorMapperButton(color)}
        onClick={handleConfirm}
      >
        {confirmText}
      </Button>
    </Modal>
  );
}

interface AlertModalProps {
  id?: string;
  color?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  message: React.ReactNode;
  confirmText: React.ReactNode;
  onConfirm?: Function;
}
