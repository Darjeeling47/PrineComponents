"use client";

import React, { useMemo } from "react";
import { getCalendarRows } from "./datePickerUtils";
import clsx from "clsx";

export default function DatePickerCalendar({
  id,
  onChange,
  shownDate,
  selectedDate,
}: DatePickerCalendarProps) {
  const handleSelectDate = (value: Date) => {
    return () => onChange(value);
  };

  // Get the rows of the calendar
  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);
  const today = new Date();

  // Get localized week day names
  const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div id={`datePicker-calendar-${id}`} className={clsx("flex flex-col")}>
      <div
        id={`datePicker-calendar-weeklist-${id}`}
        className={clsx("mb-3 flex flex-row")}
      >
        {weekDayNames.map((name, i) => (
          <div
            key={i}
            className={clsx(
              "flex w-11 items-center justify-center",
              "text-gray-600",
              "rounded-md",
            )}
          >
            {name}
          </div>
        ))}
      </div>

      {rows.map((cells, rowIndex) => (
        <div
          id={`datePicker-calendar-daylist-${id}`}
          key={rowIndex}
          className={clsx("flex gap-x-1 gap-y-1")}
        >
          {cells.map(({ text, value }, index) => {
            const isToday = value.toDateString() === today.toDateString(); // Check if the date is today
            const isSelected =
              selectedDate &&
              value.toDateString() === selectedDate.toDateString(); // Check if the date is selected
            const isCurrentMonth =
              value.getMonth() === shownDate.getMonth() &&
              value.getFullYear() === shownDate.getFullYear(); // Check if the date is in the current month

            return (
              <div
                id={`datePicker-calendar-day-${id}-${index}`}
                key={`${text} - ${index}`}
                className={clsx(
                  "my-1 flex h-10 w-10 items-center justify-center p-4",
                  "rounded-md",
                  "transition-all duration-200",
                  "cursor-pointer",
                  // --- Color / Background (Custom) ---
                  isCurrentMonth ? "text-gray-900" : "text-gray-400",
                  isSelected
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100 hover:text-gray-900",
                  isToday && "text-red-600",
                  isToday && isSelected && "bg-red-600 text-white",
                )}
                onClick={handleSelectDate(value)}
              >
                {text}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

interface DatePickerCalendarProps {
  id?: any;
  onChange: Function;
  shownDate: Date;
  selectedDate?: Date | null;
}
