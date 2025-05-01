import clsx from "clsx";

export default function Modal({ id, children, className }: ModalProps) {
  return (
    <div
      id={`modal-${id}`}
      key="modal-content"
      className={clsx(
        "h-fit max-h-screen w-fit min-w-full max-w-full p-4 sm:min-w-96",
        "bg-white",
        "rounded-lg border border-gray-300",
        "shadow-md transition-all duration-200 ease-in-out",
        // --- Custom ---
        className,
      )}
    >
      {children}
    </div>
  );
}

interface ModalProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}
