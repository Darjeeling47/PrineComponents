import clsx from "clsx";

export default function Divider({ id, title }: DividerProps) {
  return (
    <div
      id={`divider-${id}`}
      className={clsx(
        "my-2 flex w-full flex-row items-center justify-center gap-x-3",
      )}
    >
      {title && (
        <p className={clsx("text-nowrap font-semibold text-gray-900")}>
          {title}
        </p>
      )}
      <hr className={clsx("w-full", "border-gray-200")} />
    </div>
  );
}

interface DividerProps {
  id?: string;
  title?: string;
}
