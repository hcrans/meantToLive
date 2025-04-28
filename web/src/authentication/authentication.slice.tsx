import { createSignal } from 'solid-js';
import { useAppServices } from '../providers/service.provider';

export interface AuthenticationState {
  getHasToken: () => boolean,
  setHasToken: (hasToken: boolean) => void,
}

export function AuthenticationSlice() {
  const { refreshAuthentication } = useAppServices(services => services.authentication);
  const [getHasToken, setHasToken] = createSignal(false);

  refreshAuthentication().then(result => setHasToken(result));

  const auth = {
    getHasToken: getHasToken,
    setHasToken: (hasToken: boolean) => setHasToken(hasToken),
  };
  return auth;
}

