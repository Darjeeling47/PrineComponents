// This function is used to map the color to the chip class ---------------------------------------
export function colorMapperChip(color: string | undefined | null) {
  switch (color) {
    case "gray":
      return "text-gray-900 bg-gray-100";
    case "red":
      return "text-red-700 bg-red-100";
    case "orange":
      return "text-orange-700 bg-orange-100";
    case "amber":
      return "text-amber-700 bg-amber-100";
    case "yellow":
      return "text-yellow-700 bg-yellow-100";
    case "lime":
      return "text-lime-700 bg-lime-100";
    case "green":
      return "text-green-700 bg-green-100";
    case "emerald":
      return "text-emerald-700 bg-emerald-100";
    case "teal":
      return "text-teal-700 bg-teal-100";
    case "cyan":
      return "text-cyan-700 bg-cyan-100";
    case "sky":
      return "text-sky-700 bg-sky-100";
    case "blue":
      return "text-blue-700 bg-blue-100";
    case "indigo":
      return "text-indigo-700 bg-indigo-100";
    case "violet":
      return "text-violet-700 bg-violet-100";
    case "purple":
      return "text-purple-700 bg-purple-100";
    case "fuchsia":
      return "text-fuchsia-700 bg-fuchsia-100";
    case "pink":
      return "text-pink-700 bg-pink-100";
    case "rose":
      return "text-rose-700 bg-rose-100";
    default:
      return "text-gray-900 bg-gray-100";
  }
}

// This function is used to map the color to the button class ---------------------------------------
export function colorMapperButton(color: string | undefined | null) {
  switch (color) {
    case "gray":
      return "bg-gray-900 text-white hover:bg-gray-800";
    case "red":
      return "bg-red-600 text-white hover:bg-red-700";
    case "orange":
      return "bg-orange-600 text-white hover:bg-orange-700";
    case "amber":
      return "bg-amber-600 text-white hover:bg-amber-700";
    case "yellow":
      return "bg-yellow-600 text-white hover:bg-yellow-700";
    case "lime":
      return "bg-lime-600 text-white hover:bg-lime-700";
    case "green":
      return "bg-green-600 text-white hover:bg-green-700";
    case "emerald":
      return "bg-emerald-600 text-white hover:bg-emerald-700";
    case "teal":
      return "bg-teal-600 text-white hover:bg-teal-700";
    case "cyan":
      return "bg-cyan-600 text-white hover:bg-cyan-700";
    case "sky":
      return "bg-sky-600 text-white hover:bg-sky-700";
    case "blue":
      return "bg-blue-600 text-white hover:bg-blue-700";
    case "indigo":
      return "bg-indigo-600 text-white hover:bg-indigo-700";
    case "violet":
      return "bg-violet-600 text-white hover:bg-violet-700";
    case "purple":
      return "bg-purple-600 text-white hover:bg-purple-700";
    case "fuchsia":
      return "bg-fuchsia-600 text-white hover:bg-fuchsia-700";
    case "pink":
      return "bg-pink-600 text-white hover:bg-pink-700";
    case "rose":
      return "bg-rose-600 text-white hover:bg-rose-700";
    default:
      return "bg-gray-900 text-white hover:bg-gray-800";
  }
}

// This function is used to map the color to the menu class ---------------------------------------
export function colorMapperMenu(color: string | undefined | null) {
  switch (color) {
    case "gray":
      return "text-gray-900 bg-white hover:bg-gray-100";
    case "red":
      return "text-gray-900 bg-white hover:bg-red-100 hover:text-red-600";
    case "orange":
      return "text-gray-900 bg-white hover:bg-orange-100 hover:text-orange-600";
    case "amber":
      return "text-gray-900 bg-white hover:bg-amber-100 hover:text-amber-600";
    case "yellow":
      return "text-gray-900 bg-white hover:bg-yellow-100 hover:text-yellow-600";
    case "lime":
      return "text-gray-900 bg-white hover:bg-lime-100 hover:text-lime-600";
    case "green":
      return "text-gray-900 bg-white hover:bg-green-100 hover:text-green-600";
    case "emerald":
      return "text-gray-900 bg-white hover:bg-emerald-100 hover:text-emerald-600";
    case "teal":
      return "text-gray-900 bg-white hover:bg-teal-100 hover:text-teal-600";
    case "cyan":
      return "text-gray-900 bg-white hover:bg-cyan-100 hover:text-cyan-600";
    case "sky":
      return "text-gray-900 bg-white hover:bg-sky-100 hover:text-sky-600";
    case "blue":
      return "text-gray-900 bg-white hover:bg-blue-100 hover:text-blue-600";
    case "indigo":
      return "text-gray-900 bg-white hover:bg-indigo-100 hover:text-indigo-600";
    case "violet":
      return "text-gray-900 bg-white hover:bg-violet-100 hover:text-violet-600";
    case "purple":
      return "text-gray-900 bg-white hover:bg-purple-100 hover:text-purple-600";
    case "fuchsia":
      return "text-gray-900 bg-white hover:bg-fuchsia-100 hover:text-fuchsia-600";
    case "pink":
      return "text-gray-900 bg-white hover:bg-pink-100 hover:text-pink-600";
    case "rose":
      return "text-gray-900 bg-white hover:bg-rose-100 hover:text-rose-600";
    default:
      return "text-gray-900 bg-white hover:bg-gray-100";
  }
}

// This function is used to map the color to the text class ---------------------------------------
export function colorMapperText(color: string | undefined | null) {
  switch (color) {
    case "gray":
      return "text-gray-900";
    case "red":
      return "text-red-600";
    case "orange":
      return "text-orange-600";
    case "amber":
      return "text-amber-600";
    case "yellow":
      return "text-yellow-600";
    case "lime":
      return "text-lime-600";
    case "green":
      return "text-green-600";
    case "emerald":
      return "text-emerald-600";
    case "teal":
      return "text-teal-600";
    case "cyan":
      return "text-cyan-600";
    case "sky":
      return "text-sky-600";
    case "blue":
      return "text-blue-600";
    case "indigo":
      return "text-indigo-600";
    case "violet":
      return "text-violet-600";
    case "purple":
      return "text-purple-600";
    case "fuchsia":
      return "text-fuchsia-600";
    case "pink":
      return "text-pink-600";
    case "rose":
      return "text-rose-600";
    default:
      return "text-gray-900";
  }
}

// This function use to random color for the text ---------------------------------------
export function randomColor() {
  const colors = [
    "gray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// This function use to export color set for the text ---------------------------------------
export function getColorSet() {
  return [
    "gray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
}
