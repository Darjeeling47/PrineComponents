"use client";

import { useState } from "react";
import Button from "../../atoms/button/Button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../../atoms/card/Card";
import clsx from "clsx";

export default function ToggleCard({
  title,
  isDefaultOpen = false,
  children,
  cardClassName,
  className,
}: ToggleCardProps) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className={cardClassName}>
      {/* Title */}
      <div
        className={clsx(
          "flex w-full flex-row items-center justify-between gap-x-2",
        )}
      >
        <h1
          className={clsx(
            "w-full text-ellipsis text-nowrap text-xl font-semibold",
            "text-gray-900",
          )}
        >
          {title}
        </h1>
        <Button variant="secondary" onClick={handleToggle} rounded wFit>
          <ChevronDownIcon
            className={clsx(
              "size-6",
              "transition-all duration-200 ease-in-out",
              // --- Layout / Spacing (Custom) ---
              isOpen ? "rotate-180" : "",
            )}
          />
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

interface ToggleCardProps {
  title: string;
  isDefaultOpen?: boolean;
  children: React.ReactNode;
  cardClassName?: string;
  className?: string;
}
