import { getAllPathAccessibility } from "@/components/navigation/accessibility/pathAccessibility";

export interface PageOption {
  label: React.ReactNode;
  path: string;
}

// This function will be used to get all the page options
// It will return an array of objects with label and path
function getPageOptions() {
  const allPageOptions = getAllPathAccessibility();

  const flatPages: PageOption[] = [];

  // Loop through all the page options and add them to the flatPages array
  allPageOptions.forEach((group) => {
    group.pages.forEach((page) => {
      flatPages.push({
        label: page.name,
        path: page.path,
      });

      // If there are subPages, add them too
      if (page.subPages && page.subPages.length > 0) {
        page.subPages.forEach((subPage) => {
          flatPages.push({
            label: subPage.name,
            path: subPage.path,
          });
        });
      }
    });
  });

  return flatPages;
}

export function getCommandPaletteOptions(value: string) {
  // Check if the value is empty
  if (value === "") {
    // If it is empty, return "search something"
    return [];
  }

  // All your options function
  const pageOptions = getPageOptions();

  // Filter the options while searching
  const filteredOptions: PageOption[] = [];

  // Filter the page options based on the value
  filteredOptions.push(
    ...pageOptions.filter((option) => {
      const label = option.label as string;
      return label.toLowerCase().includes(value.toLowerCase());
    }),
  );

  // If there are no options, return "no results found"
  if (filteredOptions.length === 0) {
    return [];
  }

  // Remove duplicates
  const uniqueOptions = new Map<string, PageOption>();
  filteredOptions.forEach((option) => {
    if (!uniqueOptions.has(option.label as string)) {
      uniqueOptions.set(option.label as string, option);
    }
  });

  // Convert the map back to an array
  filteredOptions.length = 0;
  uniqueOptions.forEach((option) => {
    filteredOptions.push(option);
  });

  // Sort the options alphabetically
  filteredOptions.sort((a, b) => {
    const labelA = a.label as string;
    const labelB = b.label as string;
    return labelA.localeCompare(labelB);
  });

  // Return the filtered options
  return filteredOptions;
}
