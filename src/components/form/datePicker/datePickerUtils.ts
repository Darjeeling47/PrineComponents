export interface ICalendarCell {
  text: string;
  value: Date;
}

// Change the date month correctly using `Date`
export function changeDateMonth(date: Date, isNextMonth: boolean): Date {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + (isNextMonth ? 1 : -1));
  return newDate;
}

// Change the month and year
export function changeMonthYear(date: Date, month: number, year: number): Date {
  return new Date(year, month, date.getDate());
}

// Get the first day of the month
function getStartOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

// Get the last day of the month
function getEndOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

// Get the start of the week (Sunday by default)
function getStartOfWeek(date: Date): Date {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - date.getDay()); // Move to Sunday
  return newDate;
}

// Get the end of the week (Saturday by default)
function getEndOfWeek(date: Date): Date {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + (6 - date.getDay())); // Move to Saturday
  return newDate;
}

// Get the calendar cells
export function getCalendarCells(date: Date): ICalendarCell[] {
  const startOfMonth = getStartOfMonth(date);
  const endOfMonth = getEndOfMonth(date);

  // Calculate the number of days before the start of the month
  const startOfCalendar = getStartOfWeek(startOfMonth);
  const endOfCalendar = getEndOfWeek(endOfMonth);

  const calendarCells: ICalendarCell[] = [];
  let currentDay = new Date(startOfCalendar);

  while (currentDay <= endOfCalendar || calendarCells.length % 7 !== 0) {
    calendarCells.push({
      text: String(currentDay.getDate()),
      value: new Date(currentDay), // Clone date
    });

    currentDay.setDate(currentDay.getDate() + 1); // Move to next day
  }

  return calendarCells;
}

// Get the calendar rows (Weeks)
export function getCalendarRows(date: Date): Array<ICalendarCell[]> {
  const cells = getCalendarCells(date);
  const rows: Array<ICalendarCell[]> = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}
