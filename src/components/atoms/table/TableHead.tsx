import clsx from "clsx";

export default function TableHead({ id, children, className }: TableHeadProps) {
  return (
    <thead
      id={`table-head-${id}`}
      className={clsx(
        "bg-gray-50",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </thead>
  );
}

interface TableHeadProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
