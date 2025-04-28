"use client";

import { useState } from "react";
import Button from "@/components/atoms/button/Button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import TextField from "@/components/form/textField/TextField";

export default function Pagination({
  id,
  count,
  page,
  onChange,
  jumpButton,
}: PaginationProps) {
  // data
  const [currentPage, setCurrentPage] = useState<number>(
    page ? parseInt(page.toString()) : 1,
  );

  // handle change
  const handleChange = (value: any) => {
    if (value > count) {
      value = count;
    }

    // set inside the component
    setCurrentPage(value);

    // set outside the component
    if (value > 0 && value <= count && onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={clsx(
        "flex h-fit !max-w-full flex-row items-center gap-x-2",
        // --- Custom ---
        jumpButton ? "w-48 sm:w-72" : "w-48",
      )}
    >
      {jumpButton && (
        <Button
          id={`pagination-jump-left-${id}`}
          variant="text"
          onClick={() => handleChange(1)}
          wFit
          disabled={currentPage <= 1}
        >
          <ChevronDoubleLeftIcon className="h-5 w-5" />
        </Button>
      )}
      <Button
        id={`pagination-left-${id}`}
        variant="text"
        onClick={() => handleChange(currentPage - 1)}
        wFit
        disabled={currentPage <= 1}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </Button>
      <TextField
        id={`pagination-select-${id}`}
        type="number"
        // options={pageOptions}
        value={currentPage}
        onChange={handleChange}
      />
      <Button
        id={`pagination-right-${id}`}
        variant="text"
        onClick={() => handleChange(currentPage + 1)}
        wFit
        disabled={currentPage >= count}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </Button>
      {jumpButton && (
        <Button
          id={`pagination-jump-right-${id}`}
          variant="text"
          onClick={() => handleChange(count)}
          wFit
          disabled={currentPage >= count}
        >
          <ChevronDoubleRightIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

interface PaginationProps {
  id?: string;
  count: number;
  page?: number | string;
  onChange?: Function;
  jumpButton?: boolean;
}
