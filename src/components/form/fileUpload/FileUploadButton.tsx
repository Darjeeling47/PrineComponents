'use client";';

import { useRef } from "react";
import { formatFileTypes } from "./fileConvertUtils";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Field, Input } from "@headlessui/react";
import clsx from "clsx";
import Button from "@/components/atoms/button/Button";
import AlertModal from "@/components/molecules/modal/AlertModal";
import { useModal } from "@/context/ModalProvider";

export default function FileUploadButton({
  id,
  children,
  onChange,
  variant = "primary",
  rounded,
  wFit,
  allowFileTypes,
  maxFileSize,
  disabled,
}: FileUploadButtonProps) {
  const { openModal } = useModal();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const formatedFileTypes = formatFileTypes(allowFileTypes || []);

  // handle with change of value
  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Check if the file size is within the limit
    if (maxFileSize && event.target.files && !disabled) {
      const fileSize = event.target.files[0].size / 1024 / 1024; // in MB

      if (fileSize > maxFileSize) {
        // Show the error message
        openModal(
          <AlertModal
            title="File size exceeded"
            message={`The file size exceeds the limit of ${maxFileSize} MB.`}
            icon={<ExclamationTriangleIcon className="size-6" />}
            color="red"
            confirmText="Close"
          />,
        );

        // Clear the input field
        if (inputRef.current) {
          inputRef.current.value = "";
        }

        // Call the onChange function with null
        if (onChange) {
          await onChange(null);
        }
        return;
      }
    }

    if (onChange && !disabled && event.target.files) {
      onChange(event.target.files[0]);
    }
  };

  return (
    <Field
      id={`fileUploadButton-${id}`}
      className={clsx("relative", "cursor-pointer", wFit ? "w-fit" : "w-full")}
    >
      <Input
        id={`fileUploadButton-input-${id}`}
        ref={inputRef}
        type="file"
        onChange={handleChangeFile}
        disabled={disabled}
        accept={allowFileTypes?.join(",")}
        className={clsx(
          "absolute inset-0 z-10 h-full w-full",
          "opacity-0",
          "outline-none",
          // --- Disabled ---
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        )}
      />
      <Button
        id={`fileUploadButton-${id}`}
        variant={variant}
        rounded={rounded}
        disabled={disabled}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        {children}
      </Button>
    </Field>
  );
}

interface FileUploadButtonProps {
  id?: string;
  children: React.ReactNode;
  onChange?: Function;
  variant?: string;
  rounded?: boolean;
  wFit?: boolean;
  allowFileTypes?: string[];
  maxFileSize?: number; // in MB
  disabled?: boolean;
}
