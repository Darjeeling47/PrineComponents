import { Radio as HeadlessRadio } from "@headlessui/react";
import clsx from "clsx";

export default function RadioBox({
  id,
  children,
  value,
  className,
  disabled,
}: RadioBoxProps) {
  return (
    <HeadlessRadio
      id={`radioBox-${id}`}
      key={value}
      value={value}
      disabled={disabled}
      className={clsx(
        "flex w-full flex-row items-center justify-center gap-x-2 rounded-md p-2",
        "bg-gray-100 text-gray-900",
        "transition-all duration-200",
        "outline-none",
        "data-[checked]:text-white",
        // --- Disabled ---
        "data-[disabled]:cursor-not-allowed data-[disabled]:data-[checked]:bg-gray-400",
        disabled
          ? "cursor-not-allowed data-[checked]:bg-gray-400"
          : "cursor-pointer data-[checked]:bg-gray-900",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </HeadlessRadio>
  );
}

interface RadioBoxProps {
  id?: any;
  children: React.ReactNode;
  value: any;
  className?: string;
  disabled?: boolean;
}
