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
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await signUpUserService({ firstName, lastName, email, password: pass1 });
      setLoading(false);
      navigate("/users/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="firstName">First name</label>
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
          <label htmlFor="lastName">Last name</label>
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
            type={`${showPassword ? "text" : "password"}`}
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            👁️
          </button>
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type={`${showPassword2 ? "text" : "password"}`}
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword2(!showPassword2);
            }}
          >
            👁️
          </button>
        </fieldset>
        <button type="submit">Sign Up</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>loading...</p> : null}
      </form>
    </section>
  );
};

export default SignUpPage;
