import clsx from "clsx";

export default function Card({ children, className }: CardProps) {
  return (
    <div
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
  children: React.ReactNode;
  className?: string;
}
