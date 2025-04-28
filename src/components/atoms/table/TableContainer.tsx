import clsx from "clsx";

export default function TableContainer({
  id,
  children,
  className,
}: TableContainerProps) {
  return (
    <div
      id={`table-container-${id}`}
      className={clsx(
        "max-h-[630px] max-w-full overflow-x-auto overflow-y-scroll",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </div>
  );
}

interface TableContainerProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
