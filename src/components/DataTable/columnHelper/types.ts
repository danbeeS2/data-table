import type { ColumnDef, CellContext, HeaderContext } from "@tanstack/react-table";
import type { ReactNode } from "react";
import type { ChipVariant, CellAlign } from "../../../types/table";

// ============================================
// 공통 옵션
// ============================================

export interface CommonColumnOptions<TData = unknown> {
  /** 컬럼 너비 */
  width?: number | string;
  /** 최소 너비 */
  minWidth?: number;
  /** 최대 너비 */
  maxWidth?: number;
  /** 정렬 가능 여부 */
  enableSorting?: boolean;
  /** 리사이징 가능 여부 */
  enableResizing?: boolean;
  /** 숨김 가능 여부 */
  enableHiding?: boolean;
  /** 고정 (sticky) */
  sticky?: "left" | "right";
  /** 텍스트 정렬 */
  align?: CellAlign;
  /** 셀 렌더링 override (기본 Cell 컴포넌트 대신 사용) */
  cell?: (info: CellContext<TData, unknown>) => ReactNode;
}

// ============================================
// Cell 타입별 옵션
// ============================================

/** Text 컬럼 옵션 */
export interface TextOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** 말줄임 처리 */
  truncate?: boolean;
  /** 복사 가능 */
  copyable?: boolean;
}

/** Number 컬럼 옵션 */
export interface NumberOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** 포맷 */
  format?: "number" | "currency" | "percent";
  /** 로케일 */
  locale?: string;
  /** 소수점 자릿수 */
  decimals?: number;
  /** 통화 기호 (currency일 때) */
  currency?: string;
}

/** Chip 컬럼 옵션 */
export interface ChipOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** 고정 variant */
  variant?: ChipVariant;
  /** 값에 따라 동적 variant */
  getVariant?: (value: unknown) => ChipVariant;
  /** 값을 라벨로 변환 */
  getLabel?: (value: unknown) => string;
}

/** Avatar 컬럼 옵션 */
export interface AvatarOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** 이름 표시 여부 */
  showName?: boolean;
  /** 이름 필드 키 (다른 필드에서 가져올 때) */
  nameKey?: string;
  /** 이미지 URL 필드 키 */
  srcKey?: string;
}

/** Checkbox (Selection) 컬럼 옵션 */
export interface CheckboxOptions<TData = unknown> {
  /** 컬럼 너비 */
  width?: number;
  /** 행 번호 표시 */
  showRowNumber?: boolean;
  /** 셀 렌더링 override */
  cell?: (info: CellContext<TData, unknown>) => ReactNode;
}

/** Controller (Actions) 컬럼 옵션 */
export interface ControllerOptions<TData = unknown> {
  /** 컬럼 너비 */
  width?: number;
  /** 셀 렌더링 override */
  cell?: (info: CellContext<TData, unknown>) => ReactNode;
}

/** 개별 액션 정의 */
export interface ActionItem<TData = unknown> {
  /** 액션 키 */
  key: string;
  /** 아이콘 이름 */
  icon: "edit" | "delete" | "view" | "more" | "copy" | "download" | string;
  /** 라벨 (툴팁) */
  label?: string;
  /** 클릭 핸들러 */
  onClick: (row: TData) => void;
  /** 비활성화 조건 */
  disabled?: (row: TData) => boolean;
  /** 숨김 조건 */
  hidden?: (row: TData) => boolean;
}

/** TextField 컬럼 옵션 */
export interface TextFieldOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** placeholder */
  placeholder?: string;
  /** 값 변경 핸들러 */
  onEdit?: (rowId: string, key: string, value: string) => void;
  /** 비활성화 조건 */
  disabled?: (row: TData) => boolean;
}

/** Date 컬럼 옵션 */
export interface DateOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** 날짜 포맷 (기본: yyyy-MM-dd) */
  format?: string;
}

/** Link 컬럼 옵션 */
export interface LinkOptions<TData = unknown> extends CommonColumnOptions<TData> {
  /** href 필드 키 */
  hrefKey?: string;
  /** href 생성 함수 */
  getHref?: (value: unknown, row: TData) => string;
  /** 새 탭에서 열기 */
  external?: boolean;
}

/** Custom 컬럼 옵션 */
export interface CustomOptions<TData = unknown> extends Omit<CommonColumnOptions<TData>, 'cell'> {
  /** 커스텀 셀 렌더러 (필수) */
  cell: (info: CellContext<TData, unknown>) => ReactNode;
  /** 커스텀 헤더 렌더러 */
  header?: string | ((info: HeaderContext<TData, unknown>) => ReactNode);
}

// ============================================
// Column Helper 인터페이스
// ============================================

export interface ColumnHelper<TData> {
  /**
   * 체크박스 (선택) 컬럼
   * @example col.checkbox()
   * @example col.checkbox({ showRowNumber: true })
   * @example col.checkbox({ cell: (info) => <CustomCheckbox /> })
   */
  checkbox: (options?: CheckboxOptions<TData>) => ColumnDef<TData>;

  /**
   * 텍스트 컬럼
   * @example col.text('name', '이름')
   * @example col.text('email', '이메일', { enableSorting: true, copyable: true })
   * @example col.text('name', '이름', { cell: (info) => <Bold>{info.getValue()}</Bold> })
   */
  text: (
    key: keyof TData & string,
    header: string,
    options?: TextOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 숫자 컬럼
   * @example col.number('price', '가격')
   * @example col.number('salary', '연봉', { format: 'currency', currency: 'KRW' })
   * @example col.number('score', '점수', { cell: (info) => <ScoreBar value={info.getValue()} /> })
   */
  number: (
    key: keyof TData & string,
    header: string,
    options?: NumberOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 날짜 컬럼
   * @example col.date('createdAt', '생성일')
   * @example col.date('updatedAt', '수정일', { format: 'yyyy.MM.dd HH:mm' })
   */
  date: (
    key: keyof TData & string,
    header: string,
    options?: DateOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * Chip 컬럼
   * @example col.chip('status', '상태', { variant: 'success' })
   * @example col.chip('priority', '우선순위', { getVariant: (v) => v === 'high' ? 'error' : 'default' })
   * @example col.chip('tag', '태그', { cell: (info) => <CustomChip value={info.getValue()} /> })
   */
  chip: (
    key: keyof TData & string,
    header: string,
    options?: ChipOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * Avatar 컬럼
   * @example col.avatar('assignee', '담당자')
   * @example col.avatar('user', '사용자', { showName: true, srcKey: 'avatarUrl' })
   */
  avatar: (
    key: keyof TData & string,
    header: string,
    options?: AvatarOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 링크 컬럼
   * @example col.link('url', '링크')
   * @example col.link('title', '제목', { getHref: (_, row) => `/detail/${row.id}` })
   */
  link: (
    key: keyof TData & string,
    header: string,
    options?: LinkOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 텍스트 입력 컬럼 (편집 가능)
   * @example col.textfield('memo', '메모', { onEdit: handleEdit })
   */
  textfield: (
    key: keyof TData & string,
    header: string,
    options?: TextFieldOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 액션 버튼 컬럼
   * @example col.controller([{ key: 'edit', icon: 'edit', onClick: handleEdit }])
   * @example col.controller([...], { cell: (info) => <CustomActions row={info.row} /> })
   */
  controller: (
    actions: ActionItem<TData>[],
    options?: ControllerOptions<TData>
  ) => ColumnDef<TData>;

  /**
   * 커스텀 렌더링 컬럼 (accessorKey 없이 완전 자유)
   * @example col.custom('actions', { cell: (info) => <MyComponent data={info.row.original} /> })
   */
  custom: (id: string, options: CustomOptions<TData>) => ColumnDef<TData>;
}
