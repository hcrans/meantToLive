import { PlaidLink } from './plaid/PlaidLink.jsx';
import { Show } from 'solid-js';
import { Months } from './calendar/types';
import { selectedMonthNumber, selectedYear } from './calendar/store';
import { CalendarView } from './calendar/Calendar';
import { getUser } from './authentication/store';
import { Login } from './authentication/Login';
import './app.css'
import { DateNavigation } from './dateNavigation/DateNavigation.jsx';

export function App() {
  const selectedMonthName = () => Months[selectedMonthNumber()].MonthName;
  return (
    <Show
      when={getUser()}
      fallback={
        <Login />
      }>
      <div class="column" >
        <h1>
          {selectedMonthName() + " " + selectedYear()}
        </h1>
        <div class="row loggedIn" >
          <div class="column sideControls">
            <DateNavigation />
            <PlaidLink />
          </div>
          <CalendarView />
        </div>
      </div>
    </Show>
  );
}
