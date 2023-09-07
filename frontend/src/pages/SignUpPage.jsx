import { useState } from "react";
import { signUpUserService } from "../services";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUpUserService({ firstName, lastName, email, password: pass1 });

      navigate("/users/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Sign Up</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default SignUpPage;
