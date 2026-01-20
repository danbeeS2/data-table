import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellDateProps {
  value: string | Date | null | undefined;
  /** 날짜 포맷 (기본: yyyy-MM-dd) */
  format?: string;
  className?: string;
}

function formatDate(
  value: string | Date | null | undefined,
  format: string = "yyyy-MM-dd"
): string {
  if (!value) return "";

  const date = typeof value === "string" ? new Date(value) : value;

  if (isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return format
    .replace("yyyy", String(year))
    .replace("MM", month)
    .replace("dd", day)
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
}

export function CellDate({
  value,
  format = "yyyy-MM-dd",
  className,
}: CellDateProps) {
  const classes = dataTableCell();
  const formattedDate = formatDate(value, format);

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <span className={classes.text}>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
