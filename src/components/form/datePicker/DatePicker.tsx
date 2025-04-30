"use client";

import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import DatePickerSelector from "./DatePickerSelector";
import DatePickerCalendar from "./DatePickerCalendar";
import { formatDateEn, formatDateTh } from "@/utils/dateFormater";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Button from "@/components/atoms/button/Button";
import {
  Description,
  Field,
  Label,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";

export default function DatePicker({
  id,
  value,
  onChange,
  label,
  description,
  placeholder,
  required,
  disabled,
}: DatePickerProps) {
  // Use to display the date in calendar
  const [shownDate, setShownDate] = useState<Date>(new Date());

  // Handle the change event
  const handleSelectToday = () => {
    // Today but time will set to 0
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Set the shown date to today
    setShownDate(today);
    onChange(today);
  };

  // handle clear date
  const handleClearDate = () => {
    setShownDate(new Date());
    onChange(null);
  };

  return (
    <Field
      id={`datePicker-${id}`}
      className={clsx("flex w-full flex-col gap-y-2")}
    >
      {label && (
        <Label
          id={`datePicker-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Popover>
        <PopoverButton
          id={`datePicker-button-${id}`}
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
        >
          <span
            className={clsx(
              "w-full",
              "line-clamp-1 text-ellipsis text-left",
              // --- Placeholder Variants ---
              value ? "text-gray-900" : "text-gray-400",
            )}
          >
            {value ? formatDateEn(value) : placeholder}
          </span>
          <CalendarDaysIcon className={clsx("size-4", "text-gray-400")} />
        </PopoverButton>
        <PopoverPanel
          id={`datePicker-pannel-${id}`}
          anchor="bottom start"
          transition
          className={clsx(
            "z-[500] flex max-w-full origin-top flex-col gap-y-2 p-2 [--anchor-gap:0.25rem]",
            "bg-white",
            "rounded-md border border-gray-200",
            "transition-all duration-200 ease-in-out",
            "outline-none",
            "data-[closed]:scale-95 data-[closed]:opacity-0",
          )}
        >
          <DatePickerSelector
            id={id}
            shownDate={shownDate}
            setShownDate={setShownDate}
          />
          <DatePickerCalendar
            id={id}
            selectedDate={value}
            shownDate={shownDate}
            onChange={onChange}
          />
          <div className={clsx("mt-1 flex w-full flex-row gap-x-2")}>
            <Button variant="secondary" onClick={handleSelectToday}>
              Today
            </Button>
            <Button variant="secondary" onClick={handleClearDate}>
              Clear
            </Button>
          </div>
        </PopoverPanel>
      </Popover>
      {description && (
        <Description
          id={`datePicker-description-${id}`}
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

interface DatePickerProps {
  id?: string;
  value: Date | null | undefined;
  onChange: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}
