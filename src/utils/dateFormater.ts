import { Dayjs } from "dayjs";

// Format date string ---------------------------------------------------------------------------------------
export function formatDateEn(date: string | Date | Dayjs, isLong?: boolean) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: isLong ? "long" : "short",
    year: "numeric",
  });
  return formattedDate;
}

export function formatDateTh(date: string | Date | Dayjs, isLong?: boolean) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("th-TH", {
    day: "numeric",
    month: isLong ? "long" : "short",
    year: "numeric",
  });
  return formattedDate;
}

// Format month year ----------------------------------------------------------------------------------------
export function formatMonthYearEn(
  date: string | Date | Dayjs,
  isLong?: boolean,
) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    month: isLong ? "long" : "short",
    year: "numeric",
  });
  return formattedDate;
}

export function formatMonthYearTh(
  date: string | Date | Dayjs,
  isLong?: boolean,
) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("th-TH", {
    month: isLong ? "long" : "short",
    year: "numeric",
  });
  return formattedDate;
}

// Format month ---------------------------------------------------------------------------------------------

export function formatMonthEn(date: string | Date | Dayjs, isLong?: boolean) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    month: isLong ? "long" : "short",
  });
  return formattedDate;
}

export function formatMonthTh(date: string | Date | Dayjs, isLong?: boolean) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("th-TH", {
    month: isLong ? "long" : "short",
  });
  return formattedDate;
}

// Format year ----------------------------------------------------------------------------------------------
export function formatYearEn(date: string | Date | Dayjs) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    year: "numeric",
  });
  return formattedDate;
}

export function formatYearTh(date: string | Date | Dayjs) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleDateString("th-TH", {
    year: "numeric",
  });
  return formattedDate;
}

// Format date time string ----------------------------------------------------------------------------------
export function formatDateTimeEn(
  date: string | Date | Dayjs,
  isLong?: boolean,
) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleString("en-GB", {
    day: "numeric",
    month: isLong ? "long" : "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
}

export function formatDateTimeTh(
  date: string | Date | Dayjs,
  isLong?: boolean,
) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleString("th-TH", {
    day: "numeric",
    month: isLong ? "long" : "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
}

// Format time string ---------------------------------------------------------------------------------------
export function formatTimeEn(date: string | Date | Dayjs) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
}

export function formatTimeTh(date: string | Date | Dayjs) {
  const newDate = new Date(date.toString());
  const formattedDate = newDate.toLocaleTimeString("th-TH", {
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
}
