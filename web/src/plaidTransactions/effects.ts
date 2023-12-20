import { createEffect, on } from 'solid-js';
import { getUser } from '../authentication/store';
import { hasToken } from '../plaid/store';
import { fetchPlaidTransactions } from '../plaidTransactions/services';
import { setTransactions } from '../transactions/store';
import { Transaction } from '../transactions/type';

export const createPlaidTransactionEffect = () => {
  createEffect(
    on(hasToken, async () => {
      const accessToken = getUser()?.access_token
      if (accessToken === undefined) return;
      const data = await fetchPlaidTransactions();
      const transactions: Transaction[] = data.added.map((t: any) => {
        return {
          date: new Date(t.date), description: t.name,
          account: t.name, amount: t.amount
        }
      });
      setTransactions(transactions);
    }));
}
