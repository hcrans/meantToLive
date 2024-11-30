const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function fetchAccounts() {
  const response = await fetch(`${apiUrl}/data/accounts`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
