import { dataTableCell } from "../../../../styled-system/recipes";
import type { ChipVariant } from "../../../types/table";

export interface CellChipProps {
  label: string;
  variant?: ChipVariant;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export function CellChip({
  label,
  variant = "default",
  removable = false,
  onRemove,
  className,
}: CellChipProps) {
  const classes = dataTableCell({ chipVariant: variant });

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <span className={classes.chip}>
              <span className={classes.chipLabel}>{label}</span>
              {removable && (
                <button
                  type="button"
                  className={classes.chipRemove}
                  onClick={onRemove}
                  aria-label={`${label} 제거`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5 2.5 3.205 5.295 6 2.5 8.795 3.205 9.5 6 6.705 8.795 9.5 9.5 8.795 6.705 6z" />
                  </svg>
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
