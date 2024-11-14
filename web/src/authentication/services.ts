
const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function authenticate(email: string, password: string) {
  const response = await fetch(`${apiUrl}/auth/login_to_db`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
