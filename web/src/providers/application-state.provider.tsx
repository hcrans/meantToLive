import { ParentProps, useContext } from "solid-js";
import { AppState, AppStateContext } from './application-state.context';


export function AppStateProvider(props: ParentProps<{appStateContext: AppState}>) {
  return (
    <AppStateContext.Provider value={props.appStateContext} >
      {props.children}
    </AppStateContext.Provider>
  );
}

export function useAppState<T>(stateDelegate: (appState: AppState) => T) {
  const context = useContext(AppStateContext);
  if (context === undefined) throw new Error('Application state context not found');
  return stateDelegate(context);
}

