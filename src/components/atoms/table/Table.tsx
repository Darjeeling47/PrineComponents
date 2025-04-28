import clsx from "clsx";

export default function Table({ id, children, className }: TableProps) {
  return (
    <table
      id={`table-${id}`}
      className={clsx(
        "w-fit min-w-full table-auto",
        "text-sm",
        "border-separate border-spacing-0",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </table>
  );
}

interface TableProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
