import clsx from "clsx";

export default function DataGridHeader({
  title,
  actionButton,
}: DataGridHeaderProps) {
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between px-4 py-3",
        "border-b border-gray-200",
      )}
    >
      <h1 className={clsx("text-lg font-semibold", "text-gray-900")}>
        {title}
      </h1>
      <div className={clsx("flex flex-row gap-x-2")}>{actionButton}</div>
    </div>
  );
}

interface DataGridHeaderProps {
  title?: string;
  actionButton?: React.ReactNode;
}
