import { useSearchParams } from '@solidjs/router';
import { MonthNumber, Year } from './types';
import { createSignal } from 'solid-js';

export interface CalendarState {
  selectedMonthNumber: () => MonthNumber,
  selectedYear: () => Year,
  setSelectedMonthNumber: (monthNumber: MonthNumber) => void,
  setSelectedYear: (year: Year) => void,
}

export function CalendarSlice() {
  const [params, setParams] = useSearchParams();
  const today = new Date();
  const selectedMonthNumber = () => (params.month ?? today.getMonth() + 1) as unknown as MonthNumber;
  const selectedYear = () => (parseInt(params.year ?? '') ?? today.getFullYear()) as unknown as Year;
  const setSelectedMonthNumber = (monthNumber: MonthNumber) => setParams({ month: monthNumber });
  const setSelectedYear = (year: Year) => setParams({ year });

  return { selectedMonthNumber, selectedYear, setSelectedMonthNumber, setSelectedYear };
}

