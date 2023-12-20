import { createSignal } from 'solid-js';
import { Transaction } from './type';

export const [getTransactions, setTransactions] = createSignal<Transaction[]>([]);

