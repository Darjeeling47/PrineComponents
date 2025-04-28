import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Toggle({ id, onChange, value, disabled }: ToggleProps) {
  // Handle the change event
  const handleCheck = () => {
    if (onChange && !disabled) {
      onChange(!value);
    }
  };

  return (
    <Switch
      id={`toggle-${id}`}
      checked={value}
      onChange={handleCheck}
      disabled={disabled}
      className={clsx(
        "inline-flex h-6 w-11 items-center rounded-full",
        "transition duration-200",
        "group",
        // --- Disabled ---
        disabled
          ? "cursor-not-allowed bg-gray-300 data-[checked]:bg-gray-400"
          : "cursor-pointer bg-gray-200 data-[checked]:bg-gray-900",
      )}
    >
      <span
        className={clsx(
          "size-4",
          "bg-white",
          "rounded-full",
          "translate-x-1 transition",
          "group-data-[checked]:translate-x-6",
        )}
      />
    </Switch>
  );
}

interface ToggleProps {
  id?: string;
  value: boolean;
  onChange: Function;
  disabled?: boolean;
}
