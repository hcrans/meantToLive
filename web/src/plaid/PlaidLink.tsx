import { Show } from 'solid-js';
import IconButton from '@suid/material/IconButton';
import LinkIcon from '@suid/icons-material/Link';
import UnlinkIcon from '@suid/icons-material/LinkOff';
import { createLinkToken, storeLinkToken, unlinkPlaid } from './services';
import { getHasPlaidToken, setHasPlaidToken } from './store';
import { createPlaidHasTokenEffect } from '../plaidTransactions/effects';
import { useAppState } from '../providers/application-state.provider';

export function PlaidLink() {
  const { getHasToken } = useAppState(state => state.authentication);
  const hasToken = getHasToken();
  createPlaidHasTokenEffect()

  return (<div style={'margin-top: 50px'}>
    <Show
      fallback={
        <IconButton
          type="button"
          id="link-account"
          onclick={() => onLinkAccountClick(hasToken)}>

          <LinkIcon style={{ color: "lightslategray" }} />

        </IconButton>
      }
      when={getHasPlaidToken()}>
      <IconButton
        type="button"
        id="unlink-account"
        onclick={onUnlinkAccountClick}>
        <UnlinkIcon />

      </IconButton>
    </Show>
  </div>);
}

const onLinkAccountClick = async (hasToken: boolean) => {
  if (!hasToken) return;
  // ---PLAID CONNECT DIALOG--- //
  // @ts-ignore
  Plaid.create({
    token: await createLinkToken(),
    onSuccess: async (plaidToken: string, metadata: unknown) => {
      const hasPlaidToken = await storeLinkToken(plaidToken);
      setHasPlaidToken(hasPlaidToken);
    },
    onEvent: (eventName: string, metadata: unknown) => {
      console.log("Event:", eventName);
      console.log("Metadata:", metadata);
    },
    onExit: (error: unknown, metadata: unknown) => {
      console.log(error, metadata);
    },
  }).open();
  // --- --- //
}

const onUnlinkAccountClick = async () => {
  const { getHasToken } = useAppState(state => state.authentication);
  const token = getHasToken();
  if (!token) return;

  const result = await unlinkPlaid();
  setHasPlaidToken(!result)
}
