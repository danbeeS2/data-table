import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellAvatarProps {
  name: string;
  src?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function CellAvatar({
  name,
  src,
  showName = false,
  className,
}: CellAvatarProps) {
  const classes = dataTableCell();

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <div className={classes.avatar}>
              {src ? (
                <img
                  src={src}
                  alt={name}
                  className={classes.avatarImage}
                  onError={(e) => {
                    // 이미지 로드 실패 시 fallback으로 전환
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
              ) : null}
              <div
                className={classes.avatarFallback}
                style={src ? { display: "none" } : undefined}
              >
                {getInitials(name)}
              </div>
              {showName && <span className={classes.avatarName}>{name}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
