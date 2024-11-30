import { For } from 'solid-js';
import { createAccountsEffect } from './effects';
import { getAccounts } from './store';
import { getTransactionsForAccount } from '../transactions/store';

export function AccountsView() {
  createAccountsEffect();
  console.log({ accountsInView: getAccounts() });
  return (
    <div class="accountsView">
      <For each={getAccounts()}>
        {account =>
          <div>
            <label>{account.description}</label>
            <label>{getAccountBalance(account.accountId)}</label>
          </div>}
      </For>
    </div>);
}

function getAccountBalance(accountId: string) {
  const transactions = getTransactionsForAccount(accountId);
  console.log({ transactions });
  if (transactions.length === 0) return NaN;
  return transactions.reduce((a, b) => a + b);
}
