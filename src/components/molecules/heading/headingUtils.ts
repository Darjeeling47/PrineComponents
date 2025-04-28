import { getPageIndexByKey } from "@/components/navigation/pageIndex/pageIndex";
import { usePathname } from "next/navigation";

export function getPageName() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Get the label of the last segment of the path
  let pageName = getPageIndexByKey(
    pathSegments[pathSegments.length - 1],
  )?.label;

  // If there no last segment, then it a home page
  if (pathSegments.length === 0) {
    pageName = "Home";
  }

  // If the page is not found, use the last segment of the path
  if (!pageName) {
    pageName = pathSegments[pathSegments.length - 1];
  }

  return pageName;
}
