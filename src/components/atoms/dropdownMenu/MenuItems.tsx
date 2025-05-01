import { MenuItems as HeadlessMenuItems } from "@headlessui/react";
import clsx from "clsx";

export default function MenuItems({
  id,
  children,
  anchor = "bottom",
  className,
}: MenuItemsProps) {
  return (
    <HeadlessMenuItems
      id={`menu-items-${id}`}
      transition
      anchor={anchor}
      className={clsx(
        "z-[500] min-w-44 max-w-72 p-2 [--anchor-gap:0.25rem]",
        "bg-white",
        "rounded-xl border border-gray-200",
        "transition-all duration-200 ease-in-out",
        "outline-none",
        "data-[closed]:scale-95 data-[closed]:opacity-0",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </HeadlessMenuItems>
  );
}

interface MenuItemsProps {
  id?: string;
  children: React.ReactNode;
  anchor?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top start"
    | "top end"
    | "bottom start"
    | "bottom end";
  className?: string;
}
