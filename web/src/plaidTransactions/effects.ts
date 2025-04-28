import { createEffect, on } from 'solid-js';
import { getHasPlaidToken, setHasPlaidToken } from '../plaid/store';
import { checkForLinkToken } from '../plaid/services';
import { fetchPlaidTransactions } from './services';
import { fetchAndSetTransactions } from '../transactions/effects';
import { useAppState } from '../providers/application-state.provider';

export const createPlaidTransactionEffect = () => {
  const { getHasToken } = useAppState(state => state.authentication);
  createEffect(
    on(getHasPlaidToken, async () => {
      if (!getHasPlaidToken()) return;
      if (!getHasToken()) return;
      await fetchPlaidTransactions();
      fetchAndSetTransactions();
    }));
}

export const createPlaidHasTokenEffect = () => {
  const { getHasToken } = useAppState(state => state.authentication);
  createEffect(
    on(getHasToken, async () => {
      if (!getHasToken()) return;
      const hasPlaidToken = await checkForLinkToken();
      setHasPlaidToken(hasPlaidToken);
    }));
}
