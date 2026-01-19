import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { dataTable as dataTableRecipe } from "../../../styled-system/recipes";
import type { BaseRowData, DataTableProps } from "../../types/table";
import { DataTablePagination } from "./DataTablePagination";

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50];

export function DataTable<TData extends BaseRowData>({
  data,
  columns,
  pageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  enablePagination = true,
  emptyMessage = "데이터가 없습니다.",
}: DataTableProps<TData>) {
  const classes = dataTableRecipe();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(enablePagination && {
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: { pageSize },
      },
    }),
    getRowId: (row) => row.id,
  });

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const leafColumnCount = table.getAllLeafColumns().length;

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={classes.th}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className={classes.tbody}>
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id} className={classes.tr}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={classes.td}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={leafColumnCount} className={classes.empty}>
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {enablePagination && (
        <DataTablePagination table={table} pageSizeOptions={pageSizeOptions} />
      )}
    </div>
  );
}
