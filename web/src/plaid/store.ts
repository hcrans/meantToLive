import { createSignal } from "solid-js";
import { checkForLinkToken } from './services';

export const [getHasPlaidToken, setHasPlaidToken] = 
  createSignal(await checkForLinkToken());
