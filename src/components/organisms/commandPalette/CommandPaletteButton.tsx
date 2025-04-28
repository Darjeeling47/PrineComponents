"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import CommandPalette from "./CommandPalette";
import { useModal } from "@/context/ModalProvider";
import { useEffect } from "react";
import Chip from "@/components/atoms/chip/Chip";
import { checkIsMobile, checkIsWindows } from "@/utils/device";

export default function CommandPaletteButton({
  className,
}: CommandPaletteButtonProps) {
  const { openModal } = useModal();

  // Open the command palette when the button is clicked
  const handleClick = () => {
    openModal(<CommandPalette />);
  };

  // Open the command palette when Ctrl+K or Cmd+K is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        openModal(<CommandPalette />);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal]);

  return (
    <div
      className={clsx(
        "flex w-full max-w-96 items-center justify-start gap-x-2 p-2",
        "transition-all duration-200 ease-in-out",
        "cursor-pointer",
        // --- Custom styles ---
        className,
      )}
      onClick={handleClick}
    >
      <MagnifyingGlassIcon className={clsx("size-5", "text-gray-400")} />
      <div
        className={clsx(
          "w-fit",
          "text-gray-400",
          "transition-all duration-200 ease-in-out",
          "outline-none",
        )}
      >
        Search
      </div>
      {!checkIsMobile() && (
        <div
          className={clsx(
            "px-2 py-0.5",
            "text-xs",
            "bg-gray-50 text-gray-400",
            "rounded-full border border-gray-200",
          )}
        >
          {checkIsWindows() ? "Ctrl K" : "⌘K"}
        </div>
      )}
    </div>
  );
}

interface CommandPaletteButtonProps {
  className?: string;
}
