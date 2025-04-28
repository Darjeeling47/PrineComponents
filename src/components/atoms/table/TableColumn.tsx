import clsx from "clsx";

export default function TableColumn({
  id,
  children,
  className,
  onClick,
  colSpan,
  rowSpan,
}: TableColumnProps) {
  return (
    <td
      id={`table-column-${id}`}
      onClick={onClick}
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={clsx(className)}
    >
      {children}
    </td>
  );
}

interface TableColumnProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  colSpan?: number;
  rowSpan?: number;
}
