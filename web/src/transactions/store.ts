import { createSignal } from 'solid-js';
import { Transaction } from './type';

export const [getTransactions, setTransactions] = createSignal<Transaction[]>([]);

export function getTransactionsForAccount(accountId: string) {
  return getTransactions().filter(t => t.accountId === accountId).map(t => t.amount);
}

