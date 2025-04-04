import { MONTH_NAMES, MONTH_ABBREVS, YEARS, MONTH_NUMBERS } from './utils';

export type MonthName = typeof MONTH_NAMES[number];
export type MonthAbbrev = typeof MONTH_ABBREVS[number];
export type Year = typeof YEARS[number];
export type MonthNumber = typeof MONTH_NUMBERS[number];
export interface Month { monthAbbrev: MonthAbbrev, monthName: MonthName, monthNumber: MonthNumber }
