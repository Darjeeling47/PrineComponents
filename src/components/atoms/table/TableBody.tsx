import clsx from "clsx";

export default function TableBody({ id, children, className }: TableBodyProps) {
  return (
    <tbody id={`table-body-${id}`} className={clsx(className)}>
      {children}
    </tbody>
  );
}

interface TableBodyProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
