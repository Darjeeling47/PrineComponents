import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import TableRow from "@/components/atoms/table/TableRow";
import TableColumn from "@/components/atoms/table/TableColumn";
import clsx from "clsx";
import TableHead from "@/components/atoms/table/TableHead";
import {
  getColumnAlign,
  getColumnBorder,
  getColumnWidth,
} from "./dataGridUtils";

export default function DataGridTableHead({
  columns,
  actionColumns,
  sortKey,
  isAsc,
  onChangeSort,
  enableRowId,
}: DataGridTableHeadProps) {
  // Handle sorting
  const handleChangeSort = (key: string) => {
    if (onChangeSort) {
      if (sortKey === key) {
        onChangeSort(key, !isAsc);
      } else {
        onChangeSort(key, true);
      }
    }
  };

  return (
    <TableHead className={clsx("sticky top-0 z-50 w-fit", "bg-gray-50")}>
      <TableRow className={clsx("bg-inherit")}>
        {/* Index column */}
        {enableRowId && (
          <TableColumn
            className={clsx(
              "sticky left-0 z-[60] w-12 px-3 py-3",
              "text-center font-bold",
              "bg-inherit text-gray-900",
              "border-b border-r border-gray-200",
            )}
          >
            #
          </TableColumn>
        )}

        {/* Data column */}
        {columns.map((col, index) => (
          <TableColumn
            className={clsx(
              "px-3 py-3",
              "font-bold",
              "text-gray-900",
              "border-b border-gray-200",
              "cursor-pointer",
              // --- Column style (Custom) ---
              getColumnBorder(index, columns.length, "r"),
              getColumnWidth(col.size),
            )}
            onClick={() => handleChangeSort(col.key)}
          >
            <div
              className={clsx(
                "flex w-full flex-row items-center gap-x-1",
                getColumnAlign(col.type, col.align),
              )}
            >
              {col.title}
              {sortKey === col.key && (
                <span>
                  <ArrowDownIcon
                    className={clsx(
                      "size-4",
                      "transform transition-all duration-200",
                      // --- Transform (Custom) ---
                      isAsc ? "rotate-0" : "rotate-180",
                    )}
                    strokeWidth={1.5}
                  />
                </span>
              )}
            </div>
          </TableColumn>
        ))}

        {/* Action column */}
        {actionColumns && (
          <TableColumn
            className={clsx(
              "sticky right-0 z-[50] w-12 px-3 py-3",
              "bg-inherit",
              "border-b border-l border-gray-200",
            )}
          ></TableColumn>
        )}
      </TableRow>
    </TableHead>
  );
}

interface DataGridTableHeadProps {
  columns: ColumnProps[];
  actionColumns?: ActionColumnProps[];
  sortKey?: string;
  isAsc?: boolean;
  onChangeSort?: Function;
  enableRowId?: boolean;
}
