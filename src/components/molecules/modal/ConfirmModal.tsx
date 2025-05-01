"use client";

import { useModal } from "@/context/ModalProvider";
import Modal from "../../atoms/modal/Modal";
import Button from "@/components/atoms/button/Button";
import clsx from "clsx";
import { colorMapperChip, colorMapperButton } from "@/utils/color";

export default function ConfirmModal({
  id,
  color = "gray",
  icon,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
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
            id={`confirmModal-icon-${id}`}
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
            id={`confirmModal-title-${id}`}
            className={clsx("text-center text-lg font-medium")}
          >
            {title}
          </h1>
        </div>

        {/* Message */}
        <p
          id={`confirmModal-message-${id}`}
          className={clsx("text-center", "text-gray-600")}
        >
          {message}
        </p>
      </div>

      <div className={clsx("flex w-full flex-row gap-x-3")}>
        <Button
          id={`confirmModal-confirm-${id}`}
          variant="custom"
          className={colorMapperButton(color)}
          onClick={handleConfirm}
        >
          {confirmText}
        </Button>
        <Button
          id={`confirmModal-cancel-${id}`}
          variant="secondary"
          onClick={handleCancel}
        >
          {cancelText ? cancelText : "Cancel"}
        </Button>
      </div>
    </Modal>
  );
}

interface ConfirmModalProps {
  id?: string;
  color?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  message: React.ReactNode;
  confirmText: React.ReactNode;
  cancelText?: React.ReactNode;
  onConfirm?: Function;
  onCancel?: Function;
}
