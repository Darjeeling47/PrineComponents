import { MenuButton as HeadlessMenuButton } from "@headlessui/react";
import clsx from "clsx";

export default function MenuButton({
  id,
  children,
  className,
}: MenuButtonProps) {
  return (
    <HeadlessMenuButton id={`menuButton-${id}`} className={clsx(className)}>
      {children}
    </HeadlessMenuButton>
  );
}

interface MenuButtonProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}
