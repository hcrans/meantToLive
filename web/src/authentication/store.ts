import { createSignal } from "solid-js";
import { refreshAuthentication } from './services';

export const [getHasToken, setHasToken] = createSignal(await refreshAuthentication());
