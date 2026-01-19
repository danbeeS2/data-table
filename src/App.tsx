import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, TextCell } from "./components/DataTable";
import { tableRowData, type TableRowData } from "./data/mockData";
import { hstack } from "../styled-system/patterns";

const columns: ColumnDef<TableRowData>[] = [
  {
    accessorKey: "title",
    header: "제목",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
  {
    accessorKey: "text",
    header: "텍스트",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
  {
    accessorKey: "textField",
    header: "텍스트 필드",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
  {
    accessorKey: "selections",
    header: "유형 선택",
    cell: ({ row }) => <TextCell value={row.original.selections.join(", ")} />,
  },
  {
    accessorKey: "typeChip",
    header: "유형",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
  {
    accessorKey: "createdAt",
    header: "작성일",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
  {
    accessorKey: "author",
    header: "작성자",
    cell: ({ getValue }) => <TextCell value={getValue<string>()} />,
  },
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
        enableRowSelection
      />
    </div>
  );
}
