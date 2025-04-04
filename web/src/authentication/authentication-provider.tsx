import { createContext, createSignal, ParentProps, useContext } from "solid-js";
import { authenticationService } from './services';

interface AuthenticationContext {
  getHasToken: () => boolean,
  setHasToken: (hasToken: boolean) => void,
}

const AuthContext = createContext<AuthenticationContext>();

export function AuthenticationProvider(props: ParentProps) {
  const [getHasToken, setHasToken] = createSignal(false);
  const { refreshAuthentication } = authenticationService();

  refreshAuthentication().then(result => setHasToken(result));

  const auth = {
    getHasToken: getHasToken,
    setHasToken: (hasToken: boolean) => setHasToken(hasToken),
  };
  return (
    <AuthContext.Provider value={auth} >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthenticationContext() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('AuthenticationContext not found');
  return context;
}

