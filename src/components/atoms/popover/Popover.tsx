import { Popover as HeadlessPopover } from "@headlessui/react";

export default function Popover({ children }: PopoverProps) {
  return <HeadlessPopover>{children}</HeadlessPopover>;
}

interface PopoverProps {
  children: React.ReactNode;
}
