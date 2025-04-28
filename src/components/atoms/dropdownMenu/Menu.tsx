import { Menu as HeadlessMenu } from "@headlessui/react";

export default function Menu({ children }: MenuProps) {
  return <HeadlessMenu>{children}</HeadlessMenu>;
}

interface MenuProps {
  children: React.ReactNode;
}
