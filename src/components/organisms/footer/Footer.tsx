import Button from "@/components/atoms/button/Button";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={clsx("border-t border-gray-200 py-4")}>
      <div
        className={clsx(
          "my-container flex w-full flex-row items-center justify-between",
          "text-sm",
          "text-gray-600",
        )}
      >
        <p>Your Company</p>
        <div className={clsx("flex w-fit flex-row items-center gap-x-1")}>
          <Button variant="text" href={"#"} wFit>
            Term of service
          </Button>
          <p className={clsx("h-fit")}>|</p>
          <Button variant="text" href={"#"} wFit>
            Privacy statement
          </Button>
        </div>
      </div>
    </div>
  );
}
