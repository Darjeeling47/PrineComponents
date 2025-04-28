import clsx from "clsx";

export default function Banner({
  id,
  children,
  className,
  variant,
}: BannerProps) {
  return (
    <div
      id={`banner-${id}`}
      className={clsx(
        "p-4",
        "border-t md:rounded-lg md:border",
        "md:shadow-md",
        // --- Variant ---
        (variant == "white" || variant == null || variant == undefined) &&
          "border-gray-200 bg-white",
        variant == "black" && "border-gray-700 bg-gray-900 text-white",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BannerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "black";
}
