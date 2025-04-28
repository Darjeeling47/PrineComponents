import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function BreadcrumbBodySkeleton() {
  return Array.from({ length: 3 }, (_, index) => (
    <span key={index} className={clsx("flex w-20 items-center gap-1")}>
      <ChevronRightIcon className="size-4" strokeWidth={2} />
      <div
        className={clsx(
          "h-4 w-full",
          "bg-gray-200",
          "rounded",
          "animate-pulse",
        )}
      ></div>
    </span>
  ));
}
