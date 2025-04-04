import { MonthNumber, Month } from './types';

export const monthsRecord: Record<MonthNumber, Month> = {
  1: { monthAbbrev: "Jan", monthName: "January", monthNumber: 1 },
  2: { monthAbbrev: "Feb", monthName: "February", monthNumber: 2 },
  3: { monthAbbrev: "Mar", monthName: "March", monthNumber: 3 },
  4: { monthAbbrev: "Apr", monthName: "April", monthNumber: 4 },
  5: { monthAbbrev: "May", monthName: "May", monthNumber: 5 },
  6: { monthAbbrev: "Jun", monthName: "June", monthNumber: 6 },
  7: { monthAbbrev: "Jul", monthName: "July", monthNumber: 7 },
  8: { monthAbbrev: "Aug", monthName: "August", monthNumber: 8 },
  9: { monthAbbrev: "Sep", monthName: "September", monthNumber: 9 },
  10: { monthAbbrev: "Oct", monthName: "October", monthNumber: 10 },
  11: { monthAbbrev: "Nov", monthName: "November", monthNumber: 11 },
  12: { monthAbbrev: "Dec", monthName: "December", monthNumber: 12 }
};

export function getMonth(monthNumber: MonthNumber) { return monthsRecord[monthNumber] }
