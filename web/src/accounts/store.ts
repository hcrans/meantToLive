import { createSignal } from 'solid-js';
import { Account } from './model';

export const [getAccounts, setAccounts] = createSignal<Account[]>([]);

