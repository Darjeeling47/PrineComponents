export function getPageOptions(count: number) {
  const options = [];
  for (let i = 0; i < count; i++) {
    options.push({ value: i + 1, label: (i + 1).toString() });
  }

  return options;
}
