"use client";

import Select from "@/components/form/select/Select";
import Pagination from "@/components/molecules/pagination/Pagination";
import clsx from "clsx";

export default function DataGridPagination({
  enableRowPerPage,
  rowPerPage,
  onChangeRowPerPage,
  totalData,
  currentPage,
  onChangePage,
  isReady = true,
}: DataGridPaginationProps) {
  // error handling
  if (
    totalData == null ||
    totalData == undefined ||
    currentPage == null ||
    currentPage == undefined
  ) {
    throw new Error("totalData and currentPage is required");
  }

  // calculate row per page
  let calculatedRowPerPage = rowPerPage || 25;

  // calculate first and last data
  let firstData = (currentPage - 1) * calculatedRowPerPage + 1;
  let lastData =
    (currentPage - 1) * calculatedRowPerPage + calculatedRowPerPage;
  let totalPage = Math.ceil(totalData / calculatedRowPerPage);

  if (lastData > totalData) {
    lastData = totalData;
  }

  // row per page options
  const rowPerPageOptions = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  // handle change page
  const handleChangePage = (page: number) => {
    onChangePage && onChangePage(page);
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-y-1 p-4 sm:flex-row-reverse sm:justify-between sm:py-3",
        "border-t border-gray-200",
      )}
    >
      {/* Pagination */}
      {isReady ? (
        <div className={clsx("flex flex-row gap-x-2 overflow-visible")}>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handleChangePage}
            jumpButton
          />
        </div>
      ) : (
        <div
          className={clsx("h-6 w-32", "rounded bg-gray-300", "animate-pulse")}
        ></div>
      )}

      {/* Row per page */}
      {isReady ? (
        <div className={clsx("flex flex-row items-center gap-x-2")}>
          {enableRowPerPage && onChangeRowPerPage && (
            <div className={clsx("w-20")}>
              <Select
                options={rowPerPageOptions}
                value={rowPerPage}
                onChange={onChangeRowPerPage}
              />
            </div>
          )}
          <p className={clsx("w-fit", "text-nowrap text-sm", "text-gray-700")}>
            {firstData} - {lastData} out of {totalData}
          </p>
        </div>
      ) : (
        <div
          className={clsx("h-6 w-32", "rounded bg-gray-300", "animate-pulse")}
        ></div>
      )}
    </div>
  );
}

interface DataGridPaginationProps {
  enableRowPerPage?: boolean;
  rowPerPage?: number;
  onChangeRowPerPage?: Function;
  totalData?: number;
  currentPage?: number;
  onChangePage?: Function;
  isReady?: boolean;
}
