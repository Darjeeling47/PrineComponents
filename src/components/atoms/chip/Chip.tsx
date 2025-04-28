import { colorMapperChip } from "@/utils/color";
import clsx from "clsx";

export default function Chip({ id, children, color }: ChipProps) {
  return (
    <div
      id={`chip-${id}`}
      className={clsx(
        "flex h-fit w-fit flex-row items-center gap-1.5 px-2 py-1",
        "text-sm font-medium",
        "rounded-md",
        // --- Color (Custom) ---
        colorMapperChip(color),
      )}
    >
      {children}
    </div>
  );
}

interface ChipProps {
  id?: string;
  children: React.ReactNode;
  color?: string;
}
