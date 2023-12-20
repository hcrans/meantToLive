import { createSignal } from "solid-js";
import { authenticate } from "./services";
import { setUser } from "./store";
import "./Login.css"

export const Login = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const handleSubmit = async () => {
    if (!email || !password) return;
    const result = await authenticate(email(), password());
    if (!result) return;
    setUser({ id: result.user.id, access_token: result.session.access_token });
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
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={e => setPassword(e.currentTarget.value)} required />
        <button class="button"
          type="submit"
          onClick={handleSubmit}
          disabled={submitDisabled()}>Login</button>
      </div>
    </div>
  );
}
