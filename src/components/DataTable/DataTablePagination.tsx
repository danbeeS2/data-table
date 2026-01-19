import type { DataTablePaginationProps } from "../../types/table";

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50];

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
}: DataTablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.getPrePaginationRowModel().rows.length;
  const pageCount = table.getPageCount();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
      }}
    >
      <div style={{ fontSize: 13, color: "#666" }}>
        총 {totalRows}건
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          style={{
            padding: "6px 12px",
            cursor: table.getCanPreviousPage() ? "pointer" : "not-allowed",
            opacity: table.getCanPreviousPage() ? 1 : 0.5,
          }}
        >
          이전
        </button>

        <span style={{ fontSize: 13 }}>
          {pageIndex + 1} / {pageCount || 1}
        </span>

        <button
          type="button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          style={{
            padding: "6px 12px",
            cursor: table.getCanNextPage() ? "pointer" : "not-allowed",
            opacity: table.getCanNextPage() ? 1 : 0.5,
          }}
        >
          다음
        </button>

        <select
          value={pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          style={{ padding: "6px 8px" }}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}개씩 보기
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
