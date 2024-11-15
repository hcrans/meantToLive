import { createEffect, on } from 'solid-js';
import { getHasToken } from '../authentication/store';
import { getHasPlaidToken } from '../plaid/store';
import { fetchPlaidTransactions } from '../plaidTransactions/services';
import { setTransactions } from '../transactions/store';
import { Transaction } from '../transactions/type';

export const createPlaidTransactionEffect = () => {
  createEffect(
    on(getHasPlaidToken, async () => {
      const token = getHasToken();
      if(token === null) return;
      const data = await fetchPlaidTransactions(token);
      const transactions: Transaction[] = data.added.map((t: any) => {
        return {
          date: new Date(t.date), description: t.name,
          account: t.name, amount: t.amount
        }
      });
      setTransactions(transactions);
    }));
}
