"use client";

import { useSidebar } from "@/context/SidebarProvider";
import clsx from "clsx";

export default function Sidebar({ children, className }: SidebarProps) {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className={clsx(
            "fixed inset-0 z-[150] lg:hidden",
            "bg-gray-100/50",
            "backdrop-blur transition-all duration-200 ease-in-out",
          )}
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed bottom-0 start-0 top-0 z-[200] h-screen overflow-y-auto lg:sticky",
          "bg-white",
          "border-gray-200",
          "transform transition-all duration-200 ease-in-out",
          // --- Open / Close (Custom) ---
          isSidebarOpen
            ? "w-80 translate-x-0 border-r"
            : "w-0 -translate-x-full border-none !px-0",
          // --- Custom ---
          className,
        )}
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        {children}
      </div>
    </>
  );
}

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}
