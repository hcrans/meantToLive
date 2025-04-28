import { createEffect } from 'solid-js';
import { Transaction } from './type';
import { setTransactions } from './store';
import { fetchTransactions } from './services';
import { useAppState } from '../providers/application-state.provider';

export function createTransactionEffect() {
  createEffect(async () => {
    await fetchAndSetTransactions();
  });
}

export async function fetchAndSetTransactions() {
  const { getHasToken } = useAppState(state => state.authentication);
  if (!getHasToken()) return;
  const data = await fetchTransactions();

  if (data.transactions === undefined) return;
  const transactions: Transaction[] = data.transactions.map((t: any) =>
    ({
      date: new Date(t.date),
      description: t.description,
      accountId: t.account_id,
      amount: t.amount,
      logoUrl: t.logo_url
    })
  );
  setTransactions(transactions);
}
