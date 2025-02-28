import { createEffect } from 'solid-js';
import { getHasToken } from '../authentication/store';
import { Transaction } from './type';
import { setTransactions } from './store';
import { fetchTransactions } from './services';

export function createTransactionEffect() {
  createEffect(async () => {
    await fetchAndSetTransactions();
  });
}

export async function fetchAndSetTransactions() {
  if (!getHasToken()) return;
  const data = await fetchTransactions();
  console.log({ data });

  if (data.transactions === undefined) return;
  const transactions = data.transactions.map((t: any) => {
    return {
      date: new Date(t.date),
      description: t.description,
      accountId: t.account_id,
      amount: t.amount,
      logoUrl: t.logo_url
    } satisfies Transaction
  });
  console.log({ transactions });
  setTransactions(transactions);
}
