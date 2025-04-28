"use client";

import Button from "@/components/atoms/button/Button";
import Breadcrumb from "@/components/molecules/breadcrumb/Breadcrumb";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { getPageName } from "./headingUtils";

export default function Heading({ name }: { name?: string }) {
  const router = useRouter();
  const pageName = getPageName();

  return (
    <div className={clsx("flex w-full flex-col gap-y-1")}>
      <div className={clsx("flex w-full flex-row justify-between")}>
        <h1 className={clsx("text-2xl font-semibold", "text-gray-900")}>
          {name ? name : pageName}
        </h1>
        <Button variant="secondary" onClick={router.back} wFit>
          <ArrowLeftIcon className="size-5" />
          <span className={clsx("hidden sm:block")}>Back</span>
        </Button>
      </div>
      <Breadcrumb />
    </div>
  );
}
