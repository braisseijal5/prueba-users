export interface Header {
  label: string;
  key: string;
}

export interface RowAction {
  label: string;
  onClick: (email: string) => void;
}
