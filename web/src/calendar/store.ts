import { createSignal } from 'solid-js';
import { MonthNumber, Year } from './types';

const today = new Date();
const currentMonthNumber = today.getMonth() + 1 as MonthNumber;
const currentYear = today.getFullYear() as Year;

export const [selectedMonthNumber, setSelectedMonthNumber] = createSignal<MonthNumber>(currentMonthNumber);
export const [selectedYear, setSelectedYear] = createSignal<Year>(currentYear);
