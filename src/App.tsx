import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./components/DataTable";
import { tableRowData, type TableRowData } from "./data/mockData";
import { hstack } from "../styled-system/patterns";

const columns: ColumnDef<TableRowData>[] = [
  { accessorKey: "title", header: "제목" },
  { accessorKey: "text", header: "텍스트" },
  { accessorKey: "textField", header: "텍스트 필드" },
  {
    accessorKey: "selections",
    header: "유형 선택",
    cell: ({ row }) => row.original.selections.join(", "),
  },
  { accessorKey: "typeChip", header: "유형" },
  { accessorKey: "createdAt", header: "작성일" },
  { accessorKey: "author", header: "작성자" },
  {
    id: "actions",
    header: "",
    enableSorting: false,
    cell: () => <button type="button">⋯</button>,
  },
];

export default function App() {
  return (
    <div className={hstack({ gap: "4", p: "4", width: "100%" })}>
      <DataTable
        data={tableRowData}
        columns={columns}
        pageSize={10}
        pageSizeOptions={[10, 25, 50]}
      />
    </div>
  );
}
