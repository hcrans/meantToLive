import { getUser } from "../authentication/store";

const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchPlaidTransactions(token: string) {
  const user = getUser();
  if (!user) return null;
  const response = await fetch(`${apiUrl}/plaid/transactions`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
