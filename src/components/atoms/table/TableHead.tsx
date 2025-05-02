import clsx from "clsx";

export default function TableHead({ id, children, className }: TableHeadProps) {
  return (
    <thead id={`table-head-${id}`} className={className}>
      {children}
    </thead>
  );
}

interface TableHeadProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
