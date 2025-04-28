"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

export default function Button({
  id,
  children,
  className,
  variant,
  rounded,
  onClick,
  href,
  target,
  wFit,
  disabled,
}: ButtonProps) {
  // General class name
  const baseClassName = [
    "flex flex-row items-center justify-center gap-2 p-2",
    "transition-all duration-200",
    // --- Spacing (Condition) ---
    wFit ? "w-fit" : "w-full",
    // --- Borders (Condition) ---
    rounded ? "rounded-full" : "rounded-md",
    // --- Variants ---
    (variant === "primary" || variant == null || variant == undefined) &&
      "bg-gray-900 text-white hover:bg-gray-800",
    variant === "secondary" &&
      "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100",
    variant === "text" && "text-gray-900 hover:bg-gray-100",
    // --- Disabled ---
    disabled && "cursor-not-allowed opacity-50",
    // --- Custom ---
    className,
  ];

  // Handle the click event
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    } else {
      return;
    }
  };

  if (href && !disabled) {
    return (
      <Link
        id={`button-${id}`}
        href={href}
        target={target}
        className={clsx(baseClassName)}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <HeadlessButton
        id={`button-${id}`}
        onClick={handleClick}
        disabled={disabled}
        className={clsx(baseClassName)}
      >
        {children}
      </HeadlessButton>
    );
  }
}

interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: string;
  rounded?: boolean;
  onClick?: Function;
  href?: string;
  target?: string;
  wFit?: boolean;
  disabled?: boolean;
}
