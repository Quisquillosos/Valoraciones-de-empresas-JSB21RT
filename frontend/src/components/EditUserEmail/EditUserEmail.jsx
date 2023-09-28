import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editEmailService } from "../../services";
import { editEmailMain } from "./EditUserEmail.module.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const EditUserEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, token, logout } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = { oldPass, newEmail };
      const dataToSend = JSON.stringify(data);
      await editEmailService(dataToSend, token);
      setLoading(false);
      logout();
    } catch (err) {
      setError("An error has occurred in the email change");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className={`${editEmailMain}`}>
      <h3>Edit Email</h3>
      <p>{user && user?.user?.email}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newEmail">
          New email
          <input
            type="text"
            name="newEmail"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="oldPassEmail">
          Password
          <input
            type={showPassword ? "text" : "password"}
            name="oldPass"
            id="oldPassEmail"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? "🐵" : "🙈"}
          </button>
        </label>

        <Button>Save</Button>
      </form>
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </main>
  );
};

export default EditUserEmail;
