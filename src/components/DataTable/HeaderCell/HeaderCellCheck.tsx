import { dataTableHeader } from "../../../../styled-system/recipes";

export interface HeaderCellCheckProps {
  isAllSelected: boolean;
  isSomeSelected: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function HeaderCellCheck({
  isAllSelected,
  isSomeSelected,
  onChange,
  className,
}: HeaderCellCheckProps) {
  const classes = dataTableHeader({ contentsType: "check" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`${classes.content} ${className ?? ""}`}>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
          checked={isAllSelected}
          ref={(el) => {
            if (el) {
              el.indeterminate = isSomeSelected && !isAllSelected;
            }
          }}
          onChange={handleChange}
          aria-label="전체 선택"
        />
      </div>
    </div>
  );
}
