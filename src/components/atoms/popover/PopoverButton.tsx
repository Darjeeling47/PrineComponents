import { PopoverButton as HeadlessPopoverButton } from "@headlessui/react";
import clsx from "clsx";

export default function PopoverButton({
  id,
  children,
  className,
}: PopoverButtonProps) {
  return (
    <HeadlessPopoverButton
      id={`popoverButton-${id}`}
      className={clsx(className)}
    >
      {children}
    </HeadlessPopoverButton>
  );
}

interface PopoverButtonProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}
