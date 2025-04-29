import { Checkbox as HeadlessCheckbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Checkbox({
  id,
  value,
  onClick,
  disabled,
}: CheckBoxProps) {
  // Handle the change event
  const handleCheck = () => {
    if (onClick && !disabled) {
      onClick(!value);
    }
  };

  return (
    <HeadlessCheckbox
      id={`checkbox-${id}`}
      checked={value}
      onChange={handleCheck}
      className={clsx(
        "flex h-6 w-6 items-center justify-center p-1",
        "rounded-md border border-gray-200",
        "transition-all duration-200",
        "outline-none",
        "group",
        // --- Disabled ---
        disabled
          ? "cursor-not-allowed bg-gray-100 data-[checked]:bg-gray-400"
          : "cursor-pointer bg-white data-[checked]:bg-gray-900",
      )}
    >
      <CheckIcon
        className={clsx(
          "size-4",
          "text-white",
          "transition-all duration-200",
          "invisible",
          "group-data-[checked]:visible",
        )}
        strokeWidth={3.1}
      />
    </HeadlessCheckbox>
  );
}

interface CheckBoxProps {
  id?: string;
  value: boolean;
  onClick: Function;
  disabled?: boolean;
}
