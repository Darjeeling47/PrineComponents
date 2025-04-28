"use client";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Description,
  Field,
  Label,
} from "@headlessui/react";
import clsx from "clsx";

export default function AutoComplete({
  id,
  options,
  value,
  onChange,
  label,
  description,
  placeholder,
  required,
  disabled,
}: AutoCompleteProps) {
  const [query, setQuery] = useState("");
  const selectedOption =
    options.find((option) => option.value === value) || null;
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return (
            option.label.toLowerCase().includes(query.toLowerCase()) ||
            option.isDivider
          );
        });

  const handleSelect = (selected: any) => {
    if (onChange && !disabled) {
      onChange(selected.value);
    }
  };

  const handleClose = () => {
    setQuery("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Field
      id={`autoComplete-${id}`}
      className={clsx("flex w-full flex-col gap-y-2")}
    >
      {label && (
        <Label
          id={`autoComplete-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Combobox
        value={selectedOption}
        onChange={handleSelect}
        onClose={handleClose}
        disabled={disabled}
      >
        <div className={clsx("relative")}>
          <ComboboxInput
            id={`autoComplete-input-${id}`}
            displayValue={(option: any) => option?.label || ""}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled}
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
          ></ComboboxInput>
          <ComboboxButton
            id={`autoComplete-button-${id}`}
            disabled={disabled}
            className={clsx(
              "absolute inset-0 flex flex-row items-center justify-end px-2.5",
            )}
          >
            <ChevronUpDownIcon className={clsx("size-4", "text-gray-400")} />
          </ComboboxButton>
        </div>
        <ComboboxOptions
          id={`autoComplete-options-${id}`}
          anchor="bottom"
          transition
          className={clsx(
            "z-[500] w-[var(--input-width)] origin-top [--anchor-gap:0.25rem]",
            "bg-white",
            "rounded-md border border-gray-200",
            "transition-all duration-200 ease-in-out",
            "outline-none",
            "data-[closed]:scale-95 data-[closed]:opacity-0",
          )}
        >
          {filteredOptions.map((option, index) => {
            // Divider
            if (option.isDivider)
              return (
                <div
                  id={`autoComplete-divider-${id}-${index}`}
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
                <ComboboxOption
                  id={`autoComplete-option-${id}-${index}`}
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
                </ComboboxOption>
              );
          })}
        </ComboboxOptions>
      </Combobox>
      {description && (
        <Description
          id={`autoComplete-description-${id}`}
          className={clsx(
            "text-sm",
            "text-gray-500",
            "transition-all duration-200",
          )}
        >
          {description}
        </Description>
      )}
    </Field>
  );
}

interface AutoCompleteProps {
  id?: string;
  options: AutoCompletetItemProps[];
  value?: any;
  onChange?: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

interface AutoCompletetItemProps {
  value: any;
  label: any;
  isDivider?: boolean;
}
