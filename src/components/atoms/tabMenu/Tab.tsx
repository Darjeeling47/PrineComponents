import { Radio } from "@headlessui/react";
import clsx from "clsx";

export default function Tab({ id, children, value, className }: TabProps) {
  return (
    <Radio
      id={`tab-${id}`}
      value={value}
      className={clsx(
        "flex w-fit flex-row items-center justify-center gap-x-2 p-2",
        "text-nowrap",
        "bg-white text-gray-600 hover:text-gray-900",
        "rounded-md",
        "transition-all duration-200",
        "cursor-pointer outline-none",
        "data-[checked]:bg-gray-200 data-[checked]:text-gray-900",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </Radio>
  );
}

interface TabProps {
  id?: any;
  children: React.ReactNode;
  value: any;
  className?: string;
  disabled?: boolean;
}
