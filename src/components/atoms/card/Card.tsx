import clsx from "clsx";

export default function Card({ id, children, className }: CardProps) {
  return (
    <div
      id={id}
      className={clsx(
        "p-4",
        "bg-white",
        "rounded-lg border border-gray-200",
        "shadow-sm",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}
