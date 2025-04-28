import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default function SubPageBox({ href, name, icon }: SubPageBoxProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex w-full flex-row items-center space-x-2 p-4",
        "rounded-lg border border-gray-200",
        "transition-all duration-200 hover:shadow-sm",
        "group",
      )}
    >
      {icon}
      <h1 className={clsx("w-full", "truncate text-lg font-semibold")}>
        {name}
      </h1>
      <ArrowUpRightIcon
        className={clsx(
          "size-4",
          "transition-all duration-200",
          "group-hover:-translate-y-1 group-hover:translate-x-1",
        )}
        strokeWidth={2}
      />
    </Link>
  );
}

interface SubPageBoxProps {
  href: string;
  name: string;
  icon?: React.ReactNode;
}
