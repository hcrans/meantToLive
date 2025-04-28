import { For } from 'solid-js';
import { DayCard } from './DayCard';
import { Header } from './Header';
import { MonthNumber, Year } from './types';
import './Calendar.css'
import { createPlaidTransactionEffect } from '../plaidTransactions/effects';
import { createTransactionEffect } from '../transactions/effects';
import { useAppState } from '../providers/application-state.provider';

export function CalendarView() {
  const { selectedMonthNumber, selectedYear } = useAppState(state => state.calendar);
  createPlaidTransactionEffect();
  createTransactionEffect();

  return (
    <div class="calendarView">
      <Header />
      <div class="card-grid">
        <For each={getListOfDaysInMonth(selectedYear, selectedMonthNumber)}>
          {date => <DayCard date={date} />}
        </For>
      </div>
    </div>);
}

function getListOfDaysInMonth(year: Year, monthNumber: MonthNumber) {
  const firstDayOfMonth = new Date(year, monthNumber - 1, 1);
  const dayOfWeekOfFirstDay = firstDayOfMonth.getDay();
  const firstSundayOfCalendarPage = new Date(firstDayOfMonth);
  firstSundayOfCalendarPage.setDate(firstDayOfMonth.getDate() - dayOfWeekOfFirstDay);
  const daysInMonth = new Date(year, monthNumber, 0).getDate() + 1;
  const lastDayOfMonth = new Date(year, monthNumber - 1, daysInMonth - 1);
  const dayOfWeekOfLastDay = lastDayOfMonth.getDay();
  const lastSaturdayOfCalendarPage = new Date(lastDayOfMonth);
  lastSaturdayOfCalendarPage.setDate(lastDayOfMonth.getDate() + 7 - dayOfWeekOfLastDay);
  let result = [];
  for (let date = new Date(firstSundayOfCalendarPage); date.toDateString() !== lastSaturdayOfCalendarPage.toDateString(); date.setDate(date.getDate() + 1))
    result.push(new Date(date));
  return result;
}
