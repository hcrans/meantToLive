import { User } from '../authentication/types';

const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function createLinkToken(user: User) {
  const res = await fetch(`${apiUrl}/api/create_link_token`, {
    method: "POST",
    body: JSON.stringify({ userId: user.id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data.link_token;
};

export async function storeLinkToken(plaidToken: string, userId: string) {
  const result = await fetch(`${apiUrl}/api/exchange_public_token`, {
    method: "POST",
    body: JSON.stringify({ public_token: plaidToken, userId: userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.ok;
}
