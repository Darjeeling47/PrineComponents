import { PopoverBackdrop as HeadlessPopoverBackdrop } from "@headlessui/react";
import clsx from "clsx";

export default function PopoverBackdrop({ className }: PopoverBackdropProps) {
  return (
    <HeadlessPopoverBackdrop
      className={clsx(
        "fixed inset-0",
        // --- Custom ---
        className,
      )}
    />
  );
}

interface PopoverBackdropProps {
  className?: string;
}
