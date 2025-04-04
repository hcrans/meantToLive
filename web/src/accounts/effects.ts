import { createEffect } from 'solid-js';
import { fetchAccounts } from './services';
import { Account } from './model';
import { getAccounts, setAccounts } from './store';
import { useAuthenticationContext } from '../authentication/authentication-provider';

export function createAccountsEffect() {
  createEffect(async () => {
    await fetchAndSetAccounts();
  });
}

export async function fetchAndSetAccounts() {
  const { getHasToken } = useAuthenticationContext();
  if (!getHasToken()) return;
  const data = await fetchAccounts();
  if (data.accounts === undefined) return;
  const accounts = data.accounts.map((t: any) => {
    return {
      accountId: t.account_id,
      description: t.description,
    } satisfies Account
  });
  setAccounts(accounts);
  console.log({ fromFetch: getAccounts() });
}
