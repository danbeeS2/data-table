import { DataTable, createColumnHelper, CellChip } from "./components/DataTable";
import { tableRowData, type TableRowData } from "./data/mockData";
import { hstack } from "../styled-system/patterns";

const col = createColumnHelper<TableRowData>();

const columns = [
  col.text("title", "제목"),
  col.text("text", "텍스트"),
  col.textfield("textField", "텍스트 필드", {
    placeholder: "입력하세요",
    onEdit: (rowId, key, value) => {
      console.log(`Row ${rowId}: ${key} = ${value}`);
    },
  }),
  // 유형 선택 - 여러 개의 회색 칩
  col.custom("selections", {
    header: "유형 선택",
    cell: (info) => {
      const selections = info.row.original.selections;
      return (
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", padding: "4px 16px" }}>
          {selections.map((chip, index) => (
            <CellChip key={index} label={chip} variant="default" />
          ))}
        </div>
      );
    },
    width: 300,
  }),
  // 유형 - 초록색 칩
  col.chip("typeChip", "유형", {
    variant: "success",
  }),
  col.date("createdAt", "작성일"),
  col.avatar("author", "작성자"),
  col.controller([
    {
      key: "edit",
      icon: "edit",
      label: "수정",
      onClick: (row) => console.log("Edit:", row),
    },
    {
      key: "view",
      icon: "view",
      label: "보기",
      onClick: (row) => console.log("View:", row),
    },
    {
      key: "more",
      icon: "more",
      label: "더보기",
      onClick: (row) => console.log("More:", row),
    },
  ]),
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
