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
        "rounded-full border",
        "transition-all duration-200",
        "outline-none",
        "group",
        // --- Disabled ---
        disabled
          ? "cursor-not-allowed border-gray-300 data-[checked]:border-gray-400"
          : "cursor-pointer border-gray-200 data-[checked]:border-gray-900",
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
