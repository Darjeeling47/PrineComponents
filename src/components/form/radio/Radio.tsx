import { Radio as HeadlessRadio } from "@headlessui/react";
import clsx from "clsx";

export default function Radio({ id, value, disabled }: RadioProps) {
  return (
    <HeadlessRadio
      id={`radio-${id}`}
      key={value}
      value={value}
      disabled={disabled}
      className={clsx(
        "flex size-4 items-center justify-center",
        "rounded-full border border-gray-300",
        "transition-all duration-200",
        "outline-none",
        "group",
        // --- Disabled ---
        "data-[disabled]:cursor-not-allowed data-[disabled]:data-[checked]:border-gray-400",
        disabled
          ? "cursor-not-allowed data-[checked]:border-gray-400"
          : "cursor-pointer data-[checked]:border-gray-900",
      )}
    >
      <div
        className={clsx(
          "size-2",
          "bg-transparent",
          "rounded-full",
          "transition-all duration-200",
          "invisible",
          "group-data-[checked]:visible",
          // --- Disabled ---
          "group-data-[checked]:group-data-[disabled]:bg-gray-400",
          disabled
            ? "group-data-[checked]:bg-gray-400"
            : "group-data-[checked]:bg-gray-900",
        )}
      ></div>
    </HeadlessRadio>
  );
}

interface RadioProps {
  id?: string;
  value?: any;
  disabled?: boolean;
}
