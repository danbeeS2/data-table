import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type RowSelectionState,
} from "@tanstack/react-table";
import { dataTable as dataTableRecipe } from "../../../styled-system/recipes";
import type { BaseRowData, DataTableProps } from "../../types/table";
import { DataTablePagination } from "./DataTablePagination";
import { CheckboxCell } from "./Cell";

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50];

export function DataTable<TData extends BaseRowData>({
  data,
  columns,
  pageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  enablePagination = true,
  enableRowSelection = false,
  onRowSelectionChange,
  emptyMessage = "데이터가 없습니다.",
}: DataTableProps<TData>) {
  const classes = dataTableRecipe();
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

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
    ...(enableRowSelection && {
      state: { rowSelection },
      onRowSelectionChange: setRowSelection,
      enableRowSelection: true,
    }),
    getRowId: (row) => row.id,
  });

  useEffect(() => {
    if (onRowSelectionChange && enableRowSelection) {
      const selectedRows = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onRowSelectionChange(selectedRows);
    }
  }, [rowSelection, onRowSelectionChange, enableRowSelection, table]);

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const leafColumnCount = table.getAllLeafColumns().length;
  const totalColumnCount = enableRowSelection
    ? leafColumnCount + 1
    : leafColumnCount;

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {enableRowSelection && (
                  <th
                    className={`${classes.th} ${classes.selectionHeaderCell}`}
                  >
                    <CheckboxCell
                      rowNumber={0}
                      isSelected={false}
                      isHeader
                      isAllSelected={table.getIsAllRowsSelected()}
                      isSomeSelected={table.getIsSomeRowsSelected()}
                      onChange={(checked) =>
                        table.toggleAllRowsSelected(checked)
                      }
                    />
                  </th>
                )}
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
              rows.map((row, rowIndex) => {
                const pageIndex = table.getState().pagination?.pageIndex ?? 0;
                const pageSizeValue =
                  table.getState().pagination?.pageSize ?? rows.length;
                const actualRowNumber = pageIndex * pageSizeValue + rowIndex + 1;

                return (
                  <tr key={row.id} className={classes.tr}>
                    {enableRowSelection && (
                      <td className={`${classes.td} ${classes.selectionCell}`}>
                        <CheckboxCell
                          rowNumber={actualRowNumber}
                          isSelected={row.getIsSelected()}
                          onChange={(checked) => row.toggleSelected(checked)}
                        />
                      </td>
                    )}
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className={classes.td}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={totalColumnCount} className={classes.empty}>
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
