import { getAllPathAccessibility } from "@/components/navigation/accessibility/pathAccessibility";
import { usePathname } from "next/navigation";

interface SubPageBox {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

export function getSubPageList() {
  const pathname = usePathname();
  const navigation = getAllPathAccessibility();

  let subPageList: SubPageBox[] = [];

  function findSubPath(items: any[]) {
    for (const group of items) {
      if (group.path === pathname && group.pages.length != 0) {
        for (const page of group.pages) {
          subPageList.push({
            name: page.name,
            path: page.path,
            icon: page.icon,
          });
        }
      }

      for (const page of group.pages) {
        const fullPath = `${page.path}`;

        if (fullPath === pathname && page.subPages.length != 0) {
          for (const subPage of page.subPages) {
            subPageList.push({ name: subPage.name, path: subPage.path });
          }
        }
      }
    }
    return false;
  }

  findSubPath(navigation);
  return subPageList;
}
