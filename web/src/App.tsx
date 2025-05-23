import { PlaidLink } from './plaid/PlaidLink.jsx';
import { Show } from 'solid-js';
import { CalendarView } from './calendar/Calendar';
import { Login } from './authentication/Login';
import './app.css'
import { DateNavigation } from './dateNavigation/DateNavigation.jsx';
import { AccountsView } from './accounts/Accounts.jsx';
import { useAppState } from './providers/application-state.provider.jsx';
import { getMonth } from './calendar/utils.js';

export function App() {
  const { selectedMonthNumber, selectedYear } = useAppState(state => state.calendar);
  const selectedMonthName = () => getMonth(selectedMonthNumber()).monthName;
  const { getHasToken } = useAppState(state => state.authentication);
  return (
    <Show
      when={getHasToken()}
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
          <AccountsView />
        </div>
      </div>
    </Show>
  );
}
