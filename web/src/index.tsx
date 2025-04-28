/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { App } from './App';
import { AppStateProvider } from './providers/application-state.provider';
import { AppServiceProvider } from './providers/service.provider';
import { createAppStateContext } from './providers/application-state.context';
import { createAppServiceContext } from './providers/application-service.context';
import { Route, Router } from '@solidjs/router';
import { MONTH_NUMBERS, YEARS } from './calendar/constants';

function RouterContext() {
  console.log('rountercontext');
  return (
    <AppStateProvider appStateContext={createAppStateContext()} >
      <App />
    </AppStateProvider>
  );
}

const routeFilters = {
  year: YEARS,
  month: MONTH_NUMBERS,
}

render(() => {
  console.log('render');
  return (<AppServiceProvider appServiceContext={createAppServiceContext()} >
    <Router>
      <Route path="/" component={RouterContext} matchFilters={routeFilters} />
    </Router>
  </AppServiceProvider>)
}
  , document.getElementById('root')!);

// <Route path="/" component={RouterContext} />
// <Route path="/dd:year/:month" component={RouterContext} matchFilters={routeFilters} />
      // <Route path="/?:year?:month" component={RouterContext} matchFilters={routeFilters} />
      //<Route path="/" component={RouterContext} matchFilters={routeFilters} />
