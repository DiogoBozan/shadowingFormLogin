import { Link } from "react-router-dom";
import UseUserState from "../../Routers/UseUserState";

function Logout() {
  const UserState = UseUserState();

  function handleSubmit(event) {
    UserState.handleLoginChange(false);
  }

  return (
    <div>
      <h1>U are Logout</h1>
      <div onClick={handleSubmit}>
        {" "}
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default Logout;
