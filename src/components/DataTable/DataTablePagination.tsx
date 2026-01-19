import { pagination as paginationRecipe } from "../../../styled-system/recipes";
import type { DataTablePaginationProps } from "../../types/table";

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50];

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="10" r="1.5" fill="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "ellipsis")[] {
  const pages: (number | "ellipsis")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  if (currentPage <= 4) {
    for (let i = 2; i <= 5; i++) {
      pages.push(i);
    }
    pages.push("ellipsis");
    pages.push(totalPages);
  } else if (currentPage >= totalPages - 3) {
    pages.push("ellipsis");
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push("ellipsis");
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pages.push(i);
    }
    pages.push("ellipsis");
    pages.push(totalPages);
  }

  return pages;
}

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
}: DataTablePaginationProps<TData>) {
  const classes = paginationRecipe();
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.getPrePaginationRowModel().rows.length;
  const pageCount = table.getPageCount();
  const currentPage = pageIndex + 1;

  const pageNumbers = getPageNumbers(currentPage, pageCount);

  const handlePageClick = (page: number) => {
    table.setPageIndex(page - 1);
  };

  return (
    <div className={classes.footer}>
      <div className={classes.root}>
        <button
          type="button"
          className={classes.item}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className={classes.icon} />
        </button>

        {pageNumbers.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <div key={`ellipsis-${index}`} className={classes.item}>
                <MoreIcon className={classes.icon} />
              </div>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              className={classes.item}
              style={
                isActive
                  ? {
                      background: "#e1f4ec",
                      color: "#1c7d55",
                      fontWeight: 500,
                    }
                  : undefined
              }
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          className={classes.item}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className={classes.icon} />
        </button>
      </div>

      <div className={classes.footerInfo}>
        <span>{totalRows.toLocaleString()}개 중</span>
        <div className={classes.selectTrigger}>
          <select
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "14px",
              color: "#1e2024",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}개씩 보기
              </option>
            ))}
          </select>
          <ChevronDownIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
}
