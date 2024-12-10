import { createEffect, on } from 'solid-js';
import { getHasToken } from '../authentication/store';
import { getHasPlaidToken, setHasPlaidToken } from '../plaid/store';
import { fetchPlaidTransactions } from '../plaidTransactions/services';
import { setTransactions } from '../transactions/store';
import { Transaction } from '../transactions/type';
import { checkForLinkToken } from '../plaid/services';

export const createPlaidTransactionEffect = () => {
  createEffect(
    on(getHasPlaidToken, async () => {
      console.log({ plaidToken: getHasPlaidToken() });
      if (!getHasPlaidToken()) return;
      const token = getHasToken();
      console.log({ token });
      if (token === null) return;
      const data = await fetchPlaidTransactions();
      const transactions: Transaction[] = data.added.map((t: any) => {
        return {
          date: new Date(t.date),
          description: t.name,
          account: t.name,
          amount: t.amount,
          logo_url: t.logo_url
        }
      });
      setTransactions(transactions);
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
