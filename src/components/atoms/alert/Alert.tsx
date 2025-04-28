import { colorMapperChip } from "@/utils/color";
import clsx from "clsx";

export default function Alert({ id, children, icon, color }: AlertProps) {
  return (
    <div
      id={`alert-${id}`}
      className={clsx(
        "flex flex-row gap-x-2 p-2",
        "rounded-md",
        colorMapperChip(color),
      )}
    >
      {icon}
      {children}
    </div>
  );
}

interface AlertProps {
  id?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
}
