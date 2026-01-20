import type { ColumnDef } from "@tanstack/react-table";
import type {
  ColumnHelper,
  TextOptions,
  NumberOptions,
  DateOptions,
  ChipOptions,
  AvatarOptions,
  LinkOptions,
  TextFieldOptions,
  CheckboxOptions,
  ControllerOptions,
  ActionItem,
  CustomOptions,
} from "./types";
import {
  CellText,
  CellNumber,
  CellChip,
  CellAvatar,
  CellDate,
  CellLink,
  CellTextField,
  CellController,
  CellCheckbox,
} from "../Cell";
import { HeaderCellCheck } from "../HeaderCell";

/**
 * DataTable 컬럼 정의를 쉽게 만들 수 있는 헬퍼 함수
 *
 * @example
 * ```tsx
 * const col = createColumnHelper<User>();
 *
 * const columns = [
 *   col.checkbox(),
 *   col.text('name', '이름'),
 *   col.chip('status', '상태', { variant: 'success' }),
 *   col.controller([{ key: 'edit', icon: 'edit', onClick: handleEdit }]),
 * ];
 * ```
 */
export function createColumnHelper<TData>(): ColumnHelper<TData> {
  return {
    // ============================================
    // Checkbox (Selection)
    // ============================================
    checkbox: (options: CheckboxOptions = {}): ColumnDef<TData> => ({
      id: "__select__",
      header: ({ table }) => (
        <HeaderCellCheck
          isAllSelected={table.getIsAllRowsSelected()}
          isSomeSelected={table.getIsSomeRowsSelected()}
          onChange={table.toggleAllRowsSelected}
        />
      ),
      cell: ({ row, table }) => {
        const pageIndex = table.getState().pagination?.pageIndex ?? 0;
        const pageSize = table.getState().pagination?.pageSize ?? 10;
        const rowNumber = pageIndex * pageSize + row.index + 1;

        return (
          <CellCheckbox
            rowNumber={rowNumber}
            isSelected={row.getIsSelected()}
            onChange={(checked) => row.toggleSelected(checked)}
            showRowNumber={options.showRowNumber}
          />
        );
      },
      size: options.width ?? 48,
      enableSorting: false,
      enableResizing: false,
      meta: {
        headerType: "check",
        cellType: "checkbox-unselected",
      },
    }),

    // ============================================
    // Text
    // ============================================
    text: (
      key: keyof TData & string,
      header: string,
      options: TextOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => (
        <CellText value={info.getValue() as string | number | null} />
      ),
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        sticky: options.sticky,
        cellType: "text",
        headerType: options.align === "right" ? "text-right" : "text-left",
      },
    }),

    // ============================================
    // Number
    // ============================================
    number: (
      key: keyof TData & string,
      header: string,
      options: NumberOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => {
        const value = info.getValue() as number | null;
        return <CellNumber value={value} />;
      },
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? true,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "right",
        cellType: "text",
        headerType: "text-right",
      },
    }),

    // ============================================
    // Date
    // ============================================
    date: (
      key: keyof TData & string,
      header: string,
      options: DateOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => (
        <CellDate
          value={info.getValue() as string | Date | null}
          format={options.format}
        />
      ),
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? true,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        cellType: "text",
        headerType: options.align === "right" ? "text-right" : "text-left",
      },
    }),

    // ============================================
    // Chip
    // ============================================
    chip: (
      key: keyof TData & string,
      header: string,
      options: ChipOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => {
        const value = info.getValue();
        const variant = options.getVariant
          ? options.getVariant(value)
          : options.variant ?? "default";
        const label = options.getLabel
          ? options.getLabel(value)
          : String(value ?? "");

        return <CellChip label={label} variant={variant} />;
      },
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        cellType: "chip",
        headerType: options.align === "right" ? "text-right" : "text-left",
      },
    }),

    // ============================================
    // Avatar
    // ============================================
    avatar: (
      key: keyof TData & string,
      header: string,
      options: AvatarOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => {
        const row = info.row.original as Record<string, unknown>;
        const value = info.getValue();

        // Avatar 데이터가 객체인 경우 { name, src }
        if (typeof value === "object" && value !== null) {
          const avatarData = value as { name?: string; src?: string };
          return (
            <CellAvatar
              name={avatarData.name ?? ""}
              src={avatarData.src}
              showName={options.showName}
            />
          );
        }

        // 단순 이름인 경우
        const name = String(value ?? "");
        const src = options.srcKey ? String(row[options.srcKey] ?? "") : undefined;

        return <CellAvatar name={name} src={src} showName={options.showName} />;
      },
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        cellType: "avatar",
        headerType: "text-left",
      },
    }),

    // ============================================
    // Link
    // ============================================
    link: (
      key: keyof TData & string,
      header: string,
      options: LinkOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => {
        const value = info.getValue();
        const row = info.row.original as Record<string, unknown>;

        let href: string;
        if (options.getHref) {
          href = options.getHref(value, row);
        } else if (options.hrefKey) {
          href = String(row[options.hrefKey] ?? "");
        } else {
          href = String(value ?? "");
        }

        return (
          <CellLink
            value={String(value ?? "")}
            href={href}
            external={options.external}
          />
        );
      },
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        cellType: "text",
        headerType: "text-left",
      },
    }),

    // ============================================
    // TextField (Editable)
    // ============================================
    textfield: (
      key: keyof TData & string,
      header: string,
      options: TextFieldOptions = {}
    ): ColumnDef<TData> => ({
      accessorKey: key,
      header,
      cell: (info) => {
        const row = info.row.original as { id: string };
        const isDisabled = options.disabled
          ? options.disabled(info.row.original)
          : false;

        return (
          <CellTextField
            value={String(info.getValue() ?? "")}
            placeholder={options.placeholder}
            disabled={isDisabled}
            onChange={(value) => options.onEdit?.(row.id, key, value)}
          />
        );
      },
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
        cellType: "textfield",
        headerType: "text-left",
      },
    }),

    // ============================================
    // Controller (Actions)
    // ============================================
    controller: (
      actions: ActionItem<TData>[],
      options: ControllerOptions = {}
    ): ColumnDef<TData> => ({
      id: "__actions__",
      header: "",
      cell: (info) => {
        const row = info.row.original;
        const visibleActions = actions.filter(
          (action) => !action.hidden?.(row)
        );

        return (
          <CellController>
            {visibleActions.map((action) => (
              <CellController.Button
                key={action.key}
                icon={action.icon}
                label={action.label}
                disabled={action.disabled?.(row)}
                onClick={() => action.onClick(row)}
              />
            ))}
          </CellController>
        );
      },
      size: options.width,
      enableSorting: false,
      enableResizing: false,
      meta: {
        headerType: "spacer",
        cellType: "controller",
      },
    }),

    // ============================================
    // Custom
    // ============================================
    custom: (id: string, options: CustomOptions<TData>): ColumnDef<TData> => ({
      id,
      header: options.header ?? "",
      cell: options.cell,
      size: typeof options.width === "number" ? options.width : undefined,
      minSize: options.minWidth,
      maxSize: options.maxWidth,
      enableSorting: options.enableSorting ?? false,
      enableResizing: options.enableResizing ?? true,
      meta: {
        align: options.align ?? "left",
      },
    }),
  };
}
