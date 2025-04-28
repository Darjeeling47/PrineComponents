"use client";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { BreadcrumbItem, getBreadcrumbs } from "./breadcrumbUtils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const getBreadcrumbsData = async () => {
      const breadcrumbsData = await getBreadcrumbs(pathname);
      setBreadcrumbs(breadcrumbsData);
    };

    getBreadcrumbsData();
  }, []);

  return (
    <nav
      className={clsx(
        "flex flex-wrap items-center gap-1",
        "text-sm",
        "text-gray-600",
      )}
    >
      {/* Home */}
      <Link
        href="/"
        className={clsx("hover:text-gray-900", "transition-all duration-200")}
      >
        <HomeIcon className="size-4" strokeWidth={2} />
      </Link>

      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path} className={clsx("flex items-center gap-1")}>
          <ChevronRightIcon className="size-4" strokeWidth={2} />
          {index === breadcrumbs.length - 1 ? (
            <span className={clsx("text-gray-900")}>{breadcrumb.label}</span>
          ) : (
            <Link
              href={breadcrumb.path}
              className={clsx(
                "whitespace-nowrap",
                "transition-all duration-200",
                // --- Breadcrumbs Custom ---
                breadcrumb.path
                  ? "cursor-pointer hover:text-gray-900"
                  : "cursor-default",
              )}
            >
              {breadcrumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
