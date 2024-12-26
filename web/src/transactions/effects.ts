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
  const transactions: Transaction[] = data.transactions?.map((t: any) => {
    return {
      date: new Date(t.date),
      description: t.description,
      // account: t.account,
      amount: t.amount,
      // logo_url: t.logo_url
    }
  }) ?? [];
  setTransactions(transactions);
}
