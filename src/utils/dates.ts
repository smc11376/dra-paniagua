export function getNonTuesdayThursdayDays(year: number, month: number): Date[] {
  const daysInMonth: Date[] = [];

  // Create the first day of the month
  const currentDate = new Date(year, month, 1);

  // Iterate through each day of the month
  while (currentDate.getMonth() === month) {
    const dayOfWeek = currentDate.getDay();

    // Check if the day is not Tuesday (2) and not Thursday (4)
    if (dayOfWeek !== 2 && dayOfWeek !== 4) {
      daysInMonth.push(new Date(currentDate)); // Add a copy of the date to the array
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysInMonth;
}

export function getExcludedDates(year: number, month: number): Date[] {
  const excludedDaysInCurrentMonth = getNonTuesdayThursdayDays(year, month)

  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year
  const excludedDaysNextMonth = getNonTuesdayThursdayDays(nextYear, nextMonth)

  const prevMonth = month === 0 ? 1 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const excludedDaysPrevMonth = getNonTuesdayThursdayDays(prevYear, prevMonth)

  return [...excludedDaysInCurrentMonth, ...excludedDaysNextMonth, ...excludedDaysPrevMonth]
}

export function isTuesday(date : Date | null): boolean {
  if(!date) return false

  return date.getDay() === 2
}

export function isThursday(date : Date | null): boolean {
  if(!date) return false

  return date.getDay() === 4
}
