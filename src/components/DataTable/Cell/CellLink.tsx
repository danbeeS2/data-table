import { dataTableCell } from "../../../../styled-system/recipes";
import { css } from "../../../../styled-system/css";

export interface CellLinkProps {
  value: string;
  href: string;
  external?: boolean;
  className?: string;
}

const linkStyle = css({
  color: "#0066cc",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.15s ease",
  "&:hover": {
    color: "#0052a3",
    textDecoration: "underline",
  },
  "&:focus": {
    outline: "2px solid #0091ff",
    outlineOffset: "2px",
    borderRadius: "2px",
  },
});

export function CellLink({
  value,
  href,
  external = false,
  className,
}: CellLinkProps) {
  const classes = dataTableCell();

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <a
              href={href}
              className={`${classes.text} ${linkStyle}`}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {value}
              {external && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  style={{ marginLeft: "4px", verticalAlign: "middle" }}
                >
                  <path d="M10.5 1.5H7v1h2.29L5.15 6.65l.7.7L10 3.21V5.5h1V1.5zM9 9.5H2.5V3H6V2H2.5A1 1 0 001.5 3v6.5a1 1 0 001 1H9a1 1 0 001-1V6.5H9v3z" />
                </svg>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
