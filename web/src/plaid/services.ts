const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`
console.log({ apiUrl })

export async function createLinkToken () {
  const res = await fetch(`${apiUrl}/plaid/create_link_token`, {
    credentials: 'include',
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return data.link_token
};

export async function storeLinkToken (plaidToken: string) {
  const result = await fetch(`${apiUrl}/plaid/exchange_public_token`, {
    credentials: 'include',
    method: "POST",
    body: JSON.stringify({ public_token: plaidToken }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return result.ok
}

export async function checkForLinkToken() {
  const result = await fetch(`${apiUrl}/plaid/check_link`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.ok;
}
