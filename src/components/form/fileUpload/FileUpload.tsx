"use client";

import { formatFileTypes } from "./fileConvertUtils";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useModal } from "@/context/ModalProvider";
import AlertModal from "@/components/molecules/modal/AlertModal";

export default function FileUpload({
  id,
  onChange,
  label,
  description,
  allowFileTypes,
  maxFileSize,
  showAllowFileTypes,
  showMaxFileSize,
  required,
  disabled,
}: FileUploadProps) {
  // File reference
  const { openModal } = useModal();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formatedFileTypes = formatFileTypes(allowFileTypes || []);

  // Handle the change event
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
      id={`fileUpload-${id}`}
      className={clsx("flex w-full flex-col gap-y-2")}
    >
      {label && (
        <Label
          id={`fileUpload-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Input
        id={`fileUpload-input-${id}`}
        ref={inputRef}
        type={"file"}
        disabled={disabled}
        onChange={handleChangeFile}
        accept={allowFileTypes?.join(",")}
        className={clsx(
          "h-10 px-3 py-2",
          "text-gray-900 placeholder:text-gray-400",
          "rounded-md border border-gray-300",
          "shadow-sm transition-all duration-200",
          "outline-none file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-gray-900 file:transition-all file:duration-200 file:hover:text-gray-600",
          // --- Disabled ---
          disabled
            ? "cursor-not-allowed bg-gray-100"
            : "cursor-pointer bg-white",
        )}
      />
      {(description ||
        (showMaxFileSize && maxFileSize) ||
        (showAllowFileTypes && allowFileTypes)) && (
        <Description
          id={`fileUpload-description-${id}`}
          className={clsx(
            "text-sm",
            "text-gray-600",
            "transition-all duration-200",
          )}
        >
          {description}
          {showMaxFileSize && maxFileSize && (
            <span className={clsx("font-medium")}>
              {" "}
              | Max file size: {maxFileSize} MB{" "}
            </span>
          )}
          {showAllowFileTypes &&
            allowFileTypes &&
            allowFileTypes.length > 0 && (
              <span className={clsx("font-medium")}>
                | Allowed file types: {formatedFileTypes}
              </span>
            )}
        </Description>
      )}
    </Field>
  );
}

interface FileUploadProps {
  id?: string;
  onChange?: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  allowFileTypes?: string[];
  maxFileSize?: number; // in MB
  showAllowFileTypes?: boolean;
  showMaxFileSize?: boolean;
  required?: boolean;
  disabled?: boolean;
}
