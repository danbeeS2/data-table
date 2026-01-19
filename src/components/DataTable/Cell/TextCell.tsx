import { dataTableCell } from "../../../../styled-system/recipes";

export interface TextCellProps {
  value: string | number | null | undefined;
  className?: string;
}

export function TextCell({ value, className }: TextCellProps) {
  const classes = dataTableCell();

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <span className={classes.text}>{value ?? ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
