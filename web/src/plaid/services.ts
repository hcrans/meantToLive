const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`
console.log({ apiUrl })

export async function createLinkToken() {
  console.log('lame');
  const response = await fetch(`${apiUrl}/plaid/create_link_token`, {
    credentials: 'include',
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log({ response });
  const data = await response.json()
  return data.link_token
};

export async function storeLinkToken(plaidToken: string) {
  const response = await fetch(`${apiUrl}/plaid/exchange_public_token`, {
    credentials: 'include',
    method: "POST",
    body: JSON.stringify({ public_token: plaidToken }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.ok
}

export async function unlinkPlaid() {
  const response = await fetch(`${apiUrl}/plaid/remove_token`, {
    credentials: 'include',
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.ok
}


export async function checkForLinkToken() {
  const response = await fetch(`${apiUrl}/plaid/check_link`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok
}
