import { createSignal } from "solid-js";
import { authenticationService } from "./services";
import "./Login.css"
import { useAuthenticationContext } from './authentication-provider';

export const Login = () => {
  const { setHasToken } = useAuthenticationContext();
  const { login } = authenticationService();
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const handleSubmit = async () => {
    if (!email || !password) return;
    const result = await login(email(), password());
    setHasToken(result);
  }
  const submitDisabled = () => !email() || !password();
  return (
    <div class='login'>
      <h1>ThriveCal</h1>
      <div class='credentials'>
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={e => setEmail(e.currentTarget.value)} required />
        <label for="password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={e => setPassword(e.currentTarget.value)} required />
        <button class="button"
          type="submit"
          onClick={handleSubmit}
          disabled={submitDisabled()}>Login</button>
      </div>
    </div>
  );
}
