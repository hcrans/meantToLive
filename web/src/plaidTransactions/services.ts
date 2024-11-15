const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchPlaidTransactions(token: string) {
  const response = await fetch(`${apiUrl}/plaid/transactions`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
