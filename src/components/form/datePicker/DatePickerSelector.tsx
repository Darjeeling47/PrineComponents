"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { changeDateMonth, changeMonthYear } from "./datePickerUtils";
import Select from "../select/Select";
import { getEnMonthOptions, getEnYearRangeOptions } from "@/utils/date";
import Button from "@/components/atoms/button/Button";
import clsx from "clsx";

export default function DatePickerSelector({
  id,
  shownDate,
  setShownDate,
}: DatePickerSelectorProps) {
  // Get the month and year options
  const monthOptions = getEnMonthOptions(true);
  const yearOptions = getEnYearRangeOptions();

  // Get the current month and year
  let thisMonth = shownDate.getMonth();
  let thisYear = shownDate.getFullYear();

  // handle with icon click
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  // handle change month
  const handleMonthChange = (value: number) => {
    setShownDate(changeMonthYear(shownDate, value, thisYear));
  };

  // handle change year
  const handleYearChange = (value: number) => {
    setShownDate(changeMonthYear(shownDate, thisMonth, value));
  };

  return (
    <div
      id={`datePicker-selector-prevmonth-${id}`}
      className={clsx(
        "flex w-full flex-row items-center justify-between gap-x-1",
      )}
    >
      <Button
        id={`datePicker-selector-${id}`}
        variant="text"
        onClick={handleIconClick(false)}
        wFit
      >
        <ChevronLeftIcon className={clsx("size-6")} />
      </Button>

      <div className={clsx("flex w-full flex-row gap-x-1", "text-gray-900")}>
        <Select
          id={`datePicker-selector-month-${id}`}
          value={thisMonth}
          options={monthOptions}
          onChange={handleMonthChange}
        />
        <Select
          id={`datePicker-selector-year-${id}`}
          value={thisYear}
          options={yearOptions}
          onChange={handleYearChange}
        />
      </div>

      <Button
        id={`datePicker-selector-nextmonth-${id}`}
        variant="text"
        onClick={handleIconClick(true)}
        wFit
      >
        <ChevronRightIcon className={clsx("size-6")} />
      </Button>
    </div>
  );
}

interface DatePickerSelectorProps {
  id?: any;
  shownDate: Date;
  setShownDate: React.Dispatch<React.SetStateAction<Date>>;
}
