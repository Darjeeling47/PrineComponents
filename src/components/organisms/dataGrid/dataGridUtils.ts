// Table align functions
export function getColumnAlign(type: string, align: string | null | undefined) {
  let className = "";

  // Check type first.
  if (type == "string") className = "text-left justify-start";
  else if (type == "number") className = "text-right justify-end";
  else if (type == "custom") className = "text-center justify-center";

  // If there are align then check align
  if (align) {
    if (align == "left") className = "text-left justify-start";
    else if (align == "center") className = "text-center justify-center";
    else if (align == "right") className = "text-right justify-end";
  }

  return className;
}

// get column width
export function getColumnWidth(size: string) {
  let className = "";

  // check size
  if (size == "xs") className = "min-w-20";
  else if (size == "sm") className = "min-w-32";
  else if (size == "md") className = "min-w-44";
  else if (size == "lg") className = "min-w-60";
  else if (size == "xl") className = "min-w-96";
  else if (size == "auto") className = "w-full text-nowrap";

  return className;
}

// get column border
export function getColumnBorder(
  index: number,
  length: number,
  borderDirection: string, // l, r, t, b
) {
  let className = "";

  // check index
  if (index != length - 1) {
    className = `border-${borderDirection}`;
  }

  return className;
}

// get row color based on index
export function getRowColor(index: number) {
  return index % 2 ? "bg-gray-50" : "bg-white";
}

// get position of action column based on index
export function getActionColumnPosition(index: number, length: number) {
  let className = "";
  let offset = length - index - 1;
  let position = offset * 12;

  className = `right-${position}`;

  return className;
}

// Format number to currency
export function formatNumber(number: string | number, floatingPoint?: number) {
  let num = Number(number);

  // Check if number is NaN
  if (isNaN(num)) return number;

  // check floating point
  if (!floatingPoint && floatingPoint != 0) floatingPoint = 2;

  // Ensure correct formatting with 2 decimal places
  return num.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: floatingPoint,
    maximumFractionDigits: floatingPoint,
  });
}
