export interface AuthenticationService {
  login(email: string, password: string): Promise<boolean>,
  refreshAuthentication(): void,
}


export namespace restricted {
  export function AuthenticationService(apiUrl: String): AuthenticationService {
    async function login(email: string, password: string) {
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

    async function refreshAuthentication() {
      const response = await fetch(`${apiUrl}/auth/refresh`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.status === 200;
    }
    return { login, refreshAuthentication }
  }
}
