"use client";

import SubPageBox from "./SubPageBox";
import clsx from "clsx";
import { getSubPageList } from "./subPageListUtil";

export default function SubPageList() {
  const subPageList = getSubPageList();
  return (
    <div
      className={clsx(
        "grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3",
      )}
    >
      {subPageList.map((subPage, index) => (
        <SubPageBox
          name={subPage.name}
          href={subPage.path}
          icon={subPage.icon}
        />
      ))}
    </div>
  );
}
