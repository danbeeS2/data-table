import type { ColumnDef, Table } from "@tanstack/react-table";

export interface BaseRowData {
  id: string;
}

export interface DataTableProps<TData extends BaseRowData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  pageSize?: number;
  pageSizeOptions?: number[];
  enablePagination?: boolean;
  emptyMessage?: string;
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

export interface ColumnMeta {
  width?: number;
  align?: "left" | "center" | "right";
}
