const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchPlaidTransactions() {
  const response = await fetch(`${apiUrl}/plaid/transactions`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
