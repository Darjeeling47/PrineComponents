"use client";

import { getPageIndexByKey } from "@/components/navigation/pageIndex/pageIndex";
import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export async function getBreadcrumbs(pathname: string) {
  const pathnameSegments = pathname.split("/").filter((segment) => segment);

  let breadcrumbs: BreadcrumbItem[] = [];

  // Iterate through the segments and build the breadcrumb items using the pageIndex
  for (let i = 0; i < pathnameSegments.length; i++) {
    const segment = pathnameSegments[i];

    // Setup the path and label for the breadcrumb
    const pageIndex = getPageIndexByKey(segment);
    let path = `/${pathnameSegments.slice(0, i + 1).join("/")}`;
    const isAvailable = await isPageAvailable(path);
    if (!isAvailable) {
      path = "";
    }

    // If the pageIndex is not found, use the segment as the label that not longer than 20 characters
    let label = pageIndex ? pageIndex.label : segment;
    if (label.length > 20) {
      label = label.slice(0, 17) + "...";
    }

    // Add to the breadcrumbs array
    breadcrumbs.push({
      label,
      path,
    });
  }

  return breadcrumbs;
}

// Check the availability of the page
async function isPageAvailable(path: string): Promise<boolean> {
  try {
    const response = await fetch(path, { method: "HEAD" });
    console.log(path, response);
    return response.ok; // 200-299 = ok
  } catch (error) {
    return false;
  }
}
