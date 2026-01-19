import { dataTableCell } from "../../../../styled-system/recipes";

export interface NumberCellProps {
  value: number | null | undefined;
  className?: string;
}

export function NumberCell({ value, className }: NumberCellProps) {
  const classes = dataTableCell();

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <span className={classes.number}>{value ?? ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
