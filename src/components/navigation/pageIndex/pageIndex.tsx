// This is the function that will be used to get the name of the path
// It's contain all the paths that are used in the application so that components can use it to get the name of the path
function PageIndex() {
  return [
    {
      key: "example 1",
      label: "Example 1",
    },
    {
      key: "example 2",
      label: "Example 2",
    },
  ];
}

// ---------------------------------------------------
// Export the full path
export function getAllPageIndex() {
  // Get all path
  const paths = PageIndex();
  return paths;
}

// Export the path by key
// This is the function that will be used to get the name of the path by key
export function getPageIndexByKey(key: string) {
  // Get all path
  const paths = PageIndex();

  // Find the path by key
  const path = paths.find((path) => path.key === key);
  if (path) {
    return path;
  } else {
    return null;
  }
}
