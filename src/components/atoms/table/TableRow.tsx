export default function TableRow({ id, children, className }: TableRowProps) {
  return (
    <tr id={`table-row-${id}`} className={className}>
      {children}
    </tr>
  );
}

interface TableRowProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
