export const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const;
export type MonthName = typeof MonthNames[number];

export const MonthAbbrevs = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;
export type MonthAbbrev = typeof MonthAbbrevs[number];

export const Years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] as const;
export type Year = typeof Years[number];

export const MonthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type MonthNumber = typeof MonthNumbers[number];

export type Month = { MonthAbbrev: MonthAbbrev, MonthName: MonthName, MonthNumber: MonthNumber }

export const Months: Record<MonthNumber, Month> = {
  1: { MonthAbbrev: "Jan", MonthName: "January", MonthNumber: 1 },
  2: { MonthAbbrev: "Feb", MonthName: "February", MonthNumber: 2 },
  3: { MonthAbbrev: "Mar", MonthName: "March", MonthNumber: 3 },
  4: { MonthAbbrev: "Apr", MonthName: "April", MonthNumber: 4 },
  5: { MonthAbbrev: "May", MonthName: "May", MonthNumber: 5 },
  6: { MonthAbbrev: "Jun", MonthName: "June", MonthNumber: 6 },
  7: { MonthAbbrev: "Jul", MonthName: "July", MonthNumber: 7 },
  8: { MonthAbbrev: "Aug", MonthName: "August", MonthNumber: 8 },
  9: { MonthAbbrev: "Sep", MonthName: "September", MonthNumber: 9 },
  10: { MonthAbbrev: "Oct", MonthName: "October", MonthNumber: 10 },
  11: { MonthAbbrev: "Nov", MonthName: "November", MonthNumber: 11 },
  12: { MonthAbbrev: "Dec", MonthName: "December", MonthNumber: 12 }
};
