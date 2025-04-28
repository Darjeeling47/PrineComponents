import Table from "@/components/atoms/table/Table";
import TableContainer from "@/components/atoms/table/TableContainer";
import DataGridTableHead from "./DataGridTableHead";
import { ActionColumnProps, ColumnProps } from "./dataGridInterface";
import DataGridTableSummary from "./DataGridTableSummary";
import DataGridTableData from "./DataGridTableData";
import DataGridTableNoData from "./DataGridTableNoData";
import DataGridTableSkeleton from "./DataGridTableSkeleton";

export default function DataGridTable({
  // Required props
  columns,
  data,
  idKey,

  // Column utilities
  actionColumns,

  // Sorting
  sortKey,
  isAsc,
  onChangeSort,

  // Row id
  enableRowId,

  // Pagination
  enablePagination,
  currentPage,

  // Row per page
  rowPerPage,

  // Utilities
  enableSummary,
  isReady,
}: DataGridTableProps) {
  return (
    <TableContainer>
      <Table>
        <DataGridTableHead
          columns={columns}
          actionColumns={actionColumns}
          sortKey={sortKey}
          isAsc={isAsc}
          onChangeSort={onChangeSort}
          enableRowId={enableRowId}
        />

        {/* Table Content */}
        {isReady ? (
          <DataGridTableData
            columns={columns}
            data={data}
            idKey={idKey}
            actionColumns={actionColumns}
            enableRowId={enableRowId}
            enablePagination={enablePagination}
            currentPage={currentPage}
            rowPerPage={rowPerPage}
          />
        ) : (
          <DataGridTableSkeleton
            columns={columns}
            actionColumns={actionColumns}
            enableRowId={enableRowId}
          />
        )}

        {/* No Data */}
        {isReady && data.length === 0 && (
          <DataGridTableNoData columns={columns} />
        )}

        {/* Summary */}
        {isReady && enableSummary && (
          <DataGridTableSummary
            columns={columns}
            actionColumns={actionColumns}
            data={data}
            enableRowId={enableRowId}
          />
        )}
      </Table>
    </TableContainer>
  );
}

interface DataGridTableProps {
  // Required props
  columns: ColumnProps[];
  data: any[];
  idKey: string;

  // Column utilities
  actionColumns?: ActionColumnProps[];

  // Sorting
  sortKey?: string;
  isAsc?: boolean;
  onChangeSort?: Function;

  // Row id
  enableRowId?: boolean;

  // Pagination
  enablePagination?: boolean;
  currentPage?: number;

  // Row per page
  rowPerPage?: number;

  // Utilities
  enableSummary?: boolean;
  isReady?: boolean;
}
