import { useState } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CheckboxCellProps {
  rowNumber: number;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
  isHeader?: boolean;
  isAllSelected?: boolean;
  isSomeSelected?: boolean;
}

export function CheckboxCell({
  rowNumber,
  isSelected,
  onChange,
  isHeader = false,
  isAllSelected = false,
  isSomeSelected = false,
}: CheckboxCellProps) {
  const [isHovered, setIsHovered] = useState(false);
  const classes = dataTableCell({ variant: "utility" });

  const showCheckbox = isHeader || isHovered || isSelected;

  return (
    <div className={classes.base}>
      <div
        className={classes.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            {showCheckbox ? (
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  checked={isHeader ? isAllSelected : isSelected}
                  ref={
                    isHeader
                      ? (el) => {
                          if (el) {
                            el.indeterminate = isSomeSelected && !isAllSelected;
                          }
                        }
                      : undefined
                  }
                  onChange={(e) => onChange(e.target.checked)}
                />
              </div>
            ) : (
              <span className={classes.rowNumber}>{rowNumber}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
