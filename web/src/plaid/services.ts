const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function createLinkToken() {
  const res = await fetch(`${apiUrl}/api/create_link_token`);
  const data = await res.json();
  return data.link_token;
};

export async function storeLinkToken(plaidToken: string, userId: string, accessToken: string) {
  const result =  await fetch(`${apiUrl}/api/set_access_token`, {
    method: "POST",
    body: JSON.stringify({ public_token: plaidToken, userId: userId, access_token: accessToken }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.ok;
}
