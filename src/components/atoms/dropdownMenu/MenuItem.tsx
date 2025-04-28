import { MenuItem as HeadlessMenuItem } from "@headlessui/react";

export default function MenuItem({ children }: MenuItemProps) {
  return <HeadlessMenuItem>{children}</HeadlessMenuItem>;
}
interface MenuItemProps {
  children: React.ReactNode;
}
