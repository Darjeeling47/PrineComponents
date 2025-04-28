import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

export default function TabGroup({
  id,
  value,
  onChange,
  children,
  className,
}: TabGroupProps) {
  return (
    <RadioGroup
      id={`tabGroup-${id}`}
      value={value}
      onChange={onChange}
      className={clsx(
        "flex w-fit max-w-full flex-row gap-2 overflow-x-auto p-2",
        "bg-white",
        "rounded-md border border-gray-200",
        "transition-all duration-200",
        "outline-none",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </RadioGroup>
  );
}

interface TabGroupProps {
  id?: string;
  value: any;
  onChange: (value: any) => void;
  children: React.ReactNode;
  className?: string;
}
