import { useNavigate, useParams } from '@solidjs/router';
import { MonthNumber, Year } from './types';

export interface CalendarState {
  selectedMonthNumber: MonthNumber,
  selectedYear: Year,
  setSelectedMonthNumber: (monthNumber: MonthNumber) => void,
  setSelectedYear: (year: Year) => void,
}

export function CalendarSlice() {
  const navigate = useNavigate();
  const params = useParams();
  console.log({ year:params.year });
  console.log({ month:params.month });
  const today = new Date();
  const selectedMonthNumber = (params.month ?? today.getMonth() + 1) as unknown as MonthNumber;
  console.log({ selectedMonthNumber });
  const selectedYear = (params.year ?? today.getFullYear()) as unknown as Year;
  console.log({ selectedYear });
  const setSelectedMonthNumber = (monthNumber: MonthNumber) => navigate(`/?year=${selectedYear}&month=${monthNumber}`);
  const setSelectedYear = (year: Year) => navigate(`/?year=${year}&month=${selectedMonthNumber}`);

  return { selectedMonthNumber, selectedYear, setSelectedMonthNumber, setSelectedYear };
}

