import TableBody from "@/components/atoms/table/TableBody";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import TableRow from "@/components/atoms/table/TableRow";
import clsx from "clsx";
import { getColumnBorder, getColumnWidth, getRowColor } from "./dataGridUtils";
import TableColumn from "@/components/atoms/table/TableColumn";

export default function DataGridTableSkeleton({
  columns,
  actionColumns,
  enableRowId,
}: DataGridTableSkeletonProps) {
  return (
    <TableBody>
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <TableRow
          className={clsx(
            "w-fit",
            // --- Column style (Custom) ---
            getRowColor(rowIndex),
          )}
        >
          {/* Index column */}
          {enableRowId && (
            <TableColumn
              className={clsx(
                "sticky left-0 z-50 w-12 px-3 py-3",
                "text-center",
                "bg-inherit text-gray-500",
                "border-r border-gray-200",
                // --- Column style (Custom) ---
                getColumnBorder(rowIndex, 5, "b"),
              )}
            >
              <div
                className={clsx(
                  "h-4 w-4",
                  "bg-gray-200",
                  "rounded-md",
                  "animate-pulse",
                )}
              ></div>
            </TableColumn>
          )}

          {/* Data column */}
          {columns.map((col, colIndex) => (
            <TableColumn
              className={clsx(
                "px-3 py-3",
                "border-gray-200",
                // --- Column style (Custom) ---
                getColumnBorder(colIndex, columns.length, "r"),
                getColumnBorder(rowIndex, 5, "b"),
                getColumnWidth(col.size),
              )}
            >
              <div
                className={clsx(
                  "h-4 w-3/4",
                  "bg-gray-200",
                  "rounded",
                  "animate-pulse",
                )}
              ></div>
            </TableColumn>
          ))}

          {/* Action column */}
          {actionColumns && (
            <TableColumn
              className={clsx(
                "sticky right-0 z-50 w-12 px-3 py-3",
                "bg-inherit",
                "border-l border-gray-200",
                // --- Column style (Custom) ---
                getColumnBorder(rowIndex, 5, "b"),
              )}
            >
              <div
                className={clsx(
                  "h-4 w-4",
                  "bg-gray-200",
                  "rounded-md",
                  "animate-pulse",
                )}
              ></div>
            </TableColumn>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}

interface DataGridTableSkeletonProps {
  columns: ColumnProps[];
  actionColumns?: ActionColumnProps[];
  enableRowId?: boolean;
}
