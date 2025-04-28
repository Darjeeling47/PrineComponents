import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { ColumnProps } from "./dataGridInterface";
import TableRow from "@/components/atoms/table/TableRow";
import TableColumn from "@/components/atoms/table/TableColumn";
import clsx from "clsx";
import TableBody from "@/components/atoms/table/TableBody";

export default function DataGridTableNoData({
  columns,
}: DataGridTableNoDataProps) {
  return (
    <TableBody>
      <TableRow>
        <TableColumn
          className={clsx(
            "w-full px-3 py-3",
            "text-left text-gray-500",
            "bg-inherit",
            "border-r border-gray-200",
          )}
          colSpan={columns.length + 1}
        >
          <div className={clsx("flex items-center gap-x-2")}>
            <FaceFrownIcon className={clsx("size-6", "text-gray-400")} />
            <span>No data</span>
          </div>
        </TableColumn>
      </TableRow>
    </TableBody>
  );
}

interface DataGridTableNoDataProps {
  columns: ColumnProps[];
}
