import { getUser } from "../authentication/store";

const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchPlaidTransactions() {
  const user = getUser();
  if (!user) return null;
  const response = await fetch(`${apiUrl}/api/transactions`, {
    method: "GET",
    // headers: { access_token: user.access_token },
  });
  const data = await response.json();
  return data;
};
