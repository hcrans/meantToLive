import { createContext } from 'solid-js';
import { AuthenticationService, restricted } from '../authentication/services';

export interface AppServices {
  authentication: AuthenticationService;
}

export const AppServiceContext = createContext<AppServices>();

export function createAppServiceContext() {
  const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`
  return {
    authentication: restricted.AuthenticationService(apiUrl),
  };
}
