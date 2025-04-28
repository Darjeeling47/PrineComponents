"use client";

import { PT_Mono } from "next/font/google";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import TableRow from "@/components/atoms/table/TableRow";
import TableColumn from "@/components/atoms/table/TableColumn";
import clsx from "clsx";
import {
  formatNumber,
  getColumnAlign,
  getColumnBorder,
  getColumnWidth,
} from "./dataGridUtils";
import TableBody from "@/components/atoms/table/TableBody";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function DataGridTableSummary({
  columns,
  actionColumns,
  data,
  enableRowId,
}: DataGridTableSummaryProps) {
  return (
    <TableBody>
      <TableRow
        className={clsx(
          "sticky bottom-0 z-50",
          "bg-gray-100",
          "border-gray-200",
        )}
      >
        {/* Index column */}
        {enableRowId && (
          <TableColumn
            className={clsx(
              "sticky left-0 z-[60] w-12 px-3 py-3",
              "text-center",
              "bg-inherit text-gray-500",
              "border-r border-t border-gray-200",
            )}
          >
            Sum
          </TableColumn>
        )}

        {/* Data column */}
        {columns.map((col, colIndex) => (
          <TableColumn
            className={clsx(
              "px-3 py-3",
              "border-t border-gray-200",
              // --- Font style (Custom) ---
              col.type == "number" && ptMono.className,
              // --- Column style (Custom) ---
              getColumnBorder(colIndex, columns.length, "r"),
              getColumnAlign(col.type, col.align),
              getColumnWidth(col.size),
            )}
          >
            {col.type == "number" &&
              formatNumber(
                data.reduce(
                  (acc, curr) => Number(acc) + Number(curr[col.key]),
                  0,
                ),
              )}
          </TableColumn>
        ))}

        {/* Action column */}
        {actionColumns && (
          <th
            className={clsx(
              "sticky right-0 z-[60] w-12 px-3 py-3",
              "bg-inherit",
              "border-l border-t border-gray-200",
            )}
          ></th>
        )}
      </TableRow>
    </TableBody>
  );
}

interface DataGridTableSummaryProps {
  columns: ColumnProps[];
  actionColumns?: ActionColumnProps[];
  data: any[];
  enableRowId?: boolean;
}
