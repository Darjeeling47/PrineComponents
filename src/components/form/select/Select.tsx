import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Description,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";

export default function Select({
  id,
  options,
  value,
  onChange,
  label,
  description,
  placeholder,
  required,
  disabled,
}: SelectProps) {
  // Options list
  const selectedOption =
    options.find((option) => option.value === value) || null;

  // Handle the change event
  const handleSelect = (selected: any) => {
    if (onChange && !disabled) {
      onChange(selected.value);
    }
  };

  return (
    <Field id={`select-${id}`} className={clsx("flex w-full flex-col gap-y-2")}>
      {label && (
        <Label
          id={`select-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Listbox
        value={selectedOption}
        onChange={handleSelect}
        disabled={disabled}
      >
        <ListboxButton
          id={`select-button-${id}`}
          className={clsx(
            "flex h-10 w-full items-center justify-between px-3 py-2",
            "text-gray-900 placeholder:text-gray-400",
            "rounded-md border border-gray-200",
            "shadow-sm transition-all duration-200",
            "outline-none",
            // --- Disabled ---
            disabled
              ? "cursor-not-allowed bg-gray-100"
              : "cursor-pointer bg-white",
          )}
        >
          <span
            className={clsx(
              "w-full",
              "line-clamp-1 text-ellipsis text-left",
              // --- Placeholder Variants ---
              selectedOption ? "text-gray-900" : "text-gray-400",
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronUpDownIcon className={clsx("size-4", "text-gray-400")} />
        </ListboxButton>
        <ListboxOptions
          id={`select-options-${id}`}
          anchor="bottom"
          transition
          className={clsx(
            "z-[500] w-[var(--button-width)] [--anchor-gap:0.25rem]",
            "bg-white",
            "rounded-md border border-gray-200",
            "origin-top transition-all duration-200 ease-in-out",
            "outline-none",
            "data-[closed]:scale-95 data-[closed]:opacity-0",
          )}
        >
          {options.map((option, index) => {
            // Divider
            if (option.isDivider)
              return (
                <div
                  id={`select-divider-${id}-${index}`}
                  key={option.label}
                  className={clsx(
                    "h-fit w-full px-3 py-2",
                    "font-semibold",
                    "text-gray-900",
                  )}
                >
                  {option.label}
                </div>
              );
            // Normal option
            else
              return (
                <ListboxOption
                  id={`select-option-${id}-${index}`}
                  key={option.value}
                  value={option}
                  className={clsx(
                    "flex flex-row items-center justify-between px-3 py-2",
                    "transition-all duration-200",
                    "cursor-pointer select-none",
                    "group data-[focus]:bg-gray-100 data-[focus]:data-[selected]:bg-gray-100 data-[selected]:bg-gray-50",
                  )}
                >
                  <span className={clsx("w-full", "text-gray-900")}>
                    {option.label}
                  </span>
                  <CheckIcon
                    className={clsx(
                      "size-4",
                      "text-gray-600",
                      "invisible",
                      "group-data-[selected]:visible",
                    )}
                    strokeWidth={2.3}
                  />
                </ListboxOption>
              );
          })}
        </ListboxOptions>
      </Listbox>
      {description && (
        <Description
          id={`select-description-${id}`}
          className={clsx(
            "text-sm",
            "text-gray-600",
            "transition-all duration-200",
          )}
        >
          {description}
        </Description>
      )}
    </Field>
  );
}

interface SelectProps {
  id?: string;
  options: SelectItemProps[];
  value?: any;
  onChange?: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

interface SelectItemProps {
  value: any;
  label: any;
  isDivider?: boolean;
}
