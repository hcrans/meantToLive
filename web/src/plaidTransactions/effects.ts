import { createEffect, on } from 'solid-js';
import { getHasToken } from '../authentication/store';
import { getHasPlaidToken, setHasPlaidToken } from '../plaid/store';
import { checkForLinkToken } from '../plaid/services';
import { fetchPlaidTransactions } from './services';
import { fetchAndSetTransactions } from '../transactions/effects';

export const createPlaidTransactionEffect = () => {
  createEffect(
    on(getHasPlaidToken, async () => {
      if (!getHasPlaidToken()) return;
      if (!getHasToken()) return;
      await fetchPlaidTransactions();
      fetchAndSetTransactions();
    }));
}

export const createPlaidHasTokenEffect = () => {
  createEffect(
    on(getHasToken, async () => {
      if (!getHasToken()) return;
      const hasPlaidToken = await checkForLinkToken();
      setHasPlaidToken(hasPlaidToken);
    }));
}
