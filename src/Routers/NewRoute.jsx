import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "../../src/components/List";
import Login from "../../src/components/Login";
import Register from "../../src/components/Register";
import Logout from "../components/Logout";
import PrivateRoute from "../Routers/PrivateRoute";
import PrivateRouteLoggedIn from "../Routers/PrivateRouteLoggeIn";

function NewRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouteLoggedIn>
              <Login />
            </PrivateRouteLoggedIn>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRouteLoggedIn>
              <Register />
            </PrivateRouteLoggedIn>
          }
        />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <List />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default NewRoutes;
