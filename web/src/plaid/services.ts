const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function createLinkToken(token: string) {
  const res = await fetch(`${apiUrl}/plaid/create_link_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data.link_token;
};

export async function storeLinkToken(plaidToken: string, token: string) {
  const result = await fetch(`${apiUrl}/plaid/exchange_public_token`, {
    method: "POST",
    body: JSON.stringify({ public_token: plaidToken }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });
  return result.ok;
}
