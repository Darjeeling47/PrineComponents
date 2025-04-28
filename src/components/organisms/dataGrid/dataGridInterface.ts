export interface ColumnProps {
  title: React.ReactNode;
  key: string;
  type: string;
  floatingPoint?: number;
  size: string; // xs, sm, md, lg, xl
  align?: string; // left, center, right
}

export interface ActionColumnProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onAction?: Function;
  href?: string;
  target?: string;
  color?: string;
  disabled?: boolean;
}
