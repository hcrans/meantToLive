import { Show } from 'solid-js';
import IconButton from '@suid/material/IconButton';
import LinkIcon from '@suid/icons-material/Link';
import UnlinkIcon from '@suid/icons-material/LinkOff';
import { getHasToken } from '../authentication/store';
import { createLinkToken, storeLinkToken } from './services';
import { getHasPlaidToken, setHasPlaidToken } from './store';

export function PlaidLink() {
  return (<div style={'margin-top: 50px'}>
    <Show when={!getHasPlaidToken()}
      //todo: Logout logic
      fallback={
        <IconButton
          type="button"
          id="unlink-account">
          <UnlinkIcon />

        </IconButton>
      } >
      <IconButton
        type="button"
        id="link-account"
        onclick={onLinkAccountClick}>

        <LinkIcon style={{ color: "lightslategray" }} />

      </IconButton>
    </Show>
  </div>);
}

const onLinkAccountClick = async () => {
  const token = getHasToken();
  if(token) return;
  // ---PLAID CONNECT DIALOG--- //
  // @ts-ignore
  Plaid.create({
    token: await createLinkToken(),
    onSuccess: async (plaidToken: string, metadata: unknown) => {
      const success = await storeLinkToken(plaidToken);
      setHasPlaidToken(success);
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
