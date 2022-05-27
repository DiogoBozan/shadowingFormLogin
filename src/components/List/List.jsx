import { Link } from "react-router-dom";
import "./list.css";

function List() {
  return (
    <div className="boxList">
      <h1>List 1</h1>
      <h1>List 2</h1>
      <h1>List 3</h1>

      <div className="linkRegister">
        {" "}
        <Link to="/register">Register</Link>
      </div>
      <div className="linkLogin">
        {" "}
        <Link to="/">Login</Link>
      </div>
      <div className="linkLogout">
        {" "}
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default List;
