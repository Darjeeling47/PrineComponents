"use client";

import { useSidebar } from "@/context/SidebarProvider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { checkIsMobile } from "@/utils/device";

export default function SidebarItem({
  href,
  children,
  icon,
  subItems,
}: SidebarItemProps) {
  const sidebar = useSidebar();

  // Get current path
  const currentPath = usePathname();
  const hasSubItem = subItems && subItems?.length != 0 ? true : false;
  const [isSubItemOpen, setIsSubItemOpen] = useState(false);

  // Toggle sub item
  const handleToggleSubItem = (e: any) => {
    if (hasSubItem && href == "") {
      setIsSubItemOpen(!isSubItemOpen);
    } else if (checkIsMobile()) {
      sidebar.closeSidebar();
      setIsSubItemOpen(false);
    }
  };

  // Toggle item for Chevron
  const handleToggleSubItemForIcon = (e: any) => {
    setIsSubItemOpen(!isSubItemOpen);
  };

  return (
    <div title={children as string}>
      {/* Items button */}
      <div
        className={clsx(
          "flex w-full flex-row items-center justify-between p-2",
          "rounded-md",
          "transition-all duration-200 ease-in-out",
          // --- Color / Background (Custom) ---
          currentPath == href ? "bg-gray-900 text-white" : "hover:bg-gray-100",
        )}
      >
        <Link
          href={href}
          className={clsx(
            "flex flex-row items-center justify-start gap-x-2",
            // --- Layout / Spacing (Custom) ---
            hasSubItem ? "w-10/12" : "w-full",
          )}
          onClick={handleToggleSubItem}
        >
          {icon}
          <span className={clsx("w-full", "truncate")}>{children}</span>
        </Link>

        {/* Chevron */}
        <div
          onClick={handleToggleSubItemForIcon}
          className={clsx(
            "flex h-full items-center justify-center",
            "cursor-pointer",
          )}
        >
          {hasSubItem && (
            <ChevronDownIcon
              className={clsx(
                "size-5",
                "transition-all duration-200",
                // --- Layout / Spacing (Custom) ---
                isSubItemOpen ? "rotate-180" : "",
              )}
            />
          )}
        </div>
      </div>

      {/* Sub item */}
      <AnimatePresence>
        {isSubItemOpen && subItems && hasSubItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={clsx("flex flex-col gap-y-1 overflow-hidden pl-4 pt-1")}
          >
            {subItems.map((subItem, index) => (
              <SidebarItem key={index} href={subItem.path}>
                {subItem.name}
              </SidebarItem>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SidebarItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  subItems?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
}
