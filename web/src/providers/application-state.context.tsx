import { createContext } from 'solid-js';
import { AuthenticationSlice, AuthenticationState } from '../authentication/authentication.slice';
import { CalendarSlice, CalendarState } from '../calendar/calendar.slice';

export interface AppState {
  authentication: AuthenticationState;
  calendar: CalendarState;
}

export const AppStateContext = createContext<AppState>();

export function createAppStateContext() {
  return {
    authentication: AuthenticationSlice(),
    calendar: CalendarSlice(),
  };
}
