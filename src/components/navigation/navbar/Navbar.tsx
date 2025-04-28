import clsx from "clsx";

export default function Navbar({ children, className }: NavbarProps) {
  return (
    <div
      className={clsx(
        "sticky top-0 z-[100] w-full",
        "bg-white",
        "border-b border-gray-200",
        "transition-all duration-200 ease-in-out",
      )}
    >
      <div
        className={clsx(
          "my-container h-16 w-full",
          // --- Custom ---
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
