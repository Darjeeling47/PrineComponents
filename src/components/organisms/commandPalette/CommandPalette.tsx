"use client";

import Modal from "@/components/atoms/modal/Modal";
import TextField from "@/components/form/textField/TextField";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { getCommandPaletteOptions } from "./commandPaletteUtils";
import { useModal } from "@/context/ModalProvider";

export default function CommandPalette() {
  const { closeModal } = useModal();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const filteredOptions = getCommandPaletteOptions(query);

  // Handle the close event of the modal
  const handleClose = () => {
    setQuery("");
  };

  // Handle the change event of the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handle the selection of an option
  const handleSelect = (selected: any) => {
    // Handle the selection of an option
    const selectedOption = filteredOptions[selected];
    if (selectedOption.path && selectedOption.path !== "") {
      router.push(selectedOption.path);
    }
    setQuery("");
    closeModal();
  };

  // Focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Modal
      className={clsx(
        "fixed left-0 right-0 top-32 mx-auto !w-[560px] !gap-y-4",
      )}
    >
      <Combobox onChange={handleSelect} onClose={handleClose}>
        <ComboboxButton
          className={clsx(
            "flex w-full items-center justify-start gap-x-2 p-2",
            "bg-gray-50",
            "rounded-md",
            "transition-all duration-200 ease-in-out",
            "cursor-pointer",
          )}
        >
          <MagnifyingGlassIcon className={clsx("size-5", "text-gray-400")} />
          <ComboboxInput
            ref={inputRef}
            value={query}
            onChange={handleInputChange}
            className={clsx(
              "w-full",
              "bg-inherit text-gray-900 placeholder:text-gray-400",
              "transition-all duration-200 ease-in-out",
              "outline-none",
            )}
            placeholder="Search..."
          />
        </ComboboxButton>
        <ComboboxOptions
          className={clsx(
            "flex max-h-96 w-[var(--button-width)] origin-top flex-col gap-y-1 overflow-y-auto",
            "transition-all duration-200 ease-in-out",
            "outline-none",
          )}
        >
          {filteredOptions.length === 0 ? (
            <div
              className={clsx(
                "flex h-56 w-full flex-col items-center justify-center gap-y-2",
              )}
            >
              <InformationCircleIcon
                className={clsx("size-5", "text-gray-400")}
              />
              <span className={clsx("text-sm font-semibold", "text-gray-900")}>
                No results found
              </span>
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <ComboboxOption
                id={`global-search-option-${index}`}
                key={index}
                value={index}
                className={clsx(
                  "flex flex-row items-center justify-between px-3 py-2",
                  "rounded-md",
                  "transition-all duration-200",
                  "cursor-pointer select-none",
                  "group data-[focus]:bg-gray-900 data-[focus]:text-white",
                )}
              >
                {option.label}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>
    </Modal>
  );
}
