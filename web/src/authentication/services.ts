const apiUrl = `http://${window.location.hostname}:${import.meta.env.VITE_API_PORT}`

export async function login(email: string, password: string) {
  const response = await fetch(`${apiUrl}/auth/login`, {
    credentials: 'include',
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.status === 200;
}

export async function refreshAuthentication() {
  const response = await fetch(`${apiUrl}/auth/refresh`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.status === 200;
}
