import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <div>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}
export default Register;
