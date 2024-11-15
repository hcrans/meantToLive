import { createSignal } from "solid-js";
import { checkAuthentication } from './services';

export const [getHasToken, setHasToken] = createSignal(await checkAuthentication());
