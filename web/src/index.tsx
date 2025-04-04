/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { App } from './App';
import { AuthenticationProvider } from './authentication/authentication-provider';

render(() =>
  <AuthenticationProvider>
    <App />
  </AuthenticationProvider>
  , document.getElementById('root')!);
