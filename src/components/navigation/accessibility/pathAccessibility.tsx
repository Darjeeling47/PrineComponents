import defaultAccessibilityGroup from "./defaultAccessibilityGroup";

// Set up the path accessibility
// This is the main function that will be used to get the path accessibility
function pathAccessibility() {
  let pathAccessibility = [];

  // Pull the accessibility group
  const defaultGroup = defaultAccessibilityGroup();

  // Add group to path accessibility
  pathAccessibility.push(defaultGroup);

  return pathAccessibility;
}

// ---------------------------------------------------

// Export the full path accessibility
export function getAllPathAccessibility() {
  // Get all path accessibility
  const paths = pathAccessibility();
  return paths;
}

// Export the path accessibility by group
export function getPathAccessibilityByGroup(groupName: string) {
  // Get all path accessibility
  const paths = pathAccessibility();

  // Find the group by name
  const group = paths.find((group) => group.group === groupName);
  if (group) {
    return group;
  } else {
    new Error("Group not found");
    return null;
  }
}
