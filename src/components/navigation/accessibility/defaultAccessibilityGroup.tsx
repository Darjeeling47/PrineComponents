export default function defaultAccessibilityGroup() {
  return {
    group: "Default",
    path: "",
    pages: [
      {
        name: "Example",
        icon: null,
        path: "/",
        subPages: [
          {
            name: "Example 1",
            path: "/example 1",
          },
          {
            name: "Example 2",
            path: "/example 2",
          },
          {
            name: "Example 3",
            path: "/example 3",
          },
        ],
      },
    ],
  };
}
