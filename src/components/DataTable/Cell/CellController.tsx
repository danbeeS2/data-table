import type { ReactNode, ButtonHTMLAttributes } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

// ============================================
// Icons
// ============================================

const icons: Record<string, ReactNode> = {
  edit: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.146 1.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-9.5 9.5a.5.5 0 01-.168.11l-4 1.5a.5.5 0 01-.638-.638l1.5-4a.5.5 0 01.11-.168l9.5-9.5zM11.207 4L12 4.793 13.207 4 12.5 3.293 11.207 4zM10.5 4.5L4 11v.5h.5l6.5-6.5-.5-.5z" />
    </svg>
  ),
  delete: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5.5 5.5a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  ),
  view: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
    </svg>
  ),
  more: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H6zM2 5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-1h1v1a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2h1v1H2z"
      />
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
      <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
    </svg>
  ),
};

// ============================================
// Controller Button
// ============================================

export interface ControllerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label?: string;
}

function ControllerButton({
  icon,
  label,
  disabled,
  onClick,
  ...props
}: ControllerButtonProps) {
  const classes = dataTableCell();
  const iconElement = icons[icon] || icons.more;

  return (
    <button
      type="button"
      className={classes.controllerButton}
      disabled={disabled}
      onClick={onClick}
      title={label}
      aria-label={label}
      {...props}
    >
      {iconElement}
    </button>
  );
}

// ============================================
// Cell Controller
// ============================================

export interface CellControllerProps {
  children: ReactNode;
  className?: string;
}

export function CellController({ children, className }: CellControllerProps) {
  const classes = dataTableCell();

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <div className={classes.controller}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compound component pattern
CellController.Button = ControllerButton;
