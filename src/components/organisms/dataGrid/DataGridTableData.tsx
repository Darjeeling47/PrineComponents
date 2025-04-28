import { PT_Mono } from "next/font/google";
import TableBody from "@/components/atoms/table/TableBody";
import TableRow from "@/components/atoms/table/TableRow";
import clsx from "clsx";
import {
  formatNumber,
  getColumnAlign,
  getColumnBorder,
  getColumnWidth,
  getRowColor,
} from "./dataGridUtils";
import TableColumn from "@/components/atoms/table/TableColumn";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import DataGridTableActionDropdown from "./DataGridTableActionDropdown";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function DataGridTableData({
  // Required props
  columns,
  data,
  idKey,

  // Column utilities
  actionColumns,

  // Row id
  enableRowId,

  // Pagination
  enablePagination,
  currentPage,

  // Row per page
  rowPerPage,
}: DataGridTableDataProps) {
  // check action column
  let isActionColumn = actionColumns && actionColumns.length > 0;

  return (
    <TableBody>
      {data.map((dataRow, index) => (
        <TableRow
          className={clsx(
            "w-fit",
            // --- Column style (Custom) ---
            getRowColor(index),
          )}
        >
          {/* Index column */}
          {enableRowId && (
            <TableColumn
              className={clsx(
                "sticky left-0 z-10 w-12 px-3 py-3",
                "text-center",
                "bg-inherit text-gray-500",
                "border-r border-gray-200",
                // --- Column style (Custom) ---
                getColumnBorder(index, data.length, "b"),
              )}
            >
              {enablePagination && currentPage
                ? index + 1 + (currentPage - 1) * (rowPerPage || 25)
                : index + 1}
            </TableColumn>
          )}

          {/* Data column */}
          {columns.map((col, colIndex) => (
            <TableColumn
              className={clsx(
                "px-3 py-3",
                "border-gray-200",
                // --- Font style (Custom) ---
                col.type == "number" && ptMono.className,
                // --- Column style (Custom) ---
                getColumnBorder(colIndex, columns.length, "r"),
                getColumnBorder(index, data.length, "b"),
                getColumnAlign(col.type, col.align),
                getColumnWidth(col.size),
              )}
            >
              <div
                className={clsx(
                  "flex w-full flex-row items-center gap-x-1",
                  // --- Column style (Custom) ---
                  getColumnAlign(col.type, col.align),
                )}
              >
                {col.type == "number"
                  ? formatNumber(dataRow[col.key], col.floatingPoint)
                  : dataRow[col.key]}
              </div>
            </TableColumn>
          ))}

          {/* Action column */}
          {actionColumns && isActionColumn && (
            <TableColumn
              className={clsx(
                "sticky right-0 z-10 !min-w-10 !max-w-12 px-1 py-1",
                "bg-inherit",
                "border-l border-gray-200",
                // --- Column style (Custom) ---
                getColumnBorder(index, data.length, "b"),
              )}
            >
              <DataGridTableActionDropdown
                actionColumns={actionColumns}
                rowId={dataRow[idKey]}
              />
            </TableColumn>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}

interface DataGridTableDataProps {
  // Required props
  columns: ColumnProps[];
  data: any[];
  idKey: string;

  // Column utilities
  actionColumns?: ActionColumnProps[];

  // Row id
  enableRowId?: boolean;

  // Pagination
  enablePagination?: boolean;
  currentPage?: number;

  // Row per page
  enableRowPerPage?: boolean;
  rowPerPage?: number;
}
