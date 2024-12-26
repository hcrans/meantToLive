const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchTransactions() {
  const response = await fetch(`${apiUrl}/data/transactions`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
