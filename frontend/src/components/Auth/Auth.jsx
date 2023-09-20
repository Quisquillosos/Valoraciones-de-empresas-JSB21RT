import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { section, authList } from "./Auth.module.css";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section className={`${section}`}>
      <Link to={`/users`}>Profile</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <ul className={`${authList}`}>
      <li>
        <Link to={"/users/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/users/login"}>Login</Link>
      </li>
    </ul>
  );
};
