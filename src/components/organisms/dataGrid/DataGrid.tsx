"use client";

import clsx from "clsx";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import DataGridHeader from "./DataGridHeader";
import DataGridPagination from "./DataGridPagination";
import DataGridTable from "./DataGridTable";

export default function DataGrid({
  // Required props
  columns,
  data,
  idKey,

  // Column utilities
  actionColumns,

  // Heading
  enableTitle,
  title,
  actionButton,

  // Sorting
  sortKey,
  isAsc,
  onChangeSort,

  // Row id
  enableRowId,

  // Pagination
  enablePagination,
  totalData,
  currentPage,
  onChangePage,

  // Row per page
  enableRowPerPage,
  rowPerPage,
  onChangeRowPerPage,

  // Utilities
  enableSummary,
  isReady = true,
}: DataGridProps) {
  // Error handling
  if (enableTitle && !title) {
    throw new Error("Title is required when enableTitle is true");
  }

  if (enablePagination && !totalData && !currentPage) {
    throw new Error(
      "totalData, currentPage is required when enablePagination is true",
    );
  }

  if (enableRowPerPage && !rowPerPage && !onChangeRowPerPage) {
    throw new Error(
      "rowPerPage, onChangeRowPerPage is required when enableRowPerPage is true",
    );
  }

  if (sortKey && !onChangeSort && isAsc === undefined) {
    throw new Error("onChangeSort, isAsc is required when sortKey is provided");
  }

  // check if the idKey is exist (data is not empty)
  if (data.length > 0 && !data[0].hasOwnProperty(idKey)) {
    throw new Error("idKey is not exist in the data");
  }

  return (
    <div
      className={clsx(
        "flex flex-col overflow-hidden",
        "bg-white",
        "rounded-lg border border-gray-200",
      )}
    >
      {/* Header */}
      {enableTitle && (
        <DataGridHeader title={title} actionButton={actionButton} />
      )}

      {/* Table */}
      <DataGridTable
        columns={columns}
        data={data}
        idKey={idKey}
        actionColumns={actionColumns}
        sortKey={sortKey}
        isAsc={isAsc}
        onChangeSort={onChangeSort}
        enableRowId={enableRowId}
        enableSummary={enableSummary}
        enablePagination={enablePagination}
        currentPage={currentPage}
        rowPerPage={rowPerPage}
        isReady={isReady}
      />

      {/* Pagination */}
      {enablePagination && (
        <DataGridPagination
          enableRowPerPage={enableRowPerPage}
          rowPerPage={rowPerPage}
          onChangeRowPerPage={onChangeRowPerPage}
          totalData={totalData}
          currentPage={currentPage}
          onChangePage={onChangePage}
          isReady={isReady}
        />
      )}
    </div>
  );
}

interface DataGridProps {
  // Required props
  columns: ColumnProps[];
  data: any[];
  idKey: string;

  // Column utilities
  actionColumns?: ActionColumnProps[];

  // Heading
  enableTitle?: boolean;
  title?: string;
  actionButton?: React.ReactNode;

  // Sorting
  sortKey?: string;
  isAsc?: boolean;
  onChangeSort?: Function;

  // Row id
  enableRowId?: boolean;

  // Pagination
  enablePagination?: boolean;
  totalData?: number;
  currentPage?: number;
  onChangePage?: Function;

  // Row per page
  enableRowPerPage?: boolean;
  rowPerPage?: number;
  onChangeRowPerPage?: Function;

  // Utilities
  enableSummary?: boolean;
  isReady?: boolean;
}
